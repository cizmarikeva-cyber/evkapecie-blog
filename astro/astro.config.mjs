// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://evkapecie.cz',
  output: 'static',
  // Stránka pre waitlist (/pre-teba/) je skrytá (noindex), preto nie je ani v sitemape.
  integrations: [sitemap({ filter: (page) => !page.includes('/pre-teba') })],
});
