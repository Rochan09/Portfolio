import React from 'react';
import Navigation from './Navigation';
import ThemeToggle from './ui/ThemeToggle';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange, isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-4xl transition-all duration-700 ease-out">
      <div className="bg-gradient-to-r from-gray-900/90 via-blue-900/90 to-blue-800/90 dark:from-gray-800/90 dark:via-gray-900/90 dark:to-black/90 backdrop-blur-xl border border-white/10 dark:border-gray-600/20 rounded-xl px-4 py-2 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-white/20 dark:hover:border-gray-500/30">
        <div className="flex items-center justify-between">
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={onSectionChange} 
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;