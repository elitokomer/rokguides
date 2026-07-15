import { defineCollection, z } from 'astro:content';

const commanders = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    kvk: z.enum(['kvk1', 'kvk2', 'kvk3']),
    tier: z.string(),
    troopType: z.enum(['Piyade', 'Süvari', 'Okçu', 'Liderlik', 'Kuşatma']),
    rarity: z.enum(['Efsanevi', 'Epik']).default('Efsanevi'),
    image: z.string(),
    talentTree: z.string().default('_placeholder'),
    summary: z.string(),
    bestPairings: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { commanders };
