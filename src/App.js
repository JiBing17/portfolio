import './index.css';

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-paper text-ink transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
