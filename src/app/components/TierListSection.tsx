'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/lib/useTranslation';

type KvKKey = 'kvk1' | 'kvk2' | 'kvk3';
type TroopType = 'Tümü' | 'Piyade' | 'Okçu' | 'Süvari' | 'Kuşatma';

export default function TierListSection() {
  const [activeKvK, setActiveKvK] = useState<KvKKey>('kvk1');
  const [activeTab, setActiveTab] = useState<string>('S+');
  const [activeTroopType, setActiveTroopType] = useState<TroopType>('Tümü');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const t = useTranslation();

  const kvkData: Record<string, any> = t.tierList.tierData[activeKvK];
  const tierKeys = Object.keys(kvkData);
  const activeTierKey = tierKeys.includes(activeTab) ? activeTab : tierKeys[0];
  const currentTier = kvkData[activeTierKey];


  const filteredCommanders = currentTier.commanders.filter((cmd: any) => 
    activeTroopType === 'Tümü' || cmd.role === activeTroopType
  );


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const kvkOptions: { key: KvKKey; label: string }[] = [
    { key: 'kvk1', label: 'KvK 1' },
    { key: 'kvk2', label: 'KvK 2' },
    { key: 'kvk3', label: 'KvK 3' },
  ];

  const troopTypeOptions: TroopType[] = ['Tümü', 'Piyade', 'Okçu', 'Süvari', 'Kuşatma'];

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-background border-t border-border animate-on-scroll ${visible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık ve Açıklamalar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="section-label">{t.tierList.sectionLabel}</span>
            <h2 className="font-display text-hero-lg font-semibold text-foreground">
              {t.tierList.title}
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-md">
              {t.tierList.description}
            </p>
          </div>
          <Link
            href="/guide-article?category=commanders"
            className="btn-ghost text-sm flex items-center gap-2 self-start sm:self-auto"
          >
            {t.tierList.fullTierList}
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        {/* KvK Dönemi Seçimi */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1 no-scrollbar">
          {kvkOptions.map((kvk) => (
            <button
              key={kvk.key}
              onClick={() => {
                setActiveKvK(kvk.key);
                setActiveTab('S+'); // KvK değiştiğinde varsayılan tier'a dön
                setActiveTroopType('Tümü'); // KvK değiştiğinde varsayılan birlik tipine dön
              }}
              className={`px-4 py-2.5 rounded text-sm font-semibold border transition-all duration-200 whitespace-nowrap min-h-[44px] ${
                activeKvK === kvk.key
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-secondary border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {kvk.label}
            </button>
          ))}
        </div>

        {/* Birlik Tipi Filtrelemesi */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1 no-scrollbar">
          {troopTypeOptions.map((type) => (
            <button
              key={type}
              onClick={() => setActiveTroopType(type)}
              className={`px-4 py-2.5 rounded text-sm font-semibold border transition-all duration-200 whitespace-nowrap min-h-[44px] ${
                activeTroopType === type
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-secondary border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Tier Sekmeleri (Tab) */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1 no-scrollbar">
          {tierKeys.map((tier) => (
            <button
              key={tier}
              onClick={() => setActiveTab(tier)}

              className={`flex items-center gap-2 px-4 py-2.5 rounded text-sm font-semibold border transition-all duration-200 whitespace-nowrap min-h-[44px] ${
                activeTab === tier
                  ? `${kvkData[tier].bgClass} ${kvkData[tier].colorClass} border-current`
                  : 'bg-secondary border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className={activeTab === tier ? 'animate-tier-pulse' : ''}>
                {t.tierList.tierLegend} {tier}
              </span>
              <span className="text-xs opacity-60">{kvkData[tier].commanders.length}</span>
            </button>
          ))}
        </div>

        {/* Komutan Listesi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredCommanders.map((cmd: any, i: number) => (

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

        {/* Bilgilendirme Çubuğu (Footer Legend) */}
        <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-border">
          {tierKeys.map((tier) => (

            <div key={tier} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <div className={`w-3 h-3 rounded-sm ${kvkData[tier].bgClass} ${kvkData[tier].colorClass} border`} />
              <span>{t.tierList.tierLegend} {tier}</span>
            </div>
          ))}
          <span className="text-xs text-muted-foreground ml-auto italic">{t.tierList.lastUpdated}</span>
        </div>
      </div>
    </section>
  );
}
