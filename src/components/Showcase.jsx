import React from 'react';
import { ExternalLink, Tag, ShieldCheck } from 'lucide-react';

export default function Showcase() {
  const projects = [
    {
      title: 'CHRONO-MESH // 01',
      category: 'Procedural Shader Experiment',
      date: '2026',
      tags: ['GLSL', 'Raymarching', 'WebGPU Ready'],
      status: 'AWWWARDS SOTD',
      desc: 'Real-time procedural deformation mapping simulating zero-gravity organic matter under changing light waves.'
    },
    {
      title: 'NEURA-SPATIAL // 02',
      category: 'Interactive Network Graph',
      date: '2026',
      tags: ['Three.js', 'Force Directed', 'Post-Processing'],
      status: 'FWA OF THE DAY',
      desc: '3D spatial visualization of 50,000 synaptic nodes calculated dynamically with vertex buffer instances.'
    },
    {
      title: 'KINETIC CHROME // 03',
      category: 'Automotive Configurator',
      date: '2025',
      tags: ['Physical Materials', 'HDR Environment', 'Transmission'],
      status: 'BEST UI / UX',
      desc: 'High-fidelity vehicle surface reflections with real-time anisotropic highlights and glass refraction.'
    }
  ];

  return (
    <section id="showcase" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto z-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-10">
        <div>
          <span className="text-xs font-mono-tech uppercase text-cyan-400 tracking-widest block mb-3">
            // SELECTED WORK & ARCHIVES
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            Spatial Experiments.
          </h2>
        </div>
        <div className="flex items-center gap-3 font-mono-tech text-xs text-white/50">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>PRODUCTION-TESTED CODEBASES</span>
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-300 group cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono-tech text-white/40">{proj.date}</span>
                <span className="text-white/20">•</span>
                <span className="text-[11px] font-mono-tech text-cyan-400 font-semibold uppercase">{proj.category}</span>
                <span className="text-white/20">•</span>
                <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {proj.status}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-cyan-300 transition-colors">
                {proj.title}
              </h3>
              <p className="text-white/60 font-light text-sm">
                {proj.desc}
              </p>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap items-center gap-3">
              {proj.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-white/60"
                >
                  {tag}
                </span>
              ))}
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 transition-all ml-2">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
