# Mizuki Code

Cosmology-themed course site built with React + Vite, Tailwind CSS v4, and TypeScript. Dynamic theme system with accents, backgrounds, and fonts.

## Tech
- React 18, TypeScript
- Vite 5
- Tailwind CSS v4.0.0-alpha.20
- Lucide React

## Scripts
- `npm run dev` — start dev server
- `npm run build` — build to `dist/`
- `npm run preview` — preview production build

## Setup
```bash
npm install
npm run dev
```

## Theming
Global theme state stored in `src/lib/themeContext.tsx` and persisted to localStorage. It toggles HTML classes: `dark|light`, `accent-*`, `bg-gradient-theme|minimal`, and `font-*`.

## Deployment (GitHub Pages)
1. Build the site:
```bash
npm run build
```
2. Commit `dist/` to the `gh-pages` branch or use an action:
   - Enable Pages: Source = `Deploy from a branch`, Branch = `gh-pages` `/` root.
3. Optional: Use `peaceiris/actions-gh-pages` in CI to publish `dist/`.

No Bolt watermark is included.

mizukicode
