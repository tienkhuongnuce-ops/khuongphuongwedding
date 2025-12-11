
import React from 'react';
import { weddingConfig } from '../config';

const Hero: React.FC = () => {
  const { groom, bride, date, images } = weddingConfig;

  // Extract date parts
  const displayDate = `${date.day} . ${date.month} . ${date.year}`;

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-wedding-red">
      
      {/* 1. Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {/* The Image Itself */}
        <img 
          src={images.hero} 
          alt="Wedding Background" 
          className="w-full h-full object-cover animate-ken-burns grayscale opacity-60 mix-blend-multiply"
          onError={(e) => {
             const target = e.target as HTMLImageElement;
             target.style.display = 'none';
          }}
        />
        
        {/* Vignette & Gradient Overlay to ensure text readability and cool effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-wedding-red/30 via-transparent to-wedding-red/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(159,18,57,0.4)_100%)]"></div>
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 text-center text-wedding-cream px-4 w-full max-w-5xl animate-fade-in flex flex-col items-center gap-6">
        
        {/* Top Tagline */}
        <div className="mb-2">
            <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-wedding-cream/90 border-b border-wedding-cream/40 pb-3">
                Save The Date
            </span>
        </div>

        {/* Names Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 my-4">
            <h1 className="font-names text-6xl md:text-8xl lg:text-9xl text-wedding-cream drop-shadow-sm">
                {groom.firstName}
            </h1>
            <span className="font-serif text-3xl md:text-5xl text-wedding-cream/90 italic font-light">&</span>
            <h1 className="font-names text-6xl md:text-8xl lg:text-9xl text-wedding-cream drop-shadow-sm">
                {bride.firstName}
            </h1>
        </div>

        {/* Date Display */}
        <div className="mt-4 flex flex-col items-center gap-3">
             <div className="text-xl md:text-3xl font-serif tracking-widest text-wedding-cream border-y border-wedding-cream/50 py-3 px-8 backdrop-blur-sm bg-wedding-red/10">
                {displayDate}
             </div>
             <p className="text-sm md:text-lg font-light tracking-wider uppercase text-wedding-cream/80 mt-2">
                {date.dayOfWeek}
             </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;