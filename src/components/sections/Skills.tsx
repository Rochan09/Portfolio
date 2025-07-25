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
      className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <Lightbulb className="h-8 w-8 text-blue-600 mr-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Skills
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = getIcon(skill.icons[0]);
            return (
              <div
                key={skill.category}
                className={`bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {skill.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2"
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