import React from 'react';
import { Car, Droplets, ShieldCheck, HeartPulse, CreditCard, Sparkles } from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const amenities = [
    {
      icon: Car,
      title: 'Dedicated Parking',
      description: 'Spacious on-site parking for 20+ two-wheelers and cars right beside Sri Chaitanya School.',
    },
    {
      icon: ShieldCheck,
      title: 'Changing Rooms & Restrooms',
      description: 'Hygienic and well-maintained private changing spaces and sanitized restrooms.',
    },
    {
      icon: Droplets,
      title: 'Chilled RO Drinking Water',
      description: 'Continuous cold and clean RO water dispenser for matchday player hydration.',
    },
    {
      icon: HeartPulse,
      title: 'First Aid Kit Station',
      description: 'Emergency sports injury kit, antiseptic sprays, and bandages ready on-site.',
    },
    {
      icon: Sparkles,
      title: 'Pro LED Floodlights',
      description: 'Shadow-free, anti-glare high-lumen illumination tuned for fast night matches.',
    },
    {
      icon: CreditCard,
      title: 'Instant UPI Payments',
      description: 'Google Pay, PhonePe, and Paytm accepted for hassle-free slot confirmation.',
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider mb-3">
            Ground Facilities
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight mb-4">
            Everything Your Squad Needs On Matchday
          </h2>
          <p className="text-base text-gray-600">
            Enjoy a hassle-free sporting experience with verified on-site amenities built for comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#1D4ED8]/40 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#1D4ED8] text-[#1D4ED8] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
