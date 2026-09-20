# Athish Radhika Srinivasa Perumal — Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS.

**Live:** https://athishrs-portfolio.netlify.app/

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

Outputs to `dist/`.

## Deployment

This repo deploys to **Netlify**, connected to this GitHub repo — every push to `main` triggers a new build and deploy automatically (config in [`netlify.toml`](netlify.toml)).

Client-side routes (e.g. `/projects/slotora`) resolve correctly on refresh/direct link via the SPA redirect rule in `netlify.toml` and [`public/_redirects`](public/_redirects), which fall back all paths to `index.html`.

The app is served from the site root (`base: '/'` in `vite.config.js`) — no subpath, unlike a GitHub Pages project site.
