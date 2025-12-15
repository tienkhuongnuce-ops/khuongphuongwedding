
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
      </div>
    </footer>
  );
};

export default Footer;
