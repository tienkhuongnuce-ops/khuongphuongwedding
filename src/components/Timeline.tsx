
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { MapPin, Navigation } from 'lucide-react';
import { weddingConfig } from '../config';

const Timeline: React.FC = () => {
  const { timeline, date, groom, bride } = weddingConfig;
  const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');

  const events = activeTab === 'groom' ? timeline.groom : timeline.bride;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle 
          title="Wedding Events" 
          subtitle={`${date.dayOfWeek}, ${date.fullDate}`} 
        />

        {/* --- TABS --- */}
        <div className="flex justify-center mb-12">
            <div className="inline-flex bg-wedding-bg p-1 rounded-full border border-wedding-primary/20 shadow-sm">
                <button
                    onClick={() => setActiveTab('groom')}
                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                        activeTab === 'groom' 
                        ? 'bg-wedding-primary text-white shadow-md' 
                        : 'text-wedding-primary hover:bg-wedding-primary/5'
                    }`}
                >
                    Nhà Trai
                </button>
                <button
                    onClick={() => setActiveTab('bride')}
                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                        activeTab === 'bride' 
                        ? 'bg-wedding-primary text-white shadow-md' 
                        : 'text-wedding-primary hover:bg-wedding-primary/5'
                    }`}
                >
                    Nhà Gái
                </button>
            </div>
        </div>
        
        <div className="relative mt-8 mb-20 min-h-[400px]">
          {/* Vertical Dotted Line - Red */}
          <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-px top-0 bottom-0 border-l-2 border-dashed border-wedding-primary/30"></div>

          {events.map((event, index) => (
            <div key={`${activeTab}-${index}`} className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-12 md:mb-16 relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} animate-fade-in`}>
              
              {/* Content Box */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0 md:pr-12 text-left md:text-right group">
                 {/* Desktop View */}
                 {index % 2 !== 0 && <div className="hidden md:block">
                     <h3 className="font-serif text-2xl text-wedding-text group-hover:text-wedding-primary transition-colors">{event.title}</h3>
                     <p className="font-bold text-wedding-primary mt-1">{event.time}</p>
                     <p className="text-gray-500 text-sm mt-2">{event.location}</p>
                 </div>}
                 
                 {/* Mobile View (Always Left) */}
                 <div className="md:hidden">
                     <h3 className="font-serif text-xl text-wedding-text">{event.title}</h3>
                     <p className="font-bold text-wedding-primary mt-1">{event.time}</p>
                     <p className="text-gray-500 text-sm mt-2">{event.location}</p>
                 </div>

                 {/* Desktop Left View */}
                 {index % 2 === 0 && <div className="hidden md:block text-right">
                     <h3 className="font-serif text-2xl text-wedding-text group-hover:text-wedding-primary transition-colors">{event.title}</h3>
                     <p className="font-bold text-wedding-primary mt-1">{event.time}</p>
                     <p className="text-gray-500 text-sm mt-2">{event.location}</p>
                 </div>}
              </div>
              
              {/* Center Dot - Red */}
              <div className="absolute left-[6px] md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-white border-4 border-wedding-primary rounded-full z-10 transition-transform group-hover:scale-125"></div>

              {/* Empty Space for alignment */}
              <div className="w-full md:w-5/12 hidden md:block"></div>
            </div>
          ))}
        </div>
        
        {/* Map Cards Section - Shows Both Maps Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Groom's Map */}
            <div className={`bg-wedding-bg p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md ${activeTab === 'groom' ? 'border-wedding-primary ring-1 ring-wedding-primary/30' : 'border-wedding-primary/10 opacity-80 hover:opacity-100'}`}>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-wedding-primary/10 text-wedding-primary rounded-full flex items-center justify-center">
                        <MapPin size={20} />
                    </div>
                    <div className="text-left">
                        <h4 className="font-serif text-xl text-wedding-primary">Nhà Trai</h4>
                        <p className="text-gray-500 text-sm line-clamp-1">{groom.address}</p>
                    </div>
                </div>
                
                {/* Embedded Map Preview */}
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-inner border border-gray-200 bg-gray-100 mb-4 relative group">
                    <iframe 
                        src={groom.mapEmbedUrl} 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="group-hover:opacity-90 transition-opacity"
                    ></iframe>
                </div>

                <a 
                    href={groom.mapUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-wedding-primary/20 text-wedding-primary rounded-lg font-bold text-sm hover:bg-wedding-primary hover:text-white transition-all"
                >
                    <Navigation size={16} />
                    Chỉ đường (Google Maps)
                </a>
            </div>

            {/* Bride's Map */}
            <div className={`bg-wedding-bg p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md ${activeTab === 'bride' ? 'border-wedding-primary ring-1 ring-wedding-primary/30' : 'border-wedding-primary/10 opacity-80 hover:opacity-100'}`}>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-wedding-primary/10 text-wedding-primary rounded-full flex items-center justify-center">
                        <MapPin size={20} />
                    </div>
                    <div className="text-left">
                        <h4 className="font-serif text-xl text-wedding-primary">Nhà Gái</h4>
                        <p className="text-gray-500 text-sm line-clamp-1">{bride.address}</p>
                    </div>
                </div>
                
                {/* Embedded Map Preview */}
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-inner border border-gray-200 bg-gray-100 mb-4 relative group">
                    <iframe 
                        src={bride.mapEmbedUrl} 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="group-hover:opacity-90 transition-opacity"
                    ></iframe>
                </div>

                <a 
                    href={bride.mapUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-wedding-primary/20 text-wedding-primary rounded-lg font-bold text-sm hover:bg-wedding-primary hover:text-white transition-all"
                >
                    <Navigation size={16} />
                    Chỉ đường (Google Maps)
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
