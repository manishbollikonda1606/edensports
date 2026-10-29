import React, { useState } from 'react';
import { Eye, CheckCircle2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const photos = [
    {
      url: '/eden-photos/eden-turf-1.jpg',
      title: 'Center Pitch Box Cricket Crease',
      category: 'Box Cricket Setup',
    },
    {
      url: '/eden-photos/eden-turf-2.jpg',
      title: 'Full Enclosed Ground & Boundary Cage',
      category: 'Arena Perspective',
    },
    {
      url: '/eden-photos/eden-turf-3.jpg',
      title: 'Two-Tone Monofilament Football Turf',
      category: 'Turf Surface & Striping',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider mb-3">
            Real Venue Photos
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight mb-4">
            Take a Look Inside Eden Sports
          </h2>
          <p className="text-base text-gray-600">
            Authentic photographs of our Beeramguda ground, showcasing the striped synthetic grass, full enclosure caging, and cricket crease.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(item.url)}
              className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200 group cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                decoding="async"
                width={500}
                height={375}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <span className="font-display font-bold text-base">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20">
            <img
              src={selectedPhoto}
              alt="Eden Sports Turf Enlarged"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
