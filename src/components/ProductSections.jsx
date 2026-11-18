import React, { useState } from 'react';
import { 
  ArrowDown, 
  Sparkles, 
  ArrowRight, 
  Radio, 
  Package, 
  Activity,
  Check, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Lock, 
  HelpCircle,
  Quote,
  Sliders,
  ChevronDown,
  Gift
} from 'lucide-react';

export default function ProductSections({ scrollProgress, colorFinish, setColorFinish }) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: 'United States',
    engraving: '',
    cableType: 'usb-c'
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setOrderSubmitted(true);
  };

  const finishNames = {
    titanium: 'Natural Titanium',
    champagne: 'Champagne Gold',
    starlight: 'Starlight Silver',
    bronze: 'Smoked Bronze',
  };

  const faqs = [
    {
      q: 'What is the estimated delivery timeframe for Batch 01?',
      a: 'Batch 01 (limited to 500 numbered units) begins dispatch within 5 to 7 business days via complimentary insured DHL Express global courier with signature on delivery.'
    },
    {
      q: 'How does the 30-day home trial work?',
      a: 'Experience the AETHER Apex One in your own listening environment for 30 days. If the acoustic reproduction does not exceed your expectations, return it in original packaging for a 100% full refund with zero restocking fees.'
    },
    {
      q: 'Can I connect with both wireless lossless audio and analog balanced DACs?',
      a: 'Yes. The headphones feature both Ultra-Wideband 24-bit/192kHz low-latency wireless transmission and an included magnetic braided 3.5mm/USB-C audio cable with 32-bit internal DAC passthrough.'
    },
    {
      q: 'What is covered under the 3-Year Concierge Warranty?',
      a: 'Every component — from the titanium chassis to the memory foam cushions and driver diaphragms — is backed by our direct repair-or-replace guarantee with complimentary courier collection.'
    }
  ];

  return (
    <div className="relative z-10 pointer-events-none">
      {/* =========================================================================
          STAGE 01: HERO OVERVIEW (Scroll 0% - 20%)
      ========================================================================= */}
      <section id="overview" className="landing-hero flex flex-col justify-between pb-28 px-8 sm:px-16 lg:px-24 max-w-[1440px] mx-auto">
        <div className="pointer-events-auto max-w-xl">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-[11px] font-mono-tech text-[#c29b72] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
            <span className="text-[#d4a373] text-sm">+</span>
            <span>PRODUCTION BATCH 01</span>
            <span className="text-white/20">/</span>
            <span className="text-white/40">500 SERIALIZED INSTRUMENTS</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] text-[#f7f6f2] tracking-tighter leading-[0.88]">
            AETHER <br />
            <span className="bg-gradient-to-r from-[#ffffff] via-[#ecd5be] to-[#a8825c] bg-clip-text text-transparent">
              APEX ONE.
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#b5af9f] font-editorial italic leading-relaxed max-w-lg">
            "An acoustic instrument sculpted from aerospace titanium — calibrated for sensory depth."
          </p>

          <p className="mt-2 text-xs sm:text-sm text-[#736f66] font-sans font-normal leading-relaxed max-w-md">
            Milled from solid Grade 5 titanium billets. Featuring dual 40mm titanium-vapor diaphragms, zero-gravity cranial suspension, and lossless 24-bit/192kHz spatial audio.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5">
            <a
              href="#preorder"
              className="px-7 py-3 rounded-full bg-[#e2b17a] text-[#0d0d10] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#ebd2bb] hover:scale-105 transition-all shadow-xl shadow-[#d4a373]/20 flex items-center gap-2 cursor-pointer"
            >
              <span>ORDER NOW — $590</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#metallurgy"
              className="px-5 py-3 rounded-full border border-white/15 text-[#f5f5f7] font-mono-tech text-xs uppercase hover:bg-white/5 hover:border-white/30 transition-all cursor-pointer"
            >
              Explore Architecture
            </a>
          </div>

          {/* Minimalist Datum Readout */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-6 border-t border-white/10 pt-4 font-mono-tech text-xs max-w-md">
            <div>
              <span className="text-[#59564f] text-[10px] block tracking-wider uppercase">TRANSMISSION</span>
              <span className="text-[#e2b17a] font-medium flex items-center gap-1.5 mt-0.5">
                <Radio className="w-3.5 h-3.5 text-[#d4a373]" />
                24-BIT / 192KHZ
              </span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div>
              <span className="text-[#59564f] text-[10px] block tracking-wider uppercase">MASS</span>
              <span className="text-[#f5f5f7] font-medium mt-0.5">318 GRAMS</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div>
              <span className="text-[#59564f] text-[10px] block tracking-wider uppercase">BATTERY</span>
              <span className="text-[#f5f5f7] font-medium mt-0.5">38 HOURS</span>
            </div>
          </div>
        </div>

        {/* Scroll Bar */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pointer-events-auto border-t border-white/10 pt-3 text-[10px] sm:text-[11px] font-mono-tech text-[#5e5b54]">
          <div className="flex items-center gap-3">
            <span className="text-[#f5f5f7] font-medium">STAGE 01</span>
            <span>//</span>
            <span>FLAGSHIP ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-2 animate-bounce text-[#d4a373]">
            <span>SCROLL TO UNPACK METALLURGY</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 02: METALLURGY & CHASSIS (Scroll 20% - 40%)
      ========================================================================= */}
      <section id="metallurgy" className="min-h-screen flex items-center px-8 sm:px-16 lg:px-24 max-w-[1440px] mx-auto py-24">
        <div className="pointer-events-auto max-w-lg relative">
          <div className="absolute -top-6 -left-6 text-[#d4a373]/40 text-xs font-mono-tech select-none">
            +
          </div>
          
          <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[#c29b72] tracking-[0.25em] uppercase mb-4">
            <span>02</span>
            <span className="text-white/20">/</span>
            <span>CHASSIS ARCHITECTURE</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-[#f7f6f2] tracking-tight leading-[0.95] mb-4">
            Forged in Pure <br />
            Titanium.
          </h2>

          <p className="text-[#b5af9f] font-editorial italic text-xl mb-6">
            "Machined from solid ingots of aerospace titanium with zero acoustic resonance."
          </p>

          <p className="text-[#807c73] font-sans font-normal text-sm leading-relaxed mb-8">
            Each ear-cup shell is 5-axis CNC milled from a solid titanium billet. Paired with hand-finished stainless steel telescopic arms, the acoustic seal dynamically adapts to cranial contouring with zero fatigue.
          </p>

          <div className="border-t border-white/10 divide-y divide-white/5 font-mono-tech text-xs">
            <div className="py-3 flex items-center justify-between">
              <span className="text-[#59564f]">MATERIAL</span>
              <span className="text-[#f5f5f7]">GRADE 5 TI-6AL-4V TITANIUM</span>
            </div>
            <div className="py-3 flex items-center justify-between">
              <span className="text-[#59564f]">CANOPY</span>
              <span className="text-[#edeae1]">BREATHABLE SILICONE KNIT</span>
            </div>
            <div className="py-3 flex items-center justify-between">
              <span className="text-[#59564f]">EAR CUSHIONS</span>
              <span className="text-[#edeae1]">SLOW-RECOVERY ACOUSTIC MEMORY</span>
            </div>
            <div className="py-3 flex items-center justify-between">
              <span className="text-[#59564f]">SURFACE</span>
              <span className="text-[#e2b17a]">MICRO-PEENED SATIN</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 03: EXPLODED ACOUSTIC DRIVER (Scroll 40% - 60%)
      ========================================================================= */}
      <section id="acoustics" className="min-h-screen flex items-center justify-end px-8 sm:px-16 lg:px-24 max-w-[1440px] mx-auto py-24">
        <div className="pointer-events-auto max-w-lg relative text-left">
          <div className="absolute -top-6 -left-6 text-[#d4a373]/40 text-xs font-mono-tech select-none">
            +
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[#c29b72] tracking-[0.25em] uppercase mb-4">
            <span>03</span>
            <span className="text-white/20">/</span>
            <span>EXPLODED DRIVER ARCHITECTURE</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-[#f7f6f2] tracking-tight leading-[0.95] mb-4">
            Zero Distortion. <br />
            Total Purity.
          </h2>

          <p className="text-[#b5af9f] font-editorial italic text-xl mb-6">
            "Every musical nuance preserved without algorithmic dynamic compression."
          </p>

          <p className="text-[#807c73] font-sans font-normal text-sm leading-relaxed mb-8">
            Witness the internal motor assembly: custom 40mm titanium-vapor diaphragms paired with dual neodymium ring magnets. Delivering sub-bass depth down to 4Hz while keeping total harmonic distortion below 0.08%.
          </p>

          <div className="grid grid-cols-2 gap-6 border-t border-b border-white/10 py-5 mb-8 font-mono-tech">
            <div>
              <span className="text-[#59564f] text-[10px] uppercase block tracking-wider">RESPONSE RANGE</span>
              <span className="text-[#f5f5f7] font-display font-bold text-2xl">4Hz – 48kHz</span>
            </div>
            <div>
              <span className="text-[#59564f] text-[10px] uppercase block tracking-wider">HARMONIC DISTORTION</span>
              <span className="text-[#e2b17a] font-display font-bold text-2xl">&lt; 0.08%</span>
            </div>
          </div>

          <div className="font-mono-tech text-xs">
            <div className="flex items-center justify-between text-[10px] text-[#59564f] mb-3">
              <span className="flex items-center gap-1.5 text-[#d4a373]">
                <Activity className="w-3.5 h-3.5" />
                HARMAN TARGET ALIGNMENT
              </span>
              <span className="text-[#f5f5f7]">98.4% MATCH</span>
            </div>
            <div className="flex items-end gap-1.5 h-7">
              {[40, 60, 80, 95, 85, 70, 75, 90, 85, 70, 55, 45].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-[#5e4225] to-[#d4a373] opacity-80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 04: WHAT'S IN THE BOX & SPECIFICATION MATRIX (Scroll 60% - 75%)
      ========================================================================= */}
      <section id="unbox" className="min-h-screen flex flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-[1440px] mx-auto py-28 pointer-events-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-[10px] font-mono-tech text-[#c29b72] tracking-[0.25em] uppercase mb-4">
            <Package className="w-3.5 h-3.5 text-[#d4a373]" />
            <span>04 // THE COMPLETE PACKAGE</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-[#f7f6f2] tracking-tight">
            What's in the Box.
          </h2>
          <p className="text-[#b5af9f] font-editorial italic text-lg mt-3">
            "Everything engineered with the same obsessive metallurgy as the headphones themselves."
          </p>
        </div>

        {/* 4 Box Item Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#d4a373]/40 transition-colors">
            <div className="text-[#d4a373] text-xs font-mono-tech mb-3">ITEM 01</div>
            <h3 className="font-display font-bold text-lg text-white mb-2">AETHER Apex One</h3>
            <p className="text-xs text-[#807c73] leading-relaxed">
              Serialized titanium headset in your selected finish, calibrated and packaged in an airtight chamber.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#d4a373]/40 transition-colors">
            <div className="text-[#d4a373] text-xs font-mono-tech mb-3">ITEM 02</div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Magnetic Leather Case</h3>
            <p className="text-xs text-[#807c73] leading-relaxed">
              Molded vegetable-tanned Italian saddle leather case with magnetic sleep magnets for zero battery drain.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#d4a373]/40 transition-colors">
            <div className="text-[#d4a373] text-xs font-mono-tech mb-3">ITEM 03</div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Braided Lossless Cable</h3>
            <p className="text-xs text-[#807c73] leading-relaxed">
              1.8m silver-plated oxygen-free copper cable with magnetic USB-C and 3.5mm balanced gold-plated plugs.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#d4a373]/40 transition-colors">
            <div className="text-[#d4a373] text-xs font-mono-tech mb-3">ITEM 04</div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Certificate & Flight Adapter</h3>
            <p className="text-xs text-[#807c73] leading-relaxed">
              CNC machined aluminum dual-prong airline adapter and laser-etched ownership authenticity card.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 max-w-4xl mx-auto w-full">
          <div className="text-xs font-mono-tech text-[#c29b72] uppercase tracking-wider mb-6">
            // HARDWARE COMPARISON MATRIX
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono-tech text-xs">
              <thead>
                <tr className="border-b border-white/10 text-[#59564f]">
                  <th className="pb-4">FEATURE</th>
                  <th className="pb-4 text-[#e2b17a] font-bold">AETHER APEX ONE</th>
                  <th className="pb-4">MASS-MARKET FLAGSHIP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#a8a49c]">
                <tr>
                  <td className="py-3 text-[#f5f5f7]">Chassis Construction</td>
                  <td className="py-3 text-[#e2b17a]">Grade 5 CNC Billet Titanium</td>
                  <td className="py-3 text-[#59564f]">Plastic / Thin Aluminum Stamping</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#f5f5f7]">Driver Diaphragm</td>
                  <td className="py-3 text-[#e2b17a]">40mm Pure Titanium Vapor</td>
                  <td className="py-3 text-[#59564f]">Cellulose / Polymer Blend</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#f5f5f7]">Wireless Resolution</td>
                  <td className="py-3 text-[#e2b17a]">24-Bit / 192kHz Uncompressed</td>
                  <td className="py-3 text-[#59564f]">16-Bit / 44.1kHz AAC Compressed</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#f5f5f7]">Harmonic Distortion</td>
                  <td className="py-3 text-[#e2b17a]">&lt; 0.08% @ 1kHz</td>
                  <td className="py-3 text-[#59564f]">0.3% – 0.5%</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#f5f5f7]">Warranty Coverage</td>
                  <td className="py-3 text-[#e2b17a]">3-Year Concierge Replacement</td>
                  <td className="py-3 text-[#59564f]">1-Year Standard Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 05: CURATED CRITICAL ACCLAIM (Scroll 75% - 85%)
      ========================================================================= */}
      <section className="py-24 px-8 sm:px-16 lg:px-24 max-w-[1440px] mx-auto pointer-events-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[10px] font-mono-tech text-[#c29b72] tracking-[0.25em] uppercase block mb-3">
            // ACCLAIM & CRITICS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f7f6f2] tracking-tight">
            Heard by Perfectionists.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l border-[#d4a373]/40 pl-6 py-2">
            <Quote className="w-5 h-5 text-[#d4a373] mb-3 opacity-60" />
            <p className="text-sm font-editorial italic text-[#d8cdbd] leading-relaxed mb-4">
              "The AETHER Apex One completely redefines acoustic separation. Hearing an orchestra through these titanium drivers feels like standing beside the conductor."
            </p>
            <span className="text-xs font-mono-tech text-[#736f66] uppercase tracking-wider block">
              Sound & Vision Magazine — Editor's Choice
            </span>
          </div>

          <div className="border-l border-[#d4a373]/40 pl-6 py-2">
            <Quote className="w-5 h-5 text-[#d4a373] mb-3 opacity-60" />
            <p className="text-sm font-editorial italic text-[#d8cdbd] leading-relaxed mb-4">
              "It is rare to see industrial engineering match audio mastery so flawlessly. The Grade 5 titanium chassis is a museum-worthy sculptural piece."
            </p>
            <span className="text-xs font-mono-tech text-[#736f66] uppercase tracking-wider block">
              Wallpaper* Design Awards 2026
            </span>
          </div>

          <div className="border-l border-[#d4a373]/40 pl-6 py-2">
            <Quote className="w-5 h-5 text-[#d4a373] mb-3 opacity-60" />
            <p className="text-sm font-editorial italic text-[#d8cdbd] leading-relaxed mb-4">
              "In a world of disposable plastic consumer gadgets, the Apex One feels like an heirloom mechanical watch. You buy this for life."
            </p>
            <span className="text-xs font-mono-tech text-[#736f66] uppercase tracking-wider block">
              High Fidelity Journal
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 06: INTERACTIVE CHECKOUT & PRE-ORDER PORTAL (Scroll 85% - 95%)
      ========================================================================= */}
      <section id="preorder" className="min-h-screen flex items-center justify-center px-8 sm:px-16 lg:px-24 max-w-4xl mx-auto py-32 pointer-events-auto">
        <div className="glass-panel-glow p-8 sm:p-14 rounded-3xl border border-[#d4a373]/35 shadow-2xl w-full">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono-tech text-[#c29b72] tracking-[0.25em] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#d4a373] animate-pulse" />
              <span>OFFICIAL ORDER PORTAL // BATCH 01</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#f7f6f2] tracking-tight">
              Reserve Your Pair.
            </h2>
            <p className="text-[#a8a49c] font-sans text-sm mt-3">
              Only 500 numbered units available in Production Batch 01. Complimentary worldwide courier dispatch.
            </p>
          </div>

          {orderSubmitted ? (
            <div className="p-10 rounded-2xl bg-white/5 border border-[#d4a373]/50 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#d4a373]/20 border border-[#d4a373]/40 flex items-center justify-center mx-auto mb-6 text-[#e2b17a]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">Reservation Confirmed</h3>
              <p className="text-sm font-mono-tech text-[#c29b72] mb-4">
                SERIAL CODE: APX-{Math.floor(1000 + Math.random() * 9000)} // BATCH 01
              </p>
              <p className="text-xs text-[#a8a49c] max-w-md mx-auto leading-relaxed mb-6">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. A confirmation dossier and tracking allocation have been sent to <span className="text-white font-semibold">{formData.email}</span>.
              </p>
              <button
                onClick={() => setOrderSubmitted(false)}
                className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono-tech text-white hover:bg-white/10"
              >
                Modify Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1. Selected Finish Summary */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs">
                <div>
                  <span className="text-[#59564f] text-[10px] block uppercase">Selected Edition</span>
                  <span className="text-[#f5f5f7] font-bold text-sm">{finishNames[colorFinish] || 'Natural Titanium'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#59564f] text-[10px] uppercase hidden sm:inline">Change:</span>
                  {['titanium', 'champagne', 'starlight', 'bronze'].map((f) => (
                    <button
                      type="button"
                      key={f}
                      onClick={() => setColorFinish(f)}
                      className={`px-2.5 py-1 rounded text-[10px] border uppercase transition-colors ${
                        colorFinish === f 
                          ? 'border-[#d4a373] text-[#e2b17a] bg-[#d4a373]/10 font-bold' 
                          : 'border-white/10 text-[#736f66] hover:text-white'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Customer Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-mono-tech uppercase text-[#807c73] mb-2 tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d4a373] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-tech uppercase text-[#807c73] mb-2 tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d4a373] transition-colors"
                  />
                </div>
              </div>

              {/* 3. Shipping Address */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-mono-tech uppercase text-[#807c73] mb-2 tracking-wider">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    placeholder="742 Evergreen Terrace, Suite 400"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d4a373] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-tech uppercase text-[#807c73] mb-2 tracking-wider">
                    Country
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4a373] transition-colors"
                  >
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                    <option value="Canada">Canada</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Other">Other (Global Express)</option>
                  </select>
                </div>
              </div>

              {/* 4. Complimentary Custom Laser Serialization */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono-tech text-[#c29b72]">
                  <Gift className="w-3.5 h-3.5 text-[#d4a373]" />
                  <span>COMPLIMENTARY LASER INSCRIPTION</span>
                </div>
                <input
                  type="text"
                  maxLength={16}
                  placeholder="CUSTOM TEXT OR INITIALS (MAX 16 CHARS)"
                  value={formData.engraving}
                  onChange={(e) => setFormData({ ...formData, engraving: e.target.value.toUpperCase() })}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono-tech text-[#e2b17a] placeholder-white/20 uppercase tracking-widest focus:outline-none focus:border-[#d4a373]"
                />
                <span className="text-[10px] font-mono-tech text-[#59564f] mt-1.5 block">
                  Engraved precision on inner left titanium pivot arm.
                </span>
              </div>

              {/* 5. Order Pricing Breakdown */}
              <div className="border-t border-b border-white/10 py-4 font-mono-tech text-xs space-y-2">
                <div className="flex items-center justify-between text-[#807c73]">
                  <span>AETHER Apex One Headset</span>
                  <span className="text-white">$590.00 USD</span>
                </div>
                <div className="flex items-center justify-between text-[#807c73]">
                  <span>Insured Global Courier Delivery</span>
                  <span className="text-[#d4a373]">FREE (INCLUDED)</span>
                </div>
                <div className="flex items-center justify-between text-[#807c73]">
                  <span>Concierge 3-Year Warranty & Case</span>
                  <span className="text-[#d4a373]">FREE (INCLUDED)</span>
                </div>
                <div className="flex items-center justify-between text-sm text-white font-bold pt-2 border-t border-white/5">
                  <span>TOTAL DUE TODAY</span>
                  <span className="text-[#e2b17a] text-base">$590.00 USD</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#e2b17a] text-[#0d0d10] font-display font-black text-sm uppercase tracking-wider hover:bg-[#ebd2bb] hover:scale-[1.02] transition-all shadow-xl shadow-[#d4a373]/25 flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>CONFIRM ORDER RESERVATION — $590</span>
              </button>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono-tech text-[#59564f]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4a373]" /> 256-Bit Encrypted
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#d4a373]" /> 30-Day Risk-Free Trial
                </span>
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[#d4a373]" /> Apple Pay / Cards / USDC
                </span>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* =========================================================================
          STAGE 07: CONCIERGE FAQ & CLIENT ASSURANCE
      ========================================================================= */}
      <section className="py-24 px-8 sm:px-16 lg:px-24 max-w-3xl mx-auto pointer-events-auto">
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono-tech text-[#c29b72] tracking-[0.25em] uppercase block mb-3">
            // CLIENT ADVISORY
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#f7f6f2] tracking-tight">
            Frequently Asked Questions.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10 transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left gap-4 font-display font-bold text-base text-[#f5f5f7] hover:text-[#e2b17a] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#d4a373] transition-transform duration-200 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <p className="mt-3 text-xs font-sans text-[#a8a49c] leading-relaxed pt-2 border-t border-white/5 animate-in fade-in duration-200">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
