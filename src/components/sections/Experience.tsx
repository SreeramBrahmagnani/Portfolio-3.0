import React from 'react';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';
export function Experience() {
const experiences = [
  {
    title: 'AI & ML Intern',
    company: 'Jaaji Technologies',
    description: 'Developed secure AI chatbots using Graph RAG architecture with LangChain, Neo4j, and ChromaDB. Integrated local LLMs (DeepSeek, LMStudio) and built ETL pipelines for document ingestion, embedding, and retrieval.',
    duration: 'Feb 2025 – Apr 2025',
    certificate: 'https://drive.google.com/file/d/1HKzHn5K7w__EEEKj5kmVAXSLnTAq30MK/view?usp=drive_link' // Replace with actual link if available
  },
  {
    title: 'Web Development Intern',
    company: 'Infosys Springboard',
    description: 'Worked with a team to develop “Health Check Pro,” a responsive health monitoring website. Built frontend components and contributed to backend logic using HTML, CSS, JS, and APIs.',
    duration: 'Mar 2025 – May 2025',
    certificate: 'https://drive.google.com/file/d/1Ac633NspmJy4FTdxC6yZgKwSYdsDdI0M/view?usp=drive_link' // Replace with actual link
  },
  {
    title: '(Capstone Project) Cyber Security Intern',
    company: 'College Project with Brain o Vision',
    description: 'Created a secure file-sharing system using Streamlit, Railway.app, and Python cryptography libraries. Focused on user privacy and file encryption during cloud transmission.',
    duration: 'Dec 2024 – Feb 2025',
    certificate: 'https://drive.google.com/file/d/1LHkJahoGaKXfT7Z4u1R-D0ZiqpAlfv2a/view?usp=drive_link' // Replace with actual link
  },
  {
    title: '(Capstone Project)Data Science Intern',
    company: 'YHills EduTech',
    description: 'Created a secure file-sharing system using Streamlit, Railway.app, and Python cryptography libraries. Focused on user privacy and file encryption during cloud transmission.',
    duration: 'May 2023 – Jul 2023',
    certificate: 'https://drive.google.com/file/d/1u_0GF0HBHAMc8BddLetm79NA98OCJLBM/view?usp=sharing' // Replace with actual link
  }
];

  return <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-500 dark:bg-blue-400"></div>
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-900"></div>
                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-5/12 md:px-8">
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <BriefcaseIcon className="h-4 w-4 mr-2" />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    {exp.certificate && <a href={exp.certificate} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        View Certificate
                      </a>}
                  </div>
                </div>
                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}