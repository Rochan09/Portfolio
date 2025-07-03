import React from 'react';
import { User } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const About: React.FC = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('about');

  return (
    <section
      id="about"
      className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <User className="h-8 w-8 text-blue-600 mr-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About Me
          </h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <p className="text-lg text-gray-700 leading-relaxed">
            {personalInfo.about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;