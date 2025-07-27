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
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
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

      {/* Mobile Sidebar Drawer & Overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-40"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Sidebar Drawer */}
          <div
            className="fixed top-0 left-0 h-full w-64 bg-gray-900 z-60 shadow-lg transform transition-transform duration-300"
            style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-lg"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col mt-16 space-y-6 px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-lg font-medium text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-yellow-300'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;