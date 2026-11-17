import React from 'react';

export default function VerticalSpine({ scrollProgress }) {
  const stages = [
    { id: 1, name: 'OVERVIEW', range: [0, 0.20], scrollTarget: 0 },
    { id: 2, name: 'METALLURGY', range: [0.20, 0.40], scrollTarget: 0.28 },
    { id: 3, name: 'ACOUSTICS', range: [0.40, 0.60], scrollTarget: 0.50 },
    { id: 4, name: 'IN THE BOX', range: [0.60, 0.78], scrollTarget: 0.68 },
    { id: 5, name: 'PRE-ORDER', range: [0.78, 1.0], scrollTarget: 0.88 },
  ];

  const handleStageClick = (target) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: totalHeight * target,
      behavior: 'smooth'
    });
  };

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center pointer-events-auto">
      {/* Background Vertical Line */}
      <div className="relative flex flex-col items-center gap-8">
        <div className="absolute top-0 bottom-0 w-px bg-white/10 -z-10" />
        
        {/* Dynamic filling line in Warm Titanium Gold */}
        <div 
          className="absolute top-0 w-px bg-gradient-to-b from-[#e2b17a] to-[#996a3d] transition-all duration-150 -z-10"
          style={{ height: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
        />

        {stages.map((st) => {
          const isActive = scrollProgress >= st.range[0] && scrollProgress <= st.range[1];
          return (
            <button
              key={st.id}
              onClick={() => handleStageClick(st.scrollTarget)}
              className="group flex items-center gap-3 text-left transition-all"
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center font-mono-tech text-[9px] border transition-all duration-300 ${
                  isActive
                    ? 'bg-[#e2b17a] text-[#121215] border-[#e2b17a] font-bold scale-110 shadow-lg shadow-[#d4a373]/30'
                    : 'bg-[#070709] text-[#78756f] border-white/15 group-hover:border-white/40 group-hover:text-white'
                }`}
              >
                0{st.id}
              </div>

              <span
                className={`text-[10px] font-mono-tech tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'text-[#f5f5f7] font-semibold translate-x-1'
                    : 'text-[#5e5b56] group-hover:text-[#a8a49c]'
                }`}
              >
                {st.name}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
