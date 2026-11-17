import React from 'react';

export default function FinishSelector({ colorFinish, setColorFinish }) {
  const options = [
    {
      id: 'titanium',
      name: 'Natural Titanium',
      color: '#28272b',
      subtitle: 'Raw brushed titanium'
    },
    {
      id: 'champagne',
      name: 'Champagne Gold',
      color: '#d4af37',
      subtitle: 'Warm luxury anodized'
    },
    {
      id: 'starlight',
      name: 'Starlight Silver',
      color: '#e4e2dd',
      subtitle: 'Polished bright aluminum'
    },
    {
      id: 'bronze',
      name: 'Smoked Bronze',
      color: '#8b5a2b',
      subtitle: 'Architectural patinated'
    }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
      <div className="glass-panel px-3 py-2 rounded-full border border-[#d4a373]/20 shadow-2xl flex items-center gap-1.5 backdrop-blur-2xl">
        {options.map((opt) => {
          const isSelected = colorFinish === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setColorFinish(opt.id)}
              className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                isSelected
                  ? 'bg-[#d4a373]/20 border border-[#d4a373]/50 text-white shadow-lg'
                  : 'bg-white/5 border border-transparent text-[#9e9aa0] hover:text-white hover:bg-white/10'
              }`}
              title={opt.subtitle}
            >
              <span
                className="w-3.5 h-3.5 rounded-full shadow-md border border-white/20 transition-transform group-hover:scale-110"
                style={{ backgroundColor: opt.color }}
              />
              <span className="text-xs font-mono-tech font-medium hidden md:inline">
                {opt.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
