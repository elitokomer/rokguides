'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type Category = 'All' | 'Commanders' | 'Battle' | 'Beginner' | 'Alliance';

interface GuideResult {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  readTime: string;
  comments: number;
  views: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

const allGuides: GuideResult[] = [
{
  id: '1',
  title: 'Best Commanders Tier List 2026',
  excerpt: 'Complete ranking of all Legendary and Epic commanders from S+ to C tier, with talent builds and pairing recommendations for every playstyle.',
  category: 'Commanders',
  readTime: '12 min',
  comments: 84,
  views: '24.5K',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c9e4a98-1772417935259.png",
  imageAlt: 'Dark fantasy battlefield with glowing tactical overlay, deep shadows, atmospheric fog',
  tags: ['guan yu', 'alexander', 'ysg', 'nevsky', 'tier list', 'legendary']
},
{
  id: '2',
  title: 'Complete Commander Pairing Guide',
  excerpt: 'How to pair commanders effectively — from Guan Yu + Sun Tzu infantry to YSG + Osman archer combos. Every top pairing explained with talent builds.',
  category: 'Commanders',
  readTime: '15 min',
  comments: 127,
  views: '38.2K',
  image: "https://images.unsplash.com/photo-1620815253545-03cf0bd96140",
  imageAlt: 'Epic medieval castle at dawn with dramatic lighting, dark stone architecture',
  tags: ['pairing', 'commander', 'talent', 'infantry', 'cavalry', 'archer']
},
{
  id: '3',
  title: 'Open-Field Battle Tactics: How to Win KvK',
  excerpt: 'Advanced strategies for Kingdom vs Kingdom battles including rally mechanics, march formation, and when to fight vs retreat.',
  category: 'Battle',
  readTime: '10 min',
  comments: 89,
  views: '21.1K',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11c4ae552-1772474344172.png",
  imageAlt: 'Group collaborating around glowing tactical map in dim war room, strategy planning atmosphere',
  tags: ['kvk', 'rally', 'open field', 'battle', 'march', 'formation']
},
{
  id: '4',
  title: 'Rally Attack Mechanics Explained',
  excerpt: 'Everything about rallying — capacity limits, commander selection, timing your launch, and countering enemy rallies effectively.',
  category: 'Battle',
  readTime: '8 min',
  comments: 56,
  views: '14.8K',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11f258c8e-1775336132056.png",
  imageAlt: 'Dark code environment with glowing amber highlights, developer workspace in shadow',
  tags: ['rally', 'attack', 'mechanics', 'capacity', 'timing']
},
{
  id: '5',
  title: 'Beginner Guide: First 30 Days in a New Kingdom',
  excerpt: 'Exactly what to do from day 1 to day 30 — which civilization to pick, which commanders to focus, and how to join a strong alliance.',
  category: 'Beginner',
  readTime: '8 min',
  comments: 203,
  views: '55.8K',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_167a7d59f-1772151443676.png",
  imageAlt: 'Bright tutorial interface with glowing progress path on dark background with golden light',
  tags: ['beginner', 'new player', 'civilization', 'first steps', 'f2p']
},
{
  id: '6',
  title: 'F2P Gem Spending Guide',
  excerpt: 'The definitive guide for free-to-play players on spending gems efficiently — VIP, chests, speedups, or events? Every scenario covered.',
  category: 'Beginner',
  readTime: '7 min',
  comments: 156,
  views: '42.3K',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19b6155ef-1772719826395.png",
  imageAlt: 'Dark strategy interface with glowing amber tactical elements on deep charcoal background',
  tags: ['f2p', 'gems', 'spending', 'vip', 'free to play', 'budget']
},
{
  id: '7',
  title: 'Alliance Events Calendar: Maximize Rewards',
  excerpt: 'Complete breakdown of Mightiest Governor, Sun Never Sets, and Ark of Osiris events with optimal strategies for F2P players.',
  category: 'Alliance',
  readTime: '12 min',
  comments: 64,
  views: '16.4K',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_105f2c6ff-1774548711006.png",
  imageAlt: 'People planning strategy around glowing map in dimly lit room, collaborative atmosphere',
  tags: ['alliance', 'events', 'mightiest governor', 'ark of osiris', 'rewards']
},
{
  id: '8',
  title: 'How to Pick the Best Civilization',
  excerpt: 'Comparing all 12 civilizations — which starting bonuses matter most, when to change civilizations, and best picks for F2P vs P2P.',
  category: 'Beginner',
  readTime: '6 min',
  comments: 91,
  views: '31.7K',
  image: "https://images.unsplash.com/photo-1636490247887-8a03d7d75d12",
  imageAlt: 'Medieval stone architecture at dusk with dramatic amber sky, historic fortress',
  tags: ['civilization', 'china', 'britain', 'rome', 'starting bonus']
}];


const categoryColors: Record<string, {bg: string;text: string;}> = {
  Commanders: { bg: 'rgba(200,150,90,0.15)', text: '#C8965A' },
  Battle: { bg: 'rgba(232,168,56,0.15)', text: '#E8A838' },
  Beginner: { bg: 'rgba(107,170,117,0.15)', text: '#6BAA75' },
  Alliance: { bg: 'rgba(91,143,212,0.15)', text: '#5B8FD4' }
};

const tabs: Category[] = ['All', 'Commanders', 'Battle', 'Beginner', 'Alliance'];

export default function SearchResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams?.get('q') || '');
  const [inputValue, setInputValue] = useState(searchParams?.get('q') || '');
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  useEffect(() => {
    const q = searchParams?.get('q') || '';
    setQuery(q);
    setInputValue(q);
  }, [searchParams]);

  const filteredResults = useMemo(() => {
    let results = allGuides;

    if (activeCategory !== 'All') {
      results = results.filter((g) => g.category === activeCategory);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(
        (g) =>
        g.title.toLowerCase().includes(q) ||
        g.excerpt.toLowerCase().includes(q) ||
        g.tags.some((t) => t.includes(q)) ||
        g.category.toLowerCase().includes(q)
      );
    }

    return results;
  }, [query, activeCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(inputValue);
    router.push(`/search-results?q=${encodeURIComponent(inputValue.trim())}`, { scroll: false });
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Search Header */}
      <div className="border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6">
            {query ?
            <>Search results for <span className="text-primary italic">"{query}"</span></> :

            'Browse All Guides'
            }
          </h1>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search commanders, strategies, events..."
                className="input-search w-full pl-11 pr-4 py-3 text-sm" />
              
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Icon name="MagnifyingGlassIcon" size={17} />
              </div>
            </div>
            <button type="submit" className="btn-primary px-5 min-h-[44px]">
              Search
            </button>
          </form>

          {/* Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {tabs.map((tab) => {
              const count = tab === 'All' ?
              allGuides.length :
              allGuides.filter((g) => g.category === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded text-sm font-medium border transition-all duration-200 whitespace-nowrap min-h-[40px] ${
                  activeCategory === tab ?
                  'bg-primary text-primary-foreground border-primary' :
                  'bg-secondary border-border text-muted-foreground hover:text-foreground'}`
                  }>
                  
                  {tab}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === tab ? 'bg-white/20' : 'bg-muted'}`}>
                    {count}
                  </span>
                </button>);

            })}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Result count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredResults.length > 0 ?
            <>{filteredResults.length} guide{filteredResults.length !== 1 ? 's' : ''} found</> :

            'No guides found'
            }
            {query && <span className="text-foreground font-medium"> for "{query}"</span>}
          </p>
          {activeCategory !== 'All' &&
          <button
            onClick={() => setActiveCategory('All')}
            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
            
              <Icon name="XMarkIcon" size={13} />
              Clear filter
            </button>
          }
        </div>

        {/* Results Grid */}
        {filteredResults.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredResults.map((guide, i) =>
          <Link
            key={guide.id}
            href="/guide-article"
            className="guide-card shimmer-sweep group flex flex-col"
            style={{ transitionDelay: `${i * 40}ms` }}>
            
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-[calc(var(--radius))]" style={{ height: '160px' }}>
                  <AppImage
                src={guide.image}
                alt={guide.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span
                  className="category-badge text-xs"
                  style={{
                    backgroundColor: categoryColors[guide.category]?.bg,
                    color: categoryColors[guide.category]?.text
                  }}>
                  
                      {guide.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-3 flex-1">
                    {guide.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {guide.tags.slice(0, 3).map((tag) =>
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                  
                        {tag}
                      </span>
                )}
                  </div>

                  {/* Meta */}
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
          )}
          </div> : (

        /* Empty State */
        <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto mb-4">
              <Icon name="MagnifyingGlassIcon" size={28} className="text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              No guides found
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
              We couldn't find any guides matching "{query}". Try a different search term or browse by category.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['guan yu', 'f2p guide', 'kvk', 'beginner', 'alliance'].map((suggestion) =>
            <button
              key={suggestion}
              onClick={() => {
                setInputValue(suggestion);
                setQuery(suggestion);
                router.push(`/search-results?q=${encodeURIComponent(suggestion)}`, { scroll: false });
              }}
              className="px-3 py-2 bg-secondary border border-border rounded text-xs text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 min-h-[36px]">
              
                  {suggestion}
                </button>
            )}
            </div>
          </div>)
        }
      </div>
    </div>);

}