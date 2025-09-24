import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, isIdle, onNavigate }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'content', label: 'Content' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'truth', label: Truth' }
  ];

  return (
    <nav 
      className={`fixed left-0 top-0 h-full z-50 flex items-center transition-all duration-300 ${
        isIdle ? 'opacity-70' : 'opacity-100'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={`bg-white/10 backdrop-blur-md rounded-r-2xl transition-all duration-500 ${
        isExpanded ? 'w-48 px-6 py-8' : 'w-16 px-4 py-8'
      }`}>
        
        {/* Toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-8 p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
          aria-label={isExpanded ? 'Collapse navigation' : 'Expand navigation'}
        >
          {isExpanded ? (
            <X className="w-5 h-5 text-noble-light" />
          ) : (
            <Menu className="w-5 h-5 text-noble-light" />
          )}
        </button>

        {/* Navigation items */}
        <ul className="space-y-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`relative flex items-center w-full text-left transition-all duration-300 ${
                    isActive 
                      ? 'text-noble-accent font-semibold opacity-100' 
                      : 'text-noble-light opacity-70 hover:opacity-90'
                  }`}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -left-3 w-1 h-6 bg-noble-accent rounded-full animate-pulse" />
                  )}
                  
                  {/* Label */}
                  {isExpanded && (
                    <span className="ml-2 text-sm font-inter tracking-wide">
                      {item.label}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;