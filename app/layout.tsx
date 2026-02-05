import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `Apnea Direct — From Apple Watch alert to treatment`,
  description: `Apple Watch detected sleep apnea? Get FDA approved home sleep apnea test without doctor referral. Skip months-long waits. Results in 48 hours.`,
  openGraph: {
    title: `Apnea Direct — From Apple Watch alert to treatment`,
    description: `Apple Watch detected sleep apnea? Get FDA approved home sleep apnea test without doctor referral. Skip months-long waits. Results in 48 hours.`,
    type: 'website',
    siteName: `Apnea Direct`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Apnea Direct — From Apple Watch alert to treatment`,
    description: `Apple Watch detected sleep apnea? Get FDA approved home sleep apnea test without doctor referral. Skip months-long waits. Results in 48 hours.`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-text min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
