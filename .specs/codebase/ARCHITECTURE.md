# Architecture

**Pattern:** Static-first Next.js marketing site with serverless Git-CMS admin.

## High-Level Structure

```mermaid
flowchart TD
  Content[content/*.json] --> Build[getStaticProps in src/pages/index.jsx]
  Build --> PublicSite[Static public SoftLuna website]
  AdminUI[/admin UI] --> ApiRoutes[src/pages/api]
  ApiRoutes --> Auth[src/lib/auth.js]
  ApiRoutes --> Persist{GITHUB_PAT + GITHUB_REPO?}
  Persist -->|no| LocalFS[local content/*.json]
  Persist -->|yes| GitHub[GitHub REST contents API]
  GitHub --> Deploy[Git commit triggers redeploy]
```

## Identified Patterns

### Static Content Reader

**Location:** `src/lib/content.js`
**Purpose:** Load JSON content at build time for the public homepage.
**Implementation:** Reads subdirectories under `content/`, parses JSON and sorts collections by `order`.
**Example:** `getPricingTiers()`, `getPortfolioItems()`, `getFAQItems()`.

### Hybrid CMS Persistence

**Location:** `src/pages/admin.jsx`, `src/pages/api/content/*`, `src/lib/github.js`
**Purpose:** Use the same admin UI locally and in production without a database.
**Implementation:** Production is detected through `isGitHubConfigured()`. If `GITHUB_PAT` and `GITHUB_REPO` exist, API routes read/write GitHub contents. Otherwise they read/write local files.
**Example:** `src/pages/api/content/pricing.js` branches between `readCollection(RELATIVE_DIR)` and `readAllTiersLocal()`.

### Signed Cookie Admin Session

**Location:** `src/lib/auth.js`, `src/pages/api/admin/login.js`, `src/pages/admin.jsx`
**Purpose:** Protect admin routes and CMS APIs.
**Implementation:** Login compares submitted password against `ADMIN_PASSWORD`, creates an HMAC-signed token containing expiration time, and sets `admin_session` as HTTP-only cookie. Server-side guards verify the cookie before rendering admin or serving API requests.
**Example:** `verifySessionFromRequest(ctx.req)` in `getServerSideProps`.

### Section-Based Homepage

**Location:** `src/pages/index.jsx`, `src/components/Home/*`
**Purpose:** Keep the public website composed from independently editable sections.
**Implementation:** `index.jsx` loads global/pricing/portfolio/FAQ content and passes it to section components. Several sections are currently static code content rather than CMS-managed content.

### Admin Primitive Styling

**Location:** `src/components/Admin/ui.jsx`
**Purpose:** Keep the admin panel visually consistent.
**Implementation:** Admin components import shared primitives/tokens rather than restyling every control.

## Data Flow

### Public Homepage

1. Next.js calls `getStaticProps()` in `src/pages/index.jsx`.
2. `getGlobalSite`, `getPricingTiers`, `getPortfolioItems` and `getFAQItems` read JSON from `content/`.
3. Static props hydrate the homepage.
4. CTA links send users to WhatsApp with prefilled messages.
5. SEO metadata and JSON-LD are generated from `globalData.seo`.

### Admin Edit Flow

1. User logs in at `/admin/login`.
2. `/api/admin/login` validates password and sets `admin_session`.
3. `/admin` server-side guard validates the cookie.
4. Admin sections call `/api/content/*` endpoints.
5. API route validates cookie again.
6. Data is written either to local `content/` or to GitHub via REST API.
7. The publish action calls `/api/content/publish`; in production, GitHub writes can trigger redeploy through the repository host.

### Upload Flow

1. Admin component optimizes or selects an image.
2. Upload is sent to `/api/admin/upload`.
3. The API route verifies auth, validates filename/extension/size and writes to `public/uploads` locally or GitHub in production.
4. Content JSON stores the resulting public path.

## Code Organization

**Approach:** Hybrid feature/layer organization.

- Pages and API routes are grouped by route under `src/pages`.
- Public UI is grouped by feature/component under `src/components`.
- Admin UI is grouped under `src/components/Admin`.
- Content is grouped by collection under `content`.
- Shared server/client helpers live under `src/lib`.

## Current vs Target Architecture

The business plan describes a product strategy around Git-CMS with Keystatic/TinaCMS and Cloudflare Pages. The current codebase implements a custom Git-CMS admin and has Vercel-specific project metadata/analytics. Treat Keystatic/TinaCMS and Cloudflare Pages as target architecture options until explicitly implemented or migrated.
