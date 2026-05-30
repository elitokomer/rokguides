'use client';

import { getTranslations } from '@/lib/translations';
import { useLocale } from '@/components/LocaleProvider';

export function useTranslation() {
  const { locale } = useLocale();
  return getTranslations(locale);
}
