'use client';

import React, { Suspense } from 'react';
import CommandersContent from './CommandersContent';

export default function CommandersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CommandersContent />
    </Suspense>
  );
}
