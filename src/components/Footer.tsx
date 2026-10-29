import React from 'react';
import { Phone, ArrowUpRight, Heart } from 'lucide-react';

interface FooterProps {
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12 border-t border-gray-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-display font-black text-2xl tracking-tight text-white block">
              Eden<span className="text-[#60A5FA]">Sports</span>
            </span>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Beeramguda’s premier floodlit sports arena for Box Cricket and Football turf matches. Built with FIFA-grade synthetic grass and high-cage boundary netting.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                Playo 4.8 ★
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-900/60 text-amber-300 border border-amber-700/50">
                Justdial 4.7 ★
              </span>
            </div>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <span className="font-bold text-gray-200 uppercase tracking-wider block mb-2">
              Explore
            </span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Arena</a></li>
              <li><a href="#sports" className="hover:text-white transition-colors">Sports & Turf</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Offerings (Span 3) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="font-bold text-gray-200 uppercase tracking-wider block mb-2">
              Activities
            </span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#sports" className="hover:text-white transition-colors">Box Cricket Cage</a></li>
              <li><a href="#sports" className="hover:text-white transition-colors">5v5 / 6v6 Football Turf</a></li>
              <li><a href="#sports" className="hover:text-white transition-colors">Corporate Tournaments</a></li>
              <li><a href="#sports" className="hover:text-white transition-colors">Youth & Adult Coaching</a></li>
            </ul>
          </div>

          {/* Booking Contact (Span 3) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="font-bold text-gray-200 uppercase tracking-wider block mb-2">
              Reserve a Slot
            </span>
            <p className="text-gray-400 leading-relaxed">
              Open 7 days a week from 5:00 AM to 11:00 PM.
            </p>
            <p className="text-white font-semibold">
              Hotline: +91 90592 56936
            </p>
            <button
              onClick={onBookClick}
              className="mt-2 w-full py-2.5 px-4 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Book Slot on WhatsApp →
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Eden Sports Arena. All rights reserved.</p>
          <p>Beside Sri Chaitanya School, Praneeth Colony, Beeramguda, Hyderabad 502032</p>
        </div>

      </div>
    </footer>
  );
};
