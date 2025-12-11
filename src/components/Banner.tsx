import React, { useEffect, useState } from 'react';
import { weddingConfig } from '../config';
import { ChevronDown } from 'lucide-react';

const Banner: React.FC = () => {
  const { groom, bride, date, images } = weddingConfig;
  const displayDate = `${date.day} . ${date.month} . ${date.year}`;
  
  // Create static particles to prevent hydration mismatch
  const [particles, setParticles] = useState<Array<{left: number, delay: number, duration: number, size: number}>>([]);

  useEffect(() => {
    // Generate random particles on client side only
    const newParticles = [...Array(15)].map(() => ({
      left: Math.random() * 100, // Random horizontal position 0-100%
      delay: Math.random() * 5,  // Random delay 0-5s
      duration: 10 + Math.random() * 10, // Random duration 10-20s
      size: 4 + Math.random() * 6 // Random size 4-10px
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-wedding-red">
      
      {/* 1. Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <img 
          src={images.hero} 
          alt="Wedding Background" 
          className="w-full h-full object-cover animate-ken-burns grayscale opacity-60 mix-blend-multiply"
          onError={(e) => {
             const target = e.target as HTMLImageElement;
             target.style.display = 'none';
          }}
        />
        
        {/* Film Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.07] pointer-events-none mix-blend-overlay"></div>

        {/* Cinematic Gradient Overlays */}
        {/* Top shadow for text readability */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-wedding-red/60 to-transparent mix-blend-multiply"></div>
        {/* Bottom shadow for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-wedding-red/90 to-transparent mix-blend-multiply"></div>
        {/* Overall warmth */}
        <div className="absolute inset-0 bg-wedding-red/20 mix-blend-color"></div>
      </div>

      {/* 2. Floating Particles Effect */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-wedding-cream blur-[1px] animate-float-particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              opacity: 0 // Start invisible (handled by keyframes)
            }}
          />
        ))}
      </div>

      {/* 3. Main Content */}
      <div className="relative z-10 text-center text-wedding-cream px-4 w-full max-w-5xl animate-fade-in flex flex-col items-center gap-6">
        
        {/* Top Tagline with decorative lines */}
        <div className="mb-4 flex items-center gap-4 opacity-90">
            <span className="h-[1px] w-8 bg-wedding-cream/60"></span>
            <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-wedding-cream shadow-sm font-semibold">
                Save The Date
            </span>
            <span className="h-[1px] w-8 bg-wedding-cream/60"></span>
        </div>

        {/* Names Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 my-2 md:my-6 relative">
            <h1 
              className="font-names font-bold text-6xl md:text-8xl lg:text-9xl text-wedding-cream drop-shadow-lg z-10"
              style={{ fontFamily: '"Great Vibes", cursive' }}
            >
                {groom.firstName}
            </h1>
            
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <span className="absolute inset-0 border border-wedding-cream/30 rounded-full animate-spin-slow dashed"></span>
              <span className="font-serif text-3xl md:text-5xl text-wedding-cream/90 italic font-light">&</span>
            </div>

            <h1 
              className="font-names font-bold text-6xl md:text-8xl lg:text-9xl text-wedding-cream drop-shadow-lg z-10"
              style={{ fontFamily: '"Great Vibes", cursive' }}
            >
                {bride.firstName}
            </h1>
        </div>

        {/* Date Display - Styled as a badge */}
        <div className="mt-6 flex flex-col items-center gap-3 relative group">
             {/* Decorative box behind date */}
             <div className="absolute inset-0 border border-wedding-cream/30 transform rotate-2 scale-95 opacity-50 transition-transform group-hover:rotate-6"></div>
             
             <div className="text-xl md:text-3xl font-serif tracking-widest text-wedding-cream border border-wedding-cream/50 py-4 px-10 backdrop-blur-sm bg-wedding-red/10 relative z-10 shadow-lg">
                {displayDate}
             </div>
             
             <p className="text-sm md:text-lg font-light tracking-wider uppercase text-wedding-cream/90 mt-4 drop-shadow-md">
                {date.dayOfWeek}
             </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-80">
        <ChevronDown className="text-wedding-cream w-8 h-8" />
      </div>

    </section>
  );
};

export default Banner;