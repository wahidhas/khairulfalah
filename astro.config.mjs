// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site.ts';

// Domain canonical dikonfirmasi dalam brief; jangan gunakan env lama yang menunjuk domain lain.
export default defineConfig({
  site: siteConfig.domain,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
