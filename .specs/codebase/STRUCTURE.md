# Project Structure

**Root:** `c:\Users\rafaelRibeiro\Documents\Pessoal\Rafael Tech`

## Directory Tree

```text
.
├── content/
│   ├── carousel-images/
│   ├── faq/
│   ├── global/
│   ├── portfolio/
│   └── pricing/
├── docs/
│   ├── brand/softluna/
│   └── business/softluna/
├── logos/
├── public/
│   ├── uploads/
│   └── videos/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── lib/
│   ├── pages/
│   ├── services/
│   └── styles/
└── .specs/
    ├── codebase/
    └── project/
```

## Module Organization

### Public Website

**Purpose:** SoftLuna marketing and lead conversion site.
**Location:** `src/pages/index.jsx`, `src/components/Home/*`, `src/components/Header`, `src/components/Footer`, `src/components/botaoContato`.
**Key files:** `Hero.jsx`, `Services.jsx`, `DigitalEcosystem.jsx`, `ComparisonMatrix.jsx`, `Portfolio.jsx`, `Workflow.jsx`, `Pricing.jsx`, `FAQ.jsx`.

### Git-CMS Content

**Purpose:** Editable website data without a database.
**Location:** `content/`.
**Key files:** `content/global/site.json`, `content/pricing/*.json`, `content/portfolio/*.json`, `content/faq/*.json`, `content/carousel-images/*.json`.

### Admin Panel

**Purpose:** Protected editor for global SEO, pricing, portfolio, carousel images and FAQ.
**Location:** `src/pages/admin.jsx`, `src/pages/admin/login.jsx`, `src/components/Admin/*`.
**Key files:** `Sidebar.jsx`, `GlobalSEOSection.jsx`, `PricingSection.jsx`, `PortfolioSection.jsx`, `CarouselImagesSection.jsx`, `FAQSection.jsx`, `ui.jsx`.

### API Routes

**Purpose:** Auth, CMS CRUD, publishing and uploads.
**Location:** `src/pages/api`.
**Key files:** `api/admin/login.js`, `api/admin/check.js`, `api/admin/logout.js`, `api/admin/upload.js`, `api/content/*.js`, `api/content/*/[id].js`, `api/content/publish.js`.

### Shared Libraries

**Purpose:** Content reads, auth, GitHub persistence and image optimization.
**Location:** `src/lib`.
**Key files:** `content.js`, `github.js`, `auth.js`, `imageOptimizer.js`.

### Brand and Business Docs

**Purpose:** Source of truth for SoftLuna identity, design tokens, business model and operating decisions.
**Location:** `docs/brand/softluna`, `docs/business/softluna`, `.specs`.

## Where Things Live

**Homepage content:**

- UI: `src/components/Home/*`
- Static data: `content/global`, `content/pricing`, `content/portfolio`, `content/faq`
- Server loading: `getStaticProps` in `src/pages/index.jsx` via `src/lib/content.js`

**Admin content editing:**

- UI: `src/components/Admin/*`
- Auth: `src/lib/auth.js`, `src/pages/api/admin/*`
- Data access: `src/lib/github.js`, local `fs/promises`, `src/pages/api/content/*`

**Brand tokens:**

- Technical tokens: `docs/brand/softluna/design-tokens.json`
- CSS source: `docs/brand/softluna/softluna.css`
- Tailwind extension: `docs/brand/softluna/tailwind.extend.js`
- Current public-site implementation: `tailwind.config.js` and `src/styles/global.css`
