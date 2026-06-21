import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://roofingsuppliesbristol.co.uk',
  integrations: [
    react(),
    keystatic(),
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/keystatic'),
    }),
  ],
});
