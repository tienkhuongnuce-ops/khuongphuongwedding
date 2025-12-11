import React from 'react';
import SectionTitle from './SectionTitle';
import { weddingConfig } from '../config';

const Gallery: React.FC = () => {
  const { images, video } = weddingConfig;

  return (
    <section className="py-24 bg-wedding-cream">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Sweet Moments" subtitle="Những khoảnh khắc đẹp nhất" />
        
        {/* Embedded Video Section */}
        {video && video.embedUrl && (
          <div className="mb-16 max-w-4xl mx-auto relative z-10">
            <div className="bg-wedding-cream p-2 md:p-4 rounded-2xl border border-wedding-red/20 transform transition-transform duration-500 hover:scale-[1.01]">
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
              <p className="mt-6 text-center text-wedding-red/70 font-serif italic text-lg max-w-2xl mx-auto leading-relaxed">
                "{video.description}"
              </p>
            )}
          </div>
        )}

        {/* Photo Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.gallery.map((photo, index) => (
            <div key={index} className="break-inside-avoid bg-wedding-cream p-2 rounded-lg border border-wedding-red/10 hover:border-wedding-red/40 transition-colors duration-300">
              <div className="overflow-hidden rounded-md">
                <img 
                  src={photo} 
                  alt={`Moment ${index}`} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;