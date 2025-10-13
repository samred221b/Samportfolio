import React from 'react';
import { Globe, MessageCircle } from 'lucide-react';

const Languages = () => {
  const languages = [
    {
      name: "English",
      level: "Fluent",
      proficiency: 75,
      description: "Professional working proficiency with excellent written and verbal communication skills.",
      flag: "🇺🇸",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Amharic",
      level: "Native",
      proficiency: 100,
      description: "Native speaker with complete fluency in all aspects of the language.",
      flag: "🇪🇹",
      color: "from-green-500 to-green-600"
    }
  ];

  const communicationSkills = [
    {
      skill: "Technical Documentation",
      description: "Creating clear, comprehensive technical documentation and user guides",
      icon: "📝"
    },
    {
      skill: "Cross-Cultural Communication",
      description: "Effective communication across diverse cultural and professional contexts",
      icon: "🌍"
    },
    {
      skill: "Presentation Skills",
      description: "Delivering engaging presentations to technical and non-technical audiences",
      icon: "🎯"
    },
    {
      skill: "Team Collaboration",
      description: "Facilitating productive discussions and collaborative problem-solving",
      icon: "🤝"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Languages & Communication
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bridging cultures and ideas through effective multilingual communication
          </p>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-poppins">
            Language Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${lang.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {lang.flag}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-1 font-poppins">
                      {lang.name}
                    </h4>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${lang.color}`}>
                      {lang.level}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {lang.description}
                </p>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Proficiency</span>
                    <span className="text-sm font-bold text-gray-900">{lang.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${lang.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${lang.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-poppins">
            Communication Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communicationSkills.map((skill, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 font-poppins group-hover:text-primary-600 transition-colors duration-200">
                      {skill.skill}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {skill.description}
                    </p>
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

export default Languages;
