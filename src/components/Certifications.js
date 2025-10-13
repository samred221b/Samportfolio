import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "DOT Ethiopia Leadership Certificate",
      issuer: "DOT Ethiopia",
      date: "2020",
      description: "Leadership development program focusing on technology innovation and digital transformation in Ethiopia.",
      color: "from-blue-500 to-blue-600",
      logo: "🏆"
    },
    {
      title: "Data Science & Analytics Certificate",
      issuer: "Udacity",
      date: "2025",
      description: "Comprehensive program covering data analysis, machine learning, and statistical modeling using Python and SQL.",
      color: "from-green-500 to-green-600",
      logo: "📊"
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "Udacity",
      date: "2025",
      description: "Essential cybersecurity concepts including network security, risk assessment, and security protocols.",
      color: "from-red-500 to-red-600",
      logo: "🔒"
    },
    {
      title: "AI Basics Certificate",
      issuer: "Udacity",
      date: "2025",
      description: "Introduction to artificial intelligence, machine learning algorithms, and AI application development.",
      color: "from-purple-500 to-purple-600",
      logo: "🤖"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {cert.logo}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-primary-600 transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Award size={16} />
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {cert.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
