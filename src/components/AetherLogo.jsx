import React from 'react';

export default function AetherLogo({ className = "w-9 h-9" }) {
  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
      {/* Ambient warm glow behind the emblem */}
      <div className="absolute inset-0 rounded-xl bg-[#d4a373]/15 blur-md group-hover:bg-[#d4a373]/30 transition-all duration-500" />
      
      {/* Precision Frame */}
      <div className="relative w-full h-full rounded-xl bg-gradient-to-b from-[#1c1c22] to-[#0c0c0f] border border-[#d4a373]/30 p-1.5 flex items-center justify-center shadow-lg group-hover:border-[#d4a373]/60 transition-all duration-300">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        >
          <defs>
            <linearGradient id="aetherGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#ecd5be" />
              <stop offset="100%" stopColor="#b88358" />
            </linearGradient>
            <linearGradient id="aetherAcoustic" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#e2b17a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d4a373" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Concentric Acoustic Resonance Horizons */}
          <circle cx="18" cy="18" r="14.5" stroke="url(#aetherAcoustic)" strokeWidth="0.75" strokeDasharray="1.5 2" opacity="0.6" />
          <circle cx="18" cy="18" r="10.5" stroke="url(#aetherAcoustic)" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />

          {/* Central Architectural Delta Monogram 'A' */}
          <path
            d="M18 6L7 28H12L18 15.5L24 28H29L18 6Z"
            fill="url(#aetherGold)"
            className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          />

          {/* Inner Acoustic Waveform Bar */}
          <path
            d="M14 22.5H22"
            stroke="#0c0c0f"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M15 22.5H21"
            stroke="url(#aetherGold)"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Radiant Core Point */}
          <circle cx="18" cy="13.5" r="1.2" fill="#ffffff" />
          <circle cx="18" cy="13.5" r="2.2" stroke="#d4a373" strokeWidth="0.6" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}
