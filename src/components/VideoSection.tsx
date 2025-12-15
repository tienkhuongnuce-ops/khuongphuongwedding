
import React from 'react';
import SectionTitle from './SectionTitle';
import { weddingConfig } from '../config';

const VideoSection: React.FC = () => {
  const { video } = weddingConfig;

  if (!video || !video.embedUrl) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle title={video.title} subtitle={video.subtitle} />
        
        <div className="mt-8 relative z-10">
          <div className="bg-wedding-cream p-4 md:p-6 rounded-2xl shadow-xl border border-wedding-gold/20 transform hover:scale-[1.01] transition-transform duration-500">
            {/* Video Container - 16:9 Aspect Ratio */}
            <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden bg-black shadow-inner">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={video.embedUrl} 
                title="Pre-wedding Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {video.description && (
            <p className="mt-8 text-center text-gray-600 font-serif italic text-lg max-w-2xl mx-auto leading-relaxed">
              "{video.description}"
            </p>
          )}
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-wedding-pink/5 rounded-full blur-3xl -z-0"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-wedding-sage/5 rounded-full blur-3xl -z-0"></div>
      </div>
    </section>
  );
};

export default VideoSection;
