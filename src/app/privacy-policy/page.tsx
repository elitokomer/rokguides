'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'When you visit RoKGuides, we may automatically collect certain technical information such as your IP address, browser type, operating system, referring URLs, and pages visited. This data is collected through standard server logs and analytics tools.',
      'If you leave a comment on a guide, we collect the information you provide (such as a display name and the comment text itself). We do not require account registration to browse the site.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'We use the information we collect to operate and improve the website, understand how visitors use our content, and identify which guides are most helpful.',
      'We use analytics data (such as Google Analytics) to measure traffic, track page views, and understand user behavior in aggregate. This data is anonymized and not linked to individual identities.',
      'We do not sell, rent, or share your personal information with third parties for marketing purposes.',
    ],
  },
  {
    title: 'Cookies',
    content: [
      'RoKGuides uses cookies to improve your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and understand how you interact with the site.',
      'We use analytics cookies (e.g., Google Analytics) to collect aggregated, anonymized data about site usage. You can disable cookies in your browser settings at any time, though some features of the site may not function correctly without them.',
    ],
  },
  {
    title: 'Third-Party Services',
    content: [
      'We may use third-party services such as Google Analytics to help us understand site traffic. These services have their own privacy policies governing how they handle data.',
      'Our site may contain links to external websites. We are not responsible for the privacy practices or content of those sites.',
    ],
  },
  {
    title: 'Data Retention',
    content: [
      'We retain analytics data for as long as necessary to operate and improve the site. Comment data is retained until removed by request or at our discretion.',
      'You may request deletion of any personal data you have submitted to us by contacting us at the email address listed on our Contact page.',
    ],
  },
  {
    title: 'Children\'s Privacy',
    content: [
      'RoKGuides is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal information to us, please contact us and we will remove it promptly.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this page periodically to stay informed about how we protect your information.',
      'Continued use of the site after any changes constitutes your acceptance of the updated policy.',
    ],
  },
  {
    title: 'Contact Us',
    content: [
      'If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at example@gmail.com.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10">
              Legal
            </span>
            <h1 className="font-display text-4xl font-bold text-foreground mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: May 2026
            </p>
          </div>

          {/* Intro */}
          <div className="bg-card border border-border rounded-xl p-6 mb-10">
            <p className="text-muted-foreground leading-relaxed">
              Your privacy matters to us. This Privacy Policy explains what information RoKGuides collects when you use our website, how we use that information, and the choices you have. By using RoKGuides, you agree to the practices described in this policy.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections?.map((section, index) => (
              <section key={section?.title}>
                <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  {section?.title}
                </h2>
                <div className="space-y-3 pl-10">
                  {section?.content?.map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
