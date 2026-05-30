'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/lib/useTranslation';

const categoryLinks = [
  { label: 'Commander Guides', icon: 'UserGroupIcon', href: '/guide-article?category=commanders', color: 'text-primary' },
  { label: 'Battle Strategies', icon: 'BoltIcon', href: '/guide-article?category=battle', color: 'text-tier-s' },
  { label: 'Beginner Tips', icon: 'AcademicCapIcon', href: '/guide-article?category=beginner', color: 'text-tier-a' },
  { label: 'Alliance Guides', icon: 'UsersIcon', href: '/guide-article?category=alliance', color: 'text-tier-b' },
];

const featuredStats = [
  { value: '200+', label: 'Guides' },
  { value: '50+', label: 'Commanders' },
  { value: '12', label: 'Civilizations' },
  { value: '10K+', label: 'Players Helped' },
];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const t = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search-results?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Atmospheric background layers */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient blob - background */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(200,150,90,0.4) 0%, rgba(200,150,90,0.1) 50%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(91,143,212,0.3) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Hero Text */}
          <div className="lg:col-span-7">
            {/* Label */}
            <div
              className={`flex items-center gap-3 mb-6 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="w-10 h-px bg-primary" />
              <span className="text-xs uppercase tracking-widest font-semibold text-primary">
                {t.hero.label}
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-display text-hero-xl font-semibold text-foreground mb-6 transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              {t.hero.titleLine1}
              <br />
              <span className="text-primary italic">{t.hero.titleLine2}</span>
              <br />
              {t.hero.titleLine3}
            </h1>

            {/* Subhead */}
            <p
              className={`text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-lg mb-8 transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              {t.hero.subhead}
            </p>

            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className={`flex gap-2 mb-8 max-w-lg transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.hero.searchPlaceholder}
                  className="input-search w-full pl-11 pr-4 py-3.5 text-sm"
                />
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Icon name="MagnifyingGlassIcon" size={18} />
                </div>
              </div>
              <button type="submit" className="btn-primary px-5 py-3.5 whitespace-nowrap min-h-[44px]">
                {t.hero.searchButton}
              </button>
            </form>

            {/* Category Quick Links */}
            <div
              className={`flex flex-wrap gap-2 transition-all duration-700 delay-[400ms] ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              {t.hero.categoryLinks.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="flex items-center gap-1.5 px-3 py-2 bg-secondary border border-border rounded text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 min-h-[44px]"
                >
                  <Icon name={cat.icon as any} size={14} className={cat.color} />
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Stats + Featured Card */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {t.hero.featuredStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-lg p-4 text-center"
                >
                  <div className="font-display text-2xl font-semibold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Featured Guide Card */}
            <Link href="/guide-article" className="guide-card shimmer-sweep block p-5 group">
              <div className="flex items-start justify-between mb-3">
                <span className="category-badge bg-tier-s-plus text-foreground border" style={{ borderColor: 'rgba(255,107,53,0.4)', backgroundColor: 'rgba(255,107,53,0.15)', color: '#FF6B35' }}>
                  {t.hero.featuredLabel}
                </span>
                <Icon
                  name="ArrowTopRightOnSquareIcon"
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {t.hero.featuredTitle}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {t.hero.featuredExcerpt}
              </p>

            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">{t.hero.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}