import type { Metadata } from 'next';
import { Gloock, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';

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
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    'Chiara Baldini',
    'graphic design',
    'interaction design',
    'UX design',
    'editorial design',
    'branding',
    'portfolio',
    'SUPSI',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
    url: SITE.url,
    locale: SITE.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${gloock.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': `${SITE.url}/#person`,
                name: SITE.name,
                jobTitle: SITE.role,
                url: SITE.url,
                email: `mailto:${SITE.email}`,
                description: SITE.description,
                sameAs: [SITE.linkedin],
                knowsAbout: [
                  'Graphic Design',
                  'Interaction Design',
                  'UX Design',
                  'Editorial Design',
                  'Branding',
                  'Prototyping',
                ],
                alumniOf: [
                  { '@type': 'CollegeOrUniversity', name: 'IED Milano' },
                  { '@type': 'CollegeOrUniversity', name: 'SUPSI' },
                ],
              },
              {
                '@type': 'WebSite',
                '@id': `${SITE.url}/#website`,
                name: `${SITE.name} — Portfolio`,
                url: SITE.url,
                inLanguage: 'en',
                publisher: { '@id': `${SITE.url}/#person` },
              },
            ],
          }}
        />
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
