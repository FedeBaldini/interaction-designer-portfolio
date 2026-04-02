'use client';

import { Palette, Monitor, Zap } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Visual Design',
    description:
      'Crafting pixel-perfect UIs with a focus on typography, color theory, and geometric harmony.',
    color: '#00E5CC',
  },
  {
    icon: Monitor,
    title: 'Interaction',
    description:
      'Bringing static designs to life with fluid animations, micro-interactions, and React logic.',
    color: '#FF2D6B',
  },
  {
    icon: Zap,
    title: 'Brand Identity',
    description:
      'Forging memorable digital brands that tell a story through logo design and visual systems.',
    color: '#F5F0E8',
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full max-w-6xl pt-6 sm:pt-8 md:pt-10 text-left">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <div
            key={service.title}
            className="bg-[#0a0a0a] border-2 border-[#F5F0E8]/10 group p-5 sm:p-6 md:p-8 transition-colors duration-300"
            style={{ ['--hover-color' as string]: service.color }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = service.color)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(245,240,232,0.1)')}
          >
            <div
              className="w-14 h-14 bg-[#0a0a0a] border-2 flex items-center justify-center mb-4 transition-colors duration-300"
              style={{ borderColor: service.color, color: service.color }}
            >
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black font-champ uppercase mb-2 text-[#F5F0E8]">{service.title}</h3>
            <p className="text-[#F5F0E8]/80 text-sm leading-relaxed font-mono">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}
