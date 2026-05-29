import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const relatedGuides = [
  {
    title: 'Commander Pairing Guide',
    category: 'Commanders',
    readTime: '15 min',
    href: '/guide-article',
  },
  {
    title: 'Best Talent Builds for F2P',
    category: 'Commanders',
    readTime: '10 min',
    href: '/guide-article',
  },
  {
    title: 'Open-Field Battle Tactics',
    category: 'Battle',
    readTime: '10 min',
    href: '/guide-article',
  },
  {
    title: 'Beginner: First 30 Days',
    category: 'Beginner',
    readTime: '8 min',
    href: '/guide-article',
  },
  {
    title: 'Alliance Events Calendar',
    category: 'Alliance',
    readTime: '12 min',
    href: '/guide-article',
  },
];

const tableOfContents = [
  'Introduction',
  'S+ Tier — Meta-Defining',
  'S Tier — Excellent',
  'A Tier — F2P Picks',
  'Talent Build Principles',
];

const categoryColorMap: Record<string, string> = {
  Commanders: '#C8965A',
  Battle: '#E8A838',
  Beginner: '#6BAA75',
  Alliance: '#5B8FD4',
};

export default function ArticleSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Table of Contents */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="ListBulletIcon" size={16} className="text-primary" />
          Table of Contents
        </h3>
        <nav className="space-y-1">
          {tableOfContents.map((item, i) => (
            <a
              key={item}
              href={`#section-${i}`}
              className="flex items-center gap-2 py-2 px-2 rounded text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200 min-h-[36px]"
            >
              <span className="text-xs text-primary font-semibold w-4">{String(i + 1).padStart(2, '0')}</span>
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Related Guides */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="BookOpenIcon" size={16} className="text-primary" />
          Related Guides
        </h3>
        <div className="space-y-1">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="flex items-start gap-3 py-2.5 px-2 rounded hover:bg-secondary transition-colors duration-200 group"
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: categoryColorMap[guide.category] }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2 leading-snug">
                  {guide.title}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs" style={{ color: categoryColorMap[guide.category] }}>
                    {guide.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="ChartBarIcon" size={16} className="text-primary" />
          Guide Stats
        </h3>
        <div className="space-y-3">
          {[
            { label: 'Helpful votes', value: '1.2K', icon: 'HandThumbUpIcon' },
            { label: 'Last updated', value: 'May 2026', icon: 'CalendarIcon' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon name={stat.icon as any} size={13} />
                {stat.label}
              </span>
              <span className="text-xs font-semibold text-foreground">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search CTA */}
      <div
        className="rounded-xl p-5 border relative overflow-hidden"
        style={{ backgroundColor: 'rgba(200,150,90,0.08)', borderColor: 'rgba(200,150,90,0.25)' }}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative z-10">
          <h3 className="text-sm font-semibold text-foreground mb-2">
            Looking for something specific?
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Search 200+ guides by commander name, strategy, or topic.
          </p>
          <Link
            href="/search-results"
            className="btn-primary text-xs px-4 py-2.5 w-full justify-center min-h-[40px]"
          >
            <Icon name="MagnifyingGlassIcon" size={13} />
            Search All Guides
          </Link>
        </div>
      </div>
    </aside>
  );
}