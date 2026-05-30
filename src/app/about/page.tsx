'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/lib/useTranslation';

export default function AboutPage() {
  const t = useTranslation();
  const features = t.about.features;
  {
    icon: 'UserGroupIcon',
    title: 'Commander Guides',
    description:
      'In-depth breakdowns of every commander in Rise of Kingdoms — skills, talent trees, pairings, and which ones are worth investing in at each stage of the game.',
  },
  {
    icon: 'ShieldExclamationIcon',
    title: 'Battle Strategies',
    description:
      'From open-field combat to KvK warfare, we cover the tactics that separate average players from top-ranked governors. Learn formations, march setups, and counter-strategies.',
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Beginner Path',
    description:
      'New to Rise of Kingdoms? Our structured beginner guides walk you through your first city, choosing a civilization, early research priorities, and avoiding the mistakes that slow most players down.',
  },
  {
    icon: 'BuildingLibraryIcon',
    title: 'Alliance & Politics',
    description:
      'Understand how alliances work, how to climb the rankings, and how to navigate the political side of the game — diplomacy, wars, and territory control.',
  },
  {
    icon: 'MagnifyingGlassIcon',
    title: 'Searchable Content',
    description:
      'Every guide is indexed and searchable. Find exactly what you need — whether it\'s a specific commander, a mechanic, or a strategy — in seconds.',
  },
  {
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Community Discussion',
    description:
      'Each guide has a comments section where players share tips, ask questions, and debate strategies. Real feedback from real players.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10">
            {t.about.heroLabel}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t.about.heroTitle}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.about.heroDescription}
          </p>
        </section>

        {/* What's Inside */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="font-display text-2xl font-bold text-foreground mb-10 text-center">
            {t.about.sectionTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features?.map((feature) => (
              <div
                key={feature?.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={feature?.icon} size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature?.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              {t.about.missionTitle}
            </h2>
            {t.about.missionLines.map((line, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            {t.about.ctaTitle}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t.about.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/guide-article" className="btn-primary px-6 py-3">
              {t.about.ctaPrimary}
            </Link>
            <Link
              href="/search-results"
              className="px-6 py-3 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-200"
            >
              {t.about.ctaSecondary}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
