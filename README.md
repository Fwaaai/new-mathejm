# Maths EJM (Vite + React + TS)

Single‑Page Application (SPA) for maths revision content. Built with Vite, React, TypeScript, Tailwind CSS v4, and React Router. Fully client‑side; no cookies. Theme preference is stored in `localStorage` only.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS (v4) via `@tailwindcss/vite` with custom tokens
- React Router
- KaTeX via `react-katex` for math rendering

## Quick Start

Prerequisites:

- Node.js 18+ (20+ recommended)
- npm 9+

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Common scripts:

- `npm run dev` – start Vite dev server
- `npm run build` – type‑check and build for production
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

The app serves at the URL shown by Vite (typically http://localhost:5173).

## Dark Mode

- Toggle from the sidebar ("Thème sombre/Thème clair").
- Preference saved in `localStorage` under `theme` and applied via `data-theme` on `<html>`.
- Theme tokens live in `index.css` using Tailwind v4’s `@theme`; dark overrides under `:root[data-theme="dark"]`.

## Project Structure

```
.
├─ src/
│  ├─ assets/
│  │  └─ img/                 # Images used in content
│  ├─ components/             # Sidebar, hero, footer, etc.
│  ├─ data/                   # Content metadata and chapter files
│  │  ├─ chapters.ts          # Global chapter metadata (id, slug, title, lead, length)
│  │  └─ chapters/
│  │     ├─ chapter1/
│  │     │  ├─ index.tsx      # Chapter 1 index page (list of sections)
│  │     │  ├─ sections.ts    # Sections metadata (slugs, labels)
│  │     │  ├─ sections/      # Section components (non‑padded numbers)
│  │     │  └─ exercises/     # Exercise components (non‑padded numbers)
│  │     ├─ chapter2/
│  │     │  ├─ index.tsx
│  │     │  ├─ sections.ts
│  │     │  ├─ sections/
│  │     │  └─ exercises/
│  │     └─ chapter3/
│  │        ├─ index.tsx
│  │        ├─ sections.ts
│  │        ├─ sections/
│  │        └─ exercises/
│  ├─ pages/                  # Accueil, ChapterPage, SectionPage, ExercisePage, NotFound
│  ├─ utils/
│  │  ├─ loaders/             # Dynamic import helpers (chapters/sections/exercises)
│  │  └─ renderers/           # Renderers that use the loaders
│  ├─ App.tsx                 # Routes and layout
│  └─ main.tsx                # App bootstrap
├─ index.css                  # Tailwind layer + theme tokens and component classes
├─ index.html                 # Root HTML
├─ vite.config.ts             # Vite + React + Tailwind plugins
└─ package.json
```

## Routing

- `/` – Accueil (home)
- `/chapitres/:chapterId` – Chapter page; `:chapterId` is a slug (e.g., `chapitre-1`)
- `/chapitres/:chapterId/sections/:sectionId` – Section page; `:sectionId` is a slug (e.g., `section-01`)
- `/chapitres/:chapterId/exercices/:sectionId` – Exercises page for a section

Metadata lives under `src/data`. Chapter pages use `src/data/chapters.ts` to look up a chapter by `slug`.

## Content Model and Conventions

- `src/data/chapters.ts` contains chapter entries with `{ id, slug, title, lead, length }`.
- Chapters can include a `sections.ts` file listing sections with slugs (e.g., `section-01`, `section-02`, …) used for routing and labels.
- Section content lives under `src/data/chapters/chapterN/sections/section-*.tsx`.
- Exercises live under `src/data/chapters/chapterN/exercises/section-*.tsx`.
- Important: slugs are zero‑padded (e.g., `section-01`), but filenames are not (`section-1.tsx`, `section-2.tsx`, …). Filenames must use non‑padded numbers to match the dynamic import convention.

### Dynamic Loading (by Convention)

Helpers lazy‑load content using `import.meta.glob` patterns:

- Chapters: `src/utils/loaders/chapterLoader.ts` → `src/data/chapters/chapter*/index.tsx`
- Sections: `src/utils/loaders/sectionLoader.ts` → `src/data/chapters/chapter*/sections/section-*.tsx`
- Exercises: `src/utils/loaders/exerciseLoader.ts` → `src/data/chapters/chapter*/exercises/section-*.tsx`

Renderers in `src/utils/renderers/` map numeric `chapterNumber`/`sectionNumber` to components and handle loading/not‑found states. Route pages (`src/pages/sectionPage.tsx`, `src/pages/exercisePage.tsx`) resolve slugs to metadata, then delegate to the renderers.

### Adding a New Chapter

1. Add metadata to `src/data/chapters.ts` with a unique `id` and `slug` (e.g., `chapitre-3`).
2. Create `src/data/chapters/chapterN/` with:
   - `index.tsx` (the chapter index component)
   - optionally `sections/` for section components and `exercises/` for exercises
3. If you want a section list on the chapter index, add a `sections.ts` with `slug`, `number`, and `title`.

### Adding a New Section

1. Add `src/data/chapters/chapterN/sections/section-X.tsx` where `X` is your section number without leading zeros (e.g., `section-1.tsx`).
2. If using metadata‑driven navigation, add an entry to that chapter’s `sections.ts` with:
+   - `id` (string), `slug` (e.g., `section-01`), `number` (label), `title` (display)
3. Link to `/chapitres/chapitre-N/sections/<section-slug>` (e.g., `/chapitres/chapitre-1/sections/section-01`).

### Adding Exercises for a Section

1. Add `src/data/chapters/chapterN/exercises/section-X.tsx` (same non‑padded `X` rule).
2. Use the chapter’s `sections.ts` metadata (slug/number/title) for labels and routing.
3. Link to `/chapitres/chapitre-N/exercices/<section-slug>` (e.g., `/chapitres/chapitre-2/exercices/section-03`).

## Styling

- Tailwind v4 via `@tailwindcss/vite` and `index.css`.
- Tokens defined in the `@theme` block (colors for background, text, accent, etc.).
- Shared classes (`.intro`, `.prim-btn`, `.scnd-btn`, `.surfaces`, etc.) under `@layer components` in `index.css`.

## Math Rendering

We use KaTeX with `react-katex` for inline and block math. The stylesheet is imported in `src/main.tsx`:

```ts
import "katex/dist/katex.min.css";
```

In components, use `react-katex` components like `<InlineMath />` and `<BlockMath />`.

## Development Notes

- Site language: French (content and UI strings).
- Sidebar lists chapters explicitly; update it when adding chapters.
- If deploying under a subpath (e.g., GitHub Pages), set Vite’s `base` option accordingly.

Current status snapshot:

- Chapter 1: 19 sections + 19 exercise pages implemented.
- Chapter 2: 14 sections + 14 exercise pages implemented.
- Chapter 3: 11 sections + 11 exercise pages implemented.
- `src/pages/section.tsx` is a legacy stub (not routed). Use `src/pages/sectionPage.tsx` and `src/pages/exercisePage.tsx`.

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See `LICENSE` for the full text.

Note: If you run a modified version of this app as a network service, the AGPL requires that you make the corresponding source code available to the users of that service.
