import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/portfolio';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('experience');
  
  // Animation: slide in from left when visible
  // We'll use intersection observer logic from useScrollAnimation

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
    className="py-16 px-4 sm:px-6 lg:px-8 section-transition bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Briefcase className="h-6 w-6 text-blue-600 mr-3" aria-hidden="true" />
          <h2 id="experience-heading" className="text-2xl sm:text-3xl font-bold text-gray-900">
            Experience
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={
                `bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-700 transform hover:-translate-y-1 hover:scale-102 border border-gray-200 flex flex-col ` +
                `animate-slideinleft opacity-0` // will be overridden by inline style when visible
              }
              style={
                isVisible
                  ? {
                      animation: `slideinleft 0.8s cubic-bezier(0.4,0,0.2,1) forwards`,
                      animationDelay: `${index * 0.15}s`,
                      opacity: 1
                    }
                  : { opacity: 0 }
              }
              role="article"
              aria-labelledby={`experience-title-${exp.id}`}
            >
              <div className="p-6 flex-grow flex flex-col">
                <h3 id={`experience-title-${exp.id}`} className="text-xl font-bold text-blue-600 mb-2">
                  {exp.title}
                </h3>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {exp.company}
                </div>
                <div className="text-gray-600 mb-4 italic">
                  {exp.period}
                </div>
                <ul className="space-y-2 mb-4 flex-grow" aria-label={`Responsibilities at ${exp.company}`}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start text-sm">
                      <span className="text-blue-500 mr-2 flex-shrink-0" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm transition-colors duration-200 mt-auto"
                    aria-label={`View certificate for ${exp.title} at ${exp.company}`}
                  >
                    <ExternalLink className="h-3 w-3 mr-1" aria-hidden="true" />
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
