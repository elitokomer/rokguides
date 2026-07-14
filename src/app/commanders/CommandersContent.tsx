'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import commandersData from '../../../data/commanders.json';

interface Commander {
  name: string;
  military_note: string;
  ability_strategy: string;
  critical_detail: string;
}

export default function CommandersContent() {
  const searchParams = useSearchParams();
  const kvkFilter = searchParams.get('kvk');
  const [filteredCommanders, setFilteredCommanders] = useState<Commander[]>([]);

  useEffect(() => {
    // For now, we'll just display all commanders. 
    // In a real scenario, you'd filter based on KvK data from translations.ts
    // and potentially enrich this data with the detailed commander info.
    setFilteredCommanders(commandersData as Commander[]);
  }, [kvkFilter]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Komutanlar</h1>
      {kvkFilter && (
        <p className="text-lg text-muted-foreground mb-4">KvK Dönemi: {kvkFilter.toUpperCase()}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommanders.map((commander) => (
          <div key={commander.name} className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{commander.name}</h2>
            <p className="text-muted-foreground mb-2"><strong>Askeri Not:</strong> {commander.military_note}</p>
            <p className="text-muted-foreground mb-2"><strong>Yetenek Stratejisi:</strong> {commander.ability_strategy}</p>
            <p className="text-muted-foreground"><strong>Kritik Detay:</strong> {commander.critical_detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}