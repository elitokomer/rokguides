export type TierStyle = {
  bg: string;
  text: string;
  ring: string;
};

const TIER_STYLES: Record<string, TierStyle> = {
  'S+': { bg: 'bg-tier-splus/15', text: 'text-tier-splus', ring: 'ring-tier-splus/40' },
  S: { bg: 'bg-tier-s/15', text: 'text-tier-s', ring: 'ring-tier-s/40' },
  A: { bg: 'bg-tier-a/15', text: 'text-tier-a', ring: 'ring-tier-a/40' },
  'A-': { bg: 'bg-tier-a/15', text: 'text-tier-a', ring: 'ring-tier-a/40' },
  'B+': { bg: 'bg-tier-b/15', text: 'text-tier-b', ring: 'ring-tier-b/40' },
  B: { bg: 'bg-tier-b/15', text: 'text-tier-b', ring: 'ring-tier-b/40' },
};

const FALLBACK: TierStyle = { bg: 'bg-accent-purple/15', text: 'text-accent-purple-light', ring: 'ring-accent-purple/40' };

export function tierStyle(tier: string): TierStyle {
  return TIER_STYLES[tier] ?? FALLBACK;
}
