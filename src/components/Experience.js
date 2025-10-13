import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      location: "Remote",
      period: "2023 - Present",
      description: "Developed and deployed Elevate, a comprehensive habit-tracking web application with analytics and user insights. Built using React, Node.js, and MongoDB with deployment on Railway.",
      achievements: [
        "Created full-stack web application with user authentication",
        "Implemented data analytics and visualization features",
        "Deployed scalable application with CI/CD pipeline"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "IT Officer",
      company: "Basin Development Authority",
      location: "Ethiopia",
      period: "2020 -2021",
      description: "Leading IT infrastructure management and digital transformation initiatives. Responsible for system administration, network security, and technology strategy implementation.",
      achievements: [
        "Managed IT infrastructure for 200+ employees",
        "Implemented cybersecurity protocols and policies",
        "Led digital transformation projects"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "National ID Registration Officer",
      company: "Government Agency",
      location: "Ethiopia",
      period: "2024 - Present",
      description: "Trained personnel on national ID registration systems and processes. Developed training materials and conducted workshops across multiple regions.",
      achievements: [
        "Connected 500+ registration officers",
        "Developed comprehensive training curriculum",
        "Improved registration efficiency by 40%"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Data Analyst",
      company: "Water & Energy NGO Projects",
      location: "Ethiopia",
      period: "2020 -2021",
      description: "Analyzed water and energy project data to provide insights for development initiatives. Created dashboards and reports for stakeholders and donors.",
      achievements: [
        "Analyzed data from 50+ development projects",
        "Created interactive Power BI dashboards",
        "Provided insights that influenced 2M+ Birr(Local Currency) in funding decisions"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "System Administrator & Project Manager",
      company: "Various Organizations",
      location: "Ethiopia",
      period: "2020 - 2024",
      description: "Managed IT systems and led technology projects for multiple organizations. Coordinated cross-functional teams and ensured project delivery within scope and timeline.",
      achievements: [
        "Successfully delivered 11+ IT projects",
        "Managed teams of 2-4 technical professionals",
        "Reduced system downtime by 60%"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-max max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 mx-auto">
            A journey of growth, innovation, and impact across technology and development sectors
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white shadow-lg z-10 flex items-center justify-center`}>
                  <Briefcase size={16} className="text-white" />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 mb-4">
                        <span className="font-semibold text-primary-600">{exp.company}</span>
                        <span className="hidden sm:block">•</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <span className="hidden sm:block">•</span>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-gray-700">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
