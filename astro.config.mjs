// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://llms-ads.de',
  integrations: [sitemap({
    filter: (page) => !page.includes('/danke') && !page.includes('/thanks'),
    i18n: {
      defaultLocale: 'de',
      locales: { de: 'de', en: 'en' },
    },
  })],
});
