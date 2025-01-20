import './App.css';
import './index.css';

import { Box } from '@mui/material';

import Navbar from './pages/Navbar'
import Hero from './pages/Hero';
import About from './pages/About';
import Resume from './pages/Resume'
import Skills from './pages/Skills'
import Projects from './pages/Projects';
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Resume/>
    </>
  );
}


export default App;
