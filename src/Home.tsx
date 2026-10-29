import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SlotConfigurator } from './components/SlotConfigurator';
import { ArenaBento } from './components/ArenaBento';
import { TurfBlueprint } from './components/TurfBlueprint';
import { PlayerWall } from './components/PlayerWall';
import { LocationAndFAQ } from './components/LocationAndFAQ';
import { Footer } from './components/Footer';
import { MobileQuickDock } from './components/MobileQuickDock';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070A08] text-[#F4F7F5] selection:bg-[#D4FF00] selection:text-[#070A08] relative">
      <Navbar />
      <main>
        <Hero />
        <SlotConfigurator />
        <ArenaBento />
        <TurfBlueprint />
        <PlayerWall />
        <LocationAndFAQ />
      </main>
      <Footer />
      <MobileQuickDock />
    </div>
  );
}
