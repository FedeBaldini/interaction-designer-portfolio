import Hero from '@/components/home/Hero';
import ToolsGrid from '@/components/home/ToolsGrid';
import ServicesGrid from '@/components/home/ServicesGrid';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center text-center space-y-16 animate-fade-in-up w-full">
      <Hero />
      <ToolsGrid />
      <ServicesGrid />
    </section>
  );
}
