import type { Metadata } from 'next';
import { Gloock, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const gloock = Gloock({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chiarabaldini.com'),
  title: {
    default: 'Chiara Baldini — Graphic & Interaction Designer',
    template: '%s — Chiara Baldini',
  },
  description:
    'Portfolio of Chiara Baldini, a graphic and interaction designer exploring prototyping and interaction design at SUPSI. Selected work across branding, editorial, packaging, motion, and physical computing.',
  openGraph: {
    title: 'Chiara Baldini — Graphic & Interaction Designer',
    description:
      'Selected work across branding, editorial, packaging, motion, and physical computing.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${gloock.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <a href="#main" className="skip-to-content">
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
