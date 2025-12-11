import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { CheckCircle } from 'lucide-react';
import { weddingConfig } from '../config';

const RSVP: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { date } = weddingConfig;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-24 bg-wedding-cream relative border-t border-wedding-red/10">
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <SectionTitle title="R.S.V.P" subtitle={`Vui lòng phản hồi trước ngày ${date.rsvpDeadline}`} />

        {submitted ? (
          <div className="bg-wedding-cream rounded-2xl p-10 text-center border-2 border-wedding-red/20 animate-fade-in">
            <CheckCircle className="mx-auto text-wedding-red w-16 h-16 mb-4" />
            <h3 className="text-2xl font-serif text-wedding-red mb-2">Thank You!</h3>
            <p className="text-wedding-red/80">Chúng mình đã nhận được phản hồi của bạn.</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 text-wedding-red underline text-sm hover:text-red-900 font-bold">
              Gửi lại
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-wedding-cream rounded-2xl border-2 border-wedding-red/20 p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-wedding-red/60 uppercase tracking-wider mb-2">Họ và Tên</label>
                    <input required type="text" className="w-full border-b-2 border-wedding-red/20 focus:border-wedding-red px-0 py-2 outline-none transition-colors bg-transparent text-wedding-red placeholder-wedding-red/30" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-wedding-red/60 uppercase tracking-wider mb-2">Số điện thoại</label>
                    <input required type="tel" className="w-full border-b-2 border-wedding-red/20 focus:border-wedding-red px-0 py-2 outline-none transition-colors bg-transparent text-wedding-red placeholder-wedding-red/30" placeholder="0912..." />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-wedding-red/60 uppercase tracking-wider mb-3">Tham dự</label>
                <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                        <input type="radio" name="attending" value="yes" className="peer sr-only" defaultChecked />
                        <div className="text-center py-3 border border-wedding-red/20 rounded-lg text-wedding-red peer-checked:bg-wedding-red peer-checked:text-wedding-cream peer-checked:border-transparent transition-all font-bold">
                            Có
                        </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                        <input type="radio" name="attending" value="no" className="peer sr-only" />
                        <div className="text-center py-3 border border-wedding-red/20 rounded-lg text-wedding-red peer-checked:bg-wedding-red/50 peer-checked:text-wedding-cream peer-checked:border-transparent transition-all font-bold">
                            Không
                        </div>
                    </label>
                </div>
              </div>

              <div>
                 <label className="block text-xs font-bold text-wedding-red/60 uppercase tracking-wider mb-2">Lời nhắn</label>
                 <textarea rows={2} className="w-full border-b-2 border-wedding-red/20 focus:border-wedding-red px-0 py-2 outline-none transition-colors bg-transparent resize-none text-wedding-red placeholder-wedding-red/30" placeholder="Lời chúc..."></textarea>
              </div>

              <button type="submit" className="w-full bg-wedding-red text-wedding-cream font-bold py-4 rounded-xl hover:bg-wedding-red/90 transition-all shadow-none border border-wedding-red">
                Gửi Xác Nhận
              </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default RSVP;