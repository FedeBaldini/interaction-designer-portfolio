import type { Metadata } from 'next';
import ContactView from '@/components/contact/ContactView';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Chiara Baldini for graphic design, web design, prototyping, and interaction design projects.',
};

export default function ContactPage() {
  return <ContactView />;
}
