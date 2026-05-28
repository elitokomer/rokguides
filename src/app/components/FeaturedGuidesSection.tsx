'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface GuideCard {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  readTime: string;
  comments: number;
  views: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

const guides: GuideCard[] = [
{
  id: '1',
  title: 'Complete Commander Pairing Guide: Maximize Your March Power',
  excerpt: 'Learn how to pair commanders effectively — from Guan Yu + Sun Tzu infantry to YSG + Osman archer combos. Every top pairing explained with talent builds.',
  category: 'Commanders',
  categoryColor: 'text-primary',
  readTime: '15 min',
  comments: 127,
  views: '38.2K',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c9e4a98-1772417935259.png",
  imageAlt: 'Dark fantasy strategy game battlefield with medieval warriors and glowing tactical map overlay, atmospheric foggy environment',
  featured: true
},
{
  id: '2',
  title: 'Open-Field Battle Tactics: How to Win KvK',
  excerpt: 'Advanced strategies for Kingdom vs Kingdom battles including rally mechanics, march formation, and when to fight vs retreat.',
  category: 'Battle',
  categoryColor: 'tier-s',
  readTime: '10 min',
  comments: 89,
  views: '21.1K',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1669a92ca-1773009479222.png",
  imageAlt: 'Epic medieval castle siege scene with armies marching at dawn, dramatic low-angle lighting, dark stone fortifications'
},
{
  id: '3',
  title: 'Beginner Guide: First 30 Days in a New Kingdom',
  excerpt: 'Exactly what to do from day 1 to day 30 — which civilization to pick, which commanders to focus, and how to join a strong alliance.',
  category: 'Beginner',
  categoryColor: 'tier-a',
  readTime: '8 min',
  comments: 203,
  views: '55.8K',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_167a7d59f-1772151443676.png",
  imageAlt: 'Bright tutorial interface with glowing progress path, clean dark background with golden light rays and achievement icons'
},
{
  id: '4',
  title: 'Alliance Events Calendar: Maximize Event Rewards',
  excerpt: 'Complete breakdown of Mightiest Governor, Sun Never Sets, and Ark of Osiris events with optimal strategies for F2P players.',
  category: 'Alliance',
  categoryColor: 'tier-b',
  readTime: '12 min',
  comments: 64,
  views: '16.4K',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11c4ae552-1772474344172.png",
  imageAlt: 'Group of people planning strategy around a glowing table map in a dimly lit war room, collaborative tactical atmosphere'
},
{
  id: '5',
  title: 'F2P Gem Spending Guide: Where Every Gem Counts',
  excerpt: 'The definitive guide for free-to-play players on spending gems efficiently — VIP, chests, speedups, or events?',
  category: 'Beginner',
  categoryColor: 'tier-a',
  readTime: '7 min',
  comments: 156,
  views: '42.3K',
  image: "https://images.unsplash.com/photo-1707758967860-19106a5e9ab7",
  imageAlt: 'Dark code editor screen with glowing amber and green highlights on dark background, developer workspace'
}];


const categoryColorMap: Record<string, string> = {
  Commanders: 'rgba(200,150,90,0.15)',
  Battle: 'rgba(232,168,56,0.15)',
  Beginner: 'rgba(107,170,117,0.15)',
  Alliance: 'rgba(91,143,212,0.15)'
};

const categoryTextMap: Record<string, string> = {
  Commanders: '#C8965A',
  Battle: '#E8A838',
  Beginner: '#6BAA75',
  Alliance: '#5B8FD4'
};

export default function FeaturedGuidesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true);observer.disconnect();}},
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = guides[0];
  const rest = guides.slice(1);

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-24 border-t border-border animate-on-scroll ${visible ? 'is-visible' : ''}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-label">Featured Guides</span>
            <h2 className="font-display text-hero-lg font-semibold text-foreground">
              Top Strategies
            </h2>
          </div>
          <Link href="/search-results" className="btn-ghost text-sm flex items-center gap-2 self-start sm:self-auto">
            Browse All
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
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border">
                  <span className="flex items-center gap-1.5">
                    <Icon name="ClockIcon" size={12} />
                    {featured.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="ChatBubbleLeftIcon" size={12} />
                    {featured.comments}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="EyeIcon" size={12} />
                    {featured.views}
                  </span>
                </div>
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
                  <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border">
                    <span className="flex items-center gap-1">
                      <Icon name="ClockIcon" size={11} />
                      {guide.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="ChatBubbleLeftIcon" size={11} />
                      {guide.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="EyeIcon" size={11} />
                      {guide.views}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>);

}