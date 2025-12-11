import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './components/Hero.tsx';
import Invitation from './components/Invitation.tsx';
import Timeline from './components/Timeline.tsx';
import Gallery from './components/Gallery.tsx';
import AIWishGenerator from './components/AIWishGenerator.tsx';
import Wishes from './components/Wishes.tsx';
import RSVP from './components/RSVP.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-wedding-red selection:bg-wedding-red selection:text-wedding-cream">
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

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);