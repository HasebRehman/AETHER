import React from 'react';
import { Sliders, Box, Eye, Palette, CheckCircle2, RefreshCw } from 'lucide-react';

export default function InteractiveLab({
  meshType,
  setMeshType,
  wireframe,
  setWireframe,
  colorScheme,
  setColorScheme
}) {
  const meshOptions = [
    { id: 'knot', name: 'Hyper-Knot', poly: '180 x 32', desc: 'Complex topological manifold with physical reflections' },
    { id: 'core', name: 'Quantum Core', poly: 'Subdivided Ico', desc: 'Symmetrical geodesic sphere with inner core' },
    { id: 'portal', name: 'Spatial Portal', poly: 'Torus Halo', desc: 'Kinematic gateway with high specular refraction' },
    { id: 'octa', name: 'Octa Lattice', poly: 'Dual Octahedron', desc: 'Sharp crystalline facets with metallic shading' },
  ];

  const colorOptions = [
    { id: 'cyan', name: 'Cyan Aurora', hex: '#00f2fe', bg: 'bg-cyan-500' },
    { id: 'emerald', name: 'Emerald Void', hex: '#10b981', bg: 'bg-emerald-500' },
    { id: 'amber', name: 'Solar Amber', hex: '#f59e0b', bg: 'bg-amber-500' },
    { id: 'violet', name: 'Violet Nebula', hex: '#a855f7', bg: 'bg-purple-500' },
  ];

  return (
    <section id="lab" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto z-20">
      <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-cyan-400 mb-3">
              <Sliders className="w-3.5 h-3.5" />
              LIVE WEBGL EXPERIMENTATION DECK
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Interactive 3D Controller
            </h2>
            <p className="mt-2 text-white/60 font-light text-sm sm:text-base max-w-xl">
              Modify the 3D scene parameters directly. Watch the WebGL canvas update geometries, 
              switch between physical clearcoat materials and cybernetic wireframes, and swap spectral chromatic profiles.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 font-mono-tech text-xs text-white/70">
            <div>
              <span className="block text-white/30 text-[10px] uppercase">Active Geometry</span>
              <span className="text-white font-bold uppercase">{meshType}</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="block text-white/30 text-[10px] uppercase">Shader Mode</span>
              <span className="text-cyan-400 font-bold uppercase">{wireframe ? 'Wireframe' : 'Physical Clearcoat'}</span>
            </div>
          </div>
        </div>

        {/* Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* 1. Geometry Selector */}
          <div>
            <label className="flex items-center gap-2 text-xs font-mono-tech uppercase text-white/50 tracking-wider mb-4">
              <Box className="w-4 h-4 text-cyan-400" />
              01 // Choose 3D Geometry
            </label>
            <div className="space-y-2.5">
              {meshOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setMeshType(opt.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    meshType === opt.id
                      ? 'bg-cyan-500/15 border-cyan-500/50 text-white shadow-lg shadow-cyan-500/10'
                      : 'bg-white/5 border-white/10 text-white/60 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {opt.name}
                    </div>
                    <div className="text-[11px] text-white/40 font-mono-tech">{opt.poly}</div>
                  </div>
                  {meshType === opt.id && (
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Shading & Wireframe Toggle */}
          <div>
            <label className="flex items-center gap-2 text-xs font-mono-tech uppercase text-white/50 tracking-wider mb-4">
              <Eye className="w-4 h-4 text-emerald-400" />
              02 // Material Render Pass
            </label>
            <div className="space-y-3">
              <button
                onClick={() => setWireframe(false)}
                className={`w-full p-4 rounded-xl border text-left transition-all ${
                  !wireframe
                    ? 'bg-emerald-500/15 border-emerald-500/50 text-white'
                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                }`}
              >
                <div className="font-display font-semibold text-sm text-white">Physical Metallic Glass</div>
                <p className="text-xs text-white/50 mt-1 font-light">
                  Specular highlights, roughness calculation, and environment reflections.
                </p>
              </button>

              <button
                onClick={() => setWireframe(true)}
                className={`w-full p-4 rounded-xl border text-left transition-all ${
                  wireframe
                    ? 'bg-emerald-500/15 border-emerald-500/50 text-white'
                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                }`}
              >
                <div className="font-display font-semibold text-sm text-white">Vector Wireframe Core</div>
                <p className="text-xs text-white/50 mt-1 font-light">
                  Direct polygon tessellation rendering revealing geometric structure.
                </p>
              </button>
            </div>
          </div>

          {/* 3. Color Spectral Profile */}
          <div>
            <label className="flex items-center gap-2 text-xs font-mono-tech uppercase text-white/50 tracking-wider mb-4">
              <Palette className="w-4 h-4 text-purple-400" />
              03 // Spectral Lighting
            </label>
            <div className="grid grid-cols-2 gap-3">
              {colorOptions.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColorScheme(c.id)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-24 ${
                    colorScheme === c.id
                      ? 'bg-white/10 border-white/40 shadow-lg'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`w-3.5 h-3.5 rounded-full ${c.bg} shadow-md`} />
                    {colorScheme === c.id && <span className="text-[10px] font-mono-tech text-white/80">ACTIVE</span>}
                  </div>
                  <div>
                    <span className="text-xs font-display font-bold text-white block">{c.name}</span>
                    <span className="text-[10px] font-mono-tech text-white/40">{c.hex}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono-tech text-white/50 leading-relaxed">
              Tip: Move your mouse across the screen to dynamically steer the PointLight and cast live dynamic specular reflections across the surfaces.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
