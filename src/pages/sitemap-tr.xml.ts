import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://rokguides.com';

  const staticPaths = [
    '',
    'baslangic-rehberi',
    'komutanlar',
    'ekipmanlar',
    'hakkimizda',
    'iletisim',
    'gizlilik-politikasi',
  ];

  const commanders = await getCollection('commanders');
  const commanderPaths = commanders.map((c) => `komutanlar/${c.slug}`);

  const urls = [...staticPaths, ...commanderPaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${base}/${path}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
