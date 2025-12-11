import React from 'react';
import { weddingConfig } from '../config';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { groom, bride } = weddingConfig;
  return (
    <footer className="bg-wedding-cream text-wedding-red py-12 text-center border-t border-wedding-red/20">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <Heart size={24} className="text-wedding-red mb-6 fill-wedding-red/20" />
        <div 
          className="font-names font-bold text-6xl mb-4 text-wedding-red drop-shadow-sm"
          style={{ fontFamily: '"Great Vibes", cursive' }}
        >
            {groom.firstName} & {bride.firstName}
        </div>
        <p className="font-sans text-xs uppercase tracking-[0.2em] opacity-50 mb-8">Thank you for celebrating with us</p>
      </div>
    </footer>
  );
};

export default Footer;