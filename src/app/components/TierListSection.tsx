'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

type TierKey = 'S+' | 'S' | 'A' | 'B' | 'C';

interface Commander {
  name: string;
  role: string;
  type: string;
  note: string;
}

const tierData: Record<TierKey, { label: string; colorClass: string; bgClass: string; commanders: Commander[] }> = {
  'S+': {
    label: 'S+',
    colorClass: 'tier-s-plus',
    bgClass: 'bg-tier-s-plus',
    commanders: [
      { name: 'Guan Yu', role: 'Infantry', type: 'Legendary', note: 'Best infantry nuker' },
      { name: 'Alexander', role: 'Infantry', type: 'Legendary', note: 'Top open-field' },
      { name: 'Yi Seong-Gye', role: 'Archer', type: 'Legendary', note: 'Strongest archer' },
      { name: 'Nevsky', role: 'Cavalry', type: 'Legendary', note: 'Dominant cavalry' },
    ],
  },
  'S': {
    label: 'S',
    colorClass: 'tier-s',
    bgClass: 'bg-tier-s',
    commanders: [
      { name: 'Saladin', role: 'Cavalry', type: 'Legendary', note: 'Strong all-around' },
      { name: 'Constantine', role: 'Infantry', type: 'Legendary', note: 'Great defender' },
      { name: 'Edward', role: 'Archer', type: 'Legendary', note: 'Solid archer' },
      { name: 'Scipio', role: 'Infantry', type: 'Legendary', note: 'Good garrison' },
    ],
  },
  'A': {
    label: 'A',
    colorClass: 'tier-a',
    bgClass: 'bg-tier-a',
    commanders: [
      { name: 'Sun Tzu', role: 'Infantry', type: 'Epic', note: 'Best F2P infantry' },
      { name: 'Tomoe Gozen', role: 'Archer', type: 'Epic', note: 'F2P archer pick' },
      { name: 'Lancelot', role: 'Cavalry', type: 'Epic', note: 'Fast cavalry' },
      { name: 'Joan of Arc', role: 'Support', type: 'Epic', note: 'Excellent support' },
    ],
  },
  'B': {
    label: 'B',
    colorClass: 'tier-b',
    bgClass: 'bg-tier-b',
    commanders: [
      { name: 'Baibars', role: 'Cavalry', type: 'Epic', note: 'Decent cavalry' },
      { name: 'Eulji', role: 'Infantry', type: 'Epic', note: 'Garrison pick' },
      { name: 'Hermann', role: 'Archer', type: 'Epic', note: 'Budget archer' },
      { name: 'Pelagius', role: 'Cavalry', type: 'Elite', note: 'Early game' },
    ],
  },
  'C': {
    label: 'C',
    colorClass: 'tier-c',
    bgClass: 'bg-tier-c',
    commanders: [
      { name: 'Boudica', role: 'Nuker', type: 'Elite', note: 'Outdated' },
      { name: 'Minamoto', role: 'Cavalry', type: 'Epic', note: 'Powercreep' },
      { name: 'Cao Cao', role: 'Cavalry', type: 'Legendary', note: 'Niche use' },
    ],
  },
};

export default function TierListSection() {
  const [activeTab, setActiveTab] = useState<TierKey>('S+');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const currentTier = tierData[activeTab];

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-background border-t border-border animate-on-scroll ${visible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-label">Commander Rankings</span>
            <h2 className="font-display text-hero-lg font-semibold text-foreground">
              Tier List 2026
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-md">
              Ranked from S+ (meta-defining) to C (avoid). Updated monthly.
            </p>
          </div>
          <Link
            href="/guide-article?category=commanders"
            className="btn-ghost text-sm flex items-center gap-2 self-start sm:self-auto"
          >
            Full Tier List
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        {/* Tier Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1 no-scrollbar">
          {(Object.keys(tierData) as TierKey[]).map((tier) => (
            <button
              key={tier}
              onClick={() => setActiveTab(tier)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded text-sm font-semibold border transition-all duration-200 whitespace-nowrap min-h-[44px] ${
                activeTab === tier
                  ? `${tierData[tier].bgClass} ${tierData[tier].colorClass} border-current`
                  : 'bg-secondary border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className={activeTab === tier ? 'animate-tier-pulse' : ''}>
                Tier {tier}
              </span>
              <span className="text-xs opacity-60">{tierData[tier].commanders.length}</span>
            </button>
          ))}
        </div>

        {/* Commander Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {currentTier.commanders.map((cmd, i) => (
            <Link
              key={cmd.name}
              href="/guide-article"
              className={`guide-card p-4 group transition-all duration-300`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-display font-bold ${currentTier.bgClass} ${currentTier.colorClass} border`}
                >
                  {currentTier.label}
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                  {cmd.type}
                </span>
              </div>
              <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {cmd.name}
              </h4>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-muted-foreground">{cmd.role}</span>
              </div>
              <p className="text-xs text-muted-foreground">{cmd.note}</p>
            </Link>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-border">
          {(Object.keys(tierData) as TierKey[]).map((tier) => (
            <div key={tier} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <div className={`w-3 h-3 rounded-sm ${tierData[tier].bgClass} ${tierData[tier].colorClass} border`} />
              <span>Tier {tier}</span>
            </div>
          ))}
          <span className="text-xs text-muted-foreground ml-auto italic">Last updated: May 2026</span>
        </div>
      </div>
    </section>
  );
}