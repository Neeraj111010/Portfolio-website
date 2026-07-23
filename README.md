## Technologies Used

This repository (portfolio website) uses the following major tools, libraries and services:

- **Bun**: fast JavaScript runtime and package manager used in CI and local development workflows (workflow steps use `bun install` / `bun run build`).
- **Vite**: dev server and build tool (project scripts: `dev`, `build`, `preview`). `vite.config.ts` sets `base` from `VITE_BASE` for Pages builds.
- **React (18)**: UI library used throughout the app (TSX components in `src/components`).
- **TypeScript**: typed source code (`.tsx`/`.ts`), configured via `tsconfig.*`.
- **Tailwind CSS**: utility-first styling used across components and global styles.
- **Framer Motion**: animations and motion used in interactive UI elements.
- **Radix UI**: accessible low-level UI primitives (various `@radix-ui/*` packages).
- **Lucide React**: icon set used for GitHub/demo icons and UI affordances.
- **Sonner**: toast/notification system used for lightweight user feedback.
- **React Router**: routing for multi-page views under `src/pages`.
- **React Hook Form** + **Zod**: form handling and validation utilities.
- **TanStack Query**: client-side data fetching and caching (optional usage).
- **Recharts**, **embla-carousel-react**: charting and carousel UI components used in sections.

- **Tooling & DevDependencies**:
  - `@vitejs/plugin-react-swc` — SWC-based React plugin for Vite.
  - `ESLint`/`@eslint/js` — linting.
  - `Tailwind CSS` plugins (typography, animations).
  - `Vitest` & `@playwright/test` — test runner and end-to-end testing helpers present in `devDependencies`.

- **CI / Deployment**:
  - GitHub Actions workflow at `.github/workflows/deploy.yml` builds the site (configured for Bun) and deploys to GitHub Pages. The workflow sets `VITE_BASE` to `/${{ github.event.repository.name }}/` so built assets resolve correctly when served from a repo pages path.

Notes and useful commands
- Install dependencies (Bun):

```bash
bun install
```

- Local dev server:

```bash
bun run dev
# or
npm run dev
```

- Build for production:

```bash
VITE_BASE="/REPO_NAME/" bun run build
# or
VITE_BASE="/REPO_NAME/" npm run build
