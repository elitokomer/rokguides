import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://rokguides.xyz';

  const staticPaths = [
    'en',
    'en/getting-started',
    'en/commanders',
    'en/equipment',
    'en/about',
    'en/contact',
    'en/privacy-policy',
  ];

  const commandersEn = await getCollection('commandersEn');
  const commanderEnPaths = commandersEn.map((c) => `en/commanders/${c.slug}`);

  const urls = [...staticPaths, ...commanderEnPaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${base}/${path}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
