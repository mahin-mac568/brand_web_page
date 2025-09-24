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
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-noble-light via-noble-light/90 to-noble-muted/30 overflow-hidden"
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-noble-accent rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-noble-secondary rounded-lg rotate-45 blur-lg animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-noble-primary rounded-full opacity-50" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main headline */}
        <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="text-noble-primary">hey, i'm </span>
          <span className="text-noble-accent">Noble</span>
        </h1>

        {/* Mission tagline */}
        <p className="font-inter text-lg md:text-xl text-noble-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
          I go by <span className="font-semibold text-noble-primary">@thenobleengineer</span>—and I'm showcasing the modern world as a knowledge worker navigating the age of AI, tackling digital noise, societal chaos, and the trials of evil. Follow my quest in reshaping the world with Truth.
        </p>

        {/* Credentials */}
        <p className="font-inter text-base md:text-lg text-noble-muted mb-12 font-medium">
          Data Engineer • Fortune-25 • Ivy League • Servant of The Most Merciful
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToContent}
          className="group inline-flex items-center gap-3 bg-noble-accent hover:bg-noble-accent/90 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Explore
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-noble-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-noble-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;