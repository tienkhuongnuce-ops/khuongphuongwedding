
import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { Send, Heart, MessageSquare, Loader2 } from 'lucide-react';
import { weddingConfig } from '../config';

interface Wish {
  id: number;
  name: string;
  message: string;
  date: string;
}

const Wishes: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Use the API URL from config
  const apiUrl = weddingConfig.wishesApiUrl || weddingConfig.rsvpApiUrl;

  // Fetch wishes on load
  useEffect(() => {
    if (!apiUrl) return;

    const fetchWishes = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
           const data = await response.json();
           if (Array.isArray(data)) {
             setWishes(data);
           }
        }
      } catch (error) {
        console.error("Error fetching wishes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWishes();
  }, [apiUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setIsSubmitting(true);
    
    // Optimistic Update (Show it immediately before server confirms)
    const newWish: Wish = {
      id: Date.now(),
      name,
      message,
      date: new Date().toLocaleDateString('vi-VN')
    };
    
    // If no API is configured, just update local state
    if (!apiUrl) {
       setWishes([newWish, ...wishes]);
       setName('');
       setMessage('');
       setIsSubmitting(false);
       return;
    }

    try {
       // Send to Google Sheets
       await fetch(apiUrl, {
         method: 'POST',
         mode: 'no-cors', // standard for Google Forms/Scripts
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           type: 'wish', // Distinguish from RSVP
           name,
           message
         })
       });

       // Update UI
       setWishes([newWish, ...wishes]);
       setName('');
       setMessage('');
    } catch (error) {
       console.error("Error sending wish:", error);
       alert("Có lỗi xảy ra, vui lòng thử lại.");
    } finally {
       setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-wedding-primary/10">
      <div className="max-w-5xl mx-auto px-4">
         <SectionTitle title="Wishes" />
         
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form - 4 Columns */}
            <div className="lg:col-span-5 bg-wedding-bg p-8 rounded-2xl shadow-inner border border-wedding-primary/10 h-fit">
               <h3 className="text-2xl font-serif text-wedding-text mb-6">Gửi Lời Chúc</h3>
               <form onSubmit={handleSubmit} className="space-y-5">
                  <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-wedding-primary rounded-lg outline-none transition-all shadow-sm"
                    placeholder="Tên của bạn..."
                    required
                  />
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-wedding-primary rounded-lg outline-none transition-all shadow-sm h-32 resize-none"
                    placeholder="Viết lời chúc..."
                    required
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-wedding-primary text-white py-3 rounded-lg font-medium hover:bg-red-800 transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
                    {isSubmitting ? "Đang gửi..." : "Gửi Lời Chúc"}
                  </button>
               </form>
            </div>

            {/* List - 8 Columns */}
            <div className="lg:col-span-7">
               {isLoading ? (
                  <div className="flex justify-center py-12">
                     <Loader2 className="animate-spin text-wedding-primary" size={32} />
                  </div>
               ) : wishes.length > 0 ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-min max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {wishes.map((wish) => (
                       <div key={wish.id} className="bg-white p-6 rounded-xl border border-wedding-primary/10 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
                          <div className="flex justify-between items-start mb-3">
                             <span className="font-bold text-wedding-primary">{wish.name}</span>
                             <Heart size={14} className="text-wedding-primary fill-wedding-primary" />
                          </div>
                          <p className="text-gray-600 text-sm italic mb-3 leading-relaxed">"{wish.message}"</p>
                          <p className="text-xs text-wedding-primary/60 text-right">{wish.date ? new Date(wish.date).toLocaleDateString('vi-VN') : ''}</p>
                       </div>
                    ))}
                 </div>
               ) : (
                 <div className="flex flex-col items-center justify-center h-full py-12 text-center text-gray-400 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <MessageSquare size={48} className="mb-4 opacity-50" />
                    <p className="font-serif text-lg">Chưa có lời chúc nào.</p>
                    <p className="text-sm">Hãy là người đầu tiên gửi lời chúc đến chúng mình nhé!</p>
                 </div>
               )}
            </div>
         </div>
      </div>
    </section>
  );
};
export default Wishes;
