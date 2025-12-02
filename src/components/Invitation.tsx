
import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { CheckCircle, Loader2 } from 'lucide-react';
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
      // payload includes 'type': 'rsvp' to distinguish from wishes
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
    <section id="rsvp" className="py-24 bg-wedding-cream relative border-t border-wedding-gold/10">
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        {/* Updated Title - Removed subtitle */}
        <SectionTitle title="Xác Nhận Tham Gia" />

        {submitted ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-lg animate-fade-in border border-wedding-gold/20">
            <CheckCircle className="mx-auto text-wedding-gold w-16 h-16 mb-4" />
            <h3 className="text-2xl font-serif text-gray-800 mb-2">Cảm ơn bạn!</h3>
            <p className="text-gray-600 mb-6">Chúng mình đã nhận được phản hồi của bạn.</p>
            <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-500">
                Hẹn gặp lại bạn vào ngày {date.fullDate}!
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-6 border border-wedding-gold/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Họ và Tên</label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      type="text" 
                      className="w-full border-b-2 border-gray-100 focus:border-wedding-gold px-0 py-2 outline-none transition-colors bg-transparent text-gray-800" 
                      placeholder="Nguyễn Văn A" 
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Số điện thoại</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      type="tel" 
                      className="w-full border-b-2 border-gray-100 focus:border-wedding-gold px-0 py-2 outline-none transition-colors bg-transparent text-gray-800" 
                      placeholder="0912..." 
                    />
                </div>
              </div>

              {/* Guest of Side Selection */}
              <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Bạn là khách của?</label>
                  <div className="flex gap-4">
                      <label className="flex-1 cursor-pointer">
                          <input 
                            type="radio" 
                            name="guestOf" 
                            value="groom" 
                            checked={formData.guestOf === 'groom'}
                            onChange={handleChange}
                            className="peer sr-only" 
                          />
                          <div className="text-center py-3 border border-gray-200 rounded-lg peer-checked:bg-blue-900 peer-checked:text-white peer-checked:border-transparent transition-all hover:bg-gray-50">
                              Nhà Trai
                          </div>
                      </label>
                      <label className="flex-1 cursor-pointer">
                          <input 
                            type="radio" 
                            name="guestOf" 
                            value="bride" 
                            checked={formData.guestOf === 'bride'}
                            onChange={handleChange}
                            className="peer sr-only" 
                          />
                          <div className="text-center py-3 border border-gray-200 rounded