import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { generateWeddingWish } from '../services/geminiService';
import { GuestWishRequest } from '../types';
import { Sparkles, Send, RefreshCw, Copy } from 'lucide-react';

const AIWishGenerator: React.FC = () => {
  const [formData, setFormData] = useState<GuestWishRequest>({
    name: '',
    relationship: 'friend',
    tone: 'heartfelt'
  });
  const [generatedWish, setGeneratedWish] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!formData.name) {
      alert("Vui lòng nhập tên của bạn!");
      return;
    }

    setIsLoading(true);
    setGeneratedWish('');
    try {
      const wish = await generateWeddingWish(formData);
      setGeneratedWish(wish);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedWish);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-white border-y border-vn-gold/20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="Gửi Lời Chúc" subtitle="Sử dụng AI để tạo lời chúc ý nghĩa" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <div className="bg-vn-cream p-6 rounded-lg shadow-md border border-vn-gold/30">
            <h3 className="text-xl font-bold text-vn-red mb-4 flex items-center gap-2">
              <Sparkles className="text-vn-gold" size={20} />
              Trợ lý Lời chúc (AI)
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tên của bạn</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-vn-red/50 focus:border-vn-red outline-none"
                  placeholder="Nhập tên của bạn..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mối quan hệ</label>
                <select 
                  value={formData.relationship}
                  onChange={(e) => setFormData({...formData, relationship: e.target.value as any})}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-vn-red/50 focus:border-vn-red outline-none"
                >
                  <option value="family">Người thân</option>
                  <option value="friend">Bạn bè</option>
                  <option value="colleague">Đồng nghiệp</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phong cách lời chúc</label>
                <select 
                  value={formData.tone}
                  onChange={(e) => setFormData({...formData, tone: e.target.value as any})}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-vn-red/50 focus:border-vn-red outline-none"
                >
                  <option value="heartfelt">Chân thành, xúc động</option>
                  <option value="funny">Hài hước, vui vẻ</option>
                  <option value="formal">Trang trọng, lịch sự</option>
                  <option value="poetic">Thơ mộng</option>
                </select>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isLoading}
                className="w-full bg-vn-red text-white py-2 rounded font-medium hover:bg-red-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? <RefreshCw className="animate-spin" size={18} /> : <Sparkles size={18} />}
                {isLoading ? 'Đang suy nghĩ...' : 'Tạo lời chúc hay'}
              </button>
            </div>
          </div>

          {/* Result Display */}
          <div className="relative h-full min-h-[300px] flex flex-col">
             <div className="absolute top-0 right-0 -mt-6 -mr-6 opacity-10 pointer-events-none">
               <div className="text-9xl text-vn-red font-serif">“</div>
             </div>
             
             <div className="bg-gradient-to-br from-vn-gold/10 to-transparent p-8 rounded-lg border border-vn-gold/20 flex-grow flex flex-col justify-center items-center text-center">
                {generatedWish ? (
                  <div className="animate-fade-in">
                    <p className="font-script text-3xl text-vn-red mb-4 leading-relaxed">
                      "{generatedWish}"
                    </p>
                    <p className="text-sm text-gray-500 italic">- Từ: {formData.name}</p>
                    
                    <button 
                      onClick={handleCopy}
                      className="mt-6 flex items-center gap-2 mx-auto text-sm text-gray-600 hover:text-vn-red transition-colors"
                    >
                      <Copy size={16} />
                      {copied ? 'Đã sao chép!' : 'Sao chép lời chúc'}
                    </button>
                  </div>
                ) : (
                  <div className="text-gray-400">
                    <p className="mb-2">Lời chúc của bạn sẽ xuất hiện ở đây.</p>
                    <p className="text-sm">Hãy nhập thông tin và nhấn nút tạo.</p>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWishGenerator;