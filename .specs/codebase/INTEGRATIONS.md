# External Integrations

**Analyzed:** 2026-06-19

## GitHub REST API

**Service:** GitHub Contents API
**Purpose:** Production persistence for Git-CMS content and uploads.
**Implementation:** `src/lib/github.js`
**Configuration:** `GITHUB_PAT`, `GITHUB_REPO`, optional `GITHUB_BRANCH` defaulting to `master`
**Authentication:** Personal access token sent as `Authorization: token <GITHUB_PAT>`

## Vercel

**Service:** Vercel deployment and analytics
**Purpose:** Current project metadata/deployment target and analytics.
**Implementation:** `.vercel/` folder is present; `@vercel/analytics/react` is imported in `src/pages/_app.js`.
**Configuration:** Vercel project link and domain setup are external to the code. Prior workspace context says `softluna.com.br` was attached on the Vercel side, but live state should be rechecked before DNS work.

## WhatsApp

**Service:** WhatsApp click-to-chat via `wa.me`
**Purpose:** Primary conversion channel.
**Implementation:** Static links in `src/pages/index.jsx`, `Header`, `Footer`, `FloatingButton` and portfolio CTA generation.
**Configuration:** Main number observed: `+55 31 99186-9943`.

## Google Fonts and Material Symbols

**Service:** Google Fonts
**Purpose:** Geist, Inter and Material Symbols typography/icons.
**Implementation:** `@import` in `src/styles/global.css`.

## Instagram Graph API

**Service:** Instagram API
**Purpose:** Feed integration in legacy/current `InstaFeed`.
**Implementation:** `src/components/InstaFeed/InstaFeed.jsx`
**Configuration:** `NEXT_PUBLIC_TOKEN_INSTAGRAM`
**Status:** Not part of the primary SoftLuna homepage flow observed in `src/pages/index.jsx`.

## Legacy External API Services

**Service:** API controlled by `NEXT_PUBLIC_API_URL`
**Purpose:** Auth/blog/upload/image services from older app areas.
**Implementation:** `src/services/apiAuth.js`, `src/services/apiBlog.js`, `src/services/apiUpload.js`
**Status:** These appear separate from the current Git-CMS flow and should be reviewed before reuse.

## Domain/DNS

**Service:** Registro.br and Vercel DNS/domain configuration
**Purpose:** `softluna.com.br` public domain.
**Status:** Previous workspace memory indicates Vercel CLI was linked and the domain was attached, while Registro.br transition/DNS state needed manual registrar-side handling. Recheck live state before acting.

## Planned/Future Business Integrations

- Cloudflare Pages as the strategic static hosting target from the business plan.
- Google Business Profile and structured local SEO for client projects.
- HB Insider for lead generation.
- Loom for visual-hook sales videos.
- Evolution API for WhatsApp automation.
- n8n and OpenAI API for AI assistant upsells.

These are business-plan targets, not current repository integrations unless later implemented.
