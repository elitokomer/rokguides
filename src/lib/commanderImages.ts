const IMAGE_BY_KEYWORD: { keywords: string[]; slug: string; image: string }[] = [
  { keywords: ['sun tzu', 'epic', 'epik'], slug: 'sun-tzu-epic', image: '/commanders/sun-tzu-epic.jpg' },
  { keywords: ['sun tzu'], slug: 'sun-tzu-prime', image: '/commanders/sun-tzu-prime.jpg' },
  { keywords: ['bai qi'], slug: 'bai-qi', image: '/commanders/bai-qi.jpg' },
  { keywords: ['alexander the great'], slug: 'alexander-the-great', image: '/commanders/alexander-the-great.jpg' },
  { keywords: ['yi seong'], slug: 'yi-seong-gye', image: '/commanders/yi-seong-gye.jpg' },
  { keywords: ['aethelflaed'], slug: 'aethelflaed', image: '/commanders/aethelflaed.jpg' },
  { keywords: ['baibars'], slug: 'baibars', image: '/commanders/baibars.jpg' },
];

const FALLBACK_IMAGE = '/commanders/placeholder.jpg';

export function getCommanderImage(name: string): string {
  const normalized = name.toLowerCase();
  for (const entry of IMAGE_BY_KEYWORD) {
    if (entry.keywords.every((kw) => normalized.includes(kw))) {
      return entry.image;
    }
  }
  return FALLBACK_IMAGE;
}

export function getCommanderSlug(name: string): string {
  const normalized = name.toLowerCase();
  for (const entry of IMAGE_BY_KEYWORD) {
    if (entry.keywords.every((kw) => normalized.includes(kw))) {
      return entry.slug;
    }
  }
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
