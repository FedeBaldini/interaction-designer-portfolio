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
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="relative w-full min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[85vh] overflow-hidden rounded-2xl sm:rounded-3xl mb-10 sm:mb-14"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
      >
        {/* Background Image with parallax + slow zoom on load */}
        <motion.div
          className="absolute inset-[-15%]"
          style={{ y: heroY }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 to-transparent" />

        {/* Content over image */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-14">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 text-cyan-400 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase mb-4">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-900/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08, ease }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Title + Description */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/70 font-light max-w-md md:text-right md:pb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
            >
              {project.desc}
            </motion.p>
          </div>

          {/* Info row */}
          <motion.div
            className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8 pt-6 border-t border-white/10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease }}
          >
            <div>
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest block mb-1">Year</span>
              <span className="text-white text-lg font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest block mb-1">Role</span>
              <span className="text-white text-lg font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest block mb-1">Tools</span>
              <span className="text-white/80 text-base">{project.tools.join(', ')}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content — each section animates on scroll */}
      <AnimatedProseContent html={project.content} />

      {/* Video Section */}
      {showVideo && (
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
        >
          <h3 className="text-2xl font-bold mb-8 border-b-2 border-cyan-500 pb-2 inline-block">
            App Prototype
          </h3>
          <div className="flex justify-center mt-8">
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
