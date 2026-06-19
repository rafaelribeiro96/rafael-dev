# Tech Stack

**Analyzed:** 2026-06-19

## Core

- Framework: Next.js 14.2.20 using Pages Router (`src/pages`)
- Language: JavaScript with JSX
- Runtime: Node.js for Next API routes and build-time content reads
- Package manager: npm and yarn lockfiles are both present; scripts are in `package.json`

## Frontend

- UI framework: React 18.3.1
- Styling: Tailwind CSS 3.4.1 plus global CSS primitives in `src/styles/global.css`
- Fonts/icons: Google Fonts imports for Geist, Inter and Material Symbols
- Motion/UX: `lenis`, CSS marquee animation, smooth scrolling
- Components: feature-like component folders under `src/components`

## Backend

- API style: Next.js API routes under `src/pages/api`
- Database: none; flat JSON files under `content/`
- CMS persistence: local `fs/promises` in development and GitHub REST API in production when configured
- Authentication: custom signed `admin_session` cookie using HMAC SHA-256 in `src/lib/auth.js`

## Testing

- Unit: no test framework found
- Integration: no test framework found
- E2E: no test framework found
- Static checks: `next lint`

## External Services

- Deployment/analytics: Vercel metadata present; `@vercel/analytics` imported in `_app.js`
- Git storage: GitHub REST API for CMS writes
- Lead conversion: WhatsApp links via `wa.me`
- Optional/legacy services: Instagram Graph API token usage in `InstaFeed`; old Axios service files point to `NEXT_PUBLIC_API_URL`

## Development Tools

- Linting: ESLint 8 with `eslint-config-next`, React, Hooks and Prettier plugins
- Formatting: Prettier 3 config
- Images: `sharp`, browser-side image compression helper, upload endpoint
- Assets: SVG/PNG logo exports under `logos/` and public assets under `public/`
