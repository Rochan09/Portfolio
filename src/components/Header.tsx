import React from 'react';
import Navigation from './Navigation';
import { personalInfo } from '../data/portfolio';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            {personalInfo.name}
          </h1>
          <div className="text-lg sm:text-xl text-blue-300 font-mono mb-4">
            {personalInfo.title}
          </div>
          <p className="text-gray-300 italic text-base sm:text-lg max-w-2xl mx-auto">
            "{personalInfo.tagline}"
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={onSectionChange} 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;