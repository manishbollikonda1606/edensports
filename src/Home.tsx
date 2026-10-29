import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SportsOfferings } from './components/SportsOfferings';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';

// Code-split modal so it is only loaded on interaction
const BookingModal = lazy(() =>
  import('./components/BookingModal').then((m) => ({ default: m.BookingModal }))
);

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState('Box Cricket');

  const handleOpenBooking = (sportName: string = 'Box Cricket') => {
    setSelectedSport(sportName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-600 selection:text-white">
      <Navbar onBookClick={() => handleOpenBooking('Box Cricket')} />
      <main>
        <Hero onBookClick={() => handleOpenBooking('Box Cricket')} />
        <AboutSection />
        <SportsOfferings onBookSport={(sport) => handleOpenBooking(sport)} />
        <AmenitiesSection />
        <GallerySection />
        <ContactLocation />
      </main>
      <Footer onBookClick={() => handleOpenBooking('Box Cricket')} />
      
      {modalOpen && (
        <Suspense fallback={null}>
          <BookingModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            defaultSport={selectedSport}
          />
        </Suspense>
      )}
    </div>
  );
}
