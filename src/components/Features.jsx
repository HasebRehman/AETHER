import React from 'react';
import { Compass, Sparkles, Orbit, Layers, Flame, Gauge } from 'lucide-react';

export default function Features() {
  const cards = [
    {
      icon: Orbit,
      number: '01',
      title: 'Vector Math & Procedural Mesh',
      desc: 'Instead of loading heavy static images, geometries are calculated natively on the client GPU through Three.js vertex shaders for instant 60+ FPS responsiveness.',
      badge: 'GPU OPTIMIZED',
      highlight: 'from-cyan-500/20 to-blue-500/0'
    },
    {
      icon: Gauge,
      number: '02',
      title: 'Inertial Momentum Scrolling',
      desc: 'Powered by Lenis smooth-scroll engine. Page scrolling ceases to be a harsh mechanical jump and becomes a continuous fluid glide synchronized with the 3D camera trajectory.',
      badge: 'LENIS ENGINE',
      highlight: 'from-emerald-500/20 to-teal-500/0'
    },
    {
      icon: Sparkles,
      number: '03',
      title: 'ACES Filmic Tone Mapping',
      desc: 'Color science adapted from cinema. High-dynamic-range lights, physical clearcoat reflections, and exponential fog prevent washed-out colors and create deep atmospheric contrast.',
      badge: 'CINEMATIC HDR',
      highlight: 'from-purple-500/20 to-pink-500/0'
    },
    {
      icon: Layers,
      number: '04',
      title: 'Editorial Anti-AI Design',
      desc: 'Escaping standard AI layout templates. High-impact typography, asymmetric layout grids, bespoke micro-HUDs, and fine grain textures give an unmistakable human art direction.',
      badge: 'ART DIRECTED',
      highlight: 'from-amber-500/20 to-orange-500/0'
    }
  ];

  return (
    <section id="features" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto z-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-mono-tech uppercase text-cyan-400 tracking-widest block mb-3">
            // ARCHITECTURAL BLUEPRINT
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            Why Award Sites Look Better.
          </h2>
        </div>
        <p className="text-white/60 font-light text-sm sm:text-base max-w-md">
          Standard AI creates static flat rectangles. High-performance creative development blends 
          computational geometry, cinematography, and typography into a singular interactive canvas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle top corner gradient */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${card.highlight} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />

              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <Icon className="w-6 h-6 text-white/90" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/10 text-white/70 border border-white/10">
                    {card.badge}
                  </span>
                  <span className="font-mono-tech text-white/30 text-sm">{card.number}</span>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
