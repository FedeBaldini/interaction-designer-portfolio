import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projects, getProjectById } from '@/data/projects';
import GlassCard from '@/components/ui/GlassCard';
import VideoPlayer from '@/components/ui/VideoPlayer';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(parseInt(id));
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} | Portfolio`,
    description: project.desc,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(parseInt(id));

  if (!project) {
    notFound();
  }

  const showVideo = project.id === 1;

  return (
    <div className="animate-fade-in-up">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      {/* Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-3xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a] z-10" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Header */}
      <div className="mb-16">
        {/* Tags */}
        <div className="flex flex-wrap gap-4 text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-900/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl">
          {project.desc}
        </p>

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-8">
          <GlassCard className="p-6">
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
              Year
            </h4>
            <p className="text-xl text-white font-medium">{project.year}</p>
          </GlassCard>
          <GlassCard className="p-6">
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
              Role
            </h4>
            <p className="text-xl text-white font-medium">{project.role}</p>
          </GlassCard>
          <GlassCard className="p-6">
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">
              Tools
            </h4>
            <p className="text-lg text-white/80">{project.tools.join(', ')}</p>
          </GlassCard>
        </div>
      </div>

      {/* Content */}
      <div className="prose-custom">
        <div dangerouslySetInnerHTML={{ __html: project.content }} />
      </div>

      {/* Video Section (only for Bommie Surf) */}
      {showVideo && (
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 border-b-2 border-cyan-500 pb-2 inline-block">
            App Prototype
          </h3>
          <div className="flex justify-center mt-8">
            <VideoPlayer
              src="/images/Bommie_Prototipo.mp4"
              poster="/images/Cover_Prototipo.png"
            />
          </div>
        </div>
      )}
    </div>
  );
}
