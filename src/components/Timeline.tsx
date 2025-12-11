
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { MapPin } from 'lucide-react';
import { weddingConfig } from '../config';

const Timeline: React.FC = () => {
  const { timeline, date, groom, bride } = weddingConfig;
  const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');

  // Handle both legacy array structure (fallback) and new object structure
  const events = Array.isArray(timeline) 
    ? timeline 
    : (timeline as any)[activeTab] || [];

  return (
    <section className="py-24 bg-wedding-cream relative">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle 
          title="Chương Trình Hôn Lễ" 
          subtitle={`${date.dayOfWeek}, ${date.fullDate}`} 
        />
        
        {/* Tab Navigation */}
        {!Array.isArray(timeline) && (
            <div className="flex justify-center mb-16">
                <div className="bg-wedding-cream p-1 rounded-full border border-wedding-red/30 inline-flex relative">
                    <button 
                        onClick={() => setActiveTab('groom')}
                        className={`relative z-10 px-8 py-3 rounded-full text-sm md:text-base font-serif font-bold transition-all duration-300 ${activeTab === 'groom' ? 'text-wedding-cream bg-wedding-red' : 'text-wedding-red hover:bg-wedding-red/10'}`}
                    >
                        Nhà Trai
                    </button>
                    <button 
                        onClick={() => setActiveTab('bride')}
                        className={`relative z-10 px-8 py-3 rounded-full text-sm md:text-base font-serif font-bold transition-all duration-300 ${activeTab === 'bride' ? 'text-wedding-cream bg-wedding-red' : 'text-wedding-red hover:bg-wedding-red/10'}`}
                    >
                        Nhà Gái
                    </button>
                </div>
            </div>
        )}

        <div className="relative mt-8 mb-20 min-h-[400px]">
          {/* Vertical Dotted Line - Red */}
          <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-px top-0 bottom-0 border-l-2 border-dashed border-wedding-red/30"></div>

          {events.map((event: any, index: number) => (
            <div key={`${activeTab}-${index}`} className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-16 relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} animate-fade-in`}>
                
                {/* Content Box */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0 md:pr-12 text-left md:text-right group">
                   {index % 2 !== 0 && <div className="hidden md:block">
                       <h3 className="font-serif text-2xl text-wedding-red group-hover:underline decoration-wedding-red/30 underline-offset-4 transition-all">{event.title}</h3>
                       <p className="font-bold text-wedding-red mt-1">{event.time}</p>
                       <p className="text-wedding-red/70 text-sm mt-2">{event.location}</p>
                   </div>}
                   
                   {/* Mobile View (Always Left) */}
                   <div className="md:hidden">
                       <h3 className="font-serif text-xl text-wedding-red">{event.title}</h3>
                       <p className="font-bold text-wedding-red mt-1">{event.time}</p>
                       <p className="text-wedding-red/70 text-sm mt-2">{event.location}</p>
                   </div>

                   {/* Desktop Left View */}
                   {index % 2 === 0 && <div className="hidden md:block text-right">
                       <h3 className="font-serif text-2xl text-wedding-red group-hover:underline decoration-wedding-red/30 underline-offset-4 transition-all">{event.title}</h3>
                       <p className="font-bold text-wedding-red mt-1">{event.time}</p>
                       <p className="text-wedding-red/70 text-sm mt-2">{event.location}</p>
                   </div>}
                </div>
                
                {/* Center Dot - Red */}
                <div className="absolute left-[6px] md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-wedding-cream border-4 border-wedding-red rounded-full z-10 transition-transform duration-300 group-hover:scale-125"></div>

                {/* Empty Space for alignment */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
            </div>
          ))}
        </div>
        
        {/* Map Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a href={groom.mapUrl} target="_blank" rel="noreferrer" className={`block group h-full transition-opacity duration-500 ${activeTab === 'bride' ? 'md:opacity-60 hover:opacity-100' : 'opacity-100'}`}>
                  <div className="bg-wedding-cream p-6 rounded-2xl border border-wedding-red/20 group-hover:border-wedding-red transition-all duration-300 shadow-sm hover:shadow-none text-center h-full">
                      <div className="w-12 h-12 bg-wedding-red/10 text-wedding-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wedding-red group-hover:text-wedding-cream transition-colors">
                          <MapPin size={20} />
                      </div>
                      <h4 className="font-serif text-xl mb-2 text-wedding-red">Nhà Trai</h4>
                      <p className="text-wedding-red/70 text-sm mb-4">{groom.address}</p>
                      
                      {groom.mapEmbedUrl && (
                        <div className="w-full h-40 rounded-lg overflow-hidden border border-wedding-red/20 shadow-inner mb-4">
                           <iframe 
                             src={groom.mapEmbedUrl} 
                             width="100%" 
                             height="100%" 
                             style={{border:0}} 
                             allowFullScreen 
                             loading="lazy" 
                             referrerPolicy="no-referrer-when-downgrade"
                             title="Groom Map"
                           ></iframe>
                        </div>
                      )}
                      
                      <span className="text-wedding-red text-xs font-bold uppercase inline-block border-b border-wedding-red pb-1">
                        Chỉ đường
                      </span>
                  </div>
              </a>

              <a href={bride.mapUrl} target="_blank" rel="noreferrer" className={`block group h-full transition-opacity duration-500 ${activeTab === 'groom' ? 'md:opacity-60 hover:opacity-100' : 'opacity-100'}`}>
                  <div className="bg-wedding-cream p-6 rounded-2xl border border-wedding-red/20 group-hover:border-wedding-red transition-all duration-300 shadow-sm hover:shadow-none text-center h-full">
                      <div className="w-12 h-12 bg-wedding-red/10 text-wedding-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wedding-red group-hover:text-wedding-cream transition-colors">
                          <MapPin size={20} />
                      </div>
                      <h4 className="font-serif text-xl mb-2 text-wedding-red">Nhà Gái</h4>
                      <p className="text-wedding-red/70 text-sm mb-4">{bride.address}</p>
                      
                       {bride.mapEmbedUrl && (
                        <div className="w-full h-40 rounded-lg overflow-hidden border border-wedding-red/20 shadow-inner mb-4">
                           <iframe 
                             src={bride.mapEmbedUrl} 
                             width="100%" 
                             height="100%" 
                             style={{border:0}} 
                             allowFullScreen 
                             loading="lazy" 
                             referrerPolicy="no-referrer-when-downgrade"
                             title="Bride Map"
                           ></iframe>
                        </div>
                      )}

                      <span className="text-wedding-red text-xs font-bold uppercase inline-block border-b border-wedding-red pb-1">
                        Chỉ đường
                      </span>
                  </div>
              </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;