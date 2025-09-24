import React from 'react';
import { Instagram, Video, Twitter, MessageSquare, Mail, Youtube, ExternalLink } from 'lucide-react';
import { socialPlatforms } from '../data/mockData';

const ContentSection = () => {
  const platformIcons = {
    instagram: Instagram,
    tiktok: Video,
    twitter: Twitter,
    threads: MessageSquare,
    substack: Mail,
    youtube: Youtube
  };

  return (
    <section 
      id="content"
      data-section="content"
      className="min-h-screen bg-amber-accent text-amber-light py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="font-press-start text-4xl md:text-6xl font-bold text-center mb-16 text-amber-light tracking-wide">
          Content
        </h2>

        {/* Tight-packed social platforms */}
        <div className="space-y-16">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platformIcons[platform.platform];
            const isEven = index % 2 === 0;

            return (
              <div
                key={platform.id}
                className={`grid md:grid-cols-2 gap-8 items-stretch ${
                  isEven ? '' : 'md:grid-flow-col-dense'
                }`}
              >
                {/* Icon side - takes full width with margins */}
                <div className={`${isEven ? 'order-1' : 'order-2 md:col-start-2'} flex justify-center items-center px-8`}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-12 bg-amber-dark hover:bg-amber-medium rounded-3xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group-hover:animate-pulse w-full aspect-square flex items-center justify-center"
                    aria-label={`Visit ${platform.name} on ${platform.platform}`}
                  >
                    <IconComponent className="w-20 h-20 text-amber-light" />
                  </a>
                </div>

                {/* Content side - takes full width, no crossing center */}
                <div className={`${isEven ? 'order-2' : 'order-1 md:col-start-1'} flex flex-col justify-center px-8 ${
                  isEven ? 'text-left' : 'text-right'
                }`}>
                  <div className="space-y-4">
                    {/* Motto with Apple SF font, slender, italic, big */}
                    <h3 className="font-sf text-3xl md:text-4xl font-light italic text-amber-light leading-tight">
                      {platform.motto.split(' ').map((word, i) => (
                        <span key={i} className={platform.highlightWords?.includes(word) ? 'text-amber-warm font-medium' : ''}>
                          {word}{' '}
                        </span>
                      ))}
                    </h3>
                    
                    <div className={`flex items-center gap-3 ${isEven ? 'justify-start' : 'justify-end'}`}>
                      <span className="font-sf text-amber-warm text-sm uppercase tracking-wider">
                        {platform.name}
                      </span>
                      <span className="text-amber-warm">•</span>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sf text-amber-light text-sm hover:text-amber-warm transition-colors cursor-pointer"
                      >
                        @{platform.handle}
                      </a>
                      <ExternalLink className="w-4 h-4 text-amber-warm opacity-70" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;