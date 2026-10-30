// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://evkapecie.cz',
  output: 'static',
  // Landing plateného ebooku (do launchu) aj stránka pre waitlist (/pre-teba/) sú skryté (noindex), preto nie sú ani v sitemape.
  integrations: [sitemap({ filter: (page) => !page.includes('/jedno-cesto-10-kolacov') && !page.includes('/pre-teba') })],
});
