import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import ProductCanvas from './components/ProductCanvas';
import ProductSections from './components/ProductSections';
import VerticalSpine from './components/VerticalSpine';
import FinishSelector from './components/FinishSelector';
import Hotspots from './components/Hotspots';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [colorFinish, setColorFinish] = useState('titanium');

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      anchors: true,
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    let reqId;
    function raf(time) {
      lenis.raf(time);
      reqId = requestAnimationFrame(raf);
    }
    reqId = requestAnimationFrame(raf);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      lenis.destroy();
    };
  }, []);

  // Warm Studio Ambient Glows (Tungsten & Champagne Undertones)
  const finishGlowMap = {
    titanium: 'from-[#d4a373]/10 via-[#26211a]/20 to-transparent',
    champagne: 'from-[#dfb17b]/15 via-[#382a19]/25 to-transparent',
    starlight: 'from-[#f2eee6]/10 via-[#2b2926]/15 to-transparent',
    bronze: 'from-[#cc8a52]/15 via-[#361e11]/25 to-transparent',
  };

  return (
    <div className="relative min-h-screen bg-[#070709] text-[#dedede] selection:bg-[#d4a373]/30 selection:text-white">
      {/* 1. Dynamic Atmospheric Tungsten Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-all duration-700">
        <div className={`absolute top-[12%] left-[25%] w-[680px] h-[680px] rounded-full blur-[170px] bg-gradient-to-br ${finishGlowMap[colorFinish] || finishGlowMap.titanium}`} />
        <div className="absolute top-[52%] right-[12%] w-[520px] h-[520px] bg-[#d4a373]/5 rounded-full blur-[180px]" />
      </div>

      {/* 2. Precision Noise / Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 noise-overlay opacity-35" />

      {/* 3. Left-side Vertical Scrubber Timeline */}
      <VerticalSpine scrollProgress={scrollProgress} />

      {/* 4. Interactive 3D Hotspot Annotations */}
      <Hotspots scrollProgress={scrollProgress} />

      {/* 5. Fixed 3D Product Canvas */}
      <ProductCanvas scrollProgress={scrollProgress} colorFinish={colorFinish} />

      {/* 6. Apple-Style Floating Finish Selector (visible in upper showcase) */}
      {scrollProgress < 0.78 && (
        <FinishSelector colorFinish={colorFinish} setColorFinish={setColorFinish} />
      )}

      {/* 7. Top Navigation Bar */}
      <Navbar />

      {/* 8. Narrative Scroll Sections & Checkout Portal */}
      <main>
        <ProductSections 
          scrollProgress={scrollProgress} 
          colorFinish={colorFinish} 
          setColorFinish={setColorFinish} 
        />
      </main>


      {/* 10. High-End Technical Footer */}
      <Footer />
    </div>
  );
}
