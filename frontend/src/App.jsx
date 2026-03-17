import React from 'react';
import { ReactLenis } from 'lenis/react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="font-sans antialiased selection:bg-accent/40 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        <footer className="py-8 border-t border-white/10 text-center text-text-muted text-sm">
          <p>© {new Date().getFullYear()} Irshan Swandi Restu Adie. Built with React & Laravel.</p>
        </footer>
      </div>
    </ReactLenis>
  );
}

export default App;
