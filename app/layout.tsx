import '~/styles/globals.css';

import type { Metadata } from 'next';

import { fontMono, fontSans, fontSansVariable, fontSerif } from '~/libs/fonts';
import { cn } from '~/libs/utils';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'bepyan.me',
  description: 'Develop about something Soft and Simple.',
  icons: {
    icon: '/favicon.svg',
    other: {
      rel: 'alternative icon',
      url: '/favicon.ico',
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn(
          fontSansVariable.variable,
          fontSans.variable,
          fontSerif.variable,
          fontMono.variable,
        )}
      >
        <Providers>
          <div className="blur-layer" aria-hidden="true"></div>
          <div className="container mx-auto max-w-page py-page">
            <div className="main-grid">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
