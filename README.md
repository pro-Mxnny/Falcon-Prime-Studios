# Falcon Prime Studios — Website

A responsive, single-page studio website for Falcon Prime Studios.

## Experience
- Cinematic, skippable Project Falcon introduction.
- The falcon is rendered as a live particle silhouette, flies through the scene, approaches the viewer, and resolves into the Falcon Prime symbol and wordmark.
- Reduced-motion support, responsive navigation and a mobile menu.
- About, Services, Products, Portfolio, Team and Contact sections.
- Falcon artwork used by the particle introduction and homepage hero.
- The contact brief currently copies a formatted enquiry to the visitor's clipboard; it does not send or store submissions.

## Project structure
- `index.html` — editable website source.
- `site/index.html.gz` — compressed fallback copy retained for recovery.
- `public/falcon.webp` — falcon artwork used by the site.
- `scripts/build.mjs` — assembles the static output in `dist/`, preferring the editable HTML source.
- `package.json` and `vercel.json` — build configuration.

## Edit the website
Edit `index.html` directly and preview it with a local static server. The build script automatically uses this file. The compressed fallback can be refreshed when needed:

```bash
gzip -n -9 -c index.html > site/index.html.gz
```

## Vercel
Vercel runs `npm run build`, which writes the static website to `dist/`. No frontend framework or runtime dependency is required.

## Before calling the site complete
- Replace illustrative product visuals with approved screenshots and verified live product URLs.
- Add approved client case studies to Portfolio.
- Connect the contact brief to an official inbox or CRM.
- Add official social links and a custom domain when confirmed.
