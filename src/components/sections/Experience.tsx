import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/portfolio';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('experience');

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <Briefcase className="h-8 w-8 text-blue-600 mr-4" aria-hidden="true" />
          <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">
            Experience
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              role="article"
              aria-labelledby={`experience-title-${exp.id}`}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
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
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                    aria-label={`View certificate for ${exp.title} at ${exp.company}`}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
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