'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Project } from '@/types';
import ProjectCard from './ProjectCard';

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pt-10">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Projects
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"
          initial={prefersReducedMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.5,
              delay: i < 2 ? 0.3 + i * 0.15 : 0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
