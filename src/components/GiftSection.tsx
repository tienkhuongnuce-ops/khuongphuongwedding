
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { weddingConfig } from '../config';
import { Copy, Check } from 'lucide-react';

const GiftSection: React.FC = () => {
  const { banking } = weddingConfig;
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!banking) return null;

  return (
    <section className="py-24 bg-wedding-cream" id="gift">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle title="Hộp Mừng Cưới" subtitle="Gửi gắm yêu thương" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Groom's Bank */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-wedding-gold/20 text-center transform hover:-translate-y-1 transition-transform duration-300">
             <h3 className="font-names text-3xl text-wedding-red mb-2">Mừng Chú Rể</h3>
             <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">Đến chú rể {weddingConfig.groom.firstName}</p>
             
             <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg mb-6 border-2 border-dashed border-wedding-gold/30 flex items-center justify-center overflow-hidden">
                {banking.groom.qrUrl ? (
                    <img src={banking.groom.qrUrl} alt="QR Code" className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-400 text-xs px-2 flex flex-col items-center justify-center text-center">
                        <span className="mb-2">QR Code</span>
                        <span>{banking.groom.bankName}</span>
                    </span>
                )}
             </div>

             <div className="space-y-2">
                <p className="font-serif text-lg font-bold text-gray-800">{banking.groom.bankName}</p>
                <div className="flex items-center justify-center gap-2">
                    <p className="font-mono text-xl text-wedding-red tracking-wider">{banking.groom.accountNumber}</p>
                    <button 
                        onClick={() => handleCopy(banking.groom.accountNumber, 'groom')}
                        className="text-gray-400 hover:text-wedding-red transition-colors"
                        title="Copy account number"
                    >
                        {copied === 'groom' ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                </div>
                <p className="text-gray-600 text-sm uppercase">{banking.groom.accountName}</p>
             </div>
          </div>

          {/* Bride's Bank */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-wedding-gold/20 text-center transform hover:-translate-y-1 transition-transform duration-300">
             <h3 className="font-names text-3xl text-wedding-red mb-2">Mừng Cô Dâu</h3>
             <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">Đến cô dâu {weddingConfig.bride.firstName}</p>
             
             <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg mb-6 border-2 border-dashed border-wedding-gold/30 flex items-center justify-center overflow-hidden">
                {banking.bride.qrUrl ? (
                    <img src={banking.bride.qrUrl} alt="QR Code" className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-400 text-xs px-2 flex flex-col items-center justify-center text-center">
                        <span className="mb-2">QR Code</span>
                        <span>{banking.bride.bankName}</span>
                    </span>
                )}
             </div>

             <div className="space-y-2">
                <p className="font-serif text-lg font-bold text-gray-800">{banking.bride.bankName}</p>
                <div className="flex items-center justify-center gap-2">
                    <p className="font-mono text-xl text-wedding-red tracking-wider">{banking.bride.accountNumber}</p>
                    <button 
                        onClick={() => handleCopy(banking.bride.accountNumber, 'bride')}
                        className="text-gray-400 hover:text-wedding-red transition-colors"
                        title="Copy account number"
                    >
                        {copied === 'bride' ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                </div>
                <p className="text-gray-600 text-sm uppercase">{banking.bride.accountName}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
