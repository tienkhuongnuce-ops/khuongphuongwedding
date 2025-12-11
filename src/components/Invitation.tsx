import React, { useEffect, useState } from 'react';
import { weddingConfig } from '../config';

const Invitation: React.FC = () => {
  const { groom, bride } = weddingConfig;
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('to') || params.get('guest') || params.get('name');
    if (name) {
      setGuestName(name);
    }
  }, []);

  return (
    <section id="invitation" className="py-24 px-4 relative overflow-hidden bg-wedding-cream">
      
      <div className="max-w-6xl mx-auto text-center bg-white/50 backdrop-blur-sm p-8 md:p-16 rounded-sm shadow-xl border border-wedding-red/10 relative">
        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-wedding-red/30"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-wedding-red/30"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-wedding-red/30"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-wedding-red/30"></div>

        <div className="text-xl md:text-2xl font-serif text-wedding-red/80 mb-2 uppercase tracking-widest">
            Trân trọng kính mời
        </div>
        
        {guestName && (
            <div className="my-8 relative">
                <div className="text-4xl md:text-6xl text-wedding-red font-names drop-shadow-sm p-4" style={{ fontFamily: '"Great Vibes", cursive' }}>
                    {guestName}
                </div>
                <div className="w-32 h-[1px] bg-wedding-red/30 mx-auto mt-4"></div>
            </div>
        )}

        <div className="text-wedding-red/80 font-sans italic mb-12">
            Tới dự bữa cơm thân mật chung vui cùng gia đình chúng tôi
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative mt-8">
            {/* Center Divider */}
            <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 w-[1px] bg-wedding-red/20 flex-col items-center justify-center">
                <div className="bg-wedding-cream p-2 text-2xl">囍</div>
            </div>

          {/* Groom's Family */}
          <div className="text-center relative z-10">
             <div className="mb-6">
                 <div className="uppercase text-xs tracking-widest text-wedding-red/60 font-bold mb-2">Nhà Trai</div>
                 <h3 className="text-4xl font-names font-bold text-wedding-red mb-4" style={{ fontFamily: '"Great Vibes", cursive' }}>
                    {groom.firstName}
                 </h3>
                 <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-wedding-red/20 p-1">
                     <img src={weddingConfig.images.gallery[0]} alt="Groom" className="w-full h-full object-cover rounded-full" />
                 </div>
             </div>
             
             <div className="space-y-2 font-serif text-wedding-red">
               <div className="text-sm uppercase tracking-wider font-bold border-b border-wedding-red/20 pb-1 mb-2 inline-block">Trưởng Nam</div>
               {groom.father && <p className="text-lg">Ông: <span className="font-bold">{groom.father}</span></p>}
               {groom.mother && <p className="text-lg">Bà: <span className="font-bold">{groom.mother}</span></p>}
               <p className="text-sm italic text-wedding-red/60 mt-2">{groom.address}</p>
             </div>
          </div>

          {/* Bride's Family */}
          <div className="text-center relative z-10">
            <div className="mb-6">
                 <div className="uppercase text-xs tracking-widest text-wedding-red/60 font-bold mb-2">Nhà Gái</div>
                 <h3 className="text-4xl font-names font-bold text-wedding-red mb-4" style={{ fontFamily: '"Great Vibes", cursive' }}>
                    {bride.firstName}
                 </h3>
                 <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-wedding-red/20 p-1">
                     <img src={weddingConfig.images.gallery[1]} alt="Bride" className="w-full h-full object-cover rounded-full" />
                 </div>
             </div>

            <div className="space-y-2 font-serif text-wedding-red">
               <div className="text-sm uppercase tracking-wider font-bold border-b border-wedding-red/20 pb-1 mb-2 inline-block">Trưởng Nữ</div>
              {bride.father && <p className="text-lg">Ông: <span className="font-bold">{bride.father}</span></p>}
              {bride.mother && <p className="text-lg">Bà: <span className="font-bold">{bride.mother}</span></p>}
              <p className="text-sm italic text-wedding-red/60 mt-2">{bride.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-wedding-red/10">
            <p className="font-serif text-xl md:text-2xl text-wedding-red">
              Sự hiện diện của quý vị là niềm vinh hạnh cho gia đình chúng tôi.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Invitation;