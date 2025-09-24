import React from 'react';
import { Code, Database, Brain, Cpu } from 'lucide-react';

const EngineeringSection = () => {
  return (
    <section 
      id="engineering"
      data-section="engineering"
      className="min-h-screen bg-amber-warm text-amber-dark py-20 px-6 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Placeholder image with tech elements */}
          <div className="order-2 md:order-1">
            <div className="relative bg-gradient-to-br from-amber-medium/20 to-amber-accent/30 rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden">
              {/* Tech visual elements */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 left-4 w-16 h-16 border-2 border-amber-accent rounded-lg animate-spin" />
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-amber-medium rounded-full animate-bounce" />
                  <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-amber-dark rounded-full opacity-50 animate-pulse" />
                </div>
                
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Code className="w-8 h-8 text-amber-accent mb-2" />
                    <div className="text-sm text-amber-dark font-sf">Data Pipelines</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Database className="w-8 h-8 text-amber-dark mb-2" />
                    <div className="text-sm text-amber-dark font-sf">Engineering</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Brain className="w-8 h-8 text-amber-accent mb-2" />
                    <div className="text-sm text-amber-dark font-sf">AI Integration</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Cpu className="w-8 h-8 text-amber-dark mb-2" />
                    <div className="text-sm text-amber-dark font-sf">Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-press-start text-4xl md:text-6xl font-bold text-amber-dark tracking-wide mb-8">
              Engineering
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-sf text-lg md:text-xl leading-relaxed text-amber-dark">
                Well whaddaya know! I'm an actual engineer. Not just re-engineering our brains in this distracted age. I write software to build and test data pipelines in our increasingly data-centric world.
              </p>
              
              <p className="font-sf text-lg md:text-xl leading-relaxed text-amber-dark mt-6">
                I'm tackling AI's wild changes by pushing my skills to the limit—and becoming ready for the noblest of matters. I'm here to lend my tech expertise to humanitarian causes and make a real difference.
              </p>
            </div>

            {/* Highlight stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-medium/30">
                <div className="font-press-start text-xl font-bold text-amber-accent">3+</div>
                <div className="font-sf text-sm text-amber-dark mt-1">Years Experience</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-medium/30">
                <div className="font-press-start text-xl font-bold text-amber-accent">Fortune 25</div>
                <div className="font-sf text-sm text-amber-dark mt-1">Company</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;