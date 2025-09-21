import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { id: 'about', label: 'Home' },
    { id: 'about-section', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    // Add smooth scroll behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between w-full md:justify-center">
      {/* Portfolio brand text on mobile */}
      <div className="md:hidden">
        <span className="text-white font-semibold text-lg bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
          Portfolio 🏃
        </span>
      </div>
      
      {/* Desktop Navigation - Center */}
      <nav className="hidden md:flex items-center space-x-2 bg-white/5 rounded-xl p-1 backdrop-blur-sm transition-all duration-500 ease-out">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 text-yellow-300 shadow-lg backdrop-blur-sm border border-yellow-300/30 scale-105' 
                  : 'text-white'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
                transition: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease'
              }}
            >
              {isActive && (
                <div 
                  key={`active-${item.id}`}
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-300/10 rounded-lg blur-sm -z-10"
                ></div>
              )}
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Mobile Menu Button - Right Side */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white p-3 hover:bg-white/10 rounded-xl transition-all duration-500 transform hover:scale-105 hover:rotate-180 backdrop-blur-sm border border-white/10"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-6 w-6 transition-transform duration-300" /> : <Menu className="h-6 w-6 transition-transform duration-300" />}
      </button>

      {/* Mobile Menu - Slides from Top Left */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[9999]">
          {/* Backdrop Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ease-out"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content - Slides Down from Top Left */}
          <div className="absolute top-20 left-6 w-80 max-w-[80vw] bg-gradient-to-br from-gray-900/95 via-blue-900/95 to-blue-800/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transform transition-all duration-500 ease-out animate-[slideDownFromTopLeft_0.5s_ease-out_forwards] origin-top-left">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h3 className="text-white font-semibold text-xl bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent transition-all duration-300">Rochan.dev</h3>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-xl transition-all duration-500 transform hover:scale-105 hover:rotate-90 border border-white/10"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Navigation Items */}
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left p-4 rounded-xl transition-all duration-500 ${
                      isActive
                        ? 'text-yellow-300 bg-gradient-to-r from-yellow-400/10 to-yellow-300/10 border border-yellow-300/20 shadow-lg backdrop-blur-sm scale-[1.02]' 
                        : 'text-white border border-transparent'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      animationDelay: `${(index * 150) + 200}ms`,
                      animation: `slideInFromTop 0.5s ease-out forwards ${(index * 100) + 200}ms`,
                      opacity: 0,
                      transform: 'translateY(-20px)'
                    }}
                  >
                    <span className="text-lg font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;