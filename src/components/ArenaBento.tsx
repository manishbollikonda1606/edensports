import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Check, Car, Droplets, HeartPulse, CreditCard, ArrowRight } from 'lucide-react';

export const ArenaBento: React.FC = () => {
  const [pitchStatusActive, setPitchStatusActive] = useState<boolean>(true);

  return (
    <section id="arena" className="py-20 bg-[#070A08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F1612] border border-[#10B981]/30 text-xs font-mono-athletic text-[#D4FF00] uppercase tracking-wider mb-3">
              <span>ARCHITECTURAL BENTO // THE VENUE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F7F5] uppercase tracking-tight">
              ENGINEERED FOR UNSTOPPABLE PLAY
            </h2>
          </div>
          <p className="text-sm text-[#8E9F94] max-w-md mt-4 md:mt-0 font-normal">
            Constructed with pro-grade shock-absorbent infill, high-tension netting, and floodlights tuned for zero glare during high-speed nocturnal matches.
          </p>
        </div>

        {/* 12-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1 (Span 7): Pro Football Pitch */}
          <div className="md:col-span-7 card-glass p-7 rounded-2xl border border-[#10B981]/20 card-glass-hover relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-72 h-72 bg-radial from-[#10B981]/15 to-transparent pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-athletic text-[#10B981] px-2.5 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/25 uppercase font-semibold">
                  SURFACE ARCHITECTURE
                </span>
                <span className="text-xs font-mono-athletic text-[#8E9F94]">5v5 / 6v6 FOOTBALL</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F4F7F5] uppercase mb-3">
                FIFA-GRADE HIGH-DENSITY SYNTHETIC GRASS
              </h3>
              <p className="text-sm text-[#8E9F94] leading-relaxed mb-6 max-w-xl">
                Tough monofilament fibers engineered for low friction and optimal ball trajectory. Dual-layer shock-absorption reduces strain on knees and ankles, allowing explosive sprint cuts without turf burns.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6 font-mono-athletic text-xs">
                <div className="bg-[#070A08]/70 p-3 rounded-xl border border-[#10B981]/15">
                  <span className="text-[#8E9F94] text-[10px] block">PILE HEIGHT</span>
                  <span className="text-[#D4FF00] font-bold text-sm">40-50 MM</span>
                </div>
                <div className="bg-[#070A08]/70 p-3 rounded-xl border border-[#10B981]/15">
                  <span className="text-[#8E9F94] text-[10px] block">INFILL DENSITY</span>
                  <span className="text-[#10B981] font-bold text-sm">PRO EPDM</span>
                </div>
                <div className="bg-[#070A08]/70 p-3 rounded-xl border border-[#10B981]/15">
                  <span className="text-[#8E9F94] text-[10px] block">TRACTION RATING</span>
                  <span className="text-[#F4F7F5] font-bold text-sm">HIGH-GRIP</span>
                </div>
              </div>
            </div>

            {/* Stadium Visual Snippet */}
            <div className="relative h-44 rounded-xl overflow-hidden border border-[#10B981]/20">
              <img
                src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80"
                alt="Football Turf Action"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A08] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 text-xs font-mono-athletic text-[#D4FF00]">
                ⚡ Standard Goalposts & Perimeter Safety Padding Installed
              </div>
            </div>
          </div>

          {/* Bento Card 2 (Span 5): High-Cage Box Cricket */}
          <div className="md:col-span-5 card-glass p-7 rounded-2xl border border-[#10B981]/20 card-glass-hover flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-athletic text-[#EAB308] px-2.5 py-1 rounded bg-[#EAB308]/10 border border-[#EAB308]/25 uppercase font-semibold">
                  CRICKET ENCLOSURE
                </span>
                
                {/* Live Pitch Status Toggle */}
                <button
                  onClick={() => setPitchStatusActive(!pitchStatusActive)}
                  className="flex items-center gap-1.5 text-[11px] font-mono-athletic px-2 py-0.5 rounded-full bg-[#070A08] border border-[#10B981]/20 cursor-pointer hover:border-[#D4FF00]"
                >
                  <span className={`w-2 h-2 rounded-full ${pitchStatusActive ? 'bg-[#10B981] animate-pulse' : 'bg-red-500'}`} />
                  <span className="text-[#F4F7F5]">{pitchStatusActive ? 'PITCH 100% READY' : 'MAINTENANCE'}</span>
                </button>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F4F7F5] uppercase mb-3">
                DEDICATED CENTER PITCH STRIP
              </h3>
              <p className="text-sm text-[#8E9F94] leading-relaxed mb-6">
                Reinforced 30-foot ceiling and perimeter boundary cage designed specifically for box cricket. Predictable bounce off the center mat ensures intense 6v6 and 8v8 competitive turf faceoffs.
              </p>

              <ul className="space-y-2.5 mb-6 text-xs font-mono-athletic text-[#F4F7F5]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
                  <span>Heavy-Duty UV-Treated Cage Netting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
                  <span>Stump Creases & Bowling Run-up Stencils</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
                  <span>High-Lumen Anti-Glare Corner Floodlights</span>
                </li>
              </ul>
            </div>

            <a
              href="#configurator"
              className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-[#0F1612] border border-[#10B981]/25 hover:border-[#D4FF00] text-xs font-mono-athletic text-[#D4FF00] transition-colors"
            >
              <span>Lock Cricket Slot Window</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Bento Card 3 (Span 4): 5-Star Player Amenities */}
          <div id="amenities" className="md:col-span-4 card-glass p-6 rounded-2xl border border-[#10B981]/20 card-glass-hover">
            <span className="text-xs font-mono-athletic text-[#10B981] px-2.5 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/25 uppercase font-semibold mb-3 inline-block">
              ON-SITE AMENITIES
            </span>
            <h4 className="font-display font-black text-xl text-[#F4F7F5] uppercase mb-4">
              PRO PLAYER FACILITIES
            </h4>

            <div className="space-y-3 font-mono-athletic text-xs">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-[#070A08]/60 border border-[#10B981]/10">
                <Car className="w-4 h-4 text-[#D4FF00]" />
                <div>
                  <span className="text-[#F4F7F5] font-semibold block">Spacious Dedicated Parking</span>
                  <span className="text-[10px] text-[#8E9F94]">Safe slots for 20+ bikes & cars</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-[#070A08]/60 border border-[#10B981]/10">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <div>
                  <span className="text-[#F4F7F5] font-semibold block">Changing Rooms & Restrooms</span>
                  <span className="text-[10px] text-[#8E9F94]">Clean, sanitized private spaces</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-[#070A08]/60 border border-[#10B981]/10">
                <Droplets className="w-4 h-4 text-[#22C55E]" />
                <div>
                  <span className="text-[#F4F7F5] font-semibold block">Chilled RO Drinking Water</span>
                  <span className="text-[10px] text-[#8E9F94]">Continuous hydration point</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-[#070A08]/60 border border-[#10B981]/10">
                <HeartPulse className="w-4 h-4 text-red-400" />
                <div>
                  <span className="text-[#F4F7F5] font-semibold block">First Aid Kit Station</span>
                  <span className="text-[10px] text-[#8E9F94]">Immediate spray & bandages ready</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-[#070A08]/60 border border-[#10B981]/10">
                <CreditCard className="w-4 h-4 text-[#D4FF00]" />
                <div>
                  <span className="text-[#F4F7F5] font-semibold block">Instant UPI / QR Payments</span>
                  <span className="text-[10px] text-[#8E9F94]">Google Pay, PhonePe, Paytm accepted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 4 (Span 4): Athletic Coaching & Academy */}
          <div className="md:col-span-4 card-glass p-6 rounded-2xl border border-[#10B981]/20 card-glass-hover flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono-athletic text-[#D4FF00] px-2.5 py-1 rounded bg-[#D4FF00]/10 border border-[#D4FF00]/25 uppercase font-semibold mb-3 inline-block">
                TRAINING PROGRAM
              </span>
              <h4 className="font-display font-black text-xl text-[#F4F7F5] uppercase mb-3">
                YOUTH & ADULT COACHING
              </h4>
              <p className="text-xs text-[#8E9F94] leading-relaxed mb-4">
                Structured football and cricket developmental training for juniors, teens, and fitness-driven adults in Krishna Reddy Pet & Beeramguda.
              </p>

              <div className="bg-[#070A08] p-3 rounded-xl border border-[#10B981]/15 font-mono-athletic text-xs space-y-1 mb-4">
                <div className="flex justify-between">
                  <span className="text-[#8E9F94]">Morning Slot:</span>
                  <span className="text-[#F4F7F5] font-semibold">06:00 – 08:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8E9F94]">Evening Slot:</span>
                  <span className="text-[#F4F7F5] font-semibold">04:30 – 06:30 PM</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#10B981]/10">
                  <span className="text-[#8E9F94]">Age Brackets:</span>
                  <span className="text-[#D4FF00]">U-12, U-16, Open</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919059256936?text=Hi%20Eden%20Sports!%20I%20would%20like%20to%20enquire%20about%20your%20Coaching%20Academy%20batches%20and%20monthly%20fees."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#0F1612] border border-[#10B981]/25 hover:border-[#D4FF00] text-center text-xs font-mono-athletic text-[#F4F7F5] hover:text-[#D4FF00] transition-colors"
            >
              Enquire Coaching Batches →
            </a>
          </div>

          {/* Bento Card 5 (Span 4): Corporate & Bulk Tournaments */}
          <div className="md:col-span-4 card-glass p-6 rounded-2xl border border-[#10B981]/20 card-glass-hover flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono-athletic text-[#22C55E] px-2.5 py-1 rounded bg-[#22C55E]/10 border border-[#22C55E]/25 uppercase font-semibold mb-3 inline-block">
                CORPORATE & EVENTS
              </span>
              <h4 className="font-display font-black text-xl text-[#F4F7F5] uppercase mb-3">
                LEAGUE & TOURNAMENT HOSTING
              </h4>
              <p className="text-xs text-[#8E9F94] leading-relaxed mb-4">
                Tailor-made ground takeovers for corporate teams from BHEL, Financial District tech firms, inter-college cups, and group birthday matches.
              </p>

              <div className="space-y-2 text-xs font-mono-athletic text-[#8E9F94] mb-4">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Continuous 3 to 8 Hour Turf Blocking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Trophy & Digital Scoreboard Space</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Ample Parking for Squad Convoys</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919059256936?text=Hi%20Eden%20Sports!%20We%20are%20planning%20a%20Corporate%20/%20Bulk%20Tournament%20and%20would%20like%20to%20discuss%20slot%20blocking%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#D4FF00] hover:bg-[#c2ea00] text-center text-xs font-mono-athletic font-bold text-[#070A08] transition-colors"
            >
              Discuss Tournament Package →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
