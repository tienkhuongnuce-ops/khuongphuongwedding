import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Send, Heart } from 'lucide-react';

interface Wish {
  id: number;
  name: string;
  message: string;
  date: string;
}

const Wishes: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([
    { id: 1, name: "Minh Anh", message: "Chúc hai bạn trăm năm hạnh phúc! Sớm sinh quý tử nhé.", date: "20/12/2025" },
    { id: 2, name: "Hoàng Nam", message: "Chúc mừng hạnh phúc hai bạn. Mong hai bạn luôn yêu thương và nhường nhịn nhau.", date: "21/12/2025" },
    { id: 3, name: "Thu Hà", message: "Đám cưới như mơ, chúc mừng chúc mừng! Hẹn gặp lại mọi người vào ngày vui.", date: "22/12/2025" },
    { id: 4, name: "Cô Chú Hùng Lan", message: "Chúc hai cháu đầu bạc răng long, gia đình êm ấm, thuận hòa.", date: "23/12/2025" },
    { id: 5, name: "Team Marketing", message: "Happy Wedding! Chúc sếp Khương mãi hạnh phúc bên nóc nhà nhé!", date: "24/12/2025" }
  ]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    
    const newWish: Wish = {
      id: Date.now(),
      name,
      message,
      date: new Date().toLocaleDateString('vi-VN')
    };
    
    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
  };

  return (
    <section className="py-24 bg-wedding-cream border-t border-wedding-red/10">
      <div className="max-w-5xl mx-auto px-4">
         <SectionTitle title="Sổ Lưu Bút" subtitle="Những lời chúc phúc chân thành" />
         
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form - 4 Columns */}
            <div className="lg:col-span-5 bg-wedding-cream p-8 rounded-2xl border-2 border-wedding-red/10 h-fit sticky top-24">
               <h3 className="text-2xl font-serif text-wedding-red mb-6">Gửi Lời Chúc</h3>
               <form onSubmit={handleSubmit} className="space-y-5">
                  <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-wedding-cream border border-wedding-red/30 focus:border-wedding-red rounded-lg outline-none transition-all text-wedding-red placeholder-wedding-red/40"
                    placeholder="Tên của bạn..."
                    required
                  />
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-wedding-cream border border-wedding-red/30 focus:border-wedding-red rounded-lg outline-none transition-all h-40 resize-none text-wedding-red placeholder-wedding-red/40"
                    placeholder="Viết lời chúc của bạn..."
                    required
                  />
                  <button type="submit" className="w-full bg-wedding-red text-wedding-cream py-3 rounded-lg font-medium hover:bg-wedding-red/90 transition-colors flex items-center justify-center gap-2">
                    <Send size={16} />
                    Gửi Lời Chúc
                  </button>
               </form>
            </div>

            {/* List - 8 Columns */}
            <div className="lg:col-span-7">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wishes.map((wish) => (
                     <div key={wish.id} className="bg-wedding-cream p-6 rounded-xl border border-wedding-red/20 hover:border-wedding-red/40 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                           <span className="font-bold text-wedding-red text-lg">{wish.name}</span>
                           <Heart size={16} className="text-wedding-red fill-wedding-red" />
                        </div>
                        <p className="text-wedding-red/80 text-sm italic mb-4 leading-relaxed line-clamp-4">"{wish.message}"</p>
                        <p className="text-xs text-wedding-red/50 text-right uppercase tracking-wider">{wish.date}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};
export default Wishes;