import React, { useState, useMemo } from 'react';
import { Calendar, Clock, Trophy, Users, Send, CheckCircle2, AlertCircle, Sparkles, Tag, ChevronRight } from 'lucide-react';

type SportType = 'football' | 'cricket' | 'tournament' | 'coaching';

interface TimeSlotWindow {
  id: string;
  name: string;
  hours: string;
  rateHint: string;
  popular?: boolean;
}

export const SlotConfigurator: React.FC = () => {
  const [sport, setSport] = useState<SportType>('cricket');
  const [dateType, setDateType] = useState<string>('today');
  const [customDate, setCustomDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('floodlit');
  const [duration, setDuration] = useState<string>('2 Hours');
  const [squadSize, setSquadSize] = useState<number>(12);
  const [playerName, setPlayerName] = useState<string>('');

  const sports = [
    {
      id: 'football',
      label: '5v5 / 6v6 Football',
      icon: '⚽',
      tag: 'FIFA Grass • Fast Roll',
      desc: 'High-density astro turf, shockpad infill, 5-a-side goal nets',
    },
    {
      id: 'cricket',
      label: 'Box Cricket Arena',
      icon: '🏏',
      tag: 'Center Pitch Strip • 30ft Cage',
      desc: 'High-tensile boundary cage, clear bounce, 6v6 to 8v8 battles',
    },
    {
      id: 'tournament',
      label: 'Corporate / Bulk Tournament',
      icon: '🏆',
      tag: 'Half-Day / Full-Day Takeover',
      desc: 'Multi-hour lock, umpire support, tournament scoreboard zone',
    },
    {
      id: 'coaching',
      label: 'Athletic Coaching Enquiry',
      icon: '👟',
      tag: 'Youth & Adult Batches',
      desc: 'Morning & evening structured training under experienced coaches',
    },
  ];

  const timeSlots: TimeSlotWindow[] = [
    {
      id: 'early',
      name: 'Early Bird Session',
      hours: '05:00 AM – 09:00 AM',
      rateHint: 'Fresh Morning Air',
    },
    {
      id: 'day',
      name: 'Day Play Session',
      hours: '09:00 AM – 04:00 PM',
      rateHint: 'Weekend Friendly',
    },
    {
      id: 'evening',
      name: 'Prime Evening Session',
      hours: '04:00 PM – 07:00 PM',
      rateHint: 'High Demand',
      popular: true,
    },
    {
      id: 'floodlit',
      name: 'Floodlit Night Match',
      hours: '07:00 PM – 11:00 PM',
      rateHint: 'Peak Stadium Vibe',
      popular: true,
    },
  ];

  // Resolve target date display
  const resolvedDateString = useMemo(() => {
    const today = new Date();
    if (dateType === 'today') {
      return `Today (${today.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })})`;
    }
    if (dateType === 'tomorrow') {
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      return `Tomorrow (${tomorrow.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })})`;
    }
    if (dateType === 'weekend') {
      return 'Upcoming Weekend (Saturday/Sunday)';
    }
    if (dateType === 'custom' && customDate) {
      return `Custom Date: ${customDate}`;
    }
    return 'Select Date';
  }, [dateType, customDate]);

  const activeSportObj = sports.find((s) => s.id === sport)!;
  const activeSlotObj = timeSlots.find((s) => s.id === selectedSlot)!;

  // Construct WhatsApp formatted string
  const whatsappUrl = useMemo(() => {
    const message = `Hi Eden Sports! 🏟️ I want to book a turf slot:
• Sport: ${activeSportObj.label}
• Date: ${resolvedDateString}
• Time Window: ${activeSlotObj.name} (${activeSlotObj.hours})
• Duration: ${duration}
• Estimated Squad: ${squadSize} Players
${playerName ? `• Name: ${playerName}\n` : ''}Please confirm slot availability and pricing for today/upcoming schedule!`;

    return `https://wa.me/919059256936?text=${encodeURIComponent(message)}`;
  }, [activeSportObj, resolvedDateString, activeSlotObj, duration, squadSize, playerName]);

  return (
    <section id="configurator" className="py-20 bg-[#070A08] relative">
      {/* Decorative Chalk Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F1612] border border-[#10B981]/30 text-xs font-mono-athletic text-[#D4FF00] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Squad Booker</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F7F5] uppercase tracking-tight mb-4">
            CONFIGURE YOUR TURF BATTLE
          </h2>
          <p className="text-sm sm:text-base text-[#8E9F94]">
            Select your discipline, session window, and match duration. Lock in your slot with Eden Sports instantly on WhatsApp with zero friction.
          </p>
        </div>

        {/* 2-Column Booking Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls (Span 7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Sport Selection */}
            <div className="card-glass p-5 sm:p-6 rounded-2xl border border-[#10B981]/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-athletic text-[#D4FF00] uppercase tracking-wider font-semibold">
                  01 // SELECT SPORT DISCIPLINE
                </span>
                <span className="text-xs text-[#8E9F94] font-mono-athletic">Arena Ready</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sports.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSport(item.id as SportType)}
                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                      sport === item.id
                        ? 'bg-[#16221C] border-[#D4FF00] shadow-[0_0_20px_rgba(212,255,0,0.15)]'
                        : 'bg-[#0F1612]/80 border-[#10B981]/15 hover:border-[#10B981]/40 hover:bg-[#121C16]'
                    }`}
                  >
                    {sport === item.id && (
                      <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                        <div className="bg-[#D4FF00] text-[#070A08] text-[9px] font-bold py-0.5 px-4 rotate-45 transform translate-x-2 -translate-y-1">
                          ✓
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-display font-bold text-sm text-[#F4F7F5]">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8E9F94] leading-snug mb-2">{item.desc}</p>
                    <span className="inline-block text-[10px] font-mono-athletic text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                      {item.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date & Session Window */}
            <div className="card-glass p-5 sm:p-6 rounded-2xl border border-[#10B981]/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-athletic text-[#D4FF00] uppercase tracking-wider font-semibold">
                  02 // MATCH DATE & TIME WINDOW
                </span>
                <span className="text-xs text-[#8E9F94] font-mono-athletic">Open 05:00 - 23:00</span>
              </div>

              {/* Date Quick Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {[
                  { id: 'today', label: 'Today' },
                  { id: 'tomorrow', label: 'Tomorrow' },
                  { id: 'weekend', label: 'This Weekend' },
                  { id: 'custom', label: 'Custom Date' },
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDateType(d.id)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono-athletic text-center transition-all cursor-pointer ${
                      dateType === d.id
                        ? 'bg-[#10B981] text-[#070A08] font-bold shadow-md'
                        : 'bg-[#0F1612] text-[#8E9F94] border border-[#10B981]/15 hover:border-[#10B981]/40'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              {dateType === 'custom' && (
                <div className="mb-4">
                  <input
                    type="date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    className="w-full bg-[#0F1612] border border-[#10B981]/30 rounded-lg px-3 py-2 text-xs font-mono-athletic text-[#F4F7F5] focus:outline-none focus:border-[#D4FF00]"
                  />
                </div>
              )}

              {/* Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedSlot === slot.id
                        ? 'bg-[#16221C] border-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.12)]'
                        : 'bg-[#0F1612]/70 border-[#10B981]/15 hover:border-[#10B981]/40 hover:bg-[#121C16]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold font-display text-[#F4F7F5]">
                        {slot.name}
                      </span>
                      {slot.popular && (
                        <span className="text-[9px] font-mono-athletic bg-[#D4FF00]/15 text-[#D4FF00] px-1.5 py-0.2 rounded border border-[#D4FF00]/30 font-semibold">
                          HOT
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] font-mono-athletic text-[#D4FF00] font-medium">
                      {slot.hours}
                    </div>
                    <div className="text-[10px] text-[#8E9F94] mt-1">{slot.rateHint}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Duration & Squad Size */}
            <div className="card-glass p-5 sm:p-6 rounded-2xl border border-[#10B981]/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-athletic text-[#D4FF00] uppercase tracking-wider font-semibold">
                  03 // MATCH DURATION & PLAYERS
                </span>
                <span className="text-xs text-[#8E9F94] font-mono-athletic">Standard & Extended</span>
              </div>

              {/* Duration Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                {['1 Hour', '1.5 Hours', '2 Hours', '3+ Hours (Tournament)'].map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setDuration(dur)}
                    className={`py-2 px-2 rounded-lg text-xs font-mono-athletic text-center transition-all cursor-pointer ${
                      duration === dur
                        ? 'bg-[#D4FF00] text-[#070A08] font-bold'
                        : 'bg-[#0F1612] text-[#8E9F94] border border-[#10B981]/15 hover:border-[#10B981]/40'
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>

              {/* Squad Size & Player Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-athletic text-[#8E9F94] mb-1.5 uppercase">
                    Estimated Squad Count: <span className="text-[#D4FF00] font-bold">{squadSize} Players</span>
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="24"
                    value={squadSize}
                    onChange={(e) => setSquadSize(Number(e.target.value))}
                    className="w-full accent-[#D4FF00] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono-athletic text-[#8E9F94] mt-1">
                    <span>4 (2v2)</span>
                    <span>12 (6v6)</span>
                    <span>24 (Tournament)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono-athletic text-[#8E9F94] mb-1.5 uppercase">
                    Your Name / Squad Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Captain Rohit / Team Strikers"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full bg-[#0F1612] border border-[#10B981]/30 rounded-lg px-3 py-2 text-xs font-mono-athletic text-[#F4F7F5] placeholder:text-[#8E9F94]/50 focus:outline-none focus:border-[#D4FF00]"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Summary Matchday Ticket (Span 5) */}
          <div className="lg:col-span-5 sticky top-24">
            
            {/* Physical Ticket Styled Receipt */}
            <div className="relative rounded-2xl bg-[#0F1612] border border-[#10B981]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
              
              {/* Top Athletic Banner */}
              <div className="bg-gradient-to-r from-[#10B981] via-[#22C55E] to-[#D4FF00] p-4 text-[#070A08] flex items-center justify-between">
                <div>
                  <span className="font-display font-black text-sm tracking-wider uppercase block">
                    EDEN SPORTS MATCHDAY PASS
                  </span>
                  <span className="text-[10px] font-mono-athletic tracking-widest uppercase font-semibold">
                    BEERAMGUDA ARENA // OFFICIAL TICKET
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#070A08] text-[#D4FF00] flex items-center justify-center font-display font-black text-sm">
                  ES
                </div>
              </div>

              {/* Ticket Body */}
              <div className="p-6 space-y-5 text-left">
                
                {/* Selected Sport Hero Display */}
                <div className="border-b border-[#10B981]/15 pb-4">
                  <span className="text-[10px] font-mono-athletic text-[#8E9F94] uppercase tracking-wider block mb-1">
                    CHOSEN DISCIPLINE
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{activeSportObj.icon}</span>
                    <span className="font-display font-extrabold text-xl text-[#F4F7F5]">
                      {activeSportObj.label}
                    </span>
                  </div>
                  <span className="text-xs text-[#10B981] font-mono-athletic mt-0.5 block">
                    {activeSportObj.tag}
                  </span>
                </div>

                {/* Match Parameters Grid */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono-athletic border-b border-[#10B981]/15 pb-4">
                  <div>
                    <span className="text-[10px] text-[#8E9F94] uppercase block mb-1">DATE</span>
                    <span className="text-[#F4F7F5] font-semibold block">{resolvedDateString}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#8E9F94] uppercase block mb-1">DURATION</span>
                    <span className="text-[#D4FF00] font-bold block">{duration}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#8E9F94] uppercase block mb-1">SESSION WINDOW</span>
                    <span className="text-[#F4F7F5] font-semibold block">{activeSlotObj.name}</span>
                    <span className="text-[10px] text-[#8E9F94]">{activeSlotObj.hours}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#8E9F94] uppercase block mb-1">EST. SQUAD SIZE</span>
                    <span className="text-[#F4F7F5] font-semibold block">{squadSize} Players</span>
                  </div>
                </div>

                {/* Ground Location Quick Check */}
                <div className="text-xs font-mono-athletic text-[#8E9F94] flex items-start gap-2 bg-[#070A08]/60 p-2.5 rounded-lg border border-[#10B981]/10">
                  <span className="text-[#10B981] font-bold">VENUE:</span>
                  <span>Beside Sri Chaitanya School, Green Meadows, Beeramguda, Hyderabad 502032</span>
                </div>

                {/* Perforation Cut Effect */}
                <div className="relative py-2 flex items-center justify-between">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-[#070A08] border-r border-[#10B981]/30" />
                  <div className="w-full border-b border-dashed border-[#10B981]/30" />
                  <div className="absolute -right-8 w-4 h-4 rounded-full bg-[#070A08] border-l border-[#10B981]/30" />
                </div>

                {/* Barcode Graphic & Booking Action */}
                <div className="pt-1">
                  {/* Pseudo Barcode */}
                  <div className="h-8 flex items-center justify-center gap-1 opacity-70 mb-4 px-2 bg-[#070A08] py-1 rounded">
                    {[1,3,1,2,4,1,2,3,1,4,2,1,3,2,1,4,1,2,1,3,2,4,1,2,3,1,2,4].map((w, idx) => (
                      <div
                        key={idx}
                        className="h-full bg-[#10B981]"
                        style={{ width: `${w * 2}px` }}
                      />
                    ))}
                  </div>

                  {/* Primary WhatsApp Action Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#D4FF00] hover:bg-[#c2ea00] text-[#070A08] font-display font-extrabold text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-[0_10px_25px_rgba(212,255,0,0.3)] volt-btn-pulse"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    <span>Check & Lock Slot on WhatsApp</span>
                  </a>

                  <p className="text-[11px] font-mono-athletic text-[#8E9F94] text-center mt-2.5">
                    ⚡ Instant direct response from turf management • +91 90592 56936
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
