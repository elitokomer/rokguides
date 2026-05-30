'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { useLocale } from '@/components/LocaleProvider';
import { useTranslation } from '@/lib/useTranslation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const { locale, setLocale, localeOptions } = useLocale();
  const t = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const handleScroll = () => setMobileOpen(false);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mobileOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search-results?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border' :'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <AppLogo size={36} />
              <span className="font-display font-semibold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors duration-200 hidden sm:block">
                RoKGuides
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {t.header.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="underline-expand text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Language + Search + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <label className="sr-only" htmlFor="locale-select">
                {t.header.languageLabel}
              </label>
              <select
                id="locale-select"
                value={locale}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLocale(e.target.value as 'en' | 'tr')}
                className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              >
                {localeOptions.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </select>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  placeholder={t.header.searchPlaceholder}
                  className="input-search w-48 lg:w-56 pl-9 pr-4 py-2 text-sm"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Icon name="MagnifyingGlassIcon" size={15} />
                </div>
              </form>
              <Link
                href="/guide-article"
                className="btn-primary text-xs px-4 py-2"
              >
                {t.header.startReading}
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t.header.menuToggleLabel}
            >
              <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-card border-b border-border p-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <select
                value={locale}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLocale(e.target.value as 'en' | 'tr')}
                className="mb-3 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              >
                {localeOptions.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                placeholder={t.header.searchPlaceholder}
                className="input-search w-full pl-9 pr-4 py-3 text-sm"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Icon name="MagnifyingGlassIcon" size={15} />
              </div>
            </form>
            <nav className="flex flex-col gap-1">
              {t.header.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors duration-200 min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/guide-article"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2 justify-center min-h-[44px]"
              >
                {t.header.startReading}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
