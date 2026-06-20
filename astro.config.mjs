import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://roofingsuppliesbristol.co.uk',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});