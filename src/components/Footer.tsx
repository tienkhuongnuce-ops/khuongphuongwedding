
import React from 'react';
import { weddingConfig } from '../config';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { groom, bride } = weddingConfig;
  return (
    <footer className="bg-wedding-bg text-wedding-text py-12 text-center border-t border-wedding-primary/10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <Heart size={24} className="text-wedding-primary mb-6 fill-wedding-primary/20" />
        <div className="font-names text-5xl mb-4 text-wedding-primary drop-shadow-sm">{groom.firstName} & {bride.firstName}</div>
        <p className="font-sans text-xs uppercase tracking-[0.2em] opacity-50 mb-8">Chân thành cảm ơn sự hiện diện của bạn</p>
        <div className="flex flex-col gap-1">
          <p className="text-[10px] text-gray-400">© 2025 Wedding Invitation.</p>
          <p className="text-[10px] text-red-500 font-bold opacity-60">Version: Build Fix 2.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
