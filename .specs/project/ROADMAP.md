# Roadmap

**Last updated:** 2026-06-19

## Current Foundation

- Next.js public website for SoftLuna.
- Git-CMS admin with local filesystem and GitHub REST persistence.
- Portfolio/pricing/FAQ/global content modeled as JSON.
- SoftLuna Lunar Day design tokens documented in `docs/brand/softluna`.
- Business plan PDF analyzed and converted into repository docs.

## Milestone 1 - Business Source of Truth

- Keep `.specs/` and `docs/business/softluna` current as the project/business evolves.
- Normalize current public pricing content against the documented business model.
- Decide whether the source of truth for maintenance prices is the live site or the PDF business plan.
- Define a single offer ladder: Landing Page, Site Institucional, Projetos Personalizados, maintenance, AI assistant upsell.

## Milestone 2 - Public Site Conversion

- Align copy with the positioning "elite-accessible web engineering studio".
- Make portfolio CTAs consistently support "Quero um parecido".
- Add explicit sections for PageSpeed/performance, Git-CMS autonomy, local SEO and AI-assisted copy.
- Add lead capture instrumentation and conversion event naming.

## Milestone 3 - CMS Hardening

- Remove or archive legacy service files that point to `NEXT_PUBLIC_API_URL` if they are no longer used.
- Replace default `ADMIN_PASSWORD || 'admin123'` behavior before production.
- Add content schema validation for pricing, portfolio, FAQ and carousel entries.
- Add tests for auth/session, CMS route guards and JSON content readers.

## Milestone 4 - Delivery Factory

- Create reusable client-project templates based on SoftLuna tokens.
- Document briefing, proposal, contract, kickoff, delivery and maintenance handoff.
- Add internal prompt templates for AI-assisted hero/copy generation using the Lunar Day visual language.
- Add checklists for PageSpeed, SEO local, Google Business Profile and structured data.

## Milestone 5 - Recurring AI Upsells

- Validate n8n + Evolution API + OpenAI assistant architecture on an internal demo.
- Define costs, limits, support policy and SLA before selling the AI assistant upsell.
- Add security and privacy checklist for client data handled by AI workflows.
