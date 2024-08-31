import './App.css';
import './index.css';

import { Paper, Box, Typography} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from './icons/gitpic.jpeg';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ProjectIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import ServicesIcon from '@mui/icons-material/Build';
import ApiIcon from '@mui/icons-material/Api';
import SettingsIcon from '@mui/icons-material/Settings';
import Email from '@mui/icons-material/Email';

function App() {
  return (
    <Paper
      sx={{
        width: '18%',
        height: '100vh',
        padding: 2,
        backgroundColor: '#212529',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
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
            <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
              <DescriptionIcon sx={{ color: "white"}} />
            </a>
          </Box>
      </Box>

      <Box sx={{display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "100%"}}>
        <a href='./' target="_blank" rel="noreferrer">
          <Box sx={{display: "flex", alignItems: "center"}}>
            <HomeIcon sx={{ color: "white"}} />
            <Typography>Home</Typography>
          </Box>
            
        </a>
        <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
          <Box sx={{display: "flex", alignItems: "center"}}>
            <PersonIcon sx={{ color: "white"}} /> 
            <Typography>About</Typography>
          </Box>
        </a>
        <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
          <Box sx={{display: "flex", alignItems: "center"}}>
            <DescriptionIcon sx={{ color: "white"}} /> 
            <Typography>Resume</Typography>
          </Box>
        </a>
        <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
          <Box sx={{display: "flex", alignItems: "center"}}>
            <ProjectIcon sx={{ color: "white"}} /> 
            <Typography>Projects</Typography>
          </Box>
        </a>
        <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
          <Box sx={{display: "flex", alignItems: "center"}}>
            <SettingsIcon sx={{ color: "white"}} /> 
            <Typography>Services</Typography>
          </Box>
        </a>
        <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
          <Box sx={{display: "flex", alignItems: "center"}}>
            <EmailIcon sx={{ color: "white"}} /> 
            <Typography>Contact</Typography>
          </Box>
        </a>

      </Box>
      
    </Paper>
  );
}


export default App;
