
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { MapPin, Coffee, GlassWater, Music, Heart, Clock, Car, Home, Gift, Utensils, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config';

// Helper to map string icon types to Components
const getIcon = (type: string) => {
  switch (type) {
    case 'Coffee': return <Coffee size={18} />;
    case 'GlassWater': return <GlassWater size={18} />;
    case 'Music': return <Music size={18} />;
    case 'Car': return <Car size={18} />;
    case 'Home': return <Home size={18} />;
    case 'Gift': return <Gift size={18} />;
    case 'Utensils': return <Utensils size={18} />;
    case 'Sparkles': return <Sparkles size={18} />;
    default: return <Heart size={18} />;
  }
};

const Timeline: React.FC = () => {
  const { timeline, date, groom, bride } = weddingConfig;
  const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');

  // Handle both old array format (backward compatibility) and new object format
  const events = Array.isArray(timeline) 
    ? timeline 
    : (activeTab === 'groom' ? timeline.groom : timeline.bride);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle 
          title="Chương Trình Hôn Lễ" 
          subtitle={`${date.dayOfWeek}, ${date.fullDate}`} 
        />

        {/* Tab Toggle for Groom/Bride side */}
        {!Array.isArray(timeline) && (
            <div className="flex justify-center mb-16">
                <div className="flex bg-gray-100 p-1 rounded-full relative">
                    <button 
                        onClick={() => setActiveTab('groom')}
                        className={`relative z-10 px-6 py-2 rounded-full font-serif text-sm md:text-base font-bold transition-all duration-300 ${
                            activeTab === 'groom' 
                            ? 'bg-wedding-primary text-white shadow-md' 
                            : 'text-gray-500 hover:text-wedding-primary'
                        }`}
                    >
                        Nhà Trai
                    </button>
                    <button 
                        onClick={() => setActiveTab('bride')}
                        className={`relative z-10 px-6 py-2 rounded-full font-serif text-sm md:text-base font-bold transition-all duration-300 ${
                            activeTab === 'bride' 
                            ? 'bg-wedding-primary text-white shadow-md' 
                            : 'text-gray-500 hover:text-wedding-primary'
                        }`}
                    >
                        Nhà Gái
                    </button>
                </div>
            </div>
        )}
        
        <div className="relative mb-20">
          {/* Vertical Dotted Line - Red */}
          <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-px top-0 bottom-0 border-l-2 border-dashed border-wedding-primary/30"></div>

          {events.map((event: any, index: number) => {
            const showDateHeader = index === 0 || (event.date && event.date !== events[index - 1].date);
            const dateParts = event.date ? event.date.split(',') : [];
            
            return (
                <React.Fragment key={`${activeTab}-${index}`}>
                    {/* Date Header */}
                    {showDateHeader && event.date && (
                        <div className="flex justify-center my-12 relative z-10 animate-fade-in">
                            <div className="bg-wedding-bg border border-wedding-primary/30 px-8 py-3 rounded-xl shadow-sm flex flex-col items-center min-w-[200px]">
                                <span className="font-serif font-bold text-2xl text-wedding-primary">
                                    {dateParts[0] || event.date}
                                </span>
                                {dateParts[1] && (
                                    <span className="text-sm text-gray-500 font-sans tracking-widest uppercase mt-1 border-t border-wedding-primary/20 pt-1 w-full text-center">
                                        {dateParts[1].trim()}
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                    <div className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-16 relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} animate-fade-in`}>
                        
                        {/* Content Box */}
                        <div className={`w-full md:w-5/12 pl-12 group cursor-default ${index % 2 === 0 ? 'md:pl-0 md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                        
                        {/* Mobile View (Always Left) */}
                        <div className="md:hidden">
                            <div className="flex items-center gap-2 mb-1 text-wedding-primary font-bold">
                                <Clock size={16} />
                                <span className="text-lg">{event.time}</span>
                            </div>
                            <h3 className="font-serif text-2xl text-wedding-text">{event.title}</h3>
                            <p className="text-gray-500 text-sm mt-1">{event.location}</p>
                        </div>

                        {/* Desktop View - Right Aligned Item (Odd Index - Right side of timeline) */}
                        {index % 2 !== 0 && <div className="hidden md:block">
                            <div className="flex items-center justify-start gap-2 text-wedding-primary mb-2 font-bold">
                                <Clock size={16} />
                                <span>{event.time}</span>
                            </div>
                            <h3 className="font-serif text-2xl text-wedding-text group-hover:text-wedding-primary transition-colors">{event.title}</h3>
                            <p className="text-gray-500 text-sm mt-2">{event.location}</p>
                        </div>}

                        {/* Desktop View - Left Aligned Item (Even Index - Left side of timeline) */}
                        {index % 2 === 0 && <div className="hidden md:block">
                            <div className="flex items-center justify-end gap-2 text-wedding-primary mb-2 font-bold">
                                <span>{event.time}</span>
                                <Clock size={16} />
                            </div>
                            <h3 className="font-serif text-2xl text-wedding-text group-hover:text-wedding-primary transition-colors">{event.title}</h3>
                            <p className="text-gray-500 text-sm mt-2">{event.location}</p>
                        </div>}
                        </div>
                        
                        {/* Center Icon Bubble */}
                        <div className="absolute left-[2px] md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-2 border-wedding-primary rounded-full z-10 flex items-center justify-center text-wedding-primary shadow-sm">
                        {getIcon(event.iconType)}
                        </div>

                        {/* Empty Space for alignment */}
                        <div className="w-full md:w-5/12 hidden md:block"></div>
                    </div>
                </React.Fragment>
            );
          })}
        </div>
        
        {/* Map Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Groom's Map */}
              <div className="bg-white p-6 rounded-2xl border border-wedding-primary/20 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center">
                  <div className="w-12 h-12 bg-wedding-primary/10 text-wedding-primary rounded-full flex items-center justify-center mb-4">
                      <MapPin size={20} />
                  </div>
                  <h4 className="font-serif text-xl mb-2">Nhà Trai</h4>
                  <p className="text-gray-500 text-sm mb-4 text-center">{groom.address}</p>
                  
                  {groom.mapEmbedUrl ? (
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-100 shadow-inner mb-4 relative z-0">
                       <iframe 
                         src={groom.mapEmbedUrl} 
                         width="100%" 
                         height="100%" 
                         style={{border:0}} 
                         allowFullScreen 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade"
                         title="Groom Map"
                         className="absolute inset-0"
                       ></iframe>
                    </div>
                  ) : (
                    <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-400">
                        Chưa có bản đồ
                    </div>
                  )}
                  
                  <div className="mt-auto">
                    <a href={groom.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-wedding-primary text-sm font-bold uppercase border-b border-wedding-primary pb-1 hover:text-red-800 transition-colors">
                      <MapPin size={14} />
                      Chỉ đường
                    </a>
                  </div>
              </div>

              {/* Bride's Map */}
              <div className="bg-white p-6 rounded-2xl border border-wedding-primary/20 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center">
                  <div className="w-12 h-12 bg-wedding-primary/10 text-wedding-primary rounded-full flex items-center justify-center mb-4">
                      <MapPin size={20} />
                  </div>
                  <h4 className="font-serif text-xl mb-2">Nhà Gái</h4>
                  <p className="text-gray-500 text-sm mb-4 text-center">{bride.address}</p>
                  
                   {bride.mapEmbedUrl ? (
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-100 shadow-inner mb-4 relative z-0">
                       <iframe 
                         src={bride.mapEmbedUrl} 
                         width="100%" 
                         height="100%" 
                         style={{border:0}} 
                         allowFullScreen 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade"
                         title="Bride Map"
                         className="absolute inset-0"
                       ></iframe>
                    </div>
                  ) : (
                    <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-400">
                        Chưa có bản đồ
                    </div>
                  )}

                  <div className="mt-auto">
                    <a href={bride.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-wedding-primary text-sm font-bold uppercase border-b border-wedding-primary pb-1 hover:text-red-800 transition-colors">
                      <MapPin size={14} />
                      Chỉ đường
                    </a>
                  </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
