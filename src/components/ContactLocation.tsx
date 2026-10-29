import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, CheckCircle } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Venue Contact Info (Span 5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
              Location & Contact
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
              Easy to Reach from Anywhere in West Hyderabad
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Situated in Praneeth Colony, Beeramguda, right next to Sri Chaitanya School. Convenient access from BHEL Township, Ramachandrapuram, Patancheru, and Ameenpur.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <MapPin className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-gray-900 block mb-0.5">Arena Address</span>
                  <p className="text-gray-600 leading-relaxed">
                    Green Meadows, Beside Sri Chaitanya School, Praneeth Colony, Beeramguda, Ramachandrapuram, Hyderabad, Telangana 502032
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-gray-900 block mb-0.5">Operating Hours</span>
                  <p className="text-gray-600">
                    Open Daily: 05:00 AM – 11:00 PM (365 Days a Year)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <Phone className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-gray-900 block mb-0.5">Phone & WhatsApp Booking</span>
                  <p className="text-gray-600 font-medium">
                    +91 90592 56936
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=Eden+Sports+Beeramguda+Beside+Sri+Chaitanya+School+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-2"
              >
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>Get Directions</span>
              </a>

              <a
                href="https://wa.me/919059256936"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed (Span 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg h-[440px] bg-gray-100">
              <iframe
                title="Eden Sports Beeramguda Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1275217424915!2d78.2912!3d17.5145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f8bb1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sBeeramguda%2C%20Hyderabad%2C%20Telangana%20502032!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
