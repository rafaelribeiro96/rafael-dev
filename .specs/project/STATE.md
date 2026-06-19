# State

**Last Updated:** 2026-06-19
**Current Work:** SEO roadmap foundation

---

## Recent Decisions

### AD-001: Treat SoftLuna as both product website and business operating repository (2026-06-19)

**Decision:** Store technical specs, business model, offer ladder, positioning and brand guidance inside the repository.
**Reason:** The project is intended to support both website development and business development.
**Trade-off:** Documentation must be maintained alongside code to avoid becoming stale.
**Impact:** Future implementation work should check `.specs/`, `docs/business/softluna` and `docs/brand/softluna` before changing site copy, pricing, product scope or visual direction.

### AD-002: Separate current implementation from intended product architecture (2026-06-19)

**Decision:** Document that the current repository uses a custom Git-CMS, while the business plan references Keystatic/TinaCMS as a possible productized client CMS direction.
**Reason:** Mixing implemented facts with desired architecture would mislead future development.
**Trade-off:** Some business docs contain "target" language instead of "already built" language.
**Impact:** Features involving CMS choice must explicitly decide whether to evolve the current custom admin or migrate to a packaged Git-CMS.

### AD-003: Use published JSON pricing as the SEO copy source of truth (2026-06-19)

**Decision:** For the SEO roadmap, new public copy and pages must use the prices currently published in `content/pricing/*.json`.
**Reason:** This preserves current site behavior while the strategic business-model prices remain recommendations.
**Trade-off:** The site may continue with lower prices than the strategic plan until a commercial migration is approved.
**Impact:** Any future pricing change must update pricing JSON, FAQ pricing copy and business docs together.

### AD-004: Build money pages and blog from versioned content JSON first (2026-06-19)

**Decision:** Money pages should use `content/money-pages/` and the new blog should use `content/blog/`, both read at build time by `src/lib/content.js`.
**Reason:** This matches the current flat-file Git-CMS architecture and avoids depending on the legacy `NEXT_PUBLIC_API_URL` blog service.
**Trade-off:** The admin will not edit these new collections in the pilot unless a later task expands the Git-CMS.
**Impact:** F1/F2 work should create static content models before adding admin UI.

### AD-005: Keep Vercel as the immediate SoftLuna SEO implementation target (2026-06-19)

**Decision:** Continue using the current Vercel project and `@vercel/analytics` for the immediate SEO roadmap.
**Reason:** The repository already has Vercel metadata and analytics; changing hosting is not required to ship money pages, blog architecture or conversion events.
**Trade-off:** Cloudflare Pages remains strategic context rather than current implementation.
**Impact:** Tracking work should start from the current analytics stack, while hosting migration stays a separate decision.

---

## Active Blockers

### B-001: Production hosting source of truth is not fully settled

**Discovered:** 2026-06-19
**Impact:** The repo has Vercel metadata and Vercel Analytics, while the business plan argues Cloudflare Pages is strategically preferable for commercial static hosting.
**Workaround:** Document current deployment as Vercel and Cloudflare Pages as product strategy until a migration decision is made.
**Resolution:** For SEO implementation, SoftLuna stays on Vercel. A separate decision is still needed for long-term SoftLuna hosting and client-delivery defaults.

### B-002: Pricing mismatch between live content and PDF strategy

**Discovered:** 2026-06-19
**Impact:** `content/pricing/landing-page.json` uses R$ 749 setup and R$ 40 maintenance, while the business plan suggests R$ 950 setup and R$ 79/month maintenance for Tier 1.
**Workaround:** Document both as "current site content" and "strategic recommendation".
**Resolution:** Current SEO copy uses live pricing JSON as source of truth. A later commercial decision can still migrate prices to the strategic model.

---

## Lessons Learned

### L-001: Git-CMS already exists as a custom implementation

**Context:** The business plan mentions Keystatic/TinaCMS.
**Problem:** Assuming those are installed would be incorrect.
**Solution:** The real code uses `src/lib/github.js`, Next API routes and `content/*.json`.
**Prevents:** Wrong implementation tasks that search for or configure a CMS package that is not present.

### L-002: Domain/DNS work has prior context

**Context:** `softluna.com.br` was previously attached to Vercel from this workspace.
**Problem:** Registro.br state can block immediate DNS record editing.
**Solution:** Re-check live registrar/domain state before giving DNS instructions.
**Prevents:** Stale DNS guidance based only on previous session memory.

---

## Deferred Ideas

- [ ] Create proposal and invoice templates for Brazilian and international clients.
- [ ] Create lead qualification spreadsheet fields and outreach templates under `docs/business/softluna`.
- [ ] Build a reusable SoftLuna client starter template.
- [ ] Add a contract checklist based on scope approval, revision limits, infrastructure disclaimers and silence/cancellation terms.
- [ ] Add AI assistant upsell technical spike with cost controls.

---

## Todos

- [ ] Decide whether to migrate live pricing JSON to the strategic prices later.
- [ ] Decide long-term hosting defaults for SoftLuna and client projects.
- [ ] Replace default admin password fallback before production launch.
