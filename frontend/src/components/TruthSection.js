import React from 'react';
import { Heart, Users, Globe, Star } from 'lucide-react';

const TruthSection = () => {
  return (
    <section 
      id="truth"
      data-section="truth"
      className="min-h-screen bg-amber-medium text-amber-light py-20 px-6 flex items-center relative"
    >
      {/* Rounded bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-amber-light rounded-t-[3rem]" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            <h2 className="font-press-start text-4xl md:text-6xl font-bold text-amber-light tracking-wide mb-8">
              Truth
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-sf text-lg md:text-xl leading-relaxed text-amber-light">
                The purpose of life is to follow the commands given to us in every instance in time. As <span className="font-semibold text-amber-dark">@thenobleengineer</span>, I use my gifts to share wisdom, fight fitnah, and re-engineer mindsets towards a united world.
              </p>
            </div>

            {/* Mission pillars */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-amber-dark/30 backdrop-blur-sm rounded-2xl p-4 border border-amber-dark/30">
                <Heart className="w-6 h-6 text-amber-dark mb-2" />
                <div className="font-sf text-sm text-amber-light">Share Wisdom</div>
              </div>
              <div className="bg-amber-dark/30 backdrop-blur-sm rounded-2xl p-4 border border-amber-dark/30">
                <Users className="w-6 h-6 text-amber-dark mb-2" />
                <div className="font-sf text-sm text-amber-light">Fight Fitnah</div>
              </div>
              <div className="bg-amber-dark/30 backdrop-blur-sm rounded-2xl p-4 border border-amber-dark/30">
                <Globe className="w-6 h-6 text-amber-dark mb-2" />
                <div className="font-sf text-sm text-amber-light">Unite World</div>
              </div>
              <div className="bg-amber-dark/30 backdrop-blur-sm rounded-2xl p-4 border border-amber-dark/30">
                <Star className="w-6 h-6 text-amber-dark mb-2" />
                <div className="font-sf text-sm text-amber-light">Noble Actions</div>
              </div>
            </div>
          </div>

          {/* Right side - Placeholder image */}
          <div className="order-1 md:order-2">
            <div className="relative bg-gradient-to-br from-amber-warm/30 to-amber-dark/40 rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden">
              {/* Spiritual/wisdom visual elements */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute top-8 right-8 w-20 h-20 border border-amber-warm rounded-full animate-pulse" />
                  <div className="absolute bottom-12 left-12 w-16 h-16 bg-amber-warm/30 rounded-full animate-bounce" />
                  <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-amber-light/20 rounded-lg rotate-45 animate-spin" />
                </div>
                
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-dark/40 to-amber-light/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Globe className="w-16 h-16 text-amber-dark animate-pulse" />
                  </div>
                  
                  <div className="bg-amber-dark/40 backdrop-blur-sm rounded-2xl p-4 border border-amber-dark/40">
                    <div className="text-amber-light font-sf text-sm text-center">
                      "Servant of The Most Compassionate"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TruthSection;