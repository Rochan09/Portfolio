import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import BackToTop from './components/ui/BackToTop';
import WaveDivider from './components/ui/WaveDivider';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            // Update URL hash without triggering scroll
            if (window.location.hash !== `#${section}`) {
              window.history.replaceState(null, '', `#${section}`);
            }
            break;
          }
        }
      }
    };

    // Set initial section from URL hash
    const hash = window.location.hash.slice(1) || 'about';
    setActiveSection(hash);
    
    // Scroll to section if hash exists, accounting for fixed header
    const element = document.getElementById(hash);
    if (element) {
      const headerHeight = 96; // Approximate height of fixed header (py-6 = 24px * 2 = 48px + content)
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const headerHeight = 96; // Approximate height of fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <main className="relative pt-24">
        <WaveDivider />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
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