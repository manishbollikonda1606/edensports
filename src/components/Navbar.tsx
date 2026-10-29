import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Clock, MapPin, Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Arena', href: '#arena' },
    { name: 'Slot Booker', href: '#configurator' },
    { name: 'Sports & Turf Specs', href: '#specs' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location & FAQs', href: '#location' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070A08]/85 backdrop-blur-md border-b border-[#10B981]/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Live Badge */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              {/* Interlocking pitch lines forming an 'E' */}
              <div className="w-10 h-10 rounded-xl bg-[#0F1612] border border-[#10B981]/30 p-2 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-[#D4FF00]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4FF00] fill-current">
                  <path d="M 24 16 L 76 16 L 76 28 L 40 28 L 40 44 L 70 44 L 70 56 L 40 56 L 40 72 L 76 72 L 76 84 L 24 84 Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-[#F4F7F5] group-hover:text-[#D4FF00] transition-colors leading-none">
                  EDEN SPORTS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#8E9F94] font-mono-athletic mt-1">
                  BEERAMGUDA • HYD
                </span>
              </div>
            </a>

            {/* Live Pulsing Green Dot Status Badge */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 ml-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span className="text-[11px] font-mono-athletic text-[#10B981] font-semibold tracking-wider uppercase">
                OPEN TODAY • 05:00 – 23:00
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-[#0F1612]/90 border border-[#10B981]/15 px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#8E9F94] hover:text-[#D4FF00] transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919059256936"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0F1612] hover:bg-[#16221C] border border-[#10B981]/20 hover:border-[#10B981]/50 text-xs font-mono-athletic text-[#F4F7F5] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#10B981]" />
              <span>+91 90592 56936</span>
            </a>

            <button
              onClick={() => scrollTo('#configurator')}
              className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#D4FF00] text-[#070A08] font-bold text-xs uppercase tracking-wider hover:bg-[#c2ea00] transition-all cursor-pointer volt-btn-pulse"
            >
              <span>Book Turf Slot</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => scrollTo('#configurator')}
              className="px-3 py-1.5 rounded-lg bg-[#D4FF00] text-[#070A08] font-bold text-xs uppercase tracking-wider"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0F1612] border border-[#10B981]/25 text-[#F4F7F5]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070A08] border-b border-[#10B981]/20 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span className="text-[11px] font-mono-athletic text-[#10B981] font-semibold">
              OPEN TODAY • 05:00 – 23:00
            </span>
          </div>

          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left px-3 py-2 rounded-lg text-sm font-medium text-[#8E9F94] hover:text-[#D4FF00] hover:bg-[#0F1612]"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#10B981]/15 flex flex-col gap-2">
            <a
              href="tel:+919059256936"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0F1612] border border-[#10B981]/25 text-xs font-mono-athletic text-[#F4F7F5]"
            >
              <Phone className="w-4 h-4 text-[#10B981]" />
              <span>Call +91 90592 56936</span>
            </a>
            <button
              onClick={() => scrollTo('#configurator')}
              className="w-full py-2.5 rounded-lg bg-[#D4FF00] text-[#070A08] font-bold text-xs uppercase tracking-wider"
            >
              Interactive Slot Configurator →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
