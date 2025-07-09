import React from 'react';
import Navigation from './Navigation';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={onSectionChange} 
        />
      </div>
    </header>
  );
};

export default Header;