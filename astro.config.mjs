import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Vaihda tähän lopullinen tuotanto-URL ennen buildia.
export const SITE_URL = 'https://asuntoremontti.fi';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/kiitos'),
    }),
  ],
});
