'use client';

import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommandersContent from './CommandersContent';

export default function CommandersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-20">
        <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center text-muted-foreground">Yükleniyor...</div>}>
          <CommandersContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
