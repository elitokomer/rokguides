'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/lib/useTranslation';

interface GuideCard {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

const categoryColorMap: Record<string, string> = {
  Commanders: 'rgba(200,150,90,0.15)',
  Komutanlar: 'rgba(200,150,90,0.15)',
  Battle: 'rgba(232,168,56,0.15)',
  Savaş: 'rgba(232,168,56,0.15)',
  Beginner: 'rgba(107,170,117,0.15)',
  Yeni Başlayanlar: 'rgba(107,170,117,0.15)',
  Alliance: 'rgba(91,143,212,0.15)',
  İttifak: 'rgba(91,143,212,0.15)',
};

const categoryTextMap: Record<string, string> = {
  Commanders: '#C8965A',
  Komutanlar: '#C8965A',
  Battle: '#E8A838',
  Savaş: '#E8A838',
  Beginner: '#6BAA75',
  Yeni Başlayanlar: '#6BAA75',
  Alliance: '#5B8FD4',
  İttifak: '#5B8FD4',
};

export default function FeaturedGuidesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const t = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true);observer.disconnect();}},
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = t.featuredGuides.featured;
  const rest = t.featuredGuides.guides;

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-24 border-t border-border animate-on-scroll ${visible ? 'is-visible' : ''}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-label">{t.featuredGuides.sectionLabel}</span>
            <h2 className="font-display text-hero-lg font-semibold text-foreground">
              {t.featuredGuides.title}
            </h2>
          </div>
          <Link href="/search-results" className="btn-ghost text-sm flex items-center gap-2 self-start sm:self-auto">
            {t.featuredGuides.browseAll}
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        {/* BENTO GRID AUDIT:
            Array has 5 cards: [featured(cs-1 rs-2), Battle, Beginner, Alliance, F2PGems]
            grid-cols-3 at desktop
             Row 1: [col-1: featured cs-1 rs-2] [col-2: Battle cs-1] [col-3: Beginner cs-1]
            Row 2: [col-1: (featured continued)] [col-2: Alliance cs-1] [col-3: F2PGems cs-1]
             Placed 5/5 cards ✓
           */

        }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured Large Card — row-span-2 */}
          <div className="lg:row-span-2 h-full">
            <Link href="/guide-article" className="guide-card shimmer-sweep block group h-full flex flex-col">
              <div className="relative overflow-hidden rounded-t-[calc(var(--radius))]" style={{ height: '220px' }}>
                <AppImage
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="category-badge text-xs font-semibold"
                    style={{ backgroundColor: categoryColorMap[featured.category], color: categoryTextMap[featured.category] }}>
                    
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {featured.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {featured.excerpt}
                </p>

              </div>
            </Link>
          </div>

          {/* Smaller cards — fill remaining 4 cells */}
          {rest.map((guide, i) =>
          <div key={guide.id} className="h-full">
              <Link href="/guide-article" className="guide-card shimmer-sweep block group h-full flex flex-col">
                <div className="relative overflow-hidden rounded-t-[calc(var(--radius))]" style={{ height: '160px' }}>
                  <AppImage
                  src={guide.image}
                  alt={guide.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span
                    className="category-badge text-xs"
                    style={{ backgroundColor: categoryColorMap[guide.category], color: categoryTextMap[guide.category] }}>
                    
                      {guide.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 text-sm leading-snug">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1 leading-relaxed">
                    {guide.excerpt}
                  </p>

                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>);

}