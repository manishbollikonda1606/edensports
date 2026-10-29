import React, { useState } from 'react';
import { MessageSquare, ArrowUpRight, Star, Shield, Sun, Moon, Zap, Trophy, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const [ambientMode, setAmbientMode] = useState<'night' | 'day'>('night');

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden pitch-grid-bg">
      {/* Dynamic Ambient Floodlight Glow */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none transition-all duration-700 -z-10 ${
          ambientMode === 'night' ? 'floodlight-glow-night' : 'floodlight-glow-day'
        }`}
      />

      {/* Subtle Architectural Chalk Lines */}
      <div className="absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-40 h-40 rounded-full border border-[#10B981]/10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full border border-[#10B981]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (60% width - Span 7 on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0F1612] border border-[#10B981]/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
              <span className="text-xs font-mono-athletic text-[#D4FF00] tracking-wider uppercase">
                [ BEERAMGUDA • RAMACHANDRAPURAM • HYDERABAD ]
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.04] text-[#F4F7F5] uppercase tracking-tight mb-6">
              OWN THE TURF. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] via-[#22C55E] to-[#10B981]">
                UNDER THE FLOODLIGHTS.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#8E9F94] max-w-2xl leading-relaxed mb-8 font-normal">
              FIFA-grade synthetic grass, high-cage box cricket strip, and shadow-free LED floodlights in the heart of Beeramguda. Gather your squad and lock your match slot from 5 AM to 11 PM.
            </p>

            {/* Dual Action Bar */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#configurator"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#D4FF00] text-[#070A08] font-display font-extrabold text-sm sm:text-base tracking-wide hover:bg-[#c2ea00] transition-all transform hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(212,255,0,0.25)]"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Instant WhatsApp Slot Booking</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="https://playo.co/venues/hyderabad/eden-sports-beeramguda-hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#121C16]/90 hover:bg-[#18281f] border border-[#10B981]/25 hover:border-[#10B981]/60 text-sm font-semibold text-[#F4F7F5] transition-all backdrop-blur-md"
              >
                <span>Book via Playo</span>
                <span className="text-[10px] font-mono-athletic px-1.5 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                  4.8 ★
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#8E9F94]" />
              </a>
            </div>

            {/* Live Trust Bar (Monospace) */}
            <div className="w-full pt-6 border-t border-[#10B981]/15 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono-athletic text-xs">
              <div className="flex flex-col">
                <span className="text-[#D4FF00] font-bold text-base flex items-center gap-1">
                  4.8 ★ <span className="text-[10px] font-normal text-[#8E9F94]">PLAYO</span>
                </span>
                <span className="text-[11px] text-[#8E9F94]">19+ Verified Ratings</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#EAB308] font-bold text-base flex items-center gap-1">
                  4.7 ★ <span className="text-[10px] font-normal text-[#8E9F94]">JUSTDIAL</span>
                </span>
                <span className="text-[11px] text-[#8E9F94]">27+ Ratings</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#22C55E] font-bold text-base flex items-center gap-1">
                  4.6 ★ <span className="text-[10px] font-normal text-[#8E9F94]">GOOGLE</span>
                </span>
                <span className="text-[11px] text-[#8E9F94]">30+ Reviews</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[#F4F7F5] font-bold text-base">18 HRS</span>
                <span className="text-[11px] text-[#8E9F94]">Daily Active Play</span>
              </div>
            </div>
          </div>

          {/* Right Column (40% width - Span 5 on desktop) */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame Container */}
            <div className="relative rounded-2xl overflow-hidden border border-[#10B981]/25 bg-[#0F1612] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              
              {/* Stadium Imagery */}
              <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80"
                  alt="Eden Sports Floodlit Turf Ground in Beeramguda"
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Lighting Overlay depending on mode */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                    ambientMode === 'night'
                      ? 'bg-gradient-to-t from-[#070A08] via-transparent to-transparent opacity-90'
                      : 'bg-gradient-to-t from-[#070A08] via-transparent to-[#10B981]/10 opacity-70'
                  }`}
                />
              </div>

              {/* Floating Glass Telemetry Card: Top Right */}
              <div className="absolute top-4 right-4 z-20">
                <div className="card-glass px-3 py-1.5 rounded-lg flex items-center gap-2 text-[11px] font-mono-athletic text-[#F4F7F5] border border-[#10B981]/30 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>SURFACE: PRO MONOFILAMENT</span>
                </div>
              </div>

              {/* Floating Glass Telemetry Card: Top Left */}
              <div className="absolute top-4 left-4 z-20">
                <div className="card-glass px-3 py-1.5 rounded-lg flex items-center gap-2 text-[11px] font-mono-athletic text-[#D4FF00] border border-[#D4FF00]/30 shadow-lg">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>5v5 / BOX CRICKET READY</span>
                </div>
              </div>

              {/* Bottom Interactive Session Mode Toggle */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="card-glass p-2.5 rounded-xl flex items-center justify-between border border-[#10B981]/30">
                  <div className="flex items-center gap-2 text-xs font-mono-athletic text-[#8E9F94]">
                    <Zap className="w-3.5 h-3.5 text-[#D4FF00]" />
                    <span>TURF ATMOSPHERE</span>
                  </div>

                  <div className="flex items-center gap-1 bg-[#070A08] p-1 rounded-lg border border-[#10B981]/20">
                    <button
                      onClick={() => setAmbientMode('day')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono-athletic transition-all cursor-pointer ${
                        ambientMode === 'day'
                          ? 'bg-[#10B981] text-[#070A08] font-bold'
                          : 'text-[#8E9F94] hover:text-[#F4F7F5]'
                      }`}
                    >
                      <Sun className="w-3 h-3" />
                      <span>Day (05:00-18:00)</span>
                    </button>

                    <button
                      onClick={() => setAmbientMode('night')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono-athletic transition-all cursor-pointer ${
                        ambientMode === 'night'
                          ? 'bg-[#D4FF00] text-[#070A08] font-bold shadow-[0_0_12px_rgba(212,255,0,0.5)]'
                          : 'text-[#8E9F94] hover:text-[#F4F7F5]'
                      }`}
                    >
                      <Moon className="w-3 h-3" />
                      <span>Night Lights (18:00-23:00)</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Coordinate Pill Under Image */}
            <div className="mt-3 flex items-center justify-between px-2 text-[11px] font-mono-athletic text-[#8E9F94]">
              <span>LAT: 17.5145° N • LNG: 78.2912° E</span>
              <span className="text-[#10B981]">HYDERABAD TURF CIRCUIT</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
