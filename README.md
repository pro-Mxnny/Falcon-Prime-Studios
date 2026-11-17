# Falcon Prime Studios — Website

A responsive, single-page studio website for Falcon Prime Studios.

## Experience
- Cinematic, skippable Project Falcon introduction with a lightweight particle field.
- Reduced-motion support, responsive navigation and a mobile menu.
- About, Services, Products, Portfolio, Team and Contact sections.
- Falcon artwork used in the introduction and homepage hero.
- The contact brief currently copies a formatted enquiry to the visitor's clipboard; it does not send or store submissions.

## Project structure
- `site/index.html.gz` — compressed HTML source used by the Vercel build.
- `public/falcon.webp` — falcon artwork copied to the deployed site as `/falcon.webp`.
- `scripts/build.mjs` — decompresses the HTML and assembles the static output in `dist/`.
- `package.json` and `vercel.json` — build configuration.

## Edit the website
The deployed HTML is gzip-compressed to keep Git operations lightweight. To get an editable copy:

```bash
gzip -dc site/index.html.gz > index.html
cp public/falcon.webp .
```

Edit `index.html` and preview it with a local static server. To publish the update through Git, replace the compressed source:

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
