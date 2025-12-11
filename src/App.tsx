import React from 'react';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import GiftSection from './components/GiftSection';
import Wishes from './components/Wishes';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 selection:bg-wedding-primary selection:text-white">
      <MusicPlayer />
      <Hero />
      <Invitation />
      <Timeline />
      <Gallery />
      <GiftSection />
      <Wishes />
      <RSVP />
      <Footer />
      
      {/* Sticky RSVP Button for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-wedding-primary/20 md:hidden z-40 flex justify-center safe-area-bottom">
        <a 
          href="#rsvp" 
          className="bg-wedding-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-800 transition-colors w-full text-center tracking-wide"
        >
          Xác Nhận Tham Dự
        </a>
      </div>
    </div>
  );
};

export default App;