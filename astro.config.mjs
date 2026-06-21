import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  adapter: node({ mode: 'middleware' }),
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
