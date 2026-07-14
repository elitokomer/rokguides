'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/lib/useTranslation';

export default function ContactPage() {
  const t = useTranslation();

  const contactItems = [
    {
      icon: 'EnvelopeIcon',
      label: t.contact.emailLabel,
      value: 'example@gmail.com',
      href: 'mailto:example@gmail.com',
      description: t.contact.emailDescription,
    },
  ];

  const topics = [
    t.contact.topicCorrections,
    t.contact.topicSuggestGuide,
    t.contact.topicReportBug,
    t.contact.topicPartnership,
    t.contact.topicGeneralQuestions,
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10">
            {t.contact.tag}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
            {t.contact.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.contact.description}
          </p>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Card */}
            <div className="space-y-6">
              <h2 className="font-display text-xl font-bold text-foreground">
                {t.contact.reachUsDirectly}
              </h2>
              {contactItems?.map((item) => (
                <a
                  key={item?.label}
                  href={item?.href}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-200 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                    <Icon name={item?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      {item?.label}
                    </p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {item?.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item?.description}
                    </p>
                  </div>
                </a>
              ))}

              {/* Response time note */}
              <div className="flex items-start gap-3 bg-secondary/50 rounded-xl p-4">
                <Icon name="ClockIcon" size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  {t.contact.responseTimeNote} <span className="text-foreground font-medium">{t.contact.responseTimeDays}</span>{t.contact.responseTimeSuffix}
                </p>
              </div>
            </div>

            {/* Topics */}
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-6">
                {t.contact.whatToContactUsAbout}
              </h2>
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                {topics?.map((topic) => (
                  <div key={topic} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="CheckIcon" size={11} className="text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{topic}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{t.contact.beforeYouWriteTitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.contact.beforeYouWriteDescription}{' '}
                  <a href="/search-results" className="text-primary hover:underline">
                    {t.contact.searchPage}
                  </a>{' '}
                  {t.contact.beforeYouWriteDescriptionSuffix}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
