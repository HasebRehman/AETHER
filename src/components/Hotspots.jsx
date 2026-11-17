import React, { useState } from 'react';
import { Target, X, Cpu, Disc, Shield, Sliders } from 'lucide-react';

export default function Hotspots({ scrollProgress }) {
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  const isStage2 = scrollProgress >= 0.20 && scrollProgress <= 0.40;
  const isStage3 = scrollProgress >= 0.42 && scrollProgress <= 0.60;

  const hotspots = [
    {
      id: 'canopy',
      stage: 'stage2',
      title: 'Tension Knit Canopy',
      subtitle: 'ZERO-GRAVITY CRANIAL LOAD',
      pos: 'top-[36%] right-[28%]',
      icon: Shield,
      desc: 'Engineered from aerospace silicone composite mesh. Spans the headband to reduce downward cranial force by 42% across extended 8-hour listening sessions.',
      specs: ['Weight: 48g', 'Material: Monofilament Knit', 'Tension: 3.8 N/m']
    },
    {
      id: 'crown',
      stage: 'stage2',
      title: 'Precision Digital Crown',
      subtitle: 'SUB-MILLIMETER TACTILE ROTATION',
      pos: 'top-[54%] right-[22%]',
      icon: Sliders,
      desc: 'Optical encoder reading 1,200 micro-steps per revolution for precise volume incrementing, spatial ANC transparency blend, and Siri/AI dictation.',
      specs: ['Encoder: 1200 Pulses/Rev', 'Detents: Magnetic Click', 'Finish: Knurled Steel']
    },
    {
      id: 'driver',
      stage: 'stage3',
      title: '40mm Neodymium Diaphragm',
      subtitle: 'ZERO-COMPROMISE ACOUSTIC MOTOR',
      pos: 'top-[48%] left-[26%]',
      icon: Disc,
      desc: 'Dual-ring neodymium magnet motor driving a rigid titanium-vapor coated diaphragm. Delivers sub-bass extension down to 4Hz with under 0.08% harmonic distortion.',
      specs: ['Diameter: 40mm', 'Flux Density: 1.5 Tesla', 'Response: 4Hz – 48kHz']
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Hotspot Markers */}
      {hotspots.map((hs) => {
        const visible = (hs.stage === 'stage2' && isStage2) || (hs.stage === 'stage3' && isStage3);
        if (!visible) return null;

        return (
          <div key={hs.id} className={`absolute ${hs.pos} pointer-events-auto transition-all duration-500`}>
            <button
              onClick={() => setSelectedHotspot(selectedHotspot?.id === hs.id ? null : hs)}
              className="relative group flex items-center justify-center"
              title={hs.title}
            >
              {/* Pulsing subtle rings */}
              <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-[#d4a373] opacity-40" />
              <span className="relative inline-flex rounded-full h-5 w-5 bg-[#d4a373] border border-[#f5eedc] backdrop-blur-md items-center justify-center text-[#121215] font-bold text-[9px] shadow-lg shadow-[#d4a373]/30 group-hover:scale-125 transition-transform">
                <Target className="w-3 h-3 text-[#121215]" />
              </span>

              {/* Hover mini-badge */}
              <div className="absolute left-7 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-[#0c0c0f]/95 px-2.5 py-1 rounded border border-[#d4a373]/30 text-[10px] font-mono-tech text-[#edd0a4] shadow-xl">
                {hs.title}
              </div>
            </button>
          </div>
        );
      })}

      {/* Selected Hotspot Blueprint Card - Sleek Architectural Drawer */}
      {selectedHotspot && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-md w-[92%] bg-[#0e0e12]/90 backdrop-blur-2xl p-6 rounded-2xl border border-[#d4a373]/30 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-250">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#d4a373]/15 border border-[#d4a373]/30 flex items-center justify-center text-[#edd0a4]">
                <selectedHotspot.icon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono-tech text-[#d4a373] uppercase tracking-widest block">
                  {selectedHotspot.subtitle}
                </span>
                <h3 className="font-display font-bold text-lg text-[#f5f5f7]">
                  {selectedHotspot.title}
                </h3>
              </div>
            </div>

            <button
              onClick={() => setSelectedHotspot(null)}
              className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[#a5a29a] text-xs font-light leading-relaxed mb-4">
            {selectedHotspot.desc}
          </p>

          <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3 text-[10px] font-mono-tech text-[#c2bdae]">
            {selectedHotspot.specs.map((sp, idx) => (
              <div key={idx} className="bg-white/5 px-2 py-1.5 rounded border border-white/5 text-center">
                {sp}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
