import React from 'react';
import { GraduationCapIcon, CalendarIcon } from 'lucide-react';
export function Education() {
  const educationItems = [{
    school: 'SVCN JNTUA University Affiliated',
    degree: 'Bachelor of Technology in Computer Science Engineering',   
    duration: '2021 - 2025',
    result: 'First Class with Distinction'
  }, {
    school: 'Raos Jr College BIEAP Affiliated',
    degree: 'Intermediate in Mathematics, Physics, Chemistry',
    duration: '2019 - 2021',

    result: 'First Division'
  }, {
    school: 'SKC High School BSEAP Affiliated', 
    degree: 'Class 10',
    duration: '2018 - 2019',
    result: 'Distinction'
  }];
  return <section id="education" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-500 dark:bg-blue-400"></div>
          {/* Timeline items */}
          <div className="space-y-12">
            {educationItems.map((edu, index) => <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-900"></div>
                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-5/12 md:px-8">
                  <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <GraduationCapIcon className="h-4 w-4 mr-2" />
                      <span>{edu.degree}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {edu.result}
                    </div>
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