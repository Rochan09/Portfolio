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
    // Use instant scrolling for faster navigation
    const element = document.getElementById(sectionId);
    if (element) {
      // Check if user prefers reduced motion or if it's mobile
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobile = window.innerWidth <= 1024;
      
      element.scrollIntoView({ 
        behavior: (prefersReducedMotion || isMobile) ? 'auto' : 'smooth', 
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
      <nav className="hidden md:flex items-center space-x-2 bg-white/5 dark:bg-black/20 rounded-xl p-1 backdrop-blur-sm transition-all duration-500 ease-out">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 text-yellow-300 shadow-lg backdrop-blur-sm border border-yellow-300/30 scale-105' 
                  : 'text-white dark:text-gray-200'
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
        className="md:hidden text-white dark:text-gray-200 p-3 hover:bg-white/10 dark:hover:bg-black/20 rounded-xl transition-all duration-200 transform hover:scale-105 hover:rotate-180 backdrop-blur-sm border border-white/10 dark:border-gray-600/20"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-6 w-6 transition-transform duration-150" /> : <Menu className="h-6 w-6 transition-transform duration-150" />}
      </button>

      {/* Mobile Menu - Clean White Card Style */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[9999]">
          {/* Backdrop Overlay */}
          <div
            className="absolute inset-0 bg-black/50 transition-all duration-200 ease-out"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content - Clean White Card positioned right */}
          <div className="absolute top-24 right-6 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl transition-all duration-250 ease-out animate-[slideDownRight_0.25s_ease-out_forwards] origin-top-right">
            {/* Close button in top right */}
            <div className="absolute top-3 right-3">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 dark:text-gray-400 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Navigation Items - Clean List Style */}
            <nav className="flex flex-col py-4 px-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-3 px-4 mx-2 rounded-lg transition-all duration-200 text-base font-medium ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                    style={{ 
                      animationDelay: `${(index * 30) + 100}ms`,
                      animation: `fadeInDown 0.3s ease-out forwards ${(index * 30) + 100}ms`,
                      opacity: 0,
                      transform: 'translateY(-10px)'
                    }}
                  >
                    {item.label}
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