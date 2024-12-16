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

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: '18%', 
        }}
      >
        <Hero/>
        <About/>
        <Resume/>
      </Box>
    </>
  );
}


export default App;
