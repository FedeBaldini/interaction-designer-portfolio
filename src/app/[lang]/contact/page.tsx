import type { Metadata } from 'next';
import ContactView from '@/components/contact/ContactView';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import { alternates } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    alternates: alternates(lang, '/contact'),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return <ContactView dict={dict.contact} linkedin="https://www.linkedin.com/in/chiara-baldini-05b9b3253/" email="baldini.chiara00@gmail.com" />;
}
