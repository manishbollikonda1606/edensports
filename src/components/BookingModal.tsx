import React, { useState } from 'react';
import { Calendar, Clock, Send, Users, CheckCircle, Shield } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSport?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, defaultSport = 'Box Cricket' }) => {
  const [sport, setSport] = useState(defaultSport);
  const [date, setDate] = useState('Today');
  const [timeSlot, setTimeSlot] = useState('Floodlit Night (7:00 PM – 11:00 PM)');
  const [duration, setDuration] = useState('2 Hours');
  const [playerName, setPlayerName] = useState('');

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Eden Sports! 🏟️ I would like to book a slot:
• Sport: ${sport}
• Date: ${date}
• Preferred Time: ${timeSlot}
• Duration: ${duration}
${playerName ? `• Name: ${playerName}\n` : ''}Please confirm slot availability and pricing!`;

    const url = `https://wa.me/919059256936?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div>
            <h3 className="font-display font-bold text-xl text-gray-900">
              Book a Turf Slot
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Direct instant reservation on WhatsApp with Eden Sports
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center font-bold text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleWhatsAppBooking} className="space-y-4 pt-4">
          
          {/* Sport selection */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Choose Sport / Activity
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Box Cricket', 'Football 5v5/6v6', 'Corporate Tournament', 'Coaching Inquiry'].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setSport(item)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                    sport === item
                      ? 'border-[#1D4ED8] bg-blue-50/70 text-[#1D4ED8] font-semibold'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Date selection */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Match Date
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Today', 'Tomorrow', 'This Weekend'].map((d) => (
                <button
                  type="button"
                  key={d}
                  onClick={() => setDate(d)}
                  className={`py-2 px-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                    date === d
                      ? 'border-[#1D4ED8] bg-[#1D4ED8] text-white font-semibold'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slot */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Preferred Time Window
            </label>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl border border-gray-200 text-xs text-gray-800 bg-white focus:outline-none focus:border-[#1D4ED8]"
            >
              <option>Early Morning (5:00 AM – 9:00 AM)</option>
              <option>Day Session (9:00 AM – 4:00 PM)</option>
              <option>Prime Evening (4:00 PM – 7:00 PM)</option>
              <option>Floodlit Night (7:00 PM – 11:00 PM)</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Duration
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['1 Hour', '2 Hours', '3+ Hours'].map((dur) => (
                <button
                  type="button"
                  key={dur}
                  onClick={() => setDuration(dur)}
                  className={`py-2 px-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                    duration === dur
                      ? 'border-gray-900 bg-gray-900 text-white font-semibold'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {dur}
                </button>
              ))}
            </div>
          </div>

          {/* Player Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Your Name / Squad Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Captain Rohit / Team Smashers"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl border border-gray-200 text-xs text-gray-800 bg-white focus:outline-none focus:border-[#1D4ED8]"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Confirm & Lock on WhatsApp</span>
            </button>
            <p className="text-[11px] text-gray-500 text-center mt-2">
              Direct line: +91 90592 56936 • Instant manager response
            </p>
          </div>

        </form>

      </div>
    </div>
  );
};
