# Code Conventions

**Analyzed:** 2026-06-19

## Naming Conventions

**Files:**

- React component files use PascalCase: `Hero.jsx`, `PricingSection.jsx`, `GlobalSEOSection.jsx`.
- CSS Modules use component names: `Header.module.css`, `Footer.module.css`.
- API routes follow Next.js file routing: `pricing.js`, `pricing/[id].js`, `login.js`.
- Content entries use lowercase slug IDs: `landing-page.json`, `site-institucional.json`, `jsa-advogados.json`.

**Functions:**

- Content readers use `get*` naming: `getGlobalSite`, `getPricingTiers`.
- GitHub helpers use action names: `getFile`, `writeFile`, `deleteFile`, `readCollection`.
- Auth helpers use explicit verbs: `createSessionToken`, `verifySessionToken`, `verifySessionFromRequest`.

**Variables and constants:**

- Environment variables are uppercase and read at module scope: `GITHUB_PAT`, `GITHUB_REPO`, `GITHUB_BRANCH`.
- React state uses `[value, setValue]`: `active/setActive`, `pubStatus/setPubStatus`.
- Static CTA URLs are local constants such as `ctaLink` and `WHATSAPP_BASE`.

## Code Organization

**Imports:**

- React/Next imports first.
- Absolute imports through `src/...` are used in pages and API routes.
- Relative imports are used in nearby admin components.

**File structure:**

- Page components export default component and include `getStaticProps` or `getServerSideProps` at the bottom.
- API route files export one default `handler(req, res)`.
- Libraries in `src/lib` export named helpers.

## Type Safety and Documentation

**Approach:** JavaScript with JSDoc-style comments in shared helpers.

- `src/lib/content.js` documents expected JSON schemas in comments.
- Component props are not typed; some files disable `react/prop-types`.
- No runtime schema validation library is currently used for JSON content.

## Error Handling

**Observed patterns:**

- Content readers catch parse/read failures and log warnings, returning empty/default data.
- API routes catch errors, log scoped messages and return `500` with `err.message`.
- GitHub helper throws detailed errors with HTTP status and response text.
- Admin UI generally logs client-side failures and sets status flags.

## Styling

- Public site uses Tailwind utility classes plus global `.rt-button`, `.glass-card`, `.text-gradient` primitives.
- Admin uses inline style objects/tokens through `src/components/Admin/ui.jsx`.
- Brand token docs live in `docs/brand/softluna`, but `softluna.css` is not currently imported.

## Content Conventions

- Collections are sorted by `order`.
- Entry identity is stored in `id` and mirrored by filename.
- Portfolio items include `whatsappMessage`, supporting contextual CTAs.
- Global SEO content lives in `content/global/site.json`.

## Documentation Conventions

- `.specs/` is the technical/project planning source of truth.
- `docs/business/softluna` is the business operating source of truth.
- `docs/brand/softluna` is the brand/style source of truth for UI and social/media generation.
