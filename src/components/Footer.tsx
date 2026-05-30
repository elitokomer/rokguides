'use client';

import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { useTranslation } from '@/lib/useTranslation';

export default function Footer() {
  const t = useTranslation();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Linear Single-Row Pattern */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo + Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <AppLogo size={28} />
              <span className="font-display font-semibold text-base tracking-tight text-foreground hidden sm:block">
                RoKGuides
              </span>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {t.footer.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal + Copyright */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors duration-200">
              {t.footer.privacy}
            </Link>
            <Link href="/" className="hover:text-foreground transition-colors duration-200">
              {t.footer.terms}
            </Link>
            <span>{t.footer.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}