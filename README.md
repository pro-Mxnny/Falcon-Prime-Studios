# Falcon Prime Studios — Website

A responsive, single-page studio website for Falcon Prime Studios.

## Experience
- Prime Ignition opening: a traced platinum emblem, metallic light sweep, wordmark reveal and split-panel transition.
- Obsidian and Platinum visual identity with ivory editorial sections and restrained cobalt accents.
- Scroll-linked progress indicator, staggered section reveals, hero image parallax, pointer-responsive cards and animated capability label.
- Animated service panels, product showcases, process steps, founder cards and contact section.
- Responsive navigation and mobile layouts.
- Reduced-motion support and a skippable, once-per-session introduction.
- The contact brief currently copies a formatted enquiry to the visitor's clipboard; it does not send or store submissions.

## Project structure
- `index.html` — editable website source, styling, animation logic and page content.
- `public/falcon.webp` — falcon artwork used in the homepage hero and studio visuals.
- `site/index.html.gz` — retained compressed fallback copy.
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
