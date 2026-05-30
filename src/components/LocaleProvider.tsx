'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { localeOptions, Locale } from '@/lib/translations';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  localeOptions: readonly { code: Locale; label: string }[];
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
  localeOptions,
});

const STORAGE_KEY = 'rok-guides-locale';

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (savedLocale === 'tr' || savedLocale === 'en') {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, localeOptions }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
