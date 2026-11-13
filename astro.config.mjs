// @ts-check
import { defineConfig } from 'astro/config';

/**
 * The public URL of the site. Open Graph tags (Facebook link previews) need absolute URLs,
 * so set SITE_URL when you deploy, e.g. SITE_URL=https://mankeymouze.com npm run build.
 * Netlify (URL) and Vercel (VERCEL_PROJECT_PRODUCTION_URL) provide it automatically.
 */
const site =
  process.env.SITE_URL ||
  process.env.URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined) ||
  'http://localhost:4321';

if (site.startsWith('http://localhost') && process.argv.includes('build')) {
  console.warn('\n[mankey-mouze] SITE_URL is not set: Open Graph URLs will point at localhost. Set SITE_URL before a production build.\n');
}

export default defineConfig({
  site,
  output: 'static',
  build: {
    // one small page: inline the CSS so the first paint needs no extra request
    inlineStylesheets: 'always',
  },
});
