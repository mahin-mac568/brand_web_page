import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      data-section="home"
      className="relative h-screen flex items-center justify-center bg-amber-dark overflow-hidden"
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-accent rounded-full blur-xl animate-pulse animate-float" />
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-amber-medium rounded-lg rotate-45 blur-lg animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-warm rounded-full opacity-50 animate-float" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main headline */}
        <h1 className="font-press-start text-4xl md:text-6xl font-bold mb-8 leading-tight" style={{ wordSpacing: '-0.2em' }}>
          <span className="text-amber-light">hey, i'm </span>
          <span className="text-amber-accent">Noble</span>
        </h1>

        {/* Mission tagline */}
        <p className="font-sf text-lg md:text-xl text-amber-warm mb-8 max-w-3xl mx-auto leading-relaxed">
          I go by <span className="font-semibold text-amber-light">@thenobleengineer</span>. I'm showcasing the modern world as a knowledge worker navigating the age of AI—while tackling digital noise, societal chaos, and the trials of evil. Follow my quest in reshaping the world with Truth.
        </p>

        {/* Credentials */}
        <p className="font-sf text-base md:text-lg text-amber-medium mb-12 font-medium">
          Data Engineer • Fortune-25 • Ivy League • Servant of The Most Merciful
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToContent}
          className="group inline-flex items-center gap-3 bg-amber-accent hover:bg-amber-accent/90 text-amber-light px-8 py-4 rounded-full font-sf font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-glow"
        >
          Explore
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-warm rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-warm rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;