import React, { useEffect, useState } from 'react';
import { weddingConfig } from '../config';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { groom, bride, date, images } = weddingConfig;
  const displayDate = `${date.day} . ${date.month} . ${date.year}`;
  
  const [particles, setParticles] = useState<Array<{left: number, delay: number, duration: number, size: number}>>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 4 + Math.random() * 6
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-wedding-red">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <img 
          src={images.hero} 
          alt="Wedding Background" 
          className="w-full h-full object-cover animate-ken-burns grayscale opacity-50 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-wedding-red/30 mix-blend-color"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-wedding-red to-transparent opacity-90"></div>
      </div>

      {/* Particles */}
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
              opacity: 0
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-wedding-cream px-4 w-full max-w-5xl animate-fade-in flex flex-col items-center gap-2">
        
        {/* Top Decoration */}
        <div className="mb-6 flex items-center gap-4 opacity-90">
            <span className="h-[1px] w-12 bg-wedding-cream/60"></span>
            <div className="border border-wedding-cream/60 px-4 py-1 rounded-sm">
                <span className="text-sm md:text-base uppercase tracking-[0.3em] font-serif">
                    Thân Mời Dự Lễ Thành Hôn
                </span>
            </div>
            <span className="h-[1px] w-12 bg-wedding-cream/60"></span>
        </div>

        {/* Names */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-12 my-4 relative">
            <h1 className="font-names font-bold text-6xl md:text-8xl lg:text-9xl text-wedding-cream drop-shadow-lg z-10" style={{ fontFamily: '"Great Vibes", cursive' }}>
                {groom.firstName}
            </h1>
            
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center my-4 md:my-0">
               {/* Double Happiness Symbol */}
               <div className="text-5xl md:text-6xl text-wedding-cream font-serif font-bold animate-pulse">囍</div>
            </div>

            <h1 className="font-names font-bold text-6xl md:text-8xl lg:text-9xl text-wedding-cream drop-shadow-lg z-10" style={{ fontFamily: '"Great Vibes", cursive' }}>
                {bride.firstName}
            </h1>
        </div>

        {/* Date Box */}
        <div className="mt-10 relative">
             <div className="border-t border-b border-wedding-cream/40 py-4 px-12 backdrop-blur-sm bg-wedding-red/10">
                 <div className="text-2xl md:text-4xl font-serif tracking-[0.2em] text-wedding-cream font-bold">
                    {displayDate}
                 </div>
             </div>
             <p className="text-base md:text-lg font-sans font-light tracking-widest uppercase text-wedding-cream/80 mt-4">
                {date.dayOfWeek}
             </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-80">
        <ChevronDown className="text-wedding-cream w-8 h-8" />
      </div>

    </section>
  );
};

export default Hero;