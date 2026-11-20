# Falcon Prime Studios — Website

A responsive, single-page studio website for Falcon Prime Studios.

## Brand and experience
- Refined geometric falcon crest used consistently in the opening, navigation, footer, About visual and SVG favicon.
- Prime Ignition cinematic opening: near-black stage, layered spotlight, angled light cone, slow metallic emblem tracing, feather details, reflective sweep, wordmark reveal and split-panel transition.
- The opening runs for approximately eight seconds before the final panel reveal, is skippable, plays once per browser session and respects reduced-motion preferences.
- Obsidian and Platinum visual identity with ivory editorial sections and restrained cobalt accents.
- Scroll-linked progress indicator, staggered section reveals, hero image parallax, pointer-responsive cards and animated capability label.
- Responsive navigation and mobile layouts.
- The contact brief currently copies a formatted enquiry to the visitor's clipboard; it does not send or store submissions.

## Project structure
- `index.html` — editable website source, styling, animation logic and page content.
- `public/falcon.webp` — falcon artwork used in the homepage hero and studio visuals.
- `public/falcon-mark.svg` — geometric Falcon Prime emblem and browser favicon.
- `site/index.html.gz` — retained compressed fallback copy.
- `scripts/build.mjs` — assembles the static output in `dist/`, preferring the editable HTML source and copying the public brand assets.
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
