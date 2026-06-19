# SoftLuna Operating System

This document turns the business model into reusable operating checklists for future development, sales, content and AI-assisted work.

## Business Source Files

- Technical/project specs: `.specs/project/*` and `.specs/codebase/*`
- Business model: `docs/business/softluna/business-model.md`
- Brand/style guide: `docs/brand/softluna/*`
- Current site content: `content/*`
- Current CMS architecture: `GIT-CMS.md` and `.specs/codebase/*`

## Lead Qualification

Use these fields when building a spreadsheet, CRM view or CMS collection:

| Field | Purpose |
| ----- | ------- |
| Business name | Identifies the lead |
| Niche | Helps reuse copy/design patterns |
| City/region | Local SEO and personalization |
| Website status | No site, Facebook only, broken, slow, outdated, OK |
| Main gap | The visible reason for outreach |
| Competitor reference | Shows what "better" looks like in the same market |
| Contact channel | WhatsApp, email, Instagram, form |
| Priority | High for no-site/poor-site/high-ticket niches |
| Prototype link | Visual hook asset |
| Outreach status | Not contacted, sent, follow-up 1, follow-up 2, interested, won, lost |

## Briefing Inputs

Minimum information needed before building a client site:

- Business name and city.
- Services/offers.
- Primary CTA: WhatsApp, booking, form or call.
- Target customer and main pains.
- Brand references, colors and existing assets.
- Google Business Profile link if available.
- Competitor sites the client likes or needs to beat.
- Required pages/sections.
- Maintenance plan choice.

## Delivery Workflow

1. Qualify the business and identify the digital gap.
2. Build or adapt a visual-hook prototype.
3. Send outreach or receive inbound briefing.
4. Confirm scope, price, payment terms and revision limits.
5. Collect initial payment.
6. Build with SoftLuna tokens and reusable components.
7. Configure SEO, Open Graph, schema and WhatsApp conversion.
8. Test mobile, desktop, performance and content editing.
9. Publish and connect domain.
10. Handoff admin/content instructions.
11. Start maintenance SLA.

## Content QA

Before publishing:

- Review Portuguese copy for spelling, accent marks, crase and agreement before publishing.
- Hero says what the business does, where it operates and why it is credible.
- CTA is visible in the first viewport.
- WhatsApp message is contextual.
- Services are described in client/customer language.
- Portfolio/testimonials support trust.
- FAQ handles price, timing, process and maintenance objections.
- SEO title and description match the local offer.
- JSON-LD uses correct business name, phone and location.

## Technical QA

- `npm run lint`
- `npm run build`
- Mobile layout smoke test.
- Check broken images and missing uploads.
- Check admin login and one non-destructive content edit locally.
- Check PageSpeed/Lighthouse before claiming performance.
- Confirm environment variables are set in production.

## AI Prompt Inputs for Future Work

When asking an AI to generate copy, visual concepts, posts or images for SoftLuna, include:

- Brand: SoftLuna, Lunar Day.
- Palette: white `#FFFFFF`, lunar gray `#F5F5F7`, primary text `#111111`, secondary text `#6E6E73`, champagne `#C5A065`, hover champagne `#B38F54`.
- Tone: precise, premium, calm, technical, conversion-aware.
- Language: Brazilian Portuguese (`pt-BR`) with correct accents, orthography and final proofreading before publish.
- Avoid: generic tech startup neon, heavy gradients, cluttered WordPress-template look, exaggerated hype.
- Subject: high-performance websites, local SEO, Git-CMS autonomy, WhatsApp conversion, AI-assisted engineering.

## Future Docs to Add

- Proposal template.
- Contract checklist.
- Invoice model.
- Outreach scripts in Portuguese and English.
- Client handoff guide.
- PageSpeed/SEO audit checklist.
