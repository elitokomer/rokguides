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
  title: 'RoKGuides — Rise of Kingdoms Türkçe Rehber ve Strateji Merkezi',
  description: 'Rise of Kingdoms için en güncel komutan yetenek ağaçları, tier listeleri, savaş stratejileri ve ücretsiz hediye kodları. F2P ve P2P oyuncu rehberleri.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Alanı */}
      <HeroSection />

      {/* AdSense Üst Banner Alanı */}
      <div className="max-w-7xl mx-auto my-6 px-4 flex justify-center">
        <div className="w-full max-w-[728px] h-[90px] bg-card/20 border border-dashed border-border/60 rounded flex items-center justify-center text-xs text-muted-foreground/60">
          <span>[Google AdSense - Üst Reklam Alanı]</span>
        </div>
      </div>

      {/* Ana Bölümler */}
      <TierListSection />
      
      <FeaturedGuidesSection />

      {/* AdSense İçerik Arası Banner Alanı */}
      <div className="max-w-7xl mx-auto my-8 px-4 flex justify-center">
        <div className="w-full max-w-[728px] h-[90px] bg-card/20 border border-dashed border-border/60 rounded flex items-center justify-center text-xs text-muted-foreground/60">
          <span>[Google AdSense - İçerik Arası Reklam]</span>
        </div>
      </div>

      <BeginnerPathSection />
      <CommunitySection />
      
      <Footer />
    </main>
  );
}