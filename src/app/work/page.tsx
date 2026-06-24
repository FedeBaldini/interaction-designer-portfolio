import type { Metadata } from 'next';
import WorkList from '@/components/work/WorkList';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected work by Chiara Baldini — branding, editorial, packaging, motion, exhibition, and physical computing projects.',
};

export default function WorkPage() {
  return <WorkList />;
}
