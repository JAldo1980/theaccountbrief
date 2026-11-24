import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://theaccountbrief.uk',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
