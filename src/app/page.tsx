import Hero from '@/components/home/Hero';
import ToolsGrid from '@/components/home/ToolsGrid';
import ServicesGrid from '@/components/home/ServicesGrid';

export default function HomePage() {
  return (
    <section aria-label="Home" className="flex flex-col items-center text-center space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16 animate-fade-in-up w-full">
      <Hero />
      <ToolsGrid />
      <ServicesGrid />
    </section>
  );
}
