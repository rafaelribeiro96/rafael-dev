# Rafael Tech — Claude/Gemini/AI Assistant Guidelines

## Commands

- **Run Dev Server**: `yarn dev`
- **Build Project**: `yarn build`
- **Lint Code**: `npx next lint` or `yarn lint`
- **Format Code**: `npx prettier --write "src/**/*.{js,jsx,json,css}"`

## Codebase Principles

- **No Gigantic Files**: Do not write large single files. Break views into clean, componentized React modules inside `src/components/<Domain>/`. Keep files under 500 lines.
- **Next.js & Routing**: Maintain clean entry pages in `src/pages/`. Next.js pages should be slim wrappers that fetch props and delegate styling/interactivity to dedicated components.
- **Git-CMS Data Sync**: Flat files in `content/` are updated using API routes in `src/pages/api/content/` and git-committed via `/api/content/publish`. Read [GIT-CMS.md](file:///c:/Users/rafaelRibeiro/Documents/Pessoal/Rafael%20Tech/GIT-CMS.md) for architecture.
- **Local Fallback**: In local dev, use `fs/promises` fallback. In production (Vercel), utilize GitHub API via `src/lib/github.js`.
- **Disable Lenis on Admin**: Ensure Lenis scroll is disabled for routes starting with `/admin` in `src/pages/_app.js` to avoid scroll hijacking.
- **Styling**: Consistent Dark Studio styling system. Use shared design tokens (`T`) and custom UI primitives from `src/components/Admin/ui.jsx` for all admin interfaces. Do not write ad-hoc inline styles.
