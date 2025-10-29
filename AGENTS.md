# AGENTS Guidance

Scope: Entire repository.

This document gives agents working in this repo the minimal, practical rules to follow so changes remain consistent with the current codebase.

## Stack & Baseline

- Vite + React + TypeScript
- React Router
- Tailwind v4 via `@tailwindcss/vite`
- KaTeX via `react-katex`
- Language: French content and UI strings

## File & Folder Conventions

- Content lives under `src/data/chapters/chaptern/`.
  - `index.tsx` = chapter index component.
  - `sections/section-X.tsx` = section component; filenames use non‑padded numbers (e.g., `section-1.tsx`).
  - For Chapter 1 only, `sections.ts` provides section metadata (id, slug, number, title).
- Slugs are zero‑padded (e.g., `section-01`) but filenames are not (`section-1.tsx`). Keep this distinction.
- Don’t rename or move files matched by the loaders unless explicitly requested.

## Dynamic Loading

- Loaders use `import.meta.glob`:
  - Chapters: `src/utils/loaders/chapterLoader.ts` matches `src/data/chapters/chapter*/index.tsx`.
  - Sections: `src/utils/loaders/sectionLoader.ts` matches `src/data/chapters/chapter*/sections/section-*.tsx`.
- Renderers in `src/utils/renderers/` map numeric chapter/section ids to components. Keep patterns stable.

## Routing

- Defined in `src/App.tsx`:
  - `/` → Accueil
  - `/chapitres/:chapterId` where `:chapterId` is a slug like `chapitre-1`.
  - `/chapitres/:chapterId/sections/:sectionId` where `:sectionId` is a slug like `section-01`.
  - `/chapitres/:chapterId/exercices/:exerciseId` (WIP).
- `src/pages/sectionPage.tsx` is the section route page. `src/pages/section.tsx` is a legacy stub and not routed.
- When adding content, ensure links use chapter slug + section slug.

## Styling

- Tailwind v4 only. Tokens and component classes are in `index.css`.
- Prefer utility classes and shared classes (`.intro`, `.prim-btn`, `.scnd-btn`, `.surfaces`, etc.). Avoid inline styles unless necessary.

## Math

- Use `react-katex` components (`InlineMath`, `BlockMath`). KaTeX CSS is imported in `src/main.tsx`.

## Adding Content

- New chapter:
  1. Add `{ id, slug, title, lead }` to `src/data/chapters.ts`.
  2. Create `src/data/chapters/chapterN/index.tsx` (+ optional `sections/`).
- New section (Chapter N):
  1. Create `src/data/chapters/chapterN/sections/section-X.tsx` (X without leading zeros).
  2. If using metadata (Chapter 1 pattern), add entry to that chapter’s `sections.ts` with slug `section-XX`.
  3. Ensure links use `/chapitres/chapitre-N/sections/section-XX`.
- Update the sidebar labels/links in `src/components/sidebar.tsx` when adding chapters.

## Do / Don’t

- Do keep patches minimal and focused; match existing naming and structure.
- Do update README if you add notable features or structural changes.
- Don’t refactor loaders, renderers, or routing without an explicit request.
- Don’t introduce new dependencies unless strictly necessary.

## Dev & Validation

- Node 18+ (20+ recommended).
- Scripts: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`.
- If deploying under a subpath, set Vite `base` in `vite.config.ts`.

## License

- This project is AGPL-3.0. Keep license references consistent across docs and code.
