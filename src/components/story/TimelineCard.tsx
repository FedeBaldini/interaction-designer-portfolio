'use client';

import { TimelineItem } from '@/types';

interface TimelineCardProps {
  item: TimelineItem;
}

export default function TimelineCard({ item }: TimelineCardProps) {
  const isEducation = item.type === 'education';
  const color = isEducation ? '#00E5CC' : '#FF2D6B';

  return (
    <div
      className="bg-[#0a0a0a] border-2 border-[#F5F0E8]/10 p-5 sm:p-6 md:p-8 transition-colors duration-300 hover:border-current"
      style={{ ['--tw-border-opacity' as string]: 1 } as React.CSSProperties}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = color)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(245,240,232,0.1)')}
    >
      <span
        className="text-xs font-bold font-mono tracking-widest uppercase px-3 py-1 inline-block mb-3"
        style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}40` }}
      >
        {item.period}
      </span>
      <h4 className="text-lg sm:text-xl font-black font-champ uppercase">{item.title}</h4>
      <p className="text-[#F5F0E8]/80 text-sm font-mono mt-1">{item.subtitle}</p>
    </div>
  );
}
