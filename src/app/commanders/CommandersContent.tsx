'use client';

import React, { Suspense, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTranslation } from '@/lib/useTranslation';
import { getCommanderImage, getCommanderSlug } from '@/lib/commanderImages';
import type { KvKKey } from '@/lib/translations';

const KVK_OPTIONS: { key: KvKKey | 'all'; label: string }[] = [
  { key: 'all', label: 'Tümü' },
  { key: 'kvk1', label: 'KvK 1' },
  { key: 'kvk2', label: 'KvK 2' },
  { key: 'kvk3', label: 'KvK 3' },
];

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

interface FlatCommander {
  name: string;
  role: string;
  type: string;
  note: string;
  tier: string;
  tierLabel: string;
  kvk: KvKKey;
}

function CommandersInner() {
  const t = useTranslation();
  const searchParams = useSearchParams();
  const kvkFromUrl = searchParams.get('kvk') as KvKKey | null;

  const [activeKvK, setActiveKvK] = useState<KvKKey | 'all'>(
    kvkFromUrl && ['kvk1', 'kvk2', 'kvk3'].includes(kvkFromUrl) ? kvkFromUrl : 'all'
  );
  const [query, setQuery] = useState('');

  const allCommanders = useMemo<FlatCommander[]>(() => {
    const flat: FlatCommander[] = [];
    (Object.keys(t.tierList.tierData) as KvKKey[]).forEach((kvk) => {
      const kvkData = t.tierList.tierData[kvk];
      Object.entries(kvkData).forEach(([tierKey, tierEntry]) => {
        tierEntry.commanders.forEach((cmd) => {
          flat.push({
            name: cmd.name,
            role: cmd.role,
            type: cmd.type,
            note: cmd.note,
            tier: tierKey,
            tierLabel: tierEntry.label,
            kvk,
          });
        });
      });
    });
    // Aynı komutan birden fazla KvK'da geçebilir; isim bazında tekilleştir, ilk görüleni tut.
    const seen = new Set<string>();
    return flat.filter((c) => {
      const key = `${c.name}-${c.kvk}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [t]);

  const filteredCommanders = useMemo(() => {
    return allCommanders.filter((c) => {
      const matchesKvK = activeKvK === 'all' || c.kvk === activeKvK;
      const matchesQuery = c.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesKvK && matchesQuery;
    });
  }, [allCommanders, activeKvK, query]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-10">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10">
          {t.tierList.sectionLabel}
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
          {t.header.commandersDropdown.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t.tierList.description}
        </p>
      </div>

      {/* Filtreler */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {KVK_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveKvK(opt.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
                activeKvK === opt.key
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-muted-foreground border-border hover:text-foreground'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.header.searchPlaceholder}
          className="input-search sm:ml-auto w-full sm:w-64 px-4 py-2 text-sm"
        />
      </div>

      {filteredCommanders.length === 0 ? (
        <p className="text-muted-foreground py-12 text-center">
          {t.header.searchPlaceholder}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {filteredCommanders.map((commander) => (
            <Link
              key={`${commander.name}-${commander.kvk}`}
              href={`/commanders/${getCommanderSlug(commander.name)}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={getCommanderImage(commander.name)}
                  alt={commander.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${TIER_STYLES[commander.tier] ?? 'bg-secondary text-foreground border-border'}`}
                >
                  {commander.tierLabel}
                </span>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold border border-border bg-background/70 backdrop-blur-sm text-muted-foreground">
                  {KVK_OPTIONS.find((o) => o.key === commander.kvk)?.label}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {commander.name}
                  </h2>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  {commander.role} · {commander.type}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-3">{commander.note}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommandersContent() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center text-muted-foreground">Loading...</div>}>
      <CommandersInner />
    </Suspense>
  );
}
