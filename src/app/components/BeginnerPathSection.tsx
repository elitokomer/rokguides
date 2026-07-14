'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/lib/useTranslation';

export default function BeginnerPathSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const t = useTranslation();
  const steps = t.beginnerPath.steps;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-24 border-t border-border bg-muted animate-on-scroll ${visible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="section-label">{t.beginnerPath.sectionLabel}</span>
            <h2 className="font-display text-hero-lg font-semibold text-foreground">
              {t.beginnerPath.title}
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-md">
              {t.beginnerPath.description}
            </p>
          </div>
          <Link href="/guide-article?category=beginner" className="btn-ghost text-sm flex items-center gap-2 self-start sm:self-auto">
            {t.beginnerPath.allBeginnerGuides}
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        {/* Steps — Asymmetric Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="guide-card p-5 flex flex-col gap-4 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Number + Icon row */}
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: step.bgColor }}
                >
                  <Icon name={step.icon as any} size={22} className={step.color} />
                </div>
                <span className="font-display text-3xl font-light text-border select-none">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Tip */}
              <div
                className="flex items-start gap-2 px-3 py-2.5 rounded text-xs"
                style={{ backgroundColor: step.bgColor }}
              >
                <Icon name="LightBulbIcon" size={13} className={`${step.color} mt-0.5 flex-shrink-0`} />
                <span className="text-muted-foreground">{step.tip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-8 relative overflow-hidden rounded-xl border border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="relative z-10">
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">
              {t.beginnerPath.ctaTitle}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.beginnerPath.ctaDescription}
            </p>
          </div>
          <Link href="/guide-article" className="btn-primary relative z-10 whitespace-nowrap min-h-[44px]">
            {t.beginnerPath.ctaButton}
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}