// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://evkapecie.cz',
  output: 'static',
  // Waitlist za 199 Kč skončil 4. 11. 2026. /pre-teba/ presmeruje na landing, ktorý podľa ?z=waitlist ukáže oznam.
  redirects: { '/pre-teba': '/jedno-cesto-10-kolacov/?z=waitlist' },
  integrations: [sitemap({ filter: (page) => !page.includes('/pre-teba') })],
});
