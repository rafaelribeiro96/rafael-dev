# SoftLuna Business Model

**Source:** `Instruções Soft Luna - PLano de negocio.pdf`, current repository content and current implementation review.
**Last updated:** 2026-06-19

## Positioning

SoftLuna is an elite-accessible web engineering studio: more premium and technically rigorous than low-cost WordPress/Elementor factories, but more accessible and faster than fully bespoke high-ticket agencies.

The core promise is:

- fast static sites with strong PageSpeed and SEO foundations;
- premium "Lunar Day" visual identity;
- editable content without WordPress plugin complexity;
- WhatsApp-first conversion for local businesses;
- AI-assisted copy, design and production to keep delivery fast.

## Commercial Model

SoftLuna sells the site as an asset and attaches a maintenance plan.

### Setup

The setup fee pays for:

- strategy and briefing;
- copy structure;
- visual design;
- implementation;
- SEO metadata and structured data;
- Git-CMS/admin setup;
- deployment and handoff.

### Maintenance

Maintenance is a recurring service for keeping the asset stable after publication.

| Plan | Suggested price | SLA | Includes |
| ---- | --------------- | --- | -------- |
| Essencial | R$ 79/month | Up to 48 business hours | Bug fixes, basic security monitoring, technical support by email/WhatsApp and static hosting/SSL management |
| Premium | R$ 149/month | Up to 24 business hours | Everything in Essencial plus up to 2 non-cumulative monthly hours for small structural/code changes, link monitoring and Git backup |

If maintenance is canceled, the recommended policy is to package and deliver the final source code and digital assets so the client can assume hosting responsibility.

## Offer Ladder

| Offer | Scope | Estimated AI-assisted build time | Strategic setup price | Strategic monthly |
| ----- | ----- | -------------------------------- | --------------------- | ----------------- |
| Landing Page de Conversão | Single-page conversion site with WhatsApp CTA, basic SEO, Open Graph, local schema and simple editable content | 2-4 hours | R$ 950 | R$ 79 |
| Site Institucional Enxuto | Up to 4 pages: Home, About, Services and Contact, with editable services/pricing/testimonials/contact data | 4-8 hours | R$ 1,800 | R$ 99-R$ 149 |
| Projetos Personalizados | Higher-complexity pages, custom flows, integrations or richer CMS needs | Estimate per scope | Custom | Custom |
| AI WhatsApp Assistant | n8n + Evolution API + OpenAI assistant connected to client service/booking data | Spike required | R$ 490 setup | +R$ 120/month |

## Current Site Pricing Gap

Current `content/pricing/*.json` may not match the strategic prices above. Example: `content/pricing/landing-page.json` currently uses R$ 749 setup and R$ 40/month maintenance. Treat the table above as strategic recommendation until live pricing content is intentionally updated.

## Differentiators

1. **Edge-first performance:** Static architecture intended to beat heavy WordPress implementations.
2. **AI-assisted copy:** SoftLuna should not depend on the client delivering polished text before starting.
3. **Local SEO:** Google Business Profile alignment, local schema and keyword structure.
4. **Search/AI readiness:** Semantic markup and JSON-LD to help Google and AI search engines understand the business.
5. **Git-CMS autonomy:** Client can edit controlled content without touching layout or plugins.
6. **Portfolio conversion hook:** Every portfolio/example should make it easy to ask for "one like this".

## Competitive Frame

| Competitor type | Market signal | SoftLuna response |
| ---------------- | ------------- | ----------------- |
| Low-cost factories | Cheap WordPress/Elementor, limited performance, hosting often separate | Charge more than commodity offers, justify by performance, polish and ownership |
| Classic agencies | Bundled hosting/support, established credibility | Match trust with clearer technical architecture and faster delivery |
| Design specialists | Strong visual portfolio and niche examples | Use Lunar Day identity plus "Quero um parecido" CTAs |

## Sales Motions

### Inbound

- Public website explains the offer.
- Portfolio examples show niche-specific outcomes.
- WhatsApp CTA turns interest into direct conversation.

### Outbound Visual Hook

1. Find local businesses with no site, slow site, non-responsive site, no HTTPS or weak visual identity.
2. Create a small custom hero/prototype using SoftLuna standards.
3. Record a short Loom-style video.
4. Send a direct WhatsApp/email message explaining the specific gap and showing the prototype.

## Operational Rules

- Scope must be approved before build.
- Structural changes after approved layout should be billed separately.
- Suggested extra technical rate from the PDF: R$ 120/hour.
- Client delays pause delivery deadlines.
- Third-party infrastructure outages should be excluded from SoftLuna liability in contract language.

## Legal/Fiscal Notes

The PDF suggests beginning with CPF for the first few sales and moving to SLU/Simples Nacional as recurring revenue stabilizes. This is planning context, not legal/accounting advice. Validate CNAE, Fator R and tax strategy with an accountant before formalizing.
