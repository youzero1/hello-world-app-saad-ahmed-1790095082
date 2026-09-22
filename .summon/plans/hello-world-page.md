---
status: implemented
title: Minimal Hello World Page
---

1. Scaffold the project baseline: `package.json`, `vite.config.ts`, `tsconfig.json`, and `index.html` at the project root. The Vite config registers the Tailwind CSS v4 plugin and the TanStack Router plugin, and maps the `@/` alias to `src/`. Outcome: `npm install` then `npm run dev` starts a working dev server.

2. Create `src/styles/global.css` containing exactly the single Tailwind v4 import line and nothing else. Outcome: Tailwind utility classes are available app-wide.

3. Create `src/main.tsx` as the entry point: import `src/styles/global.css` once, create the router from the generated `src/routeTree.gen.ts`, and render the router provider into the `#root` element from `index.html`. Outcome: the app mounts and routing is active. Do not create or edit `src/routeTree.gen.ts` — the router plugin generates it.

4. Create `src/routes/__root.tsx` as the app shell: a root route rendering a full-height page container with a light neutral background (e.g. white/near-white) and default dark text, with an outlet for child routes. Outcome: consistent clean light styling for every page.

5. Create `src/routes/index.tsx` as the single page at `/`: center its content both vertically and horizontally within the full-height shell, showing "Hello, World!" as a large, semibold heading with generous spacing. Outcome: visiting `/` shows a centered greeting on a clean light background.

6. Verify the result: run the dev server, confirm `/` renders the centered greeting with no console errors, and confirm the layout stays centered at narrow (mobile) and wide (desktop) widths. Outcome: the minimal Hello World app is complete.
