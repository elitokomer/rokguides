'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const features = [
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
            About RoKGuides
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Your go-to resource for{' '}
            <span className="text-primary">Rise of Kingdoms</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            RoKGuides was built by players, for players. We got tired of scattered Reddit threads and outdated YouTube videos — so we built a single place where everything is organized, up to date, and actually useful.
          </p>
        </section>

        {/* What's Inside */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="font-display text-2xl font-bold text-foreground mb-10 text-center">
            What you'll find here
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
              Our mission
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rise of Kingdoms is a deep, complex game. The gap between a new player and a veteran isn't just time — it's knowledge. We exist to close that gap.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every guide on this site is written with one goal: give you the information you need to make better decisions in the game. No fluff, no filler — just practical strategy you can apply immediately.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're picking your first civilization or preparing for a KvK season, RoKGuides has something for you.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Ready to level up?
          </h2>
          <p className="text-muted-foreground mb-6">
            Browse our guides and start improving your game today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/guide-article" className="btn-primary px-6 py-3">
              Browse Guides
            </Link>
            <Link
              href="/search-results"
              className="px-6 py-3 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-200"
            >
              Search Content
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
