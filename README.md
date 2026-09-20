# Athish Radhika Srinivasa Perumal — Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS.

**Live:** https://athishrs.github.io/athish_portfolio/

## Stack

- React 19 + React Router 7
- Vite 7
- Tailwind CSS 4

## Structure

- `src/components/Hero.jsx` — headline + hero stats
- `src/components/Work.jsx` — flagship case studies (Cortex, Slotora, Roommate Harmony) + a compact "Also on GitHub" list of smaller projects
- `src/components/About.jsx` — "How I work" principles
- `src/components/Background.jsx` — career/education timeline + résumé link
- `src/components/Footer.jsx` — contact CTA
- `src/components/ProjectPage.jsx` — full case-study detail page at `/projects/:slug`
- `src/data/projects.js` — all project content/data lives here; edit this file to add, remove, or update projects

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/`. The build also copies `dist/index.html` to `dist/404.html` so client-side routes resolve correctly when served as a static site (needed for GitHub Pages).

## Deployment

This repo deploys automatically to **GitHub Pages** via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

One-time setup (only needed once, by a repo admin):

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.

After that, every push to `main` builds and publishes automatically — no manual deploy steps.
