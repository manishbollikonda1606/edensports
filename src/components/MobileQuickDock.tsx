import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const MobileQuickDock: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden bg-[#070A08]/90 backdrop-blur-xl border-t border-[#10B981]/25 shadow-[0_-10px_30px_rgba(0,0,0,0.9)]">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Direct Call Action */}
        <a
          href="tel:+919059256936"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0F1612] border border-[#10B981]/30 active:scale-95 text-[#F4F7F5] font-mono-athletic text-xs font-semibold transition-all shadow-md"
        >
          <Phone className="w-4 h-4 text-[#10B981]" />
          <span>Call Turf</span>
        </a>

        {/* Instant WhatsApp Action */}
        <a
          href="https://wa.me/919059256936?text=Hi%20Eden%20Sports!%20I%20want%20to%20check%20turf%20slot%20availability%20for%20Football%20/%20Box%20Cricket."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D4FF00] active:scale-95 text-[#070A08] font-mono-athletic text-xs font-bold transition-all shadow-[0_0_15px_rgba(212,255,0,0.4)]"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
