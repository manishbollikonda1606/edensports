import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, CheckCircle, ExternalLink } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  // Exact Geocoded Coordinates for Eden Sports Beeramguda
  const exactLat = 17.5292866;
  const exactLng = 78.2944726;

  // Direct Google Maps navigation URL with exact lat/long coordinates
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${exactLat},${exactLng}`;
  const googleMapsViewUrl = `https://www.google.com/maps/search/?api=1&query=${exactLat},${exactLng}`;
  
  // High-accuracy OpenStreetMap Embed with marker on exact turf location
  const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${exactLng - 0.005}%2C${exactLat - 0.0035}%2C${exactLng + 0.005}%2C${exactLat + 0.0035}&layer=mapnik&marker=${exactLat}%2C${exactLng}`;

  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Venue Contact Info (Span 5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Verified Arena Location</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
              Easy to Reach from Anywhere in West Hyderabad
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Situated in Praneeth Colony, Beeramguda, right beside Sri Chaitanya School. Rapidly accessible within minutes from BHEL Township, Ramachandrapuram, Patancheru, and Ameenpur.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <MapPin className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-gray-900 block mb-0.5">Exact Ground Coordinates</span>
                  <p className="text-gray-700 font-mono text-[11px] mb-1">
                    {exactLat.toFixed(6)}° N, {exactLng.toFixed(6)}° E
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    Green Meadows, Beside Sri Chaitanya School, Praneeth Colony, Beeramguda, Hyderabad, Telangana 502032
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-gray-900 block mb-0.5">Operating Hours</span>
                  <p className="text-gray-600">
                    Open Daily: 05:00 AM – 11:00 PM (365 Days a Year)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <Phone className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-gray-900 block mb-0.5">Phone & WhatsApp Booking</span>
                  <p className="text-gray-700 font-medium">
                    +91 90592 56936
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>Get Exact GPS Directions</span>
              </a>

              <a
                href="https://wa.me/919059256936"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Live Map Embed with Pin on Exact Coordinates (Span 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl h-[460px] bg-gray-100 relative group">
              <iframe
                title="Eden Sports Exact Map Location"
                src={mapEmbedUrl}
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
              />

              {/* Floating Map Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-gray-200 shadow-lg text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-gray-900">Eden Sports Turf</span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono block">
                  17.529287° N, 78.294473° E
                </span>
              </div>

              {/* Bottom Right Full Map Link */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={googleMapsViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md hover:bg-white text-gray-900 text-[11px] font-semibold border border-gray-200 shadow-md flex items-center gap-1.5 transition-all"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#1D4ED8]" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
