'use client';

import AestheticGlassBox from '@/components/ui/AestheticGlassBox';
import { TimelineItem } from '@/types';

interface TimelineCardProps {
  item: TimelineItem;
}

export default function TimelineCard({ item }: TimelineCardProps) {
  const isEducation = item.type === 'education';
  const colorClass = isEducation ? 'text-cyan-400' : 'text-purple-400';
  const bgClass = isEducation ? 'bg-cyan-900/20' : 'bg-purple-900/20';

  return (
    <AestheticGlassBox className="p-8">
      <div className="relative z-10">
        <span
          className={`${colorClass} text-sm font-bold tracking-widest ${bgClass} px-2 py-1 rounded`}
        >
          {item.period}
        </span>
        <h4 className="text-xl font-bold mt-3">{item.title}</h4>
        <p className="text-white/60 text-sm font-medium">{item.subtitle}</p>
      </div>
    </AestheticGlassBox>
  );
}
