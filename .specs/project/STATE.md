# State

**Last Updated:** 2026-06-19
**Current Work:** Project/business/codebase documentation baseline

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

---

## Active Blockers

### B-001: Production hosting source of truth is not fully settled

**Discovered:** 2026-06-19
**Impact:** The repo has Vercel metadata and Vercel Analytics, while the business plan argues Cloudflare Pages is strategically preferable for commercial static hosting.
**Workaround:** Document current deployment as Vercel and Cloudflare Pages as product strategy until a migration decision is made.
**Resolution:** Decide hosting target for SoftLuna itself and for client deliveries; update deployment docs and environment requirements accordingly.

### B-002: Pricing mismatch between live content and PDF strategy

**Discovered:** 2026-06-19
**Impact:** `content/pricing/landing-page.json` uses R$ 749 setup and R$ 40 maintenance, while the business plan suggests R$ 950 setup and R$ 79/month maintenance for Tier 1.
**Workaround:** Document both as "current site content" and "strategic recommendation".
**Resolution:** Choose the commercial source of truth, then update content JSON and docs together.

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

- [ ] Decide whether to update live pricing JSON to match the business plan.
- [ ] Decide whether SoftLuna production hosting should remain on Vercel or move to Cloudflare Pages.
- [ ] Replace default admin password fallback before production launch.
