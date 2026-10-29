import React from 'react';
import { Award, Target, Users, Sparkles, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Venue Photo (Span 6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/eden-photos/eden-turf-2.jpg"
                alt="Eden Sports Enclosed Ground"
                loading="lazy"
                decoding="async"
                width={800}
                height={420}
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gray-200/80 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-900 block">EDEN SPORTS ARENA</span>
                  <span className="text-[11px] text-gray-500">Green Meadows, Beside Sri Chaitanya School</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-[#1D4ED8]">4.8 ★ RATED</span>
                  <span className="text-[10px] text-gray-500 block">Playo Community</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial About Content (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
              <span>About Eden Sports</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
              A Premier Sports Ground Built for Passionate Squads
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Located in Praneeth Colony, Beeramguda, Eden Sports is Hyderabad’s state-of-the-art enclosed athletic facility designed for high-intensity box cricket and fast-paced 5v5 / 6v6 football.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              Engineered with FIFA-grade monofilament grass, heavy-duty perimeter fencing, and an overhead roof net, our arena provides players with unmatched safety, uniform ball roll, and anti-glare floodlighting for night battles.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <Target className="w-5 h-5 text-[#1D4ED8] mb-2" />
                <h3 className="font-bold text-sm text-gray-900 mb-1">True Ball Bounce</h3>
                <p className="text-xs text-gray-500 leading-normal">
                  Dedicated center strip tailored for seamless batting and bowling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <Sparkles className="w-5 h-5 text-emerald-600 mb-2" />
                <h3 className="font-bold text-sm text-gray-900 mb-1">Night Floodlights</h3>
                <p className="text-xs text-gray-500 leading-normal">
                  Even, shadowless stadium-grade LED illumination from 7 PM to 11 PM.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
