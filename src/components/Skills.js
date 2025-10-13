import React from 'react';
import { Code, Database, Cloud, Brain, Shield, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: "Full-Stack Development",
      description: "React, Node.js, MongoDB",
      progress: 90,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Data Analysis",
      description: "Python, Pandas, Power BI",
      progress: 85,
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & DevOps",
      description: "Railway, Render, GitHub Actions",
      progress: 50,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Brain size={32} />,
      title: "AI Integration",
      description: "ChatGPT API, TensorFlow basics",
      progress: 75,
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity",
      description: "Security Fundamentals",
      progress: 70,
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Database size={32} />,
      title: "Database Management",
      description: "MongoDB, MySQL, PostgreSQL",
      progress: 85,
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-max max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Key Skills
          </h2>
          <p className="text-xl text-gray-600 mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                {skill.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Proficiency</span>
                  <span className="text-sm font-bold text-gray-900">{skill.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 font-poppins">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 
              'Python', 'Pandas', 'NumPy', 'Power BI', 'Tableau', 'Git', 'GitHub', 
              'Docker','Railway', 'Tailwind CSS', 'Bootstrap', 
              'REST APIs'
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 rounded-full text-sm font-medium transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
