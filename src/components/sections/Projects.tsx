import React, { useState } from 'react';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

// Import local images
import chatbotImg from '../../images/local chatbot.png';
import adminPanelImg from '../../images/Self_order_admin.png';
import customerPageImg from '../../images/self_order_customer.png';
import fileSharingImg from '../../images/secure file sharing system.png';
import healthCheckImg from '../../images/Health Check Pro.png';
import h1n1Img from '../../images/H1N1 ML.png';
import taxiFareImg from '../../images/Taxi Fare ML.png';
import portfolioImg from '../../images/portfolio - 2.0.png';
import leadMgmtImg from '../../images/Lead Mgmt Product Design.png';

export function Projects() {
  const [category, setCategory] = useState("all");

  const projects = [
    {
      title: 'Secure Doc Reader & Personal Chatbot',
      description: 'Built an AI-powered chatbot using LangChain, Neo4j (Graph RAG), and DeepSeek LLMs to answer document-based queries. Integrated local models using LMStudio and deployed using Flask.',
      image: chatbotImg,
      github: 'https://github.com/SreeramBrahmagnani/Secured-Local-Chat-Bot-',
      live: null,
      category: 'AI & Data'
    },
    {
      title: 'Self-Ordering System – Admin Panel',
      description: 'Built with React.js, Node.js, Express, and Socket.IO. Implemented real-time admin dashboard with CRUD for product and order management using local JSON files.',
      image: adminPanelImg,
      github: 'https://github.com/SreeramBrahmagnani/self-order-admin-frontend',
      live: 'https://self-order-cust-frontend.vercel.app/',
      category: 'AI & Data'
    },
    {
      title: 'Self-Ordering System – Customer Page',
      description: 'Frontend built with HTML, CSS, and JavaScript to allow customers to browse menu, place orders, and interact in real time. Uses cookies for persistent cart and Socket.IO for updates.',
      image: customerPageImg,
      github: 'https://github.com/SreeramBrahmagnani/self-order-cust-frontend',
      live: 'https://sreerambrahmagnani.github.io/self-order-cust-frontend/',
      category: 'dev'
    },
    {
      title: 'Secure File Sharing System',
      description: 'Developed using Python, Streamlit, and Cryptography library. Enables secure file upload/download with encryption. Deployed on Railway.app.',
      image: fileSharingImg,
      github: 'https://github.com/SreeramBrahmagnani/SecFileSharingSys',
      live: "https://secfilesharingsys-production.up.railway.app/",
      category: 'dev'
    },
    {
      title: 'Health Check Pro',
      description: 'Built during Infosys Springboard Internship. Responsive health monitoring web app using reactjs, figma etc. Worked in a team using Git and other tools.',
      image: healthCheckImg,
      github: 'https://myhealthcheckpro.onrender.com/',
      live: "https://user-profile-settings-git-main-sreerambrahmagnanis-projects.vercel.app",
      category: 'dev'
    },
    {
      title: 'ML Project – H1N1 Vaccine Prediction',
      description: 'Used logistic regression to analyze public health data and predict vaccination trends. Built with Python, Pandas, and Scikit-learn for classification modeling.',
      image: h1n1Img,
      github: 'https://github.com/SreeramBrahmagnani/My-projects',
      live: null,
      category: 'AI & Data'
    },
    {
      title: 'ML Project – Taxi Fare Prediction',
      description: 'Built a linear regression model to estimate taxi fares based on geolocation and time features. Used Python, Pandas, and Scikit-learn with feature engineering.',
      image: taxiFareImg,
      github: 'https://github.com/SreeramBrahmagnani/My-projects',
      live: null,
      category: 'AI & Data'
    },
    {
      title: 'Portfolio Website 2.0',
      description: 'Personal portfolio site developed using HTML, CSS, and Bootstrap. Showcases my projects, resume, and contact links.',
      image: portfolioImg,
      github: 'https://github.com/SreeramBrahmagnani/Portfolio-2.0',
      live: 'https://sreerambrahmagnani.github.io/Portfolio-2.0/',
      category: 'dev'
    },
    {
      title: 'Lead Management System Design',
      description: 'Designed the frontend for a lead management dashboard using Balsamiq. Implemented interface design for lead tracking and management.',
      image: leadMgmtImg,
      github: 'https://github.com/SreeramBrahmagnani/Product-Design',
      live: null,
      category: 'dev'
    }
  ];

  const filteredProjects = category === 'all'
    ? projects
    : projects.filter(project => project.category === category);

  const categories = ['all', 'AI & Data', 'dev'];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projects</h2>

        {/* Category Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-colors duration-300
                ${category === cat
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 h-12 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    <GithubIcon className="h-5 w-5 mr-1" />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      <ExternalLinkIcon className="h-5 w-5 mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
