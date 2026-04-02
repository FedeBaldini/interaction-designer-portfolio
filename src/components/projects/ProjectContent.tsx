'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Project } from '@/types';
import VideoPlayer from '@/components/ui/VideoPlayer';
import AnimatedProseContent from '@/components/ui/AnimatedProseContent';

interface ProjectContentProps {
  project: Project;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function ProjectContent({ project }: ProjectContentProps) {
  const showVideo = project.slug === 'bommie-surf';
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScroll, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['0%', '15%']);

  return (
    <div>
      {/* Hero — Full bleed, behind header */}
      <motion.div
        ref={heroRef}
        className="relative w-screen h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] overflow-hidden border-b-2 border-[#F5F0E8]/10 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32"
        style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        {/* Back button overlay */}
        <Link
          href="/projects"
          className="absolute top-24 sm:top-28 md:top-32 lg:top-36 left-4 sm:left-6 lg:left-8 z-20 inline-flex items-center gap-2 text-[#F5F0E8]/70 hover:text-[#00E5CC] transition-colors font-mono uppercase text-sm tracking-wider bg-[#0a0a0a]/60 px-3 py-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply z-10" />
        <motion.div
          className="absolute inset-[-15%]"
          style={{ y: heroY }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover contrast-125 saturate-50"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Editorial Header — overlapping hero */}
      <div className="-mt-28 sm:-mt-32 relative z-20 mb-16">
        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-2 sm:gap-3 font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease }}
        >
          {project.tags.map((tag) => (
            <span key={tag} className="border border-[#FF2D6B] px-2 py-0.5 bg-[#0a0a0a] text-[#FF2D6B]">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-champ font-black leading-[1.05] mb-8 text-[#F5F0E8] uppercase"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          {project.title}
        </motion.h1>

        {/* Info Grid with borders */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y-2 border-[#F5F0E8]/20 bg-[#0a0a0a]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
        >
          <div className="p-5 sm:p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#F5F0E8]/20">
            <h4 className="text-[#00E5CC] font-mono text-xs font-black uppercase tracking-widest mb-1">Year</h4>
            <p className="text-xl font-mono text-[#F5F0E8]">{project.year}</p>
          </div>
          <div className="p-5 sm:p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#F5F0E8]/20">
            <h4 className="text-[#00E5CC] font-mono text-xs font-black uppercase tracking-widest mb-1">Role</h4>
            <p className="text-xl font-mono text-[#F5F0E8] uppercase">{project.role}</p>
          </div>
          <div className="p-5 sm:p-6">
            <h4 className="text-[#00E5CC] font-mono text-xs font-black uppercase tracking-widest mb-1">Tools</h4>
            <p className="text-sm font-mono text-[#F5F0E8]/80 uppercase">{project.tools.join(' / ')}</p>
          </div>
        </motion.div>
      </div>

      {/* Content — editorial grid layout */}
      <AnimatedProseContent html={project.content} />

      {/* Video Section */}
      {showVideo && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t-2 border-[#F5F0E8]/10 pt-16 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="md:col-span-4">
            <h3 className="font-champ font-black text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95] text-[#00E5CC]">
              The<br />Outcome
            </h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg sm:text-xl text-[#F5F0E8]/80 font-light mb-10">
              {project.desc}
            </p>
            <VideoPlayer
              src="/images/Bommie_Prototipo.mp4"
              poster="/images/Cover_Prototipo.png"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
