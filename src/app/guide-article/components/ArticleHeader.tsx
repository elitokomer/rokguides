import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function ArticleHeader() {
  return (
    <div className="pt-20">
      {/* Hero Image */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(200px, 35vw, 420px)' }}>
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_18c9e4a98-1772417935259.png"
          alt="Dark fantasy strategy battlefield with glowing tactical overlay, deep shadows, atmospheric fog, dark steel environment"
          fill
          priority
          sizes="100vw"
          className="object-cover" />
        
        {/* Scrim for dark text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-foreground/70">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <Icon name="ChevronRightIcon" size={12} className="opacity-50" />
              <Link href="/guide-article?category=commanders" className="hover:text-foreground transition-colors">Commanders</Link>
              <Icon name="ChevronRightIcon" size={12} className="opacity-50" />
              <span className="text-foreground/50 truncate">Tier List 2026</span>
            </nav>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-6 sm:pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="category-badge text-xs font-semibold"
                  style={{ backgroundColor: 'rgba(200,150,90,0.2)', color: '#C8965A', border: '1px solid rgba(200,150,90,0.4)' }}>
                  
                  Commanders
                </span>
                <span className="text-xs text-foreground/60 flex items-center gap-1">
                  <Icon name="StarIcon" size={11} className="text-primary" />
                  Featured Guide
                </span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                Best Commanders Tier List 2026
              </h1>
              <p className="text-sm text-foreground/70 mt-2 hidden sm:block">
                Complete ranking of all Legendary and Epic commanders — S+ to C tier with talent builds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meta Bar */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-semibold text-primary">
                RG
              </div>
              RoKGuides Team
            </div>
            <span className="flex items-center gap-1.5">
              <Icon name="CalendarIcon" size={13} />
              Updated May 2026
            </span>
          </div>
        </div>
      </div>
    </div>);

}