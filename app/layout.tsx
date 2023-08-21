import '~/styles/globals.css';

import type { Metadata } from 'next';

import FloatScrollTopButton from '~/components/float-scroll-top-button';
import GoogleAnalytics from '~/components/google-analytics';
import siteConfig from '~/libs/site-config';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'bepyan.me',
  },
  description: 'Develop about something Soft and Simple.',
  openGraph: {
    images: ['/img/splash-1.jpg'],
    locale: 'ko_KR',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="blur-layer" aria-hidden="true"></div>
          <div className="container mx-auto max-w-page py-page">
            <div className="main-grid">{children}</div>
            <FloatScrollTopButton />
          </div>
        </Providers>
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
    </html>
  );
}
