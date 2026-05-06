import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://your-site-name.netlify.app',
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind(), sitemap()]
});