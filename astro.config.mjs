import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://lucent-pixie-3e104f.netlify.app/',
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind(), sitemap()]
});