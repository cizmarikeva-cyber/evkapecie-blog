// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://evkapecie.cz',
  output: 'static',
  // Landing plateného ebooku je do launchu skrytý (noindex), preto nie je ani v sitemape.
  integrations: [sitemap({ filter: (page) => !page.includes('/jedno-cesto-10-kolacov') })],
});
