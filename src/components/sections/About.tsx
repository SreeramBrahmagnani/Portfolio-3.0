import React from 'react';
import profileImg from '../../images/profile.jpeg';

export function About() {
  return <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-blue-500 dark:border-blue-400 shadow-xl">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Hello, I'm B Sreeram</h3>
<p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
  A motivated and curious developer exploring data engineering, full-stack web development, and AIML practices. I’ve built and contributed to projects like self-ordering systems, admin dashboards, and chatbot integrations that solve real-world problems.
</p>
<p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
  I'm currently focused on integrating Large Language Models into applications and building efficient data workflows. I enjoy learning new technologies and applying them creatively to build meaningful, user-focused solutions.
</p>

            <div className="flex gap-4">
              <a href="https://drive.google.com/file/d/1O7yykg_RYtwI19p6jHCFRJ-jaCx1FjTV/view?usp=drive_link" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300">
                Résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}