import React from 'react';
import { Trophy, Award, ExternalLink } from 'lucide-react';
import { achievements} from '../../data/portfolio';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Achievements: React.FC = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('achievements');

  return (
    <section
      id="achievements"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 to-orange-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <Trophy className="h-8 w-8 text-yellow-600 mr-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Achievements
          </h2>
        </div>
        
        {/* Research Publications & Awards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Trophy className="h-6 w-6 text-yellow-600 mr-3" />
            Research & Publications
          </h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-yellow-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Paper
                      </a>
                    )}
                  </div>
                  
                  <div className="ml-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Trophy className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
