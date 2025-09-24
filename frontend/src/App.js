import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import EngineeringSection from "./components/EngineeringSection";
import TruthSection from "./components/TruthSection";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    // Load Press Start 2P and San Francisco fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Intersection Observer for navigation
    const sections = document.querySelectorAll('section[data-section]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setActiveSection(entry.target.dataset.section);
          }
        });
      },
      { 
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Idle state management
    let idleTimer;
    const resetIdleTimer = () => {
      setIsIdle(false);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setIsIdle(true), 1000);
    };

    window.addEventListener('scroll', resetIdleTimer);
    resetIdleTimer();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', resetIdleTimer);
      clearTimeout(idleTimer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navigation 
        activeSection={activeSection}
        isIdle={isIdle}
        onNavigate={scrollToSection}
      />
      
      <main>
        <HeroSection />
        <ContentSection />
        <EngineeringSection />
        <TruthSection />
      </main>
    </div>
  );
}

export default App;