
import React from 'react';
import { weddingConfig } from '../config';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { groom, bride, date, images } = weddingConfig;

  // Extract date parts
  const displayDate = `${date.day} . ${date.month} . ${date.year}`;

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* 1. Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0 select-none">
        <img 
          src={images.hero} 
          alt="Wedding Background" 
          className="w-full h-full object-cover scale-105 animate-float"
          style={{ animationDuration: '25s' }}
          onError={(e) => {
             const target = e.target as HTMLImageElement;
             target.style.display = 'none'; // Fallback to dark bg if image fails
          }}
        />
        
        {/* Gradient Overlay: Improves text readability on any photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl animate-fade-in flex flex-col items-center gap-6">
        
        {/* Top Tagline */}
        <div className="mb-2">
            <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/90 border-b border-white/40 pb-3">
                Save The Date
            </span>
        </div>

        {/* Names Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 my-4">
            <h1 className="font-names text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-lg">
                {groom.firstName}
            </h1>
            <span className="font-serif text-3xl md:text-5xl text-white/90 italic font-light">&</span>
            <h1 className="font-names text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-lg">
                {bride.firstName}
            </h1>
        </div>

        {/* Date Display */}
        <div className="mt-4 flex flex-col items-center gap-3">
             <div className="text-xl md:text-3xl font-serif tracking-widest text-white border-y border-white/50 py-3 px-8 backdrop-blur-sm bg-white/5">
                {displayDate}
             </div>
             <p className="text-sm md:text-lg font-light tracking-wider uppercase text-white/80 mt-2">
                {date.dayOfWeek}
             </p>
        </div>
      </div>

      {/* 3. Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer">
        <a href="#invitation" className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors">
            <span className="text-[10px] uppercase tracking-widest">Trượt xuống</span>
            <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
