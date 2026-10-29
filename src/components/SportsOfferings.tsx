import React from 'react';
import { ArrowRight, Trophy, Zap, Shield, Calendar } from 'lucide-react';

interface SportsOfferingsProps {
  onBookSport: (sportName: string) => void;
}

export const SportsOfferings: React.FC<SportsOfferingsProps> = ({ onBookSport }) => {
  const sports = [
    {
      id: 'cricket',
      title: 'Box Cricket Arena',
      badge: 'Most Popular in Hyderabad',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      description:
        'Custom center pitch strip with crisp bowling creases, reinforced 30-foot perimeter and ceiling cage netting for 6v6 to 8v8 box cricket matches.',
      specs: ['22-Yard Center Pitch Mat', '30+ Ft Overhead Roof Net', 'Full Side Safety Padding', 'Rubber Stump Base Included'],
      image: '/eden-photos/eden-turf-1.jpg',
      cta: 'Book Box Cricket',
    },
    {
      id: 'football',
      title: '5v5 & 6v6 Football Turf',
      badge: 'FIFA-Grade Synthetic Grass',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      description:
        'High-density 40-50mm monofilament astro turf with dual-density infill for reduced joint strain, fast ball roll, and thrilling 5-a-side matches.',
      specs: ['Low-Friction Monofilament Turf', 'Shock-Absorbent EPDM Cushion', 'High-Tension Goalpost Nets', 'Zero Ankle & Knee Burn'],
      image: '/eden-photos/eden-turf-3.jpg',
      cta: 'Book Football Turf',
    },
    {
      id: 'tournaments',
      title: 'Corporate Leagues & Tournaments',
      badge: 'Weekend Bulk Booking',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      description:
        'Continuous slot reservations for tech companies, college sports fests, and weekend leagues with umpire coordination and scoreboard area.',
      specs: ['Multi-Hour Continuous Lock', 'Dedicated Parking for Squads', 'Trophy Presentation Area', 'Chilled Hydration Station'],
      image: '/eden-photos/eden-turf-2.jpg',
      cta: 'Enquire Tournament',
    },
  ];

  return (
    <section id="sports" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider mb-3">
            Sports & Disciplines
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight mb-4">
            Play Your Best Game Under the Lights
          </h2>
          <p className="text-base text-gray-600">
            Whether you want an aggressive 8v8 box cricket match or a technical 5-a-side football face-off, Eden Sports provides the arena.
          </p>
        </div>

        {/* 3-Card Sports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Real Turf Image with lazy loading and async decoding */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={sport.image}
                    alt={sport.title}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={224}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${sport.badgeColor} shadow-sm backdrop-blur-md`}>
                      {sport.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                    {sport.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {sport.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {sport.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookSport(sport.title)}
                  className="w-full py-3 px-4 rounded-xl bg-gray-900 hover:bg-[#1D4ED8] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{sport.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
