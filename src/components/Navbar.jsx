import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import AetherLogo from './AetherLogo';

export default function Navbar() {
  const navLinks = [
    { name: 'OVERVIEW', href: '#overview' },
    { name: 'METALLURGY', href: '#metallurgy' },
    { name: 'ACOUSTICS', href: '#acoustics' },
    { name: 'IN THE BOX', href: '#unbox' },
    { name: 'PRE-ORDER', href: '#preorder' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-5 flex items-center justify-between pointer-events-auto">
      {/* Brand logo & Studio Wordmark */}
      <a href="#overview" className="flex items-center gap-3.5 group cursor-pointer">
        {/* Custom Unique Geometric Emblem */}
        <AetherLogo className="w-10 h-10" />

        <div className="flex flex-col">
          <span className="font-display font-black tracking-[0.24em] text-lg text-[#f5f5f7] group-hover:text-white transition-colors">
            AETHER
          </span>
          <span className="text-[10px] font-mono-tech text-[#736f66] tracking-[0.2em] uppercase">
            Acoustic Instruments
          </span>
        </div>
      </a>

      {/* Clean Navigation center pill (All 5 stages, no numbers, no //) */}
      <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-2 rounded-full border border-white/10 shadow-xl backdrop-blur-2xl">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="px-3.5 py-1 text-xs font-mono-tech font-medium text-[#99968f] hover:text-[#f5f5f7] hover:bg-white/5 rounded-full transition-all"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Right controls: CTA Button */}
      <div className="flex items-center gap-3">
        {/* Magnetic CTA button in Champagne Titanium */}
        <a
          href="#preorder"
          className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase font-display bg-[#f5eedc] text-[#121215] hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#d4a373]/20 group cursor-pointer"
        >
          <span>RESERVE</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </header>
  );
}
