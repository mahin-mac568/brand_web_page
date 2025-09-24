import React from 'react';
import { Code, Database, Brain, Cpu } from 'lucide-react';

const EngineeringSection = () => {
  return (
    <section 
      id="engineering"
      data-section="engineering"
      className="min-h-screen bg-noble-light text-noble-primary py-20 px-6 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Placeholder image with tech elements */}
          <div className="order-2 md:order-1">
            <div className="relative bg-gradient-to-br from-noble-secondary/10 to-noble-muted/20 rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden">
              {/* Placeholder tech visual */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-16 h-16 border-2 border-noble-accent rounded-lg animate-spin" />
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-noble-secondary rounded-full animate-bounce" />
                  <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-noble-primary rounded-full opacity-50 animate-pulse" />
                </div>
                
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Code className="w-8 h-8 text-noble-accent mb-2" />
                    <div className="text-sm text-noble-secondary font-inter">Data Pipelines</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Database className="w-8 h-8 text-noble-primary mb-2" />
                    <div className="text-sm text-noble-secondary font-inter">Engineering</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Brain className="w-8 h-8 text-noble-accent mb-2" />
                    <div className="text-sm text-noble-secondary font-inter">AI Integration</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Cpu className="w-8 h-8 text-noble-primary mb-2" />
                    <div className="text-sm text-noble-secondary font-inter">Innovation</div>
                  </div>
                </div>
              </div>
              
              {/* Image placeholder text */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/20 backdrop-blur-sm rounded-lg p-2 text-center">
                <span className="text-white/80 text-sm font-inter">Engineering Workspace Image</span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-orbitron text-5xl md:text-7xl font-bold text-noble-primary tracking-wide mb-8">
              Engineering
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-lg md:text-xl leading-relaxed text-noble-secondary">
                Well whaddaya know! I'm an actual engineer. Not just re-engineering our brains in this distracted age. I write software to build and test data pipelines in our increasingly data-centric world.
              </p>
              
              <p className="font-inter text-lg md:text-xl leading-relaxed text-noble-secondary mt-6">
                I'm tackling AI's wild changes by pushing my skills to the limit—and becoming ready for the noblest of matters. I'm here to lend my tech expertise to humanitarian causes and make a real difference.
              </p>
            </div>

            {/* Highlight stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-noble-muted/30">
                <div className="font-orbitron text-2xl font-bold text-noble-accent">5+</div>
                <div className="font-inter text-sm text-noble-secondary mt-1">Years Experience</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-noble-muted/30">
                <div className="font-orbitron text-2xl font-bold text-noble-accent">Fortune 25</div>
                <div className="font-inter text-sm text-noble-secondary mt-1">Company</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;