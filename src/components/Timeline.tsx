
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { MapPin, Clock } from 'lucide-react';
import { weddingConfig } from '../config';

const Timeline: React.FC = () => {
  const { timeline, date, groom, bride } = weddingConfig;
  const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');

  const events = Array.isArray(timeline) 
    ? timeline 
    : (timeline as any)[activeTab] || [];

  return (
    <section className="py-24 bg-wedding-cream relative bg-floral-pattern">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle 
          title="Chương Trình Lễ Cưới" 
          subtitle={`${date.dayOfWeek} - ${date.fullDate}`} 
        />
        
        {/* Traditional Tab Switcher */}
        {!Array.isArray(timeline) && (
            <div className="flex justify-center mb-16">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setActiveTab('groom')}
                        className={`px-6 py-3 min-w-[140px] text-center border transition-all duration-300 rounded-lg ${activeTab === 'groom' ? 'border-wedding-red bg-wedding-red text-wedding-cream shadow-md' : 'border-wedding-red/30 text-wedding-red hover:border-wedding-red'}`}
                    >
                        <span className="block font-serif text-lg font-bold">Nhà Trai</span>
                        <span className="text-xs uppercase tracking-wider opacity-80">Quốc Oai</span>
                    </button>
                    <div className="text-wedding-red text-2xl font-serif font-bold">囍</div>
                    <button 
                        onClick={() => setActiveTab('bride')}
                        className={`px-6 py-3 min-w-[140px] text-center border transition-all duration-300 rounded-lg ${activeTab === 'bride' ? 'border-wedding-red bg-wedding-red text-wedding-cream shadow-md' : 'border-wedding-red/30 text-wedding-red hover:border-wedding-red'}`}
                    >
                        <span className="block font-serif text-lg font-bold">Nhà Gái</span>
                        <span className="text-xs uppercase tracking-wider opacity-80">Thái Bình</span>
                    </button>
                </div>
            </div>
        )}

        {/* Timeline Events */}
        <div className="relative mb-20 px-4">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-4 bottom-4 w-[2px] bg-wedding-red/20"></div>

          {events.map((event: any, index: number) => (
            <div key={`${activeTab}-${index}`} className={`flex flex-col md:flex-row items-start justify-center w-full mb-12 relative group ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Time Badge (Mobile) */}
                <div className="md:hidden absolute left-[29px] top-0 w-3 h-3 bg-wedding-red rounded-full border-2 border-wedding-cream z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 pl-20 md:pl-0 md:px-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-wedding-red/10 hover:border-wedding-red/30 transition-all shadow-sm group-hover:shadow-md">
                        <div className={`flex items-center gap-2 mb-2 text-wedding-red font-bold ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                            <Clock size={16} />
                            <span>{event.time}</span>
                        </div>
                        <h3 className="font-serif text-2xl text-wedding-text font-bold mb-2">{event.title}</h3>
                        <div className={`flex items-start gap-2 text-wedding-gold/80 text-sm ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                            <MapPin size={16} className="mt-1 flex-shrink-0" />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </div>

                {/* Center Marker (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-wedding-red rounded-full border-4 border-wedding-cream shadow-sm z-10 mt-6 group-hover:scale-125 transition-transform"></div>
                
                <div className="w-full md:w-5/12 hidden md:block"></div>
            </div>
          ))}
        </div>
        
        {/* Maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/40 p-6 rounded-xl border border-wedding-red/10">
            <div className="text-center group">
                 <h4 className="font-serif text-xl mb-4 text-wedding-red font-bold flex items-center justify-center gap-2">
                    <MapPin size={20} />
                    Địa Chỉ Nhà Trai
                 </h4>
                 <p className="mb-4 text-gray-600">{groom.address}</p>
                 <a href={groom.mapUrl} target="_blank" rel="noreferrer" className="inline-block px-6 py-2 border border-wedding-red text-wedding-red hover:bg-wedding-red hover:text-wedding-cream transition-colors text-sm uppercase tracking-wider rounded-sm">
                    Xem Bản Đồ
                 </a>
            </div>
            <div className="text-center md:border-l border-wedding-red/20 pt-6 md:pt-0 group">
                 <h4 className="font-serif text-xl mb-4 text-wedding-red font-bold flex items-center justify-center gap-2">
                    <MapPin size={20} />
                    Địa Chỉ Nhà Gái
                 </h4>
                 <p className="mb-4 text-gray-600">{bride.address}</p>
                 <a href={bride.mapUrl} target="_blank" rel="noreferrer" className="inline-block px-6 py-2 border border-wedding-red text-wedding-red hover:bg-wedding-red hover:text-wedding-cream transition-colors text-sm uppercase tracking-wider rounded-sm">
                    Xem Bản Đồ
                 </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
