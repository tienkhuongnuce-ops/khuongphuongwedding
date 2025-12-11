import React from 'react';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import AIWishGenerator from './components/AIWishGenerator';
import Wishes from './components/Wishes';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-wedding-text selection:bg-wedding-red selection:text-wedding-cream">
      <Hero />
      <Invitation />
      <Timeline />
      <Gallery />
      <AIWishGenerator />
      <Wishes />
      <RSVP />
      <Footer />
      
      {/* Sticky RSVP Button for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-wedding-cream/90 backdrop-blur-md border-t border-wedding-red/20 md:hidden z-50 flex justify-center">
        <a 
          href="#rsvp" 
          className="bg-wedding-red text-wedding-cream px-8 py-2 rounded-full font-bold shadow-none border border-wedding-red hover:bg-wedding-red/90 transition-colors w-full text-center uppercase tracking-wider"
        >
          Xác Nhận Tham Dự
        </a>
      </div>
    </div>
  );
};

export default App;