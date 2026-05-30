'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/lib/useTranslation';

export default function CommunitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const t = useTranslation();
  const activityStats = t.community.activityStats;
  const recentComments = t.community.recentComments;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-24 border-t border-border animate-on-scroll ${visible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-label">{t.community.sectionLabel}</span>
            <h2 className="font-display text-hero-lg font-semibold text-foreground">
              {t.community.title}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {activityStats.map((stat) => (
              <div key={stat.label} className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary border border-border rounded px-3 py-2">
                <Icon name={stat.icon as any} size={13} className="text-primary" />
                <span className="font-semibold text-foreground">{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {recentComments.map((comment, i) => (
            <div
              key={comment.id}
              className="guide-card p-5 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-3 mb-3">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-semibold text-primary flex-shrink-0">
                  {comment.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-foreground">{comment.author}</span>
                    <span className="text-xs text-muted-foreground">on</span>
                    <Link
                      href={comment.guideHref}
                      className="text-xs text-primary underline-expand truncate max-w-[160px]"
                    >
                      {comment.guide}
                    </Link>
                  </div>

                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                "{comment.comment}"
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon name="HandThumbUpIcon" size={13} />
                <span>{comment.likes} {t.community.helpfulText}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to join discussion */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            {t.community.ctaText}
          </p>
          <Link href="/guide-article" className="btn-primary inline-flex min-h-[44px]">
            <Icon name="ChatBubbleLeftRightIcon" size={16} />
            {t.community.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}