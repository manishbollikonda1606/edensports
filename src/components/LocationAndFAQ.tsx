import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Navigation, ChevronDown, Clock, Shield, Sparkles } from 'lucide-react';

export const LocationAndFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are the operating hours of Eden Sports?',
      answer:
        'Eden Sports operates every day from 5:00 AM to 11:00 PM (365 days a year). Whether you want an early morning fresh-air cricket match or a late-night floodlit football faceoff, slots are available around the clock.',
    },
    {
      question: 'How do I book a slot for Football or Box Cricket?',
      answer:
        'Booking is instant! You can configure your match details using our on-page interactive slot configurator which sends a pre-filled WhatsApp request directly to +91 90592 56936, or you can call us directly or find us on Playo.',
    },
    {
      question: 'Do you offer monthly coaching or corporate tournament packages?',
      answer:
        'Yes! We conduct regular morning and evening coaching batches for youth and adults with licensed coaches. For corporate tournaments, college leagues, or birthday turf takeovers, we provide bulk slot blocking, umpire coordination, and scoreboard setups.',
    },
    {
      question: 'What amenities and parking facilities are available on-site?',
      answer:
        'We offer generous dedicated bike and car parking right beside Sri Chaitanya School, hygienic private changing rooms, sanitized restrooms, chilled RO drinking water dispensers, and on-site first aid emergency kits. We also accept all UPI payments (Google Pay, PhonePe, Paytm).',
    },
    {
      question: 'Can we play during rains? Does water pool on the turf?',
      answer:
        'Eden Sports is built with an engineered sub-base porous aggregate matrix. Even during torrential monsoon spells, rainwater drains rapidly within 15–20 minutes without waterlogging, keeping your match on schedule.',
    },
  ];

  return (
    <section id="location" className="py-20 bg-[#0A0F0C] relative border-t border-[#10B981]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F1612] border border-[#10B981]/30 text-xs font-mono-athletic text-[#D4FF00] uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>GROUND LOCATION & FAQ KNOWLEDGE BASE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F7F5] uppercase tracking-tight mb-4">
            FIND THE TURF. GET ANSWERS.
          </h2>
          <p className="text-sm sm:text-base text-[#8E9F94]">
            Conveniently situated in Praneeth Colony, Beeramguda, right beside Sri Chaitanya School. Rapidly accessible from BHEL Township, Ramachandrapuram, and Patancheru.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Location Command Center (Span 6) */}
          <div className="lg:col-span-6 card-glass p-6 sm:p-7 rounded-2xl border border-[#10B981]/25 text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono-athletic text-[#D4FF00] uppercase tracking-wider font-semibold">
                VENUE HEADQUARTERS
              </span>
              <span className="text-xs font-mono-athletic text-[#10B981]">PIN: 502032</span>
            </div>

            <h3 className="font-display font-black text-2xl text-[#F4F7F5] uppercase mb-2">
              EDEN SPORTS ARENA
            </h3>
            
            <p className="text-sm text-[#8E9F94] leading-relaxed mb-6 font-normal">
              Green Meadows, Beside Sri Chaitanya School, Praneeth Colony, Beeramguda, Krishna Reddy Pet, Ramachandrapuram (BHEL Township), Hyderabad, Telangana 502032
            </p>

            {/* Quick Distance Badges in JetBrains Mono */}
            <div className="space-y-2 mb-6 font-mono-athletic text-xs">
              <div className="p-2.5 rounded-lg bg-[#070A08] border border-[#10B981]/15 flex items-center justify-between">
                <span className="text-[#F4F7F5]">📍 Landmark:</span>
                <span className="text-[#D4FF00]">Beside Sri Chaitanya School</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#070A08] border border-[#10B981]/15 flex items-center justify-between">
                <span className="text-[#F4F7F5]">🚗 From BHEL / RC Puram:</span>
                <span className="text-[#10B981]">Approx 5 Mins</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#070A08] border border-[#10B981]/15 flex items-center justify-between">
                <span className="text-[#F4F7F5]">🚗 From Patancheru / Ameenpur:</span>
                <span className="text-[#10B981]">Approx 10 Mins</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#070A08] border border-[#10B981]/15 flex items-center justify-between">
                <span className="text-[#F4F7F5]">🕒 Daily Operating Schedule:</span>
                <span className="text-[#D4FF00]">05:00 AM – 11:00 PM</span>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="relative h-56 rounded-xl overflow-hidden border border-[#10B981]/30 mb-6 bg-[#070A08]">
              <iframe
                title="Eden Sports Beeramguda Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1275217424915!2d78.2912!3d17.5145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f8bb1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sBeeramguda%2C%20Hyderabad%2C%20Telangana%20502032!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full filter invert contrast-125 opacity-80"
                style={{ border: 0 }}
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#070A08]/90 px-2.5 py-1 rounded text-[11px] font-mono-athletic text-[#D4FF00] border border-[#10B981]/30">
                17.5145° N, 78.2912° E
              </div>
            </div>

            {/* One-Tap Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://maps.google.com/?q=Eden+Sports+Beeramguda+Beside+Sri+Chaitanya+School+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#121C16] border border-[#10B981]/30 hover:border-[#D4FF00] text-xs font-mono-athletic text-[#F4F7F5] hover:text-[#D4FF00] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Directions</span>
              </a>

              <a
                href="tel:+919059256936"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#121C16] border border-[#10B981]/30 hover:border-[#10B981] text-xs font-mono-athletic text-[#F4F7F5] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Call Venue</span>
              </a>

              <a
                href="https://wa.me/919059256936"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#D4FF00] text-[#070A08] font-bold text-xs font-mono-athletic hover:bg-[#c2ea00] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (Span 6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-athletic text-[#D4FF00] mb-2 uppercase">
              <Sparkles className="w-4 h-4" />
              <span>FREQUENT SQUAD INQUIRIES</span>
            </div>

            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border transition-all duration-300 overflow-hidden bg-[#0F1612]/90 border-[#10B981]/15 hover:border-[#10B981]/40"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display font-bold text-base text-[#F4F7F5] leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg bg-[#070A08] text-[#D4FF00] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#10B981]/20' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#8E9F94] leading-relaxed border-t border-[#10B981]/10 animate-in fade-in duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct Assistance Card */}
            <div className="card-glass p-5 rounded-2xl border border-[#10B981]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#F4F7F5] font-display uppercase block">
                  HAVE A SPECIAL REQUIREMENT?
                </span>
                <span className="text-[11px] font-mono-athletic text-[#8E9F94]">
                  Talk directly with the turf manager right now.
                </span>
              </div>
              <a
                href="https://wa.me/919059256936?text=Hi%20Eden%20Sports!%20I%20have%20a%20specific%20booking%20query."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#22C55E] text-[#070A08] font-mono-athletic font-bold text-xs uppercase whitespace-nowrap transition-colors"
              >
                Chat with Manager
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
