# Concerns

**Analyzed:** 2026-06-19

## High Priority

### Default admin password fallback

**Evidence:** `src/lib/auth.js` and `src/pages/api/admin/login.js` fall back to `admin123` when `ADMIN_PASSWORD` is missing.
**Risk:** A production deployment without `ADMIN_PASSWORD` would expose the admin to a known password.
**Fix approach:** Fail closed in production if `ADMIN_PASSWORD` is missing. Add a startup/API guard and document required environment variables.

### No automated tests for auth and CMS writes

**Evidence:** `package.json` has no test script and no test files were found.
**Risk:** Regressions in route guards, file writes or GitHub persistence can reach production unnoticed.
**Fix approach:** Add Vitest/Jest for `src/lib/*` and API route tests with mocked GitHub/fetch and isolated filesystem fixtures.

### Pricing source of truth mismatch

**Evidence:** `content/pricing/landing-page.json` has setup `749` and maintenance `40`; the SoftLuna business plan recommends setup `950` and maintenance `79` for Tier 1.
**Risk:** Sales copy, site content and business expectations can diverge.
**Fix approach:** Decide canonical pricing, update `content/pricing/*` and business docs together, and record the decision in `STATE.md`.

## Medium Priority

### Current deployment target differs from business-plan hosting strategy

**Evidence:** Code uses Vercel Analytics and `.vercel/` exists; the business plan argues Cloudflare Pages is the correct commercial static hosting platform.
**Risk:** Operational docs may guide future work toward the wrong platform.
**Fix approach:** Decide platform per use case: SoftLuna website, client sites, prototypes. Document deployment commands and commercial constraints separately.

### Business plan references Keystatic/TinaCMS, but code uses custom admin

**Evidence:** No Keystatic/TinaCMS dependencies are in `package.json`; implemented CMS is custom Git-CMS under `src/components/Admin` and `src/pages/api/content`.
**Risk:** Future tasks may assume an installed CMS package that does not exist.
**Fix approach:** Either commit to evolving the custom admin or plan a migration to a known Git-CMS. Keep docs explicit until then.

### Legacy service files may be stale

**Evidence:** `src/services/apiAuth.js`, `src/services/apiBlog.js`, `src/services/apiUpload.js` point to `NEXT_PUBLIC_API_URL`, while current admin/CMS uses local Next API routes.
**Risk:** Unused legacy code can confuse future development or leak incorrect integration assumptions.
**Fix approach:** Trace imports. Remove, archive or document any legacy areas that are not part of SoftLuna v1.

## Low Priority

### README is still create-next-app template

**Evidence:** `README.md` references editing `app/page.js`, but this project uses `src/pages/index.jsx`.
**Risk:** Onboarding confusion.
**Fix approach:** Replace with SoftLuna-specific setup, scripts, env vars, architecture links and deployment notes.

### Encoding issues in existing docs/content

**Evidence:** Some text read from `GIT-CMS.md` and JSON output appears mojibake in terminal, such as `descriÃ§Ã£o`.
**Risk:** Copy quality and docs readability may degrade if encoding problems are committed or edited by the wrong tool.
**Fix approach:** Confirm files are UTF-8 and normalize affected text in a dedicated cleanup pass.
