'use client';

import { tools } from '@/data/tools';

function getColorClasses(level: number) {
  if (level > 70) {
    return {
      bg: 'bg-cyan-400',
      text: 'text-cyan-400',
    };
  } else if (level > 35) {
    return {
      bg: 'bg-indigo-400',
      text: 'text-indigo-300',
    };
  }
  return {
    bg: 'bg-fuchsia-400',
    text: 'text-fuchsia-300',
  };
}

export default function ToolsGrid() {
  return (
    <div className="w-full max-w-5xl">
      {/* Section Title */}
      <div className="text-sm font-bold text-white/70 uppercase tracking-widest mb-8 flex items-center justify-center gap-4">
        <span className="h-[1px] w-12 bg-white/10" />
        My Knowledge
        <span className="h-[1px] w-12 bg-white/10" />
      </div>

      {/* Tools Grid */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 opacity-90">
        {tools.map((tool) => {
          const colors = getColorClasses(tool.level);
          return (
            <div key={tool.name} className="group flex flex-col items-center w-36 sm:w-40 md:w-44 lg:w-48">
              {/* Tool Card */}
              <div className="w-full h-14 rounded-2xl bg-[#111] border border-white/10 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300 flex items-center px-4 gap-3 cursor-default hover:shadow-lg hover:shadow-cyan-500/10 z-10">
                <div
                  className={`w-2 h-2 rounded-full ${colors.bg} group-hover:shadow-[0_0_8px_currentColor] transition-all`}
                />
                <span className="text-sm font-medium text-white/80 group-hover:text-white tracking-wide">
                  {tool.name}
                </span>
              </div>

              {/* Expandable Level Bar */}
              <div className="w-full overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <div className="pt-3 pb-1">
                  <div className="flex justify-between items-end mb-2 px-1">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/70">
                      CAPACITY
                    </span>
                    <span className={`text-xs font-bold font-mono ${colors.text}`}>
                      {tool.level}%
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${colors.bg} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}
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
