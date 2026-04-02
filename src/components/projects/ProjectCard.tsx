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
      {/* Card */}
      <article className="punk-card interactive h-full flex flex-col justify-between overflow-hidden relative p-4 sm:p-6 md:p-8">
        {/* Image Container */}
        <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 mb-4 sm:mb-6 overflow-hidden border-2 border-[#F5F0E8]/20">
          <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
          <Image
            src={project.image}
            alt={`${project.title} — ${project.category} project cover`}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-[#00E5CC] text-xs font-mono font-bold tracking-widest uppercase mb-2 block">
            {project.category}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-champ uppercase mb-2 group-hover:text-[#FF2D6B] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#F5F0E8]/70 line-clamp-2">{project.desc}</p>
        </div>

        {/* CTA */}
        <div className="mt-4 sm:mt-6 flex items-center text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#F5F0E8]/70 group-hover:text-[#FF2D6B] transition-colors">
          View project{' '}
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </article>
    </Link>
  );
}
