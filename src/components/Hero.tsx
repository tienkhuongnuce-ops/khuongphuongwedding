
import React from 'react';
import { weddingConfig } from '../config';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { groom, bride, date, images } = weddingConfig;
  const displayDate = `${date.day} . ${date.month} . ${date.year}`;

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-wedding-red">
      
      {/* 1. Background Image with Red Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img 
          src={images.hero} 
          alt="Wedding Background" 
          className="w-full h-full object-cover animate-float grayscale opacity-50 mix-blend-multiply"
          style={{ animationDuration: '25s' }}
          onError={(e) => {
             const target = e.target as HTMLImageElement;
             target.style.display = 'none';
          }}
        />
        
        {/* Deep Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-wedding-red/40 via-wedding-red/20 to-wedding-red/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 text-center text-wedding-cream px-4 w-full max-w-5xl animate-fade-in flex flex-col items-center gap-4">
        
        {/* Top Tagline */}
        <div className="mb-6 flex items-center gap-4 opacity-90">
            <span className="h-[1px] w-12 bg-wedding-cream/60"></span>
            <div className="border border-wedding-cream/60 px-4 py-1 rounded-sm">
                <span className="text-sm md:text-base uppercase tracking-[0.3em] text-wedding-cream font-serif font-bold">
                    Trân Trọng Kính Mời
                </span>
            </div>
            <span className="h-[1px] w-12 bg-wedding-cream/60"></span>
        </div>

        {/* Double Happiness Symbol */}
        <div className="text-6xl md:text-8xl text-wedding-gold drop-shadow-lg animate-pulse-slow mb-4 font-serif font-bold select-none">
            囍
        </div>

        {/* Names Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 my-2 relative">
            <h1 className="font-names font-bold text-6xl md:text-8xl lg:text-9xl text-wedding-cream drop-shadow-md z-10">
                {groom.firstName}
            </h1>
            
            <div className="font-serif text-4xl md:text-5xl text-wedding-gold/90 italic font-light my-2 md:my-0">&</div>

            <h1 className="font-names font-bold text-6xl md:text-8xl lg:text-9xl text-wedding-cream drop-shadow-md z-10">
                {bride.firstName}
            </h1>
        </div>
        
        <p className="text-wedding-cream/80 text-lg font-serif italic mt-2">Đến dự Lễ Thành Hôn của chúng tôi</p>

        {/* Date Display */}
        <div className="mt-10 relative">
             <div className="border-y-2 border-wedding-gold/50 py-4 px-12 backdrop-blur-sm bg-wedding-red/10">
                 <div className="text-2xl md:text-4xl font-serif tracking-[0.2em] text-wedding-cream font-bold">
                    {displayDate}
                 </div>
             </div>
             <p className="text-base md:text-lg font-sans font-light tracking-widest uppercase text-wedding-cream/80 mt-4">
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

export default Hero;
