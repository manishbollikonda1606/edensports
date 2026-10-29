import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Sports & Turf', href: '#sports' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl py-1'
          : 'bg-black/25 backdrop-blur-md border-b border-white/10 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="font-display font-extrabold text-2xl tracking-tight text-white transition-colors">
              Eden<span className="text-[#60A5FA]">Sports</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-400/30 backdrop-blur-md">
              Beeramguda Arena
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 bg-white/10 px-6 py-2 rounded-full border border-white/15 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919059256936"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-200 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>+91 90592 56936</span>
            </a>

            <button
              onClick={onBookClick}
              className="px-6 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-95 cursor-pointer flex items-center gap-2 border border-blue-400/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Slot</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="px-3.5 py-1.5 rounded-lg bg-[#1D4ED8] text-white font-medium text-xs shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-white bg-white/10 backdrop-blur-md border border-white/15"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-black/85 backdrop-blur-2xl border-b border-white/10 px-4 pt-2 pb-6 space-y-3 animate-in fade-in text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="tel:+919059256936"
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-200"
            >
              <Phone className="w-4 h-4 text-[#60A5FA]" />
              <span>+91 90592 56936</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
