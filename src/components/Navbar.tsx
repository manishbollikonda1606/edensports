import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Sports & Turf', href: '#sports' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand (Matches Figma 'SportClub' bold vibrant primary title) */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-display font-extrabold text-2xl tracking-tight text-[#1D4ED8] group-hover:text-[#2563EB] transition-colors">
              Eden<span className="text-gray-900">Sports</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Beeramguda Arena
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#1D4ED8] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button (Matches Figma 'Join / Book' Pill) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919059256936"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-[#1D4ED8]"
            >
              <Phone className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>+91 90592 56936</span>
            </a>

            <button
              onClick={onBookClick}
              className="px-6 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Slot</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="px-4 py-2 rounded-lg bg-[#1D4ED8] text-white font-medium text-xs shadow-sm"
            >
              Book Slot
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-[#1D4ED8] hover:bg-blue-50/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <a
              href="tel:+919059256936"
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-800"
            >
              <Phone className="w-4 h-4 text-[#1D4ED8]" />
              <span>+91 90592 56936</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
