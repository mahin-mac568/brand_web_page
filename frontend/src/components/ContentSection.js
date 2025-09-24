import React from 'react';
import { Instagram, PlayCircle, Twitter, MessageCircle, FileText, Youtube, ExternalLink } from 'lucide-react';
import { socialPlatforms } from '../data/mockData';

const ContentSection = () => {
  const platformIcons = {
    instagram: Instagram,
    tiktok: PlayCircle,
    twitter: Twitter,
    threads: MessageCircle,
    substack: FileText,
    youtube: Youtube
  };

  return (
    <section 
      id="content"
      data-section="content"
      className="min-h-screen bg-noble-primary text-noble-light py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="font-orbitron text-5xl md:text-7xl font-bold text-center mb-16 text-noble-accent tracking-wide">
          Content
        </h2>

        {/* Zigzag social platforms */}
        <div className="space-y-12">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platformIcons[platform.platform];
            const isEven = index % 2 === 0;

            return (
              <div
                key={platform.id}
                className={`flex items-center gap-8 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col group`}
              >
                {/* Icon side */}
                <div className={`flex-shrink-0 ${isEven ? 'md:ml-0' : 'md:mr-0'}`}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 bg-noble-secondary hover:bg-noble-accent rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group-hover:animate-pulse"
                    aria-label={`Visit ${platform.name} on ${platform.platform}`}
                  >
                    <IconComponent className="w-12 h-12 text-noble-light" />
                  </a>
                </div>

                {/* Content side */}
                <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                  <div className="space-y-4">
                    <h3 className="font-inter text-2xl md:text-3xl font-bold text-noble-light">
                      {platform.motto.split(' ').map((word, i) => (
                        <span key={i} className={platform.highlightWords?.includes(word) ? 'text-noble-accent' : ''}>
                          {word}{' '}
                        </span>
                      ))}
                    </h3>
                    
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <span className="font-inter text-noble-muted text-sm uppercase tracking-wider">
                        {platform.name}
                      </span>
                      <span className="text-noble-muted">•</span>
                      <span className="font-inter text-noble-muted text-sm">
                        @{platform.handle}
                      </span>
                      <ExternalLink className="w-4 h-4 text-noble-muted opacity-70" />
                    </div>

                    {/* Optional engagement metrics */}
                    {platform.metrics && (
                      <div className="text-noble-muted text-sm font-inter">
                        {platform.metrics}
                      </div>
                    )}
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