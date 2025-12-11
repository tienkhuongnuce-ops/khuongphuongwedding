import React, { useEffect, useState } from 'react';
import { weddingConfig } from '../config';

const Invitation: React.FC = () => {
  const { groom, bride } = weddingConfig;
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    // Check for guest name in URL parameters (e.g., ?to=Anh+Nam or ?guest=Chi+Lan)
    const params = new URLSearchParams(window.location.search);
    const name = params.get('to') || params.get('guest') || params.get('name');
    if (name) {
      setGuestName(name);
    }
  }, []);

  return (
    <section id="invitation" className="py-24 px-4 relative overflow-hidden bg-wedding-cream">
      
      <div className="max-w-4xl mx-auto text-center bg-wedding-cream p-10 md:p-16 rounded-[2rem] shadow-none border-2 border-wedding-red/10 relative">
        {/* Double border effect */}
        <div className="absolute inset-3 border border-wedding-red/20 rounded-[1.5rem] pointer-events-none"></div>

        {/* Simple Traditional Header (—— 囍 ——) */}
        <div className="flex items-center justify-center gap-6 mb-10">
            <span className="h-[2px] w-16 md:w-24 bg-wedding-red/60"></span>
            <span className="text-5xl md:text-6xl font-serif text-wedding-red font-bold tracking-widest drop-shadow-sm select-none">囍</span>
            <span className="h-[2px] w-16 md:w-24 bg-wedding-red/60"></span>
        </div>

        <h2 className="text-3xl md:text-4xl font-names text-wedding-red mb-6 drop-shadow-sm">
            Trân trọng kính mời
            {guestName && (
                <div className="mt-4 font-script text-4xl md:text-5xl text-wedding-red font-bold">
                    {guestName}
                </div>
            )}
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 relative mt-12">
            {/* Center Divider Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wedding-red/20"></div>

          {/* Groom's Side */}
          <div className="text-center relative z-10 p-6 transition-all duration-500">
             <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-wedding-red p-1">
                 <img src={weddingConfig.images.gallery[0]} alt="Groom" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" />
             </div>
            <h3 className="text-4xl font-names text-wedding-red mb-2 scale-110 drop-shadow-sm">{groom.firstName}</h3>
            <p className="text-xs uppercase tracking-widest text-wedding-red mb-4 font-bold">Chú Rể</p>
            <div className="font-serif text-wedding-red space-y-1">
              {groom.father && <p className="font-semibold">Ông: {groom.father}</p>}
              {groom.mother && <p className="font-semibold">Bà: {groom.mother}</p>}
            </div>
            <p className="text-wedding-red/70 text-sm italic mt-3 max-w-xs mx-auto">{groom.address}</p>
          </div>

          {/* Bride's Side */}
          <div className="text-center relative z-10 p-6 transition-all duration-500">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-wedding-red p-1">
                 <img src={weddingConfig.images.gallery[1]} alt="Bride" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" />
             </div>
            <h3 className="text-4xl font-names text-wedding-red mb-2 scale-110 drop-shadow-sm">{bride.firstName}</h3>
            <p className="text-xs uppercase tracking-widest text-wedding-red mb-4 font-bold">Cô Dâu</p>
            <div className="font-serif text-wedding-red space-y-1">
              {bride.father && <p className="font-semibold">Ông: {bride.father}</p>}
              {bride.mother && <p className="font-semibold">Bà: {bride.mother}</p>}
            </div>
            <p className="text-wedding-red/70 text-sm italic mt-3 max-w-xs mx-auto">{bride.address}</p>
          </div>
        </div>

        <p className="font-serif text-lg md:text-xl text-wedding-red/80 mt-12 max-w-2xl mx-auto leading-relaxed">
          Chúng mình rất mong chờ sự hiện diện của bạn trong ngày vui này.
        </p>
      </div>
    </section>
  );
};

export default Invitation;