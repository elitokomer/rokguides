import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import TierListSection from '@/app/components/TierListSection';
import FeaturedGuidesSection from '@/app/components/FeaturedGuidesSection';
import BeginnerPathSection from '@/app/components/BeginnerPathSection';
import CommunitySection from '@/app/components/CommunitySection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RoKGuides — Rise of Kingdoms Strategy Hub',
  description: 'Authoritative Rise of Kingdoms guides covering commander tier lists, battle strategies, beginner tutorials, and alliance events for F2P and P2P players.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TierListSection />
      <FeaturedGuidesSection />
      <BeginnerPathSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}