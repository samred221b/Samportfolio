import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, Code, Database, Cloud, ChevronDown, Sparkles, Star, Zap, Send } from 'lucide-react';
import SamuelImg from '../assets/Samuel.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    { 
      title: "Full-Stack Developer", 
      icon: <Code size={20} />, 
      color: "from-blue-500 to-blue-600",
      description: "Building end-to-end solutions",
      skills: ["React", "Node.js", "MongoDB"]
    },
    { 
      title: "Data Analyst", 
      icon: <Database size={20} />, 
      color: "from-green-500 to-green-600",
      description: "Transforming data into insights",
      skills: ["Python", "Power BI", "SQL"]
    },
    { 
      title: "IT Officer", 
      icon: <Cloud size={20} />, 
      color: "from-purple-500 to-purple-600",
      description: "Managing digital infrastructure",
      skills: ["AWS", "DevOps", "Security"]
    }
  ];

  const achievements = [
    { icon: <Star className="w-4 h-4" />, text: "50+ Projects Delivered" },
    { icon: <Zap className="w-4 h-4" />, text: "5+ Years Experience" },
    { icon: <Sparkles className="w-4 h-4" />, text: "Ethiopia Based" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-6">
        <div className="w-full flex justify-between items-center px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Logo - Far Left */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              SA
            </div>
            <span className="text-xl font-bold text-gray-900 font-poppins">Samuel</span>
          </div>

          {/* Navigation Links - Far Right */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Skills', href: '#skills' },
              { name: 'Experience', href: '#experience' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Far Right */}
          <button className="md:hidden w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Interactive gradient that follows mouse */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary-200/40 to-accent-200/40 rounded-full filter blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        
        {/* Static geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        
        {/* Elegant geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="elegant-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-primary-600"/>
                <circle cx="0" cy="0" r="1" fill="currentColor" className="text-accent-500"/>
                <circle cx="60" cy="0" r="1" fill="currentColor" className="text-accent-500"/>
                <circle cx="0" cy="60" r="1" fill="currentColor" className="text-accent-500"/>
                <circle cx="60" cy="60" r="1" fill="currentColor" className="text-accent-500"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#elegant-grid)"/>
          </svg>
        </div>
        
        {/* Subtle diagonal lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal-lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="text-primary-400"/>
                <line x1="0" y1="50" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-accent-400"/>
                <line x1="50" y1="0" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-accent-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)"/>
          </svg>
        </div>
        
        {/* Modern hexagon accents */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-500">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="currentColor" strokeWidth="2"/>
            <polygon points="50,20 70,30 70,70 50,80 30,70 30,30" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent-500">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        
        {/* Advanced mesh gradient overlay */}
        <div className="absolute inset-0 opacity-[0.15]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="mesh1" cx="20%" cy="30%" r="40%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.05"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
              <radialGradient id="mesh2" cx="80%" cy="70%" r="35%">
                <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.08"/>
                <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.04"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
              <radialGradient id="mesh3" cx="60%" cy="20%" r="30%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.06"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh1)"/>
            <rect width="100%" height="100%" fill="url(#mesh2)"/>
            <rect width="100%" height="100%" fill="url(#mesh3)"/>
          </svg>
        </div>

        {/* Layered geometric network */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                {/* Connection lines */}
                <line x1="50" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-primary-300"/>
                <line x1="50" y1="50" x2="100" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-accent-300"/>
                <line x1="150" y1="50" x2="100" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-purple-300"/>
                <line x1="100" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.3" className="text-primary-200"/>
                
                {/* Network nodes */}
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-primary-400"/>
                <circle cx="150" cy="50" r="2" fill="currentColor" className="text-accent-400"/>
                <circle cx="100" cy="150" r="2" fill="currentColor" className="text-purple-400"/>
                <circle cx="100" cy="0" r="1.5" fill="currentColor" className="text-primary-300"/>
                <circle cx="0" cy="100" r="1" fill="currentColor" className="text-accent-300"/>
                <circle cx="200" cy="100" r="1" fill="currentColor" className="text-purple-300"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)"/>
          </svg>
        </div>

        {/* Advanced geometric shapes */}
        <div className="absolute top-1/3 right-1/3 w-40 h-40 opacity-[0.06]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="shapeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            {/* Complex geometric shape */}
            <path d="M50,10 L80,30 L90,60 L70,85 L30,85 L10,60 L20,30 Z" fill="url(#shapeGrad1)" stroke="currentColor" strokeWidth="0.5" className="text-primary-300"/>
            <path d="M50,25 L65,35 L70,55 L55,70 L35,70 L30,55 L35,35 Z" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-accent-400"/>
            <circle cx="50" cy="50" r="3" fill="currentColor" className="text-primary-500" opacity="0.4"/>
          </svg>
        </div>

        <div className="absolute bottom-1/4 left-1/5 w-32 h-32 opacity-[0.05]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="shapeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            {/* Triangular composition */}
            <polygon points="50,15 80,70 20,70" fill="url(#shapeGrad2)" stroke="currentColor" strokeWidth="0.5" className="text-accent-300"/>
            <polygon points="50,30 65,55 35,55" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary-400"/>
            <circle cx="50" cy="45" r="2" fill="currentColor" className="text-accent-500" opacity="0.6"/>
          </svg>
        </div>

        {/* Elegant corner decorations with enhanced details */}
        <div className="absolute top-0 left-0 w-40 h-40 opacity-[0.08]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-400">
            <defs>
              <linearGradient id="cornerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.05"/>
              </linearGradient>
            </defs>
            <path d="M0,0 Q50,0 50,50 Q0,50 0,0" fill="url(#cornerGrad1)"/>
            <path d="M0,0 Q30,0 30,30 Q0,30 0,0" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
            <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>
        
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-[0.08]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent-400">
            <defs>
              <linearGradient id="cornerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.05"/>
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <path d="M100,100 Q50,100 50,50 Q100,50 100,100" fill="url(#cornerGrad2)"/>
            <path d="M100,100 Q70,100 70,70 Q100,70 100,100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
            <circle cx="85" cy="85" r="1.5" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>

        {/* Subtle tech-inspired circuit pattern */}
        <div className="absolute top-1/2 left-1/6 w-24 h-24 opacity-[0.03]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <g className="text-primary-400">
              {/* Circuit lines */}
              <line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="1"/>
              <line x1="20" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="1"/>
              <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="1"/>
              <line x1="80" y1="20" x2="80" y2="50" stroke="currentColor" strokeWidth="1"/>
              <line x1="50" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5"/>
              
              {/* Circuit nodes */}
              <rect x="18" y="18" width="4" height="4" fill="currentColor"/>
              <rect x="78" y="18" width="4" height="4" fill="currentColor"/>
              <rect x="18" y="78" width="4" height="4" fill="currentColor"/>
              <rect x="48" y="48" width="4" height="4" fill="currentColor"/>
              <circle cx="50" cy="20" r="2" fill="currentColor"/>
              <circle cx="80" cy="50" r="2" fill="currentColor"/>
            </g>
          </svg>
        </div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Status Badge */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 text-gray-600 text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for opportunities
              </div>
            </div>

            {/* Enhanced Main Heading */}
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
                  Samuel
                  <br />
                  <span className="gradient-text relative">
                    Alemayehu
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                  </span>
                </h1>
                {/* Decorative line */}
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto lg:mx-0"></div>
              </div>
            </div>

            {/* Extended Description */}
            <div className="animate-slide-up space-y-4" style={{animationDelay: '0.4s'}}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to my digital portfolio! I'm a versatile technology professional with a passion for creating 
                innovative solutions that bridge the gap between complex technical challenges and real-world impact.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Based in Ethiopia, I bring a unique perspective to global technology projects, combining local insights 
                with international best practices. My journey spans full-stack development, data analytics, and IT 
                infrastructure management, allowing me to approach problems from multiple angles and deliver 
                comprehensive solutions.
              </p>
            </div>



            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.8s'}}>
              <button className="group relative bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Download size={20} className="group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download CV</span>
              </button>
              
              <button className="group relative bg-white/80 backdrop-blur-sm hover:bg-white text-primary-600 px-8 py-4 rounded-xl font-medium border-2 border-primary-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Mail size={20} className="group-hover:animate-pulse relative z-10" />
                <span className="relative z-10">Contact Me</span>
              </button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 animate-slide-up" style={{animationDelay: '1s'}}>
              {[
                { icon: <Github size={20} />, href: "https://github.com/samred221b", label: "GitHub", color: "hover:bg-gray-900 hover:text-white" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/samuelalemayehu", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
                { icon: <Mail size={20} />, href: "mailto:samred221b@gmail.com", label: "Email", color: "hover:bg-red-500 hover:text-white" },
                { icon: <Send size={20} />, href: "https://t.me/supernova221b", label: "Telegram", color: "hover:bg-blue-500 hover:text-white" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center text-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-gray-200/50 ${social.color}`}
                  aria-label={social.label}
                >
                  <div className="transform group-hover:rotate-12 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Profile Elements */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-8 animate-fade-in" style={{animationDelay: '1.2s'}}>
            
            {/* Enhanced Profile Card with Geometric Frame */}
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary-200/30 via-accent-200/20 to-purple-200/30 rounded-3xl blur-3xl group-hover:from-primary-300/40 group-hover:via-accent-300/30 group-hover:to-purple-300/40 transition-all duration-500"></div>
              
              {/* Main card container */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 group-hover:shadow-3xl group-hover:border-primary-200/50 transition-all duration-300">
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-8 h-8 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-primary-500">
                    <path d="M10,10 L40,10 L40,15 L15,15 L15,40 L10,40 Z" fill="currentColor"/>
                    <circle cx="25" cy="25" r="2" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="absolute top-4 right-4 w-8 h-8 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-accent-500">
                    <path d="M90,10 L60,10 L60,15 L85,15 L85,40 L90,40 Z" fill="currentColor"/>
                    <circle cx="75" cy="25" r="2" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="absolute bottom-4 left-4 w-8 h-8 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-purple-500">
                    <path d="M10,90 L40,90 L40,85 L15,85 L15,60 L10,60 Z" fill="currentColor"/>
                    <circle cx="25" cy="75" r="2" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-primary-500">
                    <path d="M90,90 L60,90 L60,85 L85,85 L85,60 L90,60 Z" fill="currentColor"/>
                    <circle cx="75" cy="75" r="2" fill="currentColor"/>
                  </svg>
                </div>

                {/* Profile image with hexagonal frame */}
                <div className="relative mb-6">
                  <div className="relative w-80 h-80 mx-auto">
                    {/* Hexagonal background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-primary-600">
                        <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="currentColor" strokeWidth="1"/>
                        <polygon points="50,15 75,30 75,70 50,85 25,70 25,30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                        <polygon points="50,25 65,35 65,65 50,75 35,65 35,35" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                      </svg>
                    </div>
                    
                    {/* Main image with modern frame */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white p-3 shadow-xl">
                      <div className="w-full h-full rounded-xl overflow-hidden relative">
                        <img
                          src={SamuelImg}
                          alt="Samuel Alemayehu"
                          className="w-full h-full object-cover"
                        />
                        {/* Subtle overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Tech accent elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="absolute bottom-8 right-8 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-200/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-700">Available</span>
                  </div>
                </div>

                {/* Professional info card */}
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                    <span>Full-Stack Developer</span>
                    <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
                    <span>Data Analyst</span>
                    <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <span>Ethiopia Based</span>
                    </div>
                    <div className="w-px h-3 bg-gray-300"></div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-gradient-to-r from-accent-500 to-purple-500 flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <span>5+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Only */}
            <div className="text-center">
              {/* Clean Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "5+", label: "Years" },
                  { value: "50+", label: "Projects" },
                  { value: "3", label: "Roles" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 shadow-md">
                    <div className="text-xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown size={16} className="animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
