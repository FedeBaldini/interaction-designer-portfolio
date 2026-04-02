'use client';

import { tools } from '@/data/tools';

function getColorClasses(level: number) {
  if (level > 70) {
    return { bg: 'bg-[#00E5CC]', text: 'text-[#00E5CC]' };
  } else if (level > 35) {
    return { bg: 'bg-[#FF2D6B]', text: 'text-[#FF2D6B]' };
  }
  return { bg: 'bg-[#F5F0E8]/50', text: 'text-[#F5F0E8]/70' };
}

export default function ToolsGrid() {
  return (
    <div className="w-full max-w-5xl">
      {/* Section Title */}
      <div className="text-sm font-bold text-[#F5F0E8]/70 uppercase tracking-widest mb-8 flex items-center justify-center gap-4 font-mono">
        <span className="h-[2px] w-12 bg-[#00E5CC]" />
        My Knowledge
        <span className="h-[2px] w-12 bg-[#00E5CC]" />
      </div>

      {/* Tools Grid */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
        {tools.map((tool) => {
          const colors = getColorClasses(tool.level);
          return (
            <div key={tool.name} className="group flex flex-col items-center w-36 sm:w-40 md:w-44 lg:w-48">
              {/* Tool Card */}
              <div className="w-full h-14 bg-[#0a0a0a] border-2 border-[#F5F0E8]/20 hover:border-[#00E5CC] transition-all duration-200 flex items-center px-4 gap-3 cursor-default z-10">
                <div className={`w-2 h-2 ${colors.bg} transition-all`} />
                <span className="text-sm font-mono font-medium text-[#F5F0E8]/80 group-hover:text-[#F5F0E8] tracking-wide">
                  {tool.name}
                </span>
              </div>

              {/* Expandable Level Bar */}
              <div className="w-full overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <div className="pt-3 pb-1">
                  <div className="flex justify-between items-end mb-2 px-1">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#F5F0E8]/70 font-mono uppercase">
                      Capacity
                    </span>
                    <span className={`text-xs font-bold font-mono ${colors.text}`}>
                      {tool.level}%
                    </span>
                  </div>
                  <div className="h-1 w-full bg-[#F5F0E8]/10 overflow-hidden">
                    <div
                      className={`h-full ${colors.bg} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
                      style={{ width: `${tool.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
