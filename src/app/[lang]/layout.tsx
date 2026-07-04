import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Gloock, DM_Sans, DM_Mono } from 'next/font/google';
import '../globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { locales, htmlLang, isLocale, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import { alternates } from '@/lib/metadata';

const gloock = Gloock({ weight: '400', subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const dmMono = DM_Mono({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: dict.meta.home.title,
      template: `%s — ${SITE.name}`,
    },
    description: dict.meta.home.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    alternates: alternates(lang, ''),
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: `${SITE.url}/${lang}`,
      locale: lang === 'it' ? 'it_IT' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.home.title,
      description: dict.meta.home.description,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);

  return (
    <html lang={htmlLang[locale]} className={`${gloock.variable} ${dmSans.variable} ${dmMono.variable}`}>
      {/* Extensions (ColorZilla, Grammarly…) inject attributes onto <body>
          before hydration; ignore those attribute mismatches. */}
      <body suppressHydrationWarning>
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
                description: dict.meta.home.description,
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
                inLanguage: locale,
                publisher: { '@id': `${SITE.url}/#person` },
              },
            ],
          }}
        />
        <a href="#main" className="skip-to-content">
          {locale === 'it' ? 'Salta al contenuto principale' : 'Skip to main content'}
        </a>
        <Nav lang={locale} dict={dict.nav} />
        <main id="main">{children}</main>
        <Footer lang={locale} dict={dict.footer} />
      </body>
    </html>
  );
}
