# SoftLuna

**Vision:** Build SoftLuna as a premium, lightweight web engineering studio for small and medium businesses that need fast, elegant, editable websites without WordPress complexity.
**For:** Local businesses, service providers, professional offices, clinics, agencies and solo operators that need a credible digital presence, SEO foundation and direct WhatsApp conversion.
**Solves:** Business owners need websites that load fast, look trustworthy, convert visitors and remain easy to update after delivery.

## Goals

- Generate qualified commercial leads through `softluna.com.br` with clear WhatsApp CTAs, portfolio proof and service pricing.
- Sell setup projects with maintenance recurrence, targeting `LTV > 3 x CAC`.
- Keep delivery operationally viable for a solo developer by using static-first architecture, Git-CMS content, AI-assisted copy/design production and reusable brand standards.
- Preserve a documented business operating system inside the repository so future site, content, sales and product decisions can reuse the same source of truth.

## Tech Stack

**Core:**

- Framework: Next.js 14.2.20, Pages Router
- Language: JavaScript / React 18.3.1
- Content store: flat JSON files in `content/`
- Deployment target currently present: Vercel project metadata in `.vercel/`

**Key dependencies:**

- Tailwind CSS 3.4.1 for public-site styling
- `@vercel/analytics` for analytics
- `lenis` for smooth scrolling
- GitHub REST API through `src/lib/github.js` for production CMS writes
- Next API routes for admin auth, CMS writes and upload handling

## Scope

**v1 includes:**

- Public SoftLuna one-page website with hero, ecosystem, services, comparison, portfolio, workflow, pricing and FAQ.
- Static content sourced from `content/global`, `content/pricing`, `content/portfolio`, `content/faq` and `content/carousel-images`.
- Admin panel at `/admin` protected by signed HTTP-only cookie.
- Git-CMS flow: local filesystem writes in development and GitHub REST writes in production when `GITHUB_PAT` and `GITHUB_REPO` are configured.
- Brand system documentation under `docs/brand/softluna`.
- Business documentation under `docs/business/softluna`.

**Explicitly out of scope today:**

- Multi-tenant CMS for client projects.
- Real Keystatic/TinaCMS integration. The current repository has a custom Git-CMS admin, although the business plan mentions Keystatic/TinaCMS as a product direction.
- Automated lead scraping, HB Insider integration, Loom automation, Evolution API, n8n agents or OpenAI-powered support bots.
- Full legal contract generation. The repository can document required clauses, but legal validation should be external.

## Constraints

- Solo-founder execution: features must reduce delivery time and maintenance load.
- Business model requires clear distinction between one-time setup, maintenance plans and optional AI upsells.
- Public site must communicate premium engineering and trust, not only low price.
- Code and docs should keep facts observed in the repository separate from future product intentions.
