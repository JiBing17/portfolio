import './App.css';
import './index.css';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from './icons/gitpic.jpeg';

function App() {
  return (
    <Paper
      sx={{
        width: '18%',
        height: '100vh',
        padding: 2,
        backgroundColor: '#212529',
      }}
    >
      <Box component="section" sx={{ 
        display: "flex", flexDirection: "column", justifyContent: "space-around",
        alignItems: "center", p: 2, border: '1px dashed grey' 
        }}>
      <img src={profilePic} alt="Profile Pic" className='rounded-full size-32 border-4 border-white'/>
      <h1 className='text-white text-2xl'>Ji Bing Ni</h1>
        <Box sx={{ display: 'flex', justifyItems: 'space-around', p: 4 }}>
          <a href='https://leetcode.com/u/Ji_Bing/' target="_blank" rel="noreferrer">
            <CodeIcon sx={{ color: "white"}}/>
          </a>
          <a href='https://github.com/JiBing17' target="_blank" rel="noreferrer">
            <GitHubIcon sx={{ color: "white"}} />
          </a>
          <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
            <LinkedInIcon sx={{ color: "white"}} />
          </a>
        </Box>

      </Box>
    </Paper>
  );
}


export default App;
