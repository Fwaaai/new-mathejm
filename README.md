# Maths EJM (Vite + React + TS)

A small Single‑Page Application (SPA) to host math revision content. Built with Vite, React, TypeScript, Tailwind CSS, and React Router. There is no backend; everything is rendered client‑side. No cookies or localStorage are used.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS (v4) with custom theme tokens
- React Router
- KaTeX via `react-katex` for math rendering

## Quick Start

Prerequisites:

- Node.js 18+ (recommended 20+)
- npm 9+

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Common scripts:

- `npm run dev` — start Vite dev server
- `npm run build` — type‑check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

The app serves at the URL shown by Vite (typically http://localhost:5173).

## Project Structure

```
.
├─ public/                  # Static assets copied as‑is
├─ src/
│  ├─ assets/               # App assets (if any)
│  ├─ components/           # Reusable UI (e.g., sidebar, hero)
│  ├─ data/                 # Content metadata and chapter files
│  │  ├─ chapters.ts        # Global chapter metadata (id, slug, title, lead)
│  │  └─ chapters/
│  │     ├─ chapter1/
│  │     │  ├─ index.tsx    # Chapter 1 index page (list of sections)
│  │     │  ├─ sections.ts  # Chapter 1 sections metadata
│  │     │  └─ sections/
│  │     │     └─ section-1.tsx  # Example section component
│  │     └─ chapter2/
│  │        └─ index.tsx
│  ├─ pages/                # Route components (Accueil, ChapterPage, NotFound, etc.)
│  ├─ utils/
│  │  ├─ loaders/           # Dynamic import helpers (chapters/sections)
│  │  └─ renderers/         # Async renderers that use the loaders
│  ├─ App.tsx               # Routes and layout
│  └─ main.tsx              # App bootstrap
├─ index.css                # Tailwind layer + theme tokens
├─ index.html               # Root HTML
├─ vite.config.ts           # Vite + React + Tailwind plugins
└─ package.json
```

## Routing

The app uses React Router with the following routes:

- `/` — Accueil (home)
- `/chapitres/:chapterId` — Chapter page (e.g., `chapitre-1`)
- `/chapitres/:chapterId/sections/:sectionId` — Section page
- `/chapitres/:chapterId/exercices/:exerciseId` — Exercise page (WIP)

Chapter and section metadata live under `src/data`. Chapter pages use `chapters.ts` to look up the chapter by its `slug`.

## Content Model and Conventions

High‑level metadata lives in `src/data/chapters.ts`:

```ts
export const chaptersMeta = [
  { id: "1", slug: "chapitre-1", title: "…", lead: "…" },
  { id: "2", slug: "chapitre-2", title: "…", lead: "…" },
];
```

Chapter 1 also has a `sections.ts` file that lists its sections with slugs (e.g., `section-01`, `section-02`, …) used for navigation. The actual section content is implemented as React components under `src/data/chapters/chapterN/sections/section-*.tsx`.

### Dynamic Loading (by Convention)

The app includes helpers that lazy‑load chapter and section components using `import.meta.glob` patterns:

- Chapters: `src/utils/loaders/chapterLoader.ts` matches `src/data/chapters/chapter*/index.tsx`
- Sections: `src/utils/loaders/sectionLoader.ts` matches `src/data/chapters/chapter*/sections/section-*.tsx`

Renderers in `src/utils/renderers/` resolve components at runtime given a chapter/section number and show a loading or not‑found state accordingly.

Note: The route‑level `pages/sectionPage.tsx` currently uses the metadata approach (slugs) and is a WIP. The utilities under `utils/` demonstrate the intended dynamic import pattern by numeric chapter/section ids.

### Adding a New Chapter

1. Add metadata to `src/data/chapters.ts` with a unique `id` and `slug` (e.g., `chapitre-3`).
2. Create a new folder `src/data/chapters/chapter3/` with:
   - `index.tsx` (the chapter index component)
   - optionally `sections/` for section components
3. If you want a section list on the chapter index, mirror Chapter 1’s pattern (e.g., a `sections.ts` with `slug`, `number`, and `title`).

### Adding a New Section

1. Under the chapter folder, add a file named `src/data/chapters/chapterN/sections/section-X.tsx` where `X` is your section number (e.g., `section-1.tsx`).
2. If using metadata‑driven navigation (Chapter 1 style), add an entry to that chapter’s `sections.ts` with:
   - `id` (string), `slug` (e.g., `section-01`), `number` (label), `title` (display)
3. Ensure your routes link to `/chapitres/chapitre-N/sections/<section-slug>`.

## Styling

- Tailwind v4 is configured via `@tailwindcss/vite` and `index.css`.
- Theme tokens are defined in the `@theme` block (colors for background, text, accent, etc.).
- Common UI patterns (`.intro`, `.prim-btn`, `.scnd-btn`, `.surfaces`, etc.) are defined under `@layer components` in `index.css`.

## Math Rendering

We use KaTeX with `react-katex` for inline and block math. The stylesheet is imported in `src/main.tsx`:

```ts
import "katex/dist/katex.min.css";
```

In components, you can use `react-katex` components like `<InlineMath />` and `<BlockMath />`.

## Development Notes

- The site is in French; content strings should remain consistent.
- The sidebar currently lists a fixed set of chapters; update it if you add new chapters.
- If deploying under a subpath (e.g., GitHub Pages), set Vite’s `base` option accordingly.

## License

This project is released under the MIT License. See `LICENSE` for details.

