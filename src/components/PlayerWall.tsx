import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

interface ReviewItem {
  id: number;
  player: string;
  source: 'Playo' | 'Google Maps' | 'Justdial';
  rating: number;
  sport: string;
  content: string;
  date: string;
}

export const PlayerWall: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      id: 1,
      player: 'Vikramaditya R.',
      source: 'Playo',
      rating: 5.0,
      sport: 'Box Cricket (8v8)',
      content:
        'One of the best box cricket setups in Beeramguda and Ramachandrapuram area! The central pitch mat has reliable bounce, and the roof netting is very high so big shots don’t get choked.',
      date: '2 weeks ago',
    },
    {
      id: 2,
      player: 'Karthik Varma',
      source: 'Google Maps',
      rating: 5.0,
      sport: '5v5 Football',
      content:
        'The LED floodlights are super bright with zero blinding glare. We play Friday night matches here regularly. Ample bike and car parking right beside Sri Chaitanya School.',
      date: '1 month ago',
    },
    {
      id: 3,
      player: 'Sundeep Chowdary',
      source: 'Justdial',
      rating: 5.0,
      sport: 'Weekend Corporate Cup',
      content:
        'Booked Eden Sports for a 4-hour BHEL colleagues cricket tournament. Seamless coordination on WhatsApp, clean restrooms, chilled drinking water, and well-maintained grass.',
      date: '3 weeks ago',
    },
    {
      id: 4,
      player: 'Naveen Kumar',
      source: 'Playo',
      rating: 4.8,
      sport: 'Box Cricket',
      content:
        'Great turf density! Unlike other cheap turfs where your knees hurt the next day, this turf has proper rubber cushioning. The management is polite and punctual with slot timings.',
      date: 'Just now',
    },
    {
      id: 5,
      player: 'Prashanth Reddy',
      source: 'Google Maps',
      rating: 5.0,
      sport: 'Youth Coaching / Football',
      content:
        'Sent my 13-year-old nephew for morning fitness and football drills. Very safe enclosed ground with emergency first aid on site. Highly recommend for sports enthusiasts in Praneeth Colony.',
      date: 'Last month',
    },
    {
      id: 6,
      player: 'Arjun Sen',
      source: 'Playo',
      rating: 5.0,
      sport: '6v6 Football Match',
      content:
        'Super easy booking via WhatsApp. Fast responses, clear pricing, and no double booking nonsense. Played under the rain as well, water drained off effortlessly!',
      date: 'Verified Match',
    },
  ];

  return (
    <section className="py-20 bg-[#070A08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F1612] border border-[#10B981]/30 text-xs font-mono-athletic text-[#D4FF00] uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>PLAYER WALL OF FAME // VERIFIED TESTIMONIALS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F7F5] uppercase tracking-tight">
              PRAISED BY HYDERABAD SQUADS
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4 text-xs font-mono-athletic text-[#8E9F94]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#D4FF00] font-bold">4.8 ★</span> Playo Verified
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#EAB308] font-bold">4.7 ★</span> Justdial
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#10B981] font-bold">4.6 ★</span> Google
            </div>
          </div>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="card-glass p-6 rounded-2xl border border-[#10B981]/20 card-glass-hover flex flex-col justify-between"
            >
              <div>
                {/* Header with Source Badge & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4FF00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono-athletic px-2 py-0.5 rounded bg-[#070A08] border border-[#10B981]/20 text-[#8E9F94]">
                    {rev.source}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#F4F7F5] leading-relaxed mb-6 italic">
                  "{rev.content}"
                </p>
              </div>

              {/* Player Metadata Footer */}
              <div className="pt-4 border-t border-[#10B981]/15 flex items-center justify-between font-mono-athletic">
                <div>
                  <span className="text-xs font-bold text-[#F4F7F5] block">
                    {rev.player}
                  </span>
                  <span className="text-[10px] text-[#10B981]">
                    {rev.sport}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-[#8E9F94]">
                  <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
