import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Real Arena Photo with Lightened Overlay so Turf is Clearly Visible */}
      <div className="absolute inset-0 z-0">
        <img
          src="/eden-photos/eden-turf-1.jpg"
          alt="Eden Sports Ground Beeramguda"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle gradient overlay tuned for maximum photo clarity while preserving text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white py-12">
        
        {/* Trust Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider mb-6 shadow-md">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>Beeramguda’s Premier Floodlit Turf • 4.8 ★ Playo Verified</span>
        </div>

        {/* Big Editorial Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          Welcome to <span className="text-[#60A5FA]">Eden Sports</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-gray-100 font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Where champions are made and friendships are forged on FIFA-grade synthetic turf and box cricket.
        </p>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2 cursor-pointer border border-blue-400/30"
          >
            <span>Book a Slot</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#sports"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/95 hover:bg-white text-gray-950 font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-xl backdrop-blur-md flex items-center justify-center cursor-pointer"
          >
            Explore Turf & Sports
          </a>
        </div>

        {/* Ground Specs Quick Pill with frosted glass */}
        <div className="mt-14 inline-flex flex-wrap items-center justify-center gap-6 text-xs text-gray-200 bg-black/45 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 shadow-2xl">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Open Daily 05:00 AM – 11:00 PM</span>
          </div>
          <span className="hidden sm:inline text-gray-500">•</span>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-400" />
            <span>30+ Ft Heavy Enclosure Cage</span>
          </div>
          <span className="hidden sm:inline text-gray-500">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Center Pitch Box Cricket Ready</span>
          </div>
        </div>

      </div>
    </section>
  );
};
