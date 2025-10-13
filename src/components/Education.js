import React from 'react';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Bole Senior Secondary School",
      location: "Ethiopia",
      period: "2015 - 2019",
      description: "Comprehensive computer science education covering programming fundamentals, data structures, algorithms, database systems, and software engineering principles.",
      highlights: [
        "Software Engineering & System Design",
        "Database Management Systems",
        "Data Structures & Algorithms",
        "Computer Networks & Security"
      ],
      color: "from-blue-500 to-blue-600"
    }
  ];

  const onlineCourses = [
    {
      title: "AI & Machine Learning",
      platform: "Express Tech",
      period: "2023",
      topics: ["Deep Learning", "Neural Networks", "TensorFlow", "Computer Vision"]
    },
    {
      title: "Cloud Computing Basics",
      platform: "AWS Training",
      period: "2022",
      topics: ["AWS Services", "Cloud Architecture", "DevOps", "Serverless Computing"]
    },
    {
      title: "Full-Stack Web Development",
      platform: "freeCodeCamp",
      period: "2024",
      topics: ["React", "Node.js", "MongoDB", "RESTful APIs"]
    },
    {
      title: "Data Science with Python",
      platform: "DataCamp",
      period: "2024",
      topics: ["Pandas", "NumPy", "Matplotlib", "Statistical Analysis"]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic foundation and continuous learning journey in technology and innovation
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-poppins">
            Formal Education
          </h3>
          
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Icon */}
                <div className="text-center lg:text-left">
                  <div className={`w-24 h-24 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    <GraduationCap size={40} />
                  </div>
                  <div className="text-gray-600">
                    <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-sm">{edu.location}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2">
                  <h4 className="text-3xl font-bold text-gray-900 mb-2 font-poppins">
                    {edu.degree}
                  </h4>
                  <p className="text-xl text-primary-600 font-semibold mb-4">
                    {edu.institution}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Areas of Study:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color}`}></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Online Learning */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-poppins">
            Online Courses & Specializations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {onlineCourses.map((course, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <BookOpen size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1 font-poppins group-hover:text-primary-600 transition-colors duration-200">
                      {course.title}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="font-medium">{course.platform}</span>
                      <span>•</span>
                      <span>{course.period}</span>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Topics Covered:</h5>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, tIndex) => (
                      <span 
                        key={tIndex}
                        className="px-3 py-1 bg-gray-100 hover:bg-accent-100 text-gray-700 hover:text-accent-700 rounded-full text-sm transition-colors duration-200"
                      >
                        {topic}
                      </span>
                    ))}
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

export default Education;
