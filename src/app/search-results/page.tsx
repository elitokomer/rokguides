import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchResultsContent from '@/app/search-results/components/SearchResultsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Guides — RoKGuides',
  description: 'Search Rise of Kingdoms guides by commander name, strategy type, or topic. Find exactly what you need across 200+ guides.',
};

export default function SearchResultsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-foreground">Loading search...</div>}>
        <SearchResultsContent />
      </Suspense>
      <Footer />
    </main>
  );
}