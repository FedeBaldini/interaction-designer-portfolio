'use client';

import { Palette, Monitor, Zap } from 'lucide-react';
import AestheticGlassBox from '@/components/ui/AestheticGlassBox';

const services = [
  {
    icon: Palette,
    title: 'Visual Design',
    description:
      'Crafting pixel-perfect UIs with a focus on typography, color theory, and geometric harmony.',
  },
  {
    icon: Monitor,
    title: 'Interaction',
    description:
      'Bringing static designs to life with fluid animations, micro-interactions, and React logic.',
  },
  {
    icon: Zap,
    title: 'Brand Identity',
    description:
      'Forging memorable digital brands that tell a story through logo design and visual systems.',
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full max-w-6xl pt-6 sm:pt-8 md:pt-10 text-left">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <AestheticGlassBox key={service.title} className="group p-5 sm:p-6 md:p-8">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-cyan-400">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
            </div>
          </AestheticGlassBox>
        );
      })}
    </div>
  );
}
