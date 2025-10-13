import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import ElevateImg from '../assets/Elevate.JPG';
import DataImg from '../assets/Data.png';
import ChatbotsImg from '../assets/Chatbots.png';
import PortfolioImg from '../assets/Portfolio.JPG';
import JerseyshopImg from '../assets/jerseyshop.JPG';
import AutomationImg from '../assets/automation.png';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Elevate Habit Tracker",
      description: "A comprehensive full-stack web application for habit tracking with analytics, user insights, and progress visualization. Features user authentication, data persistence, and interactive dashboards.",
      image: ElevateImg,
      techStack: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Chart.js"],
      demoLink: "https://elevate-demo.com",
      githubLink: "https://github.com/samuelalemayehu/elevate",
      category: "Full-Stack Web App",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive business intelligence dashboard for data visualization and analytics. Built with Python and Power BI integration, featuring real-time data processing and custom visualizations.",
      image: DataImg,
      techStack: ["Python", "Pandas", "Power BI", "SQL", "Plotly", "Streamlit"],
      demoLink: "https://analytics-dashboard-demo.com",
      githubLink: "https://github.com/samuelalemayehu/analytics-dashboard",
      category: "Data Analytics",
      color: "from-green-500 to-green-600"
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Intelligent chatbot for customer support automation using ChatGPT API. Features natural language processing, context awareness, and seamless integration with existing systems.",
      image: ChatbotsImg,
      techStack: ["JavaScript", "OpenAI API", "Node.js", "Socket.io", "React", "NLP"],
      demoLink: "https://ai-chatbot-demo.com",
      githubLink: "https://github.com/samuelalemayehu/ai-chatbot",
      category: "AI Integration",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website showcasing professional experience and projects. Built with React and Tailwind CSS, featuring smooth animations and optimal performance.",
      image: PortfolioImg,
      techStack: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "HTML5", "CSS3"],
      demoLink: "https://samuel-portfolio.com",
      githubLink: "https://github.com/samuelalemayehu/portfolio",
      category: "Frontend Development",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "JerseyShop E-Commerce Platform",
      description: "Complete e-commerce solution for jersey inventory management and sales tracking. Features product catalog, order management, and comprehensive reporting system.",
      image: JerseyshopImg,
      techStack: ["React", "Node.js", "MongoDB", "Stripe API", "Express.js", "Redux"],
      demoLink: "https://jerseyshop-demo.com",
      githubLink: "https://github.com/samuelalemayehu/jerseyshop",
      category: "E-Commerce",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Automation Workflow System",
      description: "Integrated automation system connecting Google Sheets, ChatGPT API, and WhatsApp for streamlined business processes. Automates data processing and communication workflows.",
      image: AutomationImg,
      techStack: ["Google Apps Script", "OpenAI API", "WhatsApp API", "JavaScript", "Google Sheets"],
      demoLink: "https://automation-demo.com",
      githubLink: "https://github.com/samuelalemayehu/automation-workflow",
      category: "Process Automation",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Selected Projects
          </h2>
          <p className="text-xl text-gray-600 mx-auto">
            A showcase of innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Featured Project Carousel */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <div className="order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-200 rounded-2xl h-80 overflow-hidden">
                    <img 
                      src={projects[currentProject].image} 
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${projects[currentProject].color} opacity-10 hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${projects[currentProject].color} mb-4`}>
                    {projects[currentProject].category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {projects[currentProject].description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevProject}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors duration-200 hover:shadow-xl"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Project indicators */}
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentProject 
                        ? `bg-gradient-to-r ${projects[currentProject].color}` 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextProject}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors duration-200 hover:shadow-xl"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-poppins">
            All Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
                onClick={() => setCurrentProject(index)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.color} mb-3`}>
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                        +{project.techStack.length - 3}
                      </span>
                    )}
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

export default Projects;
