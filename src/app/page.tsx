import Hero from '@/components/home/Hero';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import About from '@/components/home/About';
import { C } from '@/lib/theme';

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <div style={{ height: '1px', background: C.border }} />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <Divider />
      <ProjectsPreview />
      <Divider />
      <About />
    </div>
  );
}
