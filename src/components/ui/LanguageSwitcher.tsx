
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/components/LocaleProvider';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/lib/useTranslation';

export default function LanguageSwitcher() {
  const { locale, setLocale, localeOptions } = useLocale();
  const t = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLocaleChange = (newLocale: 'en' | 'tr') => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLocaleLabel = localeOptions.find(option => option.code === locale)?.label;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground hover:bg-secondary transition-colors duration-200"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={t.header.languageLabel}
      >
        <span>{currentLocaleLabel}</span>
        <Icon name="ChevronUpDownIcon" size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md bg-card shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {localeOptions.map((option) => (
              <button
                key={option.code}
                onClick={() => handleLocaleChange(option.code)}
                className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors duration-200"
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
