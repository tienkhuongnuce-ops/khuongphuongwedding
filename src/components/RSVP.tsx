
import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { CheckCircle, Loader2, Users, User, HeartHandshake } from 'lucide-react';
import { weddingConfig } from '../config';

const RSVP: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { date, rsvpApiUrl } = weddingConfig;
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: 'yes',
    guestOf: 'groom',
    relationship: 'friend',
    guests: '1',
    message: ''
  });

  // Auto-fill name from URL if present (e.g., ?g=MyName)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameFromUrl = params.get('g') || params.get('guest');
    if (nameFromUrl) {
      setFormData(prev => ({
        ...prev,
        name: decodeURIComponent(nameFromUrl)
      }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (!formData.name || !formData.phone) {
      setError('Vui lòng điền tên và số điện thoại');
      setLoading(false);
      return;
    }

    // Check if API URL is set
    if (!rsvpApiUrl) {
       // Fallback for demo/no-backend mode
       console.warn("No Google Sheet API URL configured in config.ts");
       setTimeout(() => {
         setSubmitted(true);
         setLoading(false);
       }, 1000);
       return;
    }

    try {
      // Send data to Google Apps Script
      const payload = {
        type: 'rsvp',
        ...formData
      };

      await fetch(rsvpApiUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      // Since we use no-cors, we assume success if no network error occurred
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="py-24 bg-wedding-bg relative border-t border-wedding-primary/10">
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <SectionTitle title="Xác Nhận Tham Gia" />

        {submitted ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-lg animate-fade-in border border-wedding-primary/20 max-w-xl mx-auto">
            <CheckCircle className="mx-auto text-wedding-primary w-16 h-16 mb-4" />
            <h3 className="text-2xl font-serif text-gray-800 mb-2">Cảm ơn bạn!</h3>
            <p className="text-gray-600 mb-6">Chúng mình đã nhận được phản hồi của bạn.</p>
            <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-500">
                Hẹn gặp lại bạn vào ngày {date.fullDate}!
            </div>
            <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-wedding-primary underline"
            >
                Gửi phản hồi khác
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 border border-wedding-primary/20">
              
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        <User size={14} /> Họ và Tên
                    </label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      type="text" 
                      className="w-full border-b-2 border-gray-100 focus:border-wedding-primary px-0 py-2 outline-none transition-colors bg-transparent text-gray-800 text-lg placeholder:text-gray-300" 
                      placeholder="Nguyễn Văn A" 
                    />
                </div>
                <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Số điện thoại
                    </label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      type="tel" 
                      className="w-full border-b-2 border-gray-100 focus:border-wedding-primary px-0 py-2 outline-none transition-colors bg-transparent text-gray-800 text-lg placeholder:text-gray-300" 
                      placeholder="0912..." 
                    />
                </div>
              </div>

              {/* Guest Of & Relationship */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Bạn là khách của?</label>
                        <div className="flex gap-3">
                            <label className="flex-1 cursor-pointer group">
                                <input 
                                  type="radio" 
                                  name="guestOf" 
                                  value="groom" 
                                  checked={formData.guestOf === 'groom'}
                                  onChange={handleChange}
                                  className="peer sr-only" 
                                />
                                <div className="text-center py-3 px-2 border-2 border-gray-200 rounded-lg peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-700 transition-all hover:border-blue-200 flex flex-col items-center gap-1">
                                    <span className="font-bold text-sm">Nhà Trai</span>
                                    <span className="text-[10px] uppercase opacity-60">Groom's Guest</span>
                                </div>
                            </label>
                            <label className="flex-1 cursor-pointer group">
                                <input 
                                  type="radio" 
                                  name="guestOf" 
                                  value="bride" 
                                  checked={formData.guestOf === 'bride'}
                                  onChange={handleChange}
                                  className="peer sr-only" 
                                />
                                <div className="text-center py-3 px-2 border-2 border-gray-200 rounded-lg peer-checked:bg-pink-50 peer-checked:border-pink-500 peer-checked:text-pink-700 transition-all hover:border-pink-200 flex flex-col items-center gap-1">
                                    <span className="font-bold text-sm">Nhà Gái</span>
                                    <span className="text-[10px] uppercase opacity-60">Bride's Guest</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                            <HeartHandshake size={14} /> Mối quan hệ
                        </label>
                        <select 
                            name="relationship"
                            value={formData.relationship}
                            onChange={handleChange}
                            className="w-full border-b-2 border-gray-200 focus:border-wedding-primary bg-transparent py-2 outline-none text-gray-800"
                        >
                            <option value="friend">Bạn bè (Friend)</option>
                            <option value="family">Người thân (Family)</option>
                            <option value="colleague">Đồng nghiệp (Colleague)</option>
                            <option value="partner">Đối tác (Partner)</option>
                            <option value="other">Khác (Other)</option>
                        </select>
                    </div>
                  </div>
              </div>

              {/* Attendance & Count */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Bạn sẽ tham dự chứ?</label>
                    <div className="flex gap-4">
                        <label className="flex-1 cursor-pointer">
                            <input 
                              type="radio" 
                              name="attending" 
                              value="yes" 
                              checked={formData.attending === 'yes'}
                              onChange={handleChange}
                              className="peer sr-only" 
                            />
                            <div className="text-center py-3 border border-gray-200 rounded-lg peer-checked:bg-wedding-primary peer-checked:text-white peer-checked:border-transparent transition-all hover:bg-gray-50 shadow-sm font-medium">
                                Có, chắc chắn!
                            </div>
                        </label>
                        <label className="flex-1 cursor-pointer">
                            <input 
                              type="radio" 
                              name="attending" 
                              value="no" 
                              checked={formData.attending === 'no'}
                              onChange={handleChange}
                              className="peer sr-only" 
                            />
                            <div className="text-center py-3 border border-gray-200 rounded-lg peer-checked:bg-gray-500 peer-checked:text-white peer-checked:border-transparent transition-all hover:bg-gray-50 shadow-sm font-medium">
                                Tiếc quá, mình bận
                            </div>
                        </label>
                    </div>
                </div>
                <div>
                     <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        <Users size={14} /> Số lượng người đi cùng
                     </label>
                     <select 
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full border-b-2 border-gray-100 focus:border-wedding-primary px-0 py-2 outline-none transition-colors bg-transparent text-gray-800 text-lg"
                        disabled={formData.attending === 'no'}
                     >
                        <option value="1">1 mình tui</option>
                        <option value="2">2 người</option>
                        <option value="3">3 người</option>
                        <option value="4">4 người</option>
                        <option value="5">5 người</option>
                        <option value="6">6 người</option>
                     </select>
                </div>
              </div>

              <div>
                 <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Lời nhắn gửi</label>
                 <textarea 
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   rows={3} 
                   className="w-full border-2 border-gray-100 rounded-xl focus:border-wedding-primary p-4 outline-none transition-colors bg-transparent resize-none text-gray-800 placeholder:text-gray-300" 
                   placeholder="Gửi lời chúc đến chúng mình nhé..."
                 ></textarea>
              </div>

              {error && <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</p>}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-wedding-primary text-white font-bold py-4 rounded-xl hover:bg-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-lg"
              >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin" />
                        Đang gửi...
                    </>
                ) : (
                    "Gửi Xác Nhận"
                )}
              </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default RSVP;
