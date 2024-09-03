import './App.css';
import './index.css';

import { Box } from '@mui/material';

import Navbar from './pages/Navbar'
import Hero from './pages/Hero';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar/>

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: '18%', // Adjust for the width of the fixed navbar
        }}
      >
        <Hero/>
        <About/>
      </Box>
    </>
  );
}


export default App;
