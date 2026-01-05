import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-blue-500/30 selection:text-white">
      {/* Premium Global Background */}
      <div className="bg-premium" aria-hidden="true" />

      <Navbar />

      <main className="relative z-10 space-y-32 md:space-y-48 pb-32">
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
