import React from 'react';
import Navigation from './Navigation';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange, isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-4xl transition-all duration-700 ease-out">
      <div className="bg-gradient-to-r from-gray-900/90 via-blue-900/90 to-blue-800/90 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-white/20">
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={onSectionChange} 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;