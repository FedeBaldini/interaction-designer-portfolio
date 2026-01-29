import { GraduationCap, Briefcase } from 'lucide-react';
import AestheticGlassBox from '@/components/ui/AestheticGlassBox';
import TimelineCard from '@/components/story/TimelineCard';
import { TimelineItem } from '@/types';

const educationItems: TimelineItem[] = [
  {
    period: '2014 - 2019',
    title: 'Liceo Artistico U. Boccioni',
    subtitle: 'Indirizzo Multimediale',
    type: 'education',
  },
  {
    period: '2021 - 2024',
    title: 'Laurea Triennale in Graphic Design',
    subtitle: 'IED - Istituto Europeo di Design',
    type: 'education',
  },
  {
    period: '2025 - in corso',
    title: 'Master Interaction Design',
    subtitle: 'Supsi - MaInD Mendrisio (CH)',
    type: 'education',
  },
];

const experienceItems: TimelineItem[] = [
  {
    period: 'Jan 2025 - Jun 2025',
    title: 'Graphic Design Intern',
    subtitle: 'Strategy Design',
    type: 'experience',
  },
  {
    period: '2018 - 2026',
    title: 'Barista',
    subtitle: 'Occasional jobs to support my studies',
    type: 'experience',
  },
];

export default function StoryPage() {
  return (
    <section className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 animate-fade-in-up pt-6 sm:pt-8 md:pt-10">
      {/* Header */}
      <div className="text-center mb-10 relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About Me</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
      </div>

      {/* Bio */}
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
        <AestheticGlassBox className="p-6 sm:p-8 md:p-10">
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light relative z-10">
            I am an Interaction Designer obsessed with the space between user intent and digital
            response. My journey is defined by a relentless pursuit of fluid motion and geometric
            harmony. I don&apos;t just design interfaces; I craft living ecosystems where every
            pixel has a purpose and every transition tells a story. From static grids to liquid
            interactions, my goal is to make the digital feel tangible.
          </p>
        </AestheticGlassBox>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
        {/* Education */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">The Path</h3>
          </div>
          {educationItems.map((item) => (
            <TimelineCard key={item.title} item={item} />
          ))}
        </div>

        {/* Experience */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Experience</h3>
          </div>
          {experienceItems.map((item) => (
            <TimelineCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
