'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group relative cursor-pointer block">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

      {/* Card */}
      <div className="glass-card interactive h-full flex flex-col justify-between overflow-hidden relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
        {/* Image Container */}
        <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-cyan-400 text-sm font-tracking-widest uppercase mb-2 block">
            {project.category}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-cyan-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-white/70 line-clamp-2">{project.desc}</p>
        </div>

        {/* CTA */}
        <div className="mt-4 sm:mt-6 flex items-center text-xs sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors">
          View project{' '}
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
