import React, { useState } from 'react';
import { Layers, Shield, Zap, Sparkles, CheckCircle2, Info } from 'lucide-react';

export const TurfBlueprint: React.FC = () => {
  const [layoutMode, setLayoutMode] = useState<'football' | 'cricket'>('football');
  const [activeHotspot, setActiveHotspot] = useState<string | null>('surface');

  const hotspots = {
    surface: {
      title: 'Monofilament AstroTurf & Shockpad',
      spec: '45mm pile height with dual-density silica & EPDM infill',
      benefit: 'Natural ball roll, zero ankle shear strain, skin-friendly for slide tackles.',
    },
    caging: {
      title: '30+ Ft High-Tensile Boundary Cage',
      spec: 'UV-stabilized braided nylon mesh enclosing sides and roof',
      benefit: 'Keeps intense power shots inside the arena; no lost balls or match stoppages.',
    },
    floodlights: {
      title: 'Industrial High-Lumen Anti-Glare LEDs',
      spec: '6-pole array calibrated to 400+ lux on playing surface',
      benefit: 'Even distribution without blinding dark spots or strobe effect in night matches.',
    },
    drainage: {
      title: 'Sub-Base Quick-Drain Permeable System',
      spec: 'Perforated geotextile matrix & crushed aggregate bed',
      benefit: 'Monsoon-ready. Play resumes within 20 minutes after heavy Hyderabad rain.',
    },
  };

  return (
    <section id="specs" className="py-20 bg-[#0A0F0C] relative border-t border-[#10B981]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F1612] border border-[#10B981]/30 text-xs font-mono-athletic text-[#D4FF00] uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Architectural Blueprint</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F7F5] uppercase tracking-tight mb-4">
            TURF BLUEPRINT & SPECS
          </h2>
          <p className="text-sm sm:text-base text-[#8E9F94]">
            Toggle between the 5v5 Football setup and Box Cricket cage layout. Click the telemetry hotspots to inspect the engineering specifications of Eden Sports.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-xl bg-[#0F1612] border border-[#10B981]/25 mt-6">
            <button
              onClick={() => setLayoutMode('football')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono-athletic transition-all cursor-pointer ${
                layoutMode === 'football'
                  ? 'bg-[#10B981] text-[#070A08] font-bold shadow-md'
                  : 'text-[#8E9F94] hover:text-[#F4F7F5]'
              }`}
            >
              <span>⚽ 5v5 Football Layout</span>
            </button>

            <button
              onClick={() => setLayoutMode('cricket')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono-athletic transition-all cursor-pointer ${
                layoutMode === 'cricket'
                  ? 'bg-[#D4FF00] text-[#070A08] font-bold shadow-[0_0_15px_rgba(212,255,0,0.4)]'
                  : 'text-[#8E9F94] hover:text-[#F4F7F5]'
              }`}
            >
              <span>🏏 Box Cricket Layout</span>
            </button>
          </div>
        </div>

        {/* Blueprint Visual & Hotspots Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Blueprint Canvas (Span 8) */}
          <div className="lg:col-span-8 bg-[#070A08] rounded-2xl border-2 border-[#10B981]/30 p-4 sm:p-8 relative overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
            
            {/* Pitch Markings Background SVG */}
            <div className="relative aspect-[16/10] w-full rounded-xl border-2 border-[#10B981]/40 bg-[#0c1610] p-4 overflow-hidden flex items-center justify-center">
              
              {/* Pitch Grass Stripes */}
              <div className="absolute inset-0 grid grid-cols-8 pointer-events-none opacity-20">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-full ${i % 2 === 0 ? 'bg-[#10B981]/20' : 'bg-transparent'}`}
                  />
                ))}
              </div>

              {/* Pitch Dimensions Overlay in Corner */}
              <div className="absolute top-3 left-3 text-[10px] font-mono-athletic text-[#10B981] bg-[#070A08]/80 px-2 py-1 rounded border border-[#10B981]/20">
                TURF: 100 FT × 55 FT • CLEAR ROOF: 30 FT
              </div>

              {/* Floodlight Pole Icons in 4 Corners */}
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#D4FF00] animate-pulse" title="Floodlight Pole" />
              <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#D4FF00] animate-pulse" title="Floodlight Pole" />
              <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-[#D4FF00] animate-pulse" title="Floodlight Pole" />
              <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-[#D4FF00] animate-pulse" title="Floodlight Pole" />

              {/* FOOTBALL LAYOUT GRAPHIC */}
              {layoutMode === 'football' && (
                <div className="relative w-full h-full border border-[#10B981]/50 rounded-lg flex items-center justify-center animate-in fade-in duration-300">
                  {/* Halfway Line */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#10B981]/60" />
                  
                  {/* Center Circle */}
                  <div className="w-28 h-28 rounded-full border border-[#10B981]/60 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#D4FF00]" />
                  </div>

                  {/* Left Goal & Penalty Box */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-36 border-r border-y border-[#10B981]/60 flex items-center">
                    <div className="w-3 h-14 bg-[#D4FF00]/40 border border-[#D4FF00]" />
                  </div>

                  {/* Right Goal & Penalty Box */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-36 border-l border-y border-[#10B981]/60 flex items-center justify-end">
                    <div className="w-3 h-14 bg-[#D4FF00]/40 border border-[#D4FF00]" />
                  </div>
                </div>
              )}

              {/* BOX CRICKET LAYOUT GRAPHIC */}
              {layoutMode === 'cricket' && (
                <div className="relative w-full h-full border border-[#EAB308]/50 rounded-lg flex items-center justify-center animate-in fade-in duration-300">
                  {/* Center Cricket Pitch Strip (Amber Hue) */}
                  <div className="w-3/5 h-16 bg-[#EAB308]/20 border-2 border-[#EAB308] rounded-sm flex items-center justify-between px-4 relative">
                    
                    {/* Bowling Crease (Left) */}
                    <div className="flex flex-col items-center">
                      <div className="w-1.5 h-10 bg-[#D4FF00]" />
                      <span className="text-[8px] font-mono-athletic text-[#D4FF00] mt-1">BOWLER</span>
                    </div>

                    {/* Pitch Center Marking */}
                    <div className="text-[10px] font-mono-athletic text-[#EAB308] font-bold tracking-widest">
                      22-YARD STRIP
                    </div>

                    {/* Batting Crease (Right) */}
                    <div className="flex flex-col items-center">
                      <div className="w-1.5 h-10 bg-[#D4FF00]" />
                      <span className="text-[8px] font-mono-athletic text-[#D4FF00] mt-1">BATSMAN</span>
                    </div>
                  </div>

                  {/* High Net Boundary Markings */}
                  <div className="absolute inset-4 border border-dashed border-[#10B981]/40 pointer-events-none rounded flex items-center justify-between px-2">
                    <span className="text-[9px] font-mono-athletic text-[#8E9F94] rotate-90">OVERHEAD ROOF NET</span>
                    <span className="text-[9px] font-mono-athletic text-[#8E9F94] -rotate-90">POWERPLAY 6-RUN WALL</span>
                  </div>
                </div>
              )}

              {/* Hotspot Indicators */}
              <button
                onClick={() => setActiveHotspot('surface')}
                className="absolute top-1/3 left-1/3 p-1.5 rounded-full bg-[#D4FF00] text-[#070A08] font-bold text-xs shadow-[0_0_12px_#D4FF00] transform hover:scale-125 transition-transform cursor-pointer"
                title="Grass Surface"
              >
                1
              </button>

              <button
                onClick={() => setActiveHotspot('caging')}
                className="absolute top-4 right-1/4 p-1.5 rounded-full bg-[#10B981] text-[#070A08] font-bold text-xs shadow-[0_0_12px_#10B981] transform hover:scale-125 transition-transform cursor-pointer"
                title="Enclosure Netting"
              >
                2
              </button>

              <button
                onClick={() => setActiveHotspot('floodlights')}
                className="absolute bottom-4 left-1/4 p-1.5 rounded-full bg-[#D4FF00] text-[#070A08] font-bold text-xs shadow-[0_0_12px_#D4FF00] transform hover:scale-125 transition-transform cursor-pointer"
                title="LED Lighting"
              >
                3
              </button>

              <button
                onClick={() => setActiveHotspot('drainage')}
                className="absolute bottom-1/3 right-1/3 p-1.5 rounded-full bg-[#22C55E] text-[#070A08] font-bold text-xs shadow-[0_0_12px_#22C55E] transform hover:scale-125 transition-transform cursor-pointer"
                title="Quick Drainage"
              >
                4
              </button>

            </div>

            {/* Quick Legend Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-mono-athletic text-[#8E9F94] pt-2 border-t border-[#10B981]/15">
              <span>● [1] Turf Surface</span>
              <span>● [2] 30ft Cage Netting</span>
              <span>● [3] Floodlight Array</span>
              <span>● [4] Sub-Base Drainage</span>
            </div>

          </div>

          {/* Hotspot Telemetry Card (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="card-glass p-6 rounded-2xl border border-[#10B981]/25 text-left">
              <div className="flex items-center gap-2 text-xs font-mono-athletic text-[#D4FF00] mb-2 uppercase">
                <Info className="w-4 h-4" />
                <span>HOTSPOT TELEMETRY SPEC</span>
              </div>

              {activeHotspot && hotspots[activeHotspot as keyof typeof hotspots] && (
                <div className="space-y-4">
                  <h3 className="font-display font-black text-2xl text-[#F4F7F5] uppercase">
                    {hotspots[activeHotspot as keyof typeof hotspots].title}
                  </h3>

                  <div className="bg-[#070A08] p-3.5 rounded-xl border border-[#10B981]/15">
                    <span className="text-[10px] font-mono-athletic text-[#8E9F94] uppercase block mb-1">
                      TECHNICAL PARAMETER
                    </span>
                    <span className="text-xs font-mono-athletic text-[#D4FF00] font-semibold">
                      {hotspots[activeHotspot as keyof typeof hotspots].spec}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono-athletic text-[#8E9F94] uppercase block mb-1">
                      PLAYER IMPACT & ADVANTAGE
                    </span>
                    <p className="text-xs text-[#F4F7F5] leading-relaxed">
                      {hotspots[activeHotspot as keyof typeof hotspots].benefit}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Matchday Ready Callout */}
            <div className="p-4 rounded-xl bg-[#0F1612] border border-[#10B981]/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-display font-bold text-[#F4F7F5] block">
                  READY TO TEST THE PITCH?
                </span>
                <span className="text-[11px] font-mono-athletic text-[#8E9F94]">
                  Slot booking open 7 days a week
                </span>
              </div>
              <a
                href="#configurator"
                className="px-3.5 py-2 rounded-lg bg-[#D4FF00] text-[#070A08] font-mono-athletic font-bold text-xs uppercase"
              >
                Book Now
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
