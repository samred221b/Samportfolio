import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Languages />
      <Footer />
    </div>
  );
}

export default App;
