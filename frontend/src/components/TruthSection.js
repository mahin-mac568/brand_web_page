import React from 'react';
import { Heart, Users, Globe, Star } from 'lucide-react';

const TruthSection = () => {
  return (
    <section 
      id="truth"
      data-section="truth"
      className="min-h-screen bg-noble-secondary text-noble-light py-20 px-6 flex items-center relative"
    >
      {/* Rounded bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-noble-light rounded-t-[3rem]" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            <h2 className="font-orbitron text-5xl md:text-7xl font-bold text-noble-accent tracking-wide mb-8">
              Truth
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-lg md:text-xl leading-relaxed text-noble-light">
                The purpose of life is to follow the commands given to us in every instance in time. As <span className="font-semibold text-noble-accent">@thenobleengineer</span>, I use my gifts to share wisdom, fight fitnah, and re-engineer mindsets towards a united world.
              </p>
            </div>

            {/* Mission pillars */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-noble-primary/20 backdrop-blur-sm rounded-2xl p-4 border border-noble-accent/30">
                <Heart className="w-6 h-6 text-noble-accent mb-2" />
                <div className="font-inter text-sm text-noble-light">Share Wisdom</div>
              </div>
              <div className="bg-noble-primary/20 backdrop-blur-sm rounded-2xl p-4 border border-noble-accent/30">
                <Users className="w-6 h-6 text-noble-accent mb-2" />
                <div className="font-inter text-sm text-noble-light">Fight Fitnah</div>
              </div>
              <div className="bg-noble-primary/20 backdrop-blur-sm rounded-2xl p-4 border border-noble-accent/30">
                <Globe className="w-6 h-6 text-noble-accent mb-2" />
                <div className="font-inter text-sm text-noble-light">Unite World</div>
              </div>
              <div className="bg-noble-primary/20 backdrop-blur-sm rounded-2xl p-4 border border-noble-accent/30">
                <Star className="w-6 h-6 text-noble-accent mb-2" />
                <div className="font-inter text-sm text-noble-light">Noble Actions</div>
              </div>
            </div>
          </div>

          {/* Right side - Placeholder image */}
          <div className="order-1 md:order-2">
            <div className="relative bg-gradient-to-br from-noble-accent/20 to-noble-primary/30 rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden">
              {/* Placeholder spiritual/wisdom visual */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-8 right-8 w-20 h-20 border border-noble-accent rounded-full animate-pulse" />
                  <div className="absolute bottom-12 left-12 w-16 h-16 bg-noble-accent/30 rounded-full animate-bounce" />
                  <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-noble-light/20 rounded-lg rotate-45 animate-spin" />
                </div>
                
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-noble-accent/40 to-noble-light/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Globe className="w-16 h-16 text-noble-accent animate-pulse" />
                  </div>
                  
                  <div className="bg-noble-primary/30 backdrop-blur-sm rounded-2xl p-4 border border-noble-accent/40">
                    <div className="text-noble-light font-inter text-sm text-center">
                      "Servant of The Most Merciful"
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image placeholder text */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/30 backdrop-blur-sm rounded-lg p-2 text-center">
                <span className="text-white/90 text-sm font-inter">Truth & Wisdom Image</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TruthSection;