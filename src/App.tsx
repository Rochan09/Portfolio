import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import BackToTop from './components/ui/BackToTop';
import WaveDivider from './components/ui/WaveDivider';
import LoadingSpinner from './components/ui/LoadingSpinner';
import Navigation from './components/Navigation';

// Lazy load section components
const About = lazy(() => import('./components/sections/About'));
const AboutSection = lazy(() => import('./components/sections/AboutSection'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Achievements = lazy(() => import('./components/sections/Achievements'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'about-section', 'skills', 'experience', 'projects', 'achievements', 'contact'];
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
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {/* Pass setIsMenuOpen to Navigation if you use Navigation outside Header */}
      <main className="relative pt-24">
        <WaveDivider />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <AboutSection />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 text-white py-8 px-4 text-center" role="contentinfo" aria-label="Footer">
        <p className="text-gray-300">
          &copy; 2024-2025 Rochan Vardhan Boddepalli. All rights reserved.
        </p>
      </footer>
      
      <BackToTop />
    </div>
  );
}

export default App;