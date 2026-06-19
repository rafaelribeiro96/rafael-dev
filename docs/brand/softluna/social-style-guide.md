# SoftLuna Social and AI Style Guide

**Purpose:** Practical style guidance for future social posts, AI image prompts, landing pages and client-facing materials.
**Base system:** `docs/brand/softluna/softluna-design-system.md`

## Brand Essence

SoftLuna should feel like a premium engineering studio: clean, fast, precise and calm. The visual language is not playful SaaS, not dark cyberpunk and not cheap agency template. It is light, editorial and technically controlled.

## Visual Direction

**Name:** Lunar Day

**Core signals:**

- White space as a premium signal.
- Thin 1px structural lines.
- Champagne accent used sparingly.
- Sharp hierarchy through typography, spacing and restrained contrast.
- Real interface/product/site visuals whenever possible.

## Palette

| Token | Hex | Use |
| ----- | --- | --- |
| Background | `#FFFFFF` | Main surfaces |
| Secondary background | `#F5F5F7` | Section contrast, bento areas |
| Primary text | `#111111` | Headlines and main UI text |
| Secondary text | `#6E6E73` | Supporting copy and metadata |
| Accent | `#C5A065` | Primary actions and premium details |
| Accent hover/deeper | `#B38F54` | Hover, active, stronger highlights |
| Thin border | `#E5E7EB` | Dividers, cards, input boundaries |

## Typography

- Display/interface: Geist, then Inter/system fallback.
- Body: Inter, then Geist/system fallback.
- Letter spacing should normally be `0px`.
- Use uppercase micro-labels sparingly for section labels, not as the main voice.

## Layout Rules

- Prefer full-width clean sections over decorative cards.
- Cards are for repeated items, pricing, portfolio or framed tools.
- Avoid nested cards.
- Keep radius restrained; current technical token uses 12px for cards and pill buttons in docs, while the current site also uses 8px `.rt-button` radius.
- Maintain minimum 44px click targets.
- Use real screenshots or generated site/product mockups as primary visuals.

## Social Post Direction

Good recurring content pillars:

- Before/after site audits.
- "Why your site feels slow" performance education.
- Local SEO tips for service businesses.
- WordPress/plugin pain vs static Git-CMS simplicity.
- Case studies by niche: clinic, law office, barber, aesthetics, real estate.
- Short breakdowns of landing page sections that convert.
- Founder/build-in-public notes about creating SoftLuna.

## AI Image Prompt Template

```text
Create a premium, light-mode visual for SoftLuna, a web engineering studio.
Style: Lunar Day, minimal editorial layout, white background, subtle lunar gray sections, thin 1px lines, champagne accent #C5A065, black text #111111, secondary gray #6E6E73.
Subject: [describe the post or website concept].
Mood: precise, calm, elegant, technical, high-performance.
Include: realistic web interface details, clean spacing, premium typography, subtle depth without heavy shadows.
Avoid: dark cyberpunk, neon purple, clutter, generic startup gradients, cartoon mascots, WordPress-template look.
```

## Copy Voice

**Use:**

- "Sites rápidos, elegantes e prontos para vender."
- "Engenharia web de alta performance."
- "Painel simples para editar sem plugins."
- "SEO local, performance edge e conversão por WhatsApp."

**Avoid:**

- Overpromising guaranteed ranking or revenue.
- Cheap-price positioning as the main hook.
- Generic "transforme sua presença digital" without a concrete proof point.

## Asset Usage

- Logos live in `logos/` and selected public versions live in `public/`.
- Use transparent-background logo versions on white or light gray surfaces.
- Use white logo versions only on dark/black surfaces.
- Preserve the icon mark for favicon/app/social avatar contexts.
