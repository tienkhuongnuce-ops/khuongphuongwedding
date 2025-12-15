
import React, { useEffect, useState } from 'react';
import { weddingConfig } from '../config';
import ScrollAnimation from './ScrollAnimation';

const Invitation: React.FC = () => {
  const { groom, bride, images } = weddingConfig;
  const [guestName, setGuestName] = useState<string>("");

  useEffect(() => {
    // Logic to extract guest name from URL (e.g., domain.com/?g=Nguyen+Van+A)
    const params = new URLSearchParams(window.location.search);
    const name = params.get('g') || params.get('guest');
    if (name) {
      setGuestName(decodeURIComponent(name));
    }
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://placehold.co/400x400/e2e8f0/9F1239?text=No+Photo";
  };

  return (
    <section id="invitation" className="py-24 px-4 relative overflow-hidden bg-wedding-bg">
      <div className="max-w-4xl mx-auto text-center bg-white p-10 md:p-16 rounded-[2rem] shadow-xl border-2 border-wedding-primary/10 relative overflow-hidden">
        
        {/* Inner Border */}
        <div className="absolute inset-4 border border-wedding-primary/20 rounded-[1.5rem] pointer-events-none z-10"></div>

        <div className="relative z-20">
            {/* Traditional Header (—— 囍 ——) */}
            <ScrollAnimation variant="fade-up">
              <div className="flex items-center justify-center gap-6 mb-10">
                  <span className="h-[1px] w-16 md:w-24 bg-wedding-primary/60"></span>
                  <span className="text-5xl md:text-6xl font-serif text-wedding-primary font-bold tracking-widest drop-shadow-sm select-none bg-white px-4 border-2 border-wedding-primary rounded-full w-20 h-20 flex items-center justify-center">囍</span>
                  <span className="h-[1px] w-16 md:w-24 bg-wedding-primary/60"></span>
              </div>

              <h2 className="text-3xl md:text-4xl font-names text-wedding-primary mb-6 drop-shadow-sm">Trân trọng kính mời</h2>
              
              {/* Dynamic Guest Name Section */}
              <div className="flex flex-col items-center justify-center gap-2 text-wedding-primary mb-10 min-h-[4rem]">
                  {guestName ? (
                    <>
                      <span className="font-serif text-2xl md:text-4xl font-bold border-b-2 border-wedding-primary/20 pb-2 px-8 mt-2 text-wedding-primary">
                        {guestName}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-serif text-xl md:text-3xl font-bold mt-2">
                        Quý khách và Gia đình
                      </span>
                    </>
                  )}
              </div>
            </ScrollAnimation>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 relative mt-12 mb-16">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wedding-primary/10"></div>

            {/* Groom's Side */}
            <div className="flex-1 w-full">
              <ScrollAnimation variant="fade-left">
                <div className="text-center relative z-10 p-6 flex flex-col items-center">
                    {/* LABEL ON TOP */}
                    <p className="text-sm uppercase tracking-widest text-wedding-primary mb-4 font-bold border-b border-wedding-primary/30 pb-1">CHÚ RỂ</p>
                    
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-wedding-primary p-1">
                        <img 
                        src={images.groom} 
                        alt="Groom" 
                        className="w-full h-full object-cover rounded-full" 
                        onError={handleImageError}
                        />
                    </div>
                    <h3 className="text-4xl font-names text-wedding-primary mb-4">{groom.firstName}</h3>
                    
                    <div className="font-serif text-gray-800 space-y-1 text-lg md:text-xl">
                    {groom.father && <p className="font-semibold">Ông: {groom.father}</p>}
                    {groom.mother && <p className="font-semibold">Bà: {groom.mother}</p>}
                    </div>
                    <p className="text-gray-500 text-xs italic mt-3 max-w-xs mx-auto">{groom.address}</p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Bride's Side */}
            <div className="flex-1 w-full">
              <ScrollAnimation variant="fade-right" delay={200}>
                <div className="text-center relative z-10 p-6 flex flex-col items-center">
                    {/* LABEL ON TOP */}
                    <p className="text-sm uppercase tracking-widest text-wedding-primary mb-4 font-bold border-b border-wedding-primary/30 pb-1">CÔ DÂU</p>

                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-wedding-primary p-1">
                        <img 
                        src={images.bride} 
                        alt="Bride" 
                        className="w-full h-full object-cover rounded-full" 
                        onError={handleImageError}
                        />
                    </div>
                    <h3 className="text-4xl font-names text-wedding-primary mb-4">{bride.firstName}</h3>
                    
                    <div className="font-serif text-gray-800 space-y-1 text-lg md:text-xl">
                    {bride.father && <p className="font-semibold">Ông: {bride.father}</p>}
                    {bride.mother && <p className="font-semibold">Bà: {bride.mother}</p>}
                    </div>
                    <p className="text-gray-500 text-xs italic mt-3 max-w-xs mx-auto">{bride.address}</p>
                </div>
              </ScrollAnimation>
            </div>
            </div>

            <ScrollAnimation variant="fade-up" delay={300}>
              <p className="font-serif text-xl md:text-2xl text-gray-600 mb-6 max-w-2xl mx-auto italic leading-relaxed">
                  Sự hiện diện của Quý Khách là niềm vinh hạnh cho gia đình chúng tôi
              </p>
            </ScrollAnimation>

            {/* Wedding Procession Decoration (Rước Dâu) */}
            {images.decoration && (
            <ScrollAnimation variant="zoom-in" delay={400}>
              <div className="w-full flex justify-center mt-8 opacity-90">
                  <img 
                  src={images.decoration} 
                  alt="Traditional Wedding Decoration" 
                  className="max-w-full h-auto md:max-h-32 object-contain mix-blend-multiply"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                  />
              </div>
            </ScrollAnimation>
            )}
        </div>
      </div>
    </section>
  );
};

export default Invitation;
