# Mankey Mouze Specialty Coffee — website

A one-page static site for a specialty coffee bar in Roxas City, Capiz, built with [Astro](https://astro.build) 6.
There is no UI framework and almost no JavaScript: only the photo viewer and the phone action bar use small scripts.

## Run it locally

You need Node.js 22.12 or newer (`node -v` to check).

```bash
npm install        # once
npm run dev        # live-reloading dev server at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the production build at http://localhost:4321
npm run check      # type and template check
```

## Edit the menu, prices and contact details

| What | File |
|---|---|
| Drinks, prices, ingredients, the "espresso" tag | `src/data/menu.json` |
| Phone, Google Maps link, Facebook, Instagram, the quote | `src/data/business.json` |

Text that depends on the menu updates itself on the next build: the drink count ("Sixteen iced drinks"), the "On the boards" counts, the cheapest-cup price, the meta description, and the schema.org menu.

**To do:** `links.facebook` in `business.json` is still a placeholder (`https://m.me/mankeymouze`). Replace it with the shop's real Facebook page or Messenger link.

## Photos

The shop photos live in `src/assets/images/`. At build time Astro converts them to WebP in several sizes. Everything below the hero lazy-loads. To replace a photo, overwrite the file and keep its name. The logo (`logo.png`) ships as the original file, untouched.

`public/og-image.jpg` (1200×630) is the Facebook and Messenger share preview, a crop of `lamp-corner.png`.

## Deploy

The site is plain static files. Any static host works. The build command is `npm run build` and the output folder is `dist`.

Set **`SITE_URL`** to the live address (for example `https://mankeymouze.com`). The Facebook share preview and the canonical link need absolute URLs.

- **Netlify:** New site → import the repo. Build command `npm run build`, publish directory `dist`. Netlify provides the `URL` variable automatically, so `SITE_URL` is optional there.
- **Vercel:** import the repo. It detects Astro on its own. Vercel provides the production URL automatically; set `SITE_URL` if you use a custom domain.
- **Cloudflare Pages:** framework preset Astro, build `npm run build`, output `dist`, and set `SITE_URL` under Environment variables.
- **Any other host or shared hosting:** run `SITE_URL=https://your-domain npm run build` and upload the contents of `dist/`.

After the first deploy, paste the URL into Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/) and click **Scrape Again** so Facebook picks up the preview image.

## Project layout

```
src/
  data/          menu.json, business.json   ← edit these
  assets/images/ shop photos (optimised at build)
  components/    Nav, Hero, Menu, About, Gallery, Location, Footer, PhoneDock, Lightbox, Icon
  layouts/       Base.astro (meta, Open Graph, schema.org)
  styles/        global.css (design tokens and shared rules)
  pages/         index.astro
public/          og-image.jpg
PRODUCT.md, DESIGN.md   product facts and the "Lamplight" design system
```
