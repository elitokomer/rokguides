import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
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
              {[
                { label: 'Commanders', href: '/guide-article?category=commanders' },
                { label: 'Battle', href: '/guide-article?category=battle' },
                { label: 'Beginners', href: '/guide-article?category=beginner' },
                { label: 'Alliance', href: '/guide-article?category=alliance' },
                { label: 'Search', href: '/search-results' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ]?.map((link) => (
                <Link
                  key={link?.label}
                  href={link?.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal + Copyright */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/" className="hover:text-foreground transition-colors duration-200">
              Terms
            </Link>
            <span>© 2026 RoKGuides</span>
          </div>
        </div>
      </div>
    </footer>
  );
}