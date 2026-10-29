import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Real Arena Photo with Overlay (Matches Figma Template Vignette Hero) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/eden-photos/eden-turf-1.jpg"
          alt="Eden Sports Ground Beeramguda"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Soft Radial Vignette Overlay identical to Figma design */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40" />
      </div>

      {/* Hero Content (Exact layout from Figma SportsClub template) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white py-16">
        
        {/* Trust Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider mb-6">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>Beeramguda’s Premier Floodlit Turf • 4.8 ★ Playo Verified</span>
        </div>

        {/* Big Editorial Headline (Matches "Welcome to SportClub") */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6 drop-shadow-md">
          Welcome to <span className="text-[#60A5FA]">Eden Sports</span>
        </h1>

        {/* Subtitle (Matches "Where champions are made and friendships are forged") */}
        <p className="text-lg sm:text-2xl text-gray-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
          Where champions are made and friendships are forged on FIFA-grade synthetic turf and box cricket.
        </p>

        {/* Dual Action Buttons (Matches Figma's Primary Blue Button + White "Learn More" Button) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book a Slot</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#sports"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-gray-100 text-gray-900 font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center cursor-pointer"
          >
            Explore Turf & Sports
          </a>
        </div>

        {/* Ground Specs Quick Pill */}
        <div className="mt-14 inline-flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300 bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10">
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
