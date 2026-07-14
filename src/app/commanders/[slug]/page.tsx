'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/lib/useTranslation';
import { getCommanderImage, getCommanderSlug } from '@/lib/commanderImages';
import type { KvKKey } from '@/lib/translations';
import { use } from 'react';

const TIER_STYLES: Record<string, string> = {
  'S+': 'bg-rose-500/15 text-rose-400 border-rose-500/30',
  S: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  'A+': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  A: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'A-': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'A-2': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'B+': 'bg-sky-500/15 text-sky-400 border-sky-500/30',
  B: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
  C: 'bg-secondary text-foreground border-border',
};

export default function CommanderDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const t = useTranslation();

  let found: { commander: { name: string; role: string; type: string; note: string }; tier: string; tierLabel: string } | null = null;

  outer: for (const kvk of Object.keys(t.tierList.tierData) as KvKKey[]) {
    const kvkData = t.tierList.tierData[kvk];
    for (const tierKey of Object.keys(kvkData)) {
      const tierEntry = kvkData[tierKey as keyof typeof kvkData];
      for (const cmd of tierEntry.commanders) {
        if (getCommanderSlug(cmd.name) === slug) {
          found = { commander: cmd, tier: tierKey, tierLabel: tierEntry.label };
          break outer;
        }
      }
    }
  }

  if (!found) {
    notFound();
  }

  const image = getCommanderImage(found.commander.name);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            href="/commanders"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            ← {t.header.commandersDropdown.title}
          </Link>

          <div className="mt-6 flex flex-col sm:flex-row gap-8 items-start">
            <div className="relative w-full sm:w-64 aspect-square rounded-xl overflow-hidden border border-border shrink-0">
              <Image src={image} alt={found.commander.name} fill sizes="(max-width: 640px) 100vw, 256px" className="object-cover" priority />
            </div>

            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${TIER_STYLES[found.tier] ?? 'bg-secondary text-foreground border-border'}`}>
                {found.tierLabel} Tier
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2 leading-tight">
                {found.commander.name}
              </h1>
              <p className="text-sm text-muted-foreground mb-4">
                {found.commander.role} · {found.commander.type}
              </p>
              <p className="text-muted-foreground leading-relaxed">{found.commander.note}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
