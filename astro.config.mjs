// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import { siteConfig } from './src/config/site.ts';

// astro.config.mjs dievaluasi di luar pipeline Vite biasa, jadi `import.meta.env` di
// src/config/site.ts belum terisi di titik ini — env var dibaca manual via loadEnv()
// (pola resmi Vite/Astro) supaya PUBLIC_SITE_URL tetap satu sumber kebenaran yang sama
// dengan yang dipakai siteConfig.domain saat runtime.
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL || siteConfig.domain,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
