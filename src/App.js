import './App.css';
import './index.css';

import { Box } from '@mui/material';

import Navbar from './pages/Navbar'
import Hero from './pages/Hero';
import About from './pages/About';
import Resume from './pages/Resume'
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
    </>
  );
}


export default App;
