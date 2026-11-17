# Falcon Prime Studios — Website

The website is a responsive, dark premium studio site for Falcon Prime Studios.

## Included experience
- Cinematic, skippable Project Falcon introduction with a lightweight particle field.
- Reduced-motion support, responsive navigation and mobile menu.
- About, Services, Products, Portfolio, Team and Contact sections.
- Falcon artwork used in the introduction and home hero.
- The contact brief currently copies a formatted enquiry to the visitor's clipboard; it does not send or store submissions.

## Repository layout
- `site/index.html.gz` — gzip-compressed production HTML source. The editable, uncompressed HTML is included in `Falcon_Prime_Studios_Website_Source.zip`.
- `public/falcon.webp` — falcon artwork served at `/falcon.webp`.
- `scripts/build.mjs` — decompresses the HTML into Vercel's static output folder.
- `Falcon_Prime_Studios_Website_Source.zip` — complete source bundle for local editing.

## Local development
1. Extract `Falcon_Prime_Studios_Website_Source.zip`.
2. Open `falcon-prime-studios/index.html` in a browser, or serve that folder with any static web server.
3. Keep `falcon.webp` beside `index.html`.

## Vercel
The project uses a small Node build script and no runtime framework. Vercel runs `npm run build`, which writes the site to `dist/`.

## Before calling the site complete
- Replace illustrative product visuals with approved screenshots and verified live product URLs.
- Add approved client case studies to Portfolio.
- Connect the contact brief to an official inbox or CRM.
- Add official social links and a custom domain when confirmed.
