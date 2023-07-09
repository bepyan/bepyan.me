import '~/styles/globals.css';

import type { Metadata } from 'next';

import { fontSans } from '~/libs/fonts';
import { cn } from '~/libs/utils';

export const metadata: Metadata = {
  title: 'bepyan',
  description: 'Frontend Developer at Kakao, developing Brunch.',

  icons: {
    icon: '/favicon.ico',
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
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
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div className="blur" aria-hidden="true"></div>
        <div className="container mx-auto max-w-page pt-32">
          <div className="main-grid">{children}</div>
        </div>
      </body>
    </html>
  );
}