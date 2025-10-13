import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Send } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/samred221b',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/in/samuelalemayehu',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:samred221b@gmail.com',
      color: 'hover:text-red-600'
    },
    {
      name: 'Telegram',
      icon: <Send size={24} />,
      url: 'https://t.me/supernova221b',
      color: 'hover:text-blue-500'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-900 rounded-full opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-900 rounded-full opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-max max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4 font-poppins">
                Samuel Alemayehu
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Full-Stack Developer, Data Analyst, and IT Officer passionate about creating 
                innovative digital solutions that make a meaningful impact. Based in Ethiopia, 
                building the future through code and data.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 font-poppins">Get In Touch</h4>
              <div className="space-y-3">
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white mb-1">Email</p>
                  <a 
                    href="mailto:samred221b@gmail.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    samred221b@gmail.com
                  </a>
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white mb-1">Location</p>
                  <p>Ethiopia</p>
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white mb-1">Availability</p>
                  <p>Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© 2024 Samuel Alemayehu. All rights reserved.</span>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                <span>Back to top</span>
                <ArrowUp size={16} className="group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
      </div>

      {/* Floating Action Button - Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
