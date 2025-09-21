import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/portfolio';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('experience');

  const getCompanyLogo = (company: string) => {
    if (company.includes('Krify')) {
      return '/krify-logo.jpeg';
    } else if (company.includes('Salesforce')) {
      return '/Salesforce-logo.webp';
    } else if (company.includes('Lomaa')) {
      return '/lomaa-logo.png';
    }
    return null;
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
    className="py-16 px-4 sm:px-6 lg:px-8 section-transition bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 transition-colors duration-300" aria-hidden="true" />
          <h2 id="experience-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Experience
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={
                `bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/70 transition-all duration-700 transform hover:-translate-y-1 hover:scale-102 border border-gray-200 dark:border-gray-700 flex flex-col ` +
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
                {/* Company Logo and Title Section */}
                <div className="flex items-center mb-4">
                  {getCompanyLogo(exp.company) && (
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={getCompanyLogo(exp.company)!}
                        alt={`${exp.company} logo`}
                        className="h-12 w-12 object-contain rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 id={`experience-title-${exp.id}`} className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                      {exp.company}
                    </div>
                  </div>
                </div>
                
                <div className="text-gray-600 dark:text-gray-400 mb-4 italic transition-colors duration-300">
                  {exp.period}
                </div>
                <ul className="space-y-2 mb-4 flex-grow" aria-label={`Responsibilities at ${exp.company}`}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start text-sm transition-colors duration-300">
                      <span className="text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0 transition-colors duration-300" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-3 py-1.5 rounded-md text-sm transition-colors duration-200 mt-auto"
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
