import React from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import GoogleAnalytics from './GoogleAnalytics';
import { LocaleProvider } from '@/components/LocaleProvider';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'RoKGuides — Rise of Kingdoms Türkçe Rehber ve Strateji Merkezi',
  description: 'Rise of Kingdoms için en güncel komutan yetenek ağaçları, tier listeleri, savaş stratejileri ve ücretsiz hediye kodları. F2P ve P2P oyuncu rehberleri.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  other: {
    'google-adsense-account': 'ca-pub-5080097981175080',
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${plusJakartaSans.variable} ${fraunces.variable}`}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5080097981175080"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <body className={plusJakartaSans.className}>
        <LocaleProvider>{children}</LocaleProvider>

        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });`,
              }}
            />
            <GoogleAnalytics />
          </>
        ) : null}
      </body>
    </html>
  );
}