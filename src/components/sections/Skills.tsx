import React from 'react';
import { CodeIcon, DatabaseIcon, ServerIcon, BrainIcon, Code2Icon, WebcamIcon, InspectIcon, PenToolIcon, HammerIcon, CloudIcon, CloudCogIcon } from 'lucide-react';
export function Skills() {
  const skillCategories = [{
    name: 'Programming Languages',
    icon: <CodeIcon className="h-6 w-6" />,
    skills: ['Python', 'JavaScript', 'Java', 'PL/SQL']
  }, {
    name: 'Web Technologies',
    icon: <InspectIcon className="h-6 w-6" />,
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'Flask', 'REST API', 'Bootstrap', 'WebSockets','Emailjs']
  }, {
    name: 'Databases',
    icon: <DatabaseIcon className="h-6 w-6" />,
    skills: ['Neo4j', 'ChromaDB', 'MongoDB', 'PostgreSQL', 'MySQL']
  }, {
    name: 'Tools',
    icon: <HammerIcon className="h-6 w-6" />,
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'LM Studios', 'Postman', 'Figma', 'Balsamiq', 'MS Office', 'Google Colabs']
  }, {
    name: 'Deployment Tools',
    icon: <CloudCogIcon className="h-6 w-6" />,
    skills: ['AWS', 'Railway', 'Render', 'Vercel']}
 , {
    name: 'Additional Skills',
    icon: <BrainIcon className="h-6 w-6" />,
    skills: ['OOP', 'DSA', 'ETL Scripts', 'Problem Solving', 'Graph RAG', 'LLMs','Data Modeling', 'Data Analysis']
  }];
  return <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills
        </h2>
        <div className="space-y-12">
          {skillCategories.map((category, index) => <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => <span key={skillIndex} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300">
                    {skill}
                  </span>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}