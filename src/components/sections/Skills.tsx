import React from 'react';
import { Lightbulb, Code, Database, Layout, PenTool as Tool, Users, MessageSquare, Github, Cloud, Zap } from 'lucide-react';
import { skills } from '../../data/portfolio';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const visibleSections = useScrollAnimation();
  const isVisible = visibleSections.has('skills');

  const getIcon = (iconName: string) => {
    const icons = {
      Code: Code,
      Database: Database,
      Layout: Layout,
      Tool: Tool,
      Users: Users,
      MessageSquare: MessageSquare,
      Github: Github,
      Cloud: Cloud,
      Zap: Zap
    };
    return icons[iconName as keyof typeof icons] || Code;
  };

    return (
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-4 transition-colors duration-300" aria-hidden="true" />
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            My Skills
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = getIcon(skill.icons[0]);
            return (
              <div
                key={skill.category}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border dark:border-gray-700 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                role="region"
                aria-labelledby={`skill-category-${index}`}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 transition-colors duration-300" aria-hidden="true" />
                  <h3 id={`skill-category-${index}`} className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {skill.category}
                  </h3>
                </div>
                <div className="space-y-2" role="list" aria-label={`${skill.category} skills`}>
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2 transition-colors duration-300"
                      role="listitem"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;