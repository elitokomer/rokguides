import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rokguides.xyz',
  integrations: [tailwind({ applyBaseStyles: false })],
});
