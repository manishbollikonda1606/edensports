import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050705] border-t border-[#10B981]/20 pt-16 pb-24 md:pb-16 text-left relative overflow-hidden">
      {/* Background Chalk Markings */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#10B981]/15">
          
          {/* Brand Col (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F1612] border border-[#10B981]/30 p-2 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4FF00] fill-current">
                  <path d="M 24 16 L 76 16 L 76 28 L 40 28 L 40 44 L 70 44 L 70 56 L 40 56 L 40 72 L 76 72 L 76 84 L 24 84 Z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-[#F4F7F5] tracking-tight block">
                  EDEN SPORTS
                </span>
                <span className="text-[10px] font-mono-athletic text-[#8E9F94] uppercase tracking-widest">
                  BEERAMGUDA • HYDERABAD
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8E9F94] leading-relaxed max-w-sm">
              Hyderabad’s premier floodlit sporting arena for 5v5/6v6 Football and Box Cricket. Built with FIFA-grade monofilament grass, high-cage safety enclosure, and stadium LED lighting.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/25 text-[11px] font-mono-athletic text-[#10B981]">
                PLAYO 4.8 ★
              </span>
              <span className="px-2.5 py-1 rounded bg-[#EAB308]/10 border border-[#EAB308]/25 text-[11px] font-mono-athletic text-[#EAB308]">
                JUSTDIAL 4.7 ★
              </span>
              <span className="px-2.5 py-1 rounded bg-[#D4FF00]/10 border border-[#D4FF00]/25 text-[11px] font-mono-athletic text-[#D4FF00]">
                GOOGLE 4.6 ★
              </span>
            </div>
          </div>

          {/* Quick Arena Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3 font-mono-athletic text-xs">
            <span className="text-[11px] text-[#D4FF00] font-bold uppercase tracking-wider block mb-2">
              ARENA NAVIGATION
            </span>
            <ul className="space-y-2 text-[#8E9F94]">
              <li>
                <a href="#arena" className="hover:text-[#F4F7F5] transition-colors">
                  Football Pitch
                </a>
              </li>
              <li>
                <a href="#arena" className="hover:text-[#F4F7F5] transition-colors">
                  Box Cricket Strip
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-[#F4F7F5] transition-colors">
                  Turf Blueprint Specs
                </a>
              </li>
              <li>
                <a href="#configurator" className="hover:text-[#F4F7F5] transition-colors">
                  Slot Booking Engine
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#F4F7F5] transition-colors">
                  Player Amenities
                </a>
              </li>
            </ul>
          </div>

          {/* Partner & Booking Channels (Span 3) */}
          <div className="lg:col-span-3 space-y-3 font-mono-athletic text-xs">
            <span className="text-[11px] text-[#D4FF00] font-bold uppercase tracking-wider block mb-2">
              BOOKING CHANNELS
            </span>
            <ul className="space-y-2 text-[#8E9F94]">
              <li>
                <a
                  href="https://playo.co/venues/hyderabad/eden-sports-beeramguda-hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#10B981] transition-colors"
                >
                  <span>Playo App Listing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919059256936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#D4FF00] transition-colors"
                >
                  <span>Direct WhatsApp Line</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+919059256936"
                  className="flex items-center gap-1.5 hover:text-[#F4F7F5] transition-colors"
                >
                  <span>Direct Phone Hotline</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <span className="text-[#8E9F94]/70">Corporate / Tournament Inquiries</span>
              </li>
            </ul>
          </div>

          {/* Location & Contact Direct (Span 3) */}
          <div className="lg:col-span-3 space-y-3 font-mono-athletic text-xs">
            <span className="text-[11px] text-[#D4FF00] font-bold uppercase tracking-wider block mb-2">
              CONTACT & ADDRESS
            </span>
            <div className="text-[#8E9F94] space-y-2">
              <p className="leading-relaxed">
                Green Meadows, Beside Sri Chaitanya School, Praneeth Colony, Beeramguda, Hyderabad 502032
              </p>
              <p className="text-[#F4F7F5] font-semibold">
                Phone: +91 90592 56936
              </p>
              <p className="text-[#10B981]">
                Timing: 05:00 AM – 11:00 PM (365 Days)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-athletic text-[#8E9F94] gap-4">
          <p>© {new Date().getFullYear()} Eden Sports Arena, Beeramguda. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>RAMACHANDRAPURAM • HYDERABAD</span>
            <span className="text-[#10B981]">502032</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
