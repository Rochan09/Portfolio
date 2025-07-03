import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import BackToTop from './components/ui/BackToTop';
import WaveDivider from './components/ui/WaveDivider';
import NotFound from './components/sections/NotFound';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'about';
      setActiveSection(hash);
    };

    // Set initial section from URL hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    window.location.hash = section;
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'achievements':
        return <Achievements />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <main className="relative">
        <WaveDivider />
        {renderActiveSection()}
      </main>
      
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 text-white py-8 px-4 text-center">
        <p className="text-gray-300">
          &copy; 2025 Rochan Vardhan Boddepalli. All rights reserved.
        </p>
      </footer>
      
      <BackToTop />
    </div>
  );
}

export default App;