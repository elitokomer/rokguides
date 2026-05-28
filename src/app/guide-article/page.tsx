import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleHeader from '@/app/guide-article/components/ArticleHeader';
import ArticleContent from '@/app/guide-article/components/ArticleContent';
import ArticleSidebar from '@/app/guide-article/components/ArticleSidebar';
import CommentsSection from '@/app/guide-article/components/CommentsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Commanders Tier List 2026 — RoKGuides',
  description: 'Complete Rise of Kingdoms commander tier list ranking all Legendary and Epic commanders from S+ to C tier with talent builds and pairing recommendations.',
};

export default function GuideArticlePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ArticleHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Article */}
          <div className="lg:col-span-8">
            <ArticleContent />
            <CommentsSection />
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <ArticleSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}