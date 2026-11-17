import React, { useState, useEffect } from 'react';
import { ArrowUp, ShieldCheck, Headphones, Award } from 'lucide-react';
import AetherLogo from './AetherLogo';

export default function Footer() {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 pt-20 pb-12 px-6 sm:px-12 max-w-7xl mx-auto z-20 font-mono-tech">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-white/10">
        {/* Brand & Mission */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-3">
            <AetherLogo className="w-8 h-8" />
            <span className="font-display font-black tracking-[0.2em] text-xl text-white">
              AETHER
            </span>
          </div>
          <p className="text-[#807c73] text-xs leading-relaxed max-w-xs font-sans">
            Handcrafted acoustic instruments sculpted from solid Grade 5 titanium billets. 
            Engineered with dual 40mm titanium-vapor diaphragms for uncompressed spatial fidelity.
          </p>
          <div className="flex items-center gap-2 pt-2 text-xs text-[#a8a49c]">
            <span className="w-2 h-2 rounded-full bg-[#d4a373] animate-pulse" />
            <span className="text-[#e2b17a] font-semibold">BATCH 01 ACTIVE</span>
            <span className="text-white/20">•</span>
            <span className="text-[#736f66]">{utcTime}</span>
          </div>
        </div>

        {/* Column 1: Hardware Architecture */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
            <Headphones className="w-3.5 h-3.5 text-[#d4a373]" />
            Architecture
          </h4>
          <ul className="space-y-2.5 text-xs text-[#807c73]">
            <li className="hover:text-white transition-colors">40mm Pure Titanium Vapor Driver</li>
            <li className="hover:text-white transition-colors">Grade 5 Ti-6Al-4V Billet Chassis</li>
            <li className="hover:text-white transition-colors">4Hz – 48kHz Acoustic Spectrum</li>
            <li className="hover:text-white transition-colors">Lossless 24-Bit / 192kHz Wireless</li>
            <li className="hover:text-white transition-colors">38-Hour Battery Longevity</li>
          </ul>
        </div>

        {/* Column 2: Navigation Stages */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-[#807c73]">
            <li><a href="#overview" className="hover:text-[#e2b17a] transition-colors">Overview</a></li>
            <li><a href="#metallurgy" className="hover:text-[#e2b17a] transition-colors">Metallurgy & Chassis</a></li>
            <li><a href="#acoustics" className="hover:text-[#e2b17a] transition-colors">Exploded Driver</a></li>
            <li><a href="#unbox" className="hover:text-[#e2b17a] transition-colors">In The Box Included</a></li>
            <li><a href="#preorder" className="hover:text-[#e2b17a] transition-colors">Reserve Batch 01</a></li>
          </ul>
        </div>

        {/* Column 3: Concierge Guarantee */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4a373]" />
            Client Assurance
          </h4>
          <ul className="space-y-2.5 text-xs text-[#807c73]">
            <li className="hover:text-white transition-colors">30-Day In-Home Acoustic Trial</li>
            <li className="hover:text-white transition-colors">3-Year Concierge Full Warranty</li>
            <li className="hover:text-white transition-colors">Complimentary Insured Courier</li>
            <li className="hover:text-white transition-colors">Laser Ownership Serialization</li>
            <li className="hover:text-white transition-colors">Master Calibration Certificate</li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Back to Top */}
      <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#5e5b54]">
        <div>
          © 2026 AETHER ACOUSTIC INSTRUMENTS. ALL RIGHTS RESERVED. COPENHAGEN & TOKYO.
        </div>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[#807c73] hover:text-[#e2b17a] transition-colors group cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
