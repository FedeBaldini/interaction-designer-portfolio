import Hero from '@/components/home/Hero';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import About from '@/components/home/About';
import { C } from '@/lib/theme';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import { getProjects } from '@/data/projects';

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <div style={{ height: '1px', background: C.border }} />
    </div>
  );
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  const projects = getProjects(locale).slice(0, 5);

  return (
    <div className="pt-16">
      <Hero lang={locale} dict={dict.home.hero} />
      <Divider />
      <ProjectsPreview lang={locale} dict={dict.home.projects} projects={projects} />
      <Divider />
      <About dict={dict.home.about} />
    </div>
  );
}
