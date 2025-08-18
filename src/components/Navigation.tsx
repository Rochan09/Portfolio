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
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`text-white hover:text-yellow-300 transition-colors duration-200 font-medium ${
              activeSection === item.id ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay and Sidebar */}
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-[9998]"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 shadow-2xl z-[9999] transform transition-transform duration-300 ease-in-out">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800">
              <h3 className="text-white font-semibold text-xl">Rochan.dev</h3>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Navigation Items */}
            <nav className="flex flex-col p-4 bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left p-4 rounded-lg transition-all duration-200 mb-2 ${
                    activeSection === item.id
                      ? 'text-yellow-300 bg-yellow-300/10 border-l-4 border-yellow-300'
                      : 'text-white hover:text-yellow-300 hover:bg-white/5'
                  }`}
                >
                  <span className="text-lg font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;