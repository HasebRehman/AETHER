import React, { useState, useEffect } from 'react';
import { ArrowDown, Terminal, Cpu, Move, Zap } from 'lucide-react';

export default function Hero({ mouseCoords }) {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const measureFps = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animationId = requestAnimationFrame(measureFps);
    };

    animationId = requestAnimationFrame(measureFps);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 sm:px-12 max-w-7xl mx-auto z-10 pointer-events-none">
      {/* Top telemetry & HUD Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pointer-events-auto">
        <div className="flex items-center gap-3 glass-panel px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono-tech text-white/70">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>GPU RENDERER: VIRTUALIZED SHADER CORE</span>
          <span className="text-white/30">|</span>
          <span className="text-emerald-400 font-semibold">{fps} FPS</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono-tech text-white/50">
          <div className="flex items-center gap-2">
            <Move className="w-3.5 h-3.5 text-white/40" />
            <span>POINTER: [{mouseCoords.x.toFixed(2)}, {mouseCoords.y.toFixed(2)}]</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="hidden sm:inline text-white/60">SYS_TEMP: 34°C</span>
        </div>
      </div>

      {/* Main Massive Editorial Typography */}
      <div className="my-auto py-12 pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono-tech mb-6 tracking-wider">
          <Zap className="w-3.5 h-3.5 animate-pulse" />
          BREAKING FREE FROM FLAT TEMPLATES
        </div>

        <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.95] max-w-5xl">
          SPATIAL <br />
          <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">
            DIMENSIONS
          </span> <br />
          ON THE WEB.
        </h1>

        <p className="mt-8 text-base sm:text-xl text-white/60 max-w-2xl font-light leading-relaxed">
          Default websites drown in repetitive gradient cards. We engineer bespoke, 
          real-time WebGL geometries, reactive shader mathematics, and fluid kinetic physics 
          crafted for high-impact spatial interfaces.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#lab"
            className="px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-display font-bold text-sm tracking-wide uppercase hover:bg-cyan-300 transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:scale-[1.02]"
          >
            Launch 3D Controller
          </a>
          <a
            href="#features"
            className="px-6 py-3.5 rounded-xl glass-panel text-white font-mono-tech text-xs tracking-wider uppercase hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-white/60" />
            Inspect Architecture
          </a>
        </div>
      </div>

      {/* Hero Bottom Bar with Scroll Indicator */}
      <div className="flex flex-wrap items-end justify-between gap-4 pointer-events-auto pt-6 border-t border-white/10">
        <div className="flex items-center gap-3 text-xs font-mono-tech text-white/40">
          <span className="text-white/80 font-bold">AETHER STUDIO</span>
          <span>//</span>
          <span>THREE.JS & WEBGL COMPUTE</span>
          <span>//</span>
          <span>LATITUDE: 37.7749° N</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono-tech text-white/50 animate-bounce">
          <span>SCROLL TO EXPLORE ARCHITECTURE</span>
          <ArrowDown className="w-4 h-4 text-cyan-400" />
        </div>
      </div>
    </section>
  );
}
