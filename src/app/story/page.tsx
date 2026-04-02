import { GraduationCap, Briefcase } from 'lucide-react';
import TimelineCard from '@/components/story/TimelineCard';
import { TimelineItem } from '@/types';

const educationItems: TimelineItem[] = [
  { period: '2014 - 2019', title: 'Liceo Artistico U. Boccioni', subtitle: 'Indirizzo Multimediale', type: 'education' },
  { period: '2021 - 2024', title: 'Laurea Triennale in Graphic Design', subtitle: 'IED - Istituto Europeo di Design', type: 'education' },
  { period: '2025 - in corso', title: 'Master Interaction Design', subtitle: 'Supsi - MaInD Mendrisio (CH)', type: 'education' },
];

const experienceItems: TimelineItem[] = [
  { period: 'Jan 2025 - Jun 2025', title: 'Graphic Design Intern', subtitle: 'Strategy Design', type: 'experience' },
  { period: '2018 - 2026', title: 'Barista', subtitle: 'Occasional jobs to support my studies', type: 'experience' },
];

export default function StoryPage() {
  return (
    <section className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 animate-fade-in-up pt-6 sm:pt-8 md:pt-10">
      {/* Header */}
      <div className="text-center mb-10 relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-champ uppercase mb-4 sm:mb-6">About Me</h1>
        <div className="w-24 h-1 bg-[#00E5CC] mx-auto" />
      </div>

      {/* Bio */}
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
        <div className="bg-[#0a0a0a] border-2 border-[#F5F0E8]/10 p-6 sm:p-8 md:p-10 relative shadow-[10px_10px_0px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#FF2D6B]" />
          <p className="text-base sm:text-lg md:text-xl text-[#F5F0E8]/85 leading-relaxed font-mono text-left pl-4">
            I am an Interaction Designer obsessed with the space between user intent and digital
            response. My journey is defined by a relentless pursuit of fluid motion and geometric
            harmony. I don&apos;t just design interfaces; I craft living ecosystems where every
            pixel has a purpose and every transition tells a story. From static grids to liquid
            interactions, my goal is to make the digital feel tangible.
          </p>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
        {/* Education */}
        <section aria-labelledby="education-heading" className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-[#0a0a0a] border-2 border-[#00E5CC] flex items-center justify-center text-[#00E5CC]">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h2 id="education-heading" className="text-2xl sm:text-3xl font-black font-champ uppercase">The Path</h2>
          </div>
          {educationItems.map((item) => (
            <TimelineCard key={item.title} item={item} />
          ))}
        </section>

        {/* Experience */}
        <section aria-labelledby="experience-heading" className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-[#0a0a0a] border-2 border-[#FF2D6B] flex items-center justify-center text-[#FF2D6B]">
              <Briefcase className="w-7 h-7" />
            </div>
            <h2 id="experience-heading" className="text-2xl sm:text-3xl font-black font-champ uppercase">Experience</h2>
          </div>
          {experienceItems.map((item) => (
            <TimelineCard key={item.title} item={item} />
          ))}
        </section>
      </div>
    </section>
  );
}
