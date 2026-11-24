import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jamesalderman.uk',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
