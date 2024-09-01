import './App.css';
import './index.css';

import { Paper, Box, Typography, Button} from '@mui/material';
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
import bgPic from './icons/bg.webp'
function App() {
  return (
    <>

    {/* Navbar */}
      <Paper
        sx={{
          width: '18%',
          height: '100vh',
          padding: 2,
          backgroundColor: '#212529',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'fixed', 
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        {/* PFP pic, name, anchor icons*/}
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
        
        {/* page links*/}
        <Box sx={{display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "100%"}}>

          {/* Home*/}
          <a href='./' target="_blank" rel="noreferrer">
            <Box sx={{display: "flex", alignItems: "center"}}>
              <HomeIcon sx={{ color: "white"}} />
              <Typography sx={{ color: "#A8A9B4"}}>Home</Typography>
            </Box>
          </a>
          {/* About */}
          <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
            <Box sx={{display: "flex", alignItems: "center"}}>
              <PersonIcon sx={{ color: "white"}} /> 
              <Typography sx={{ color: "#A8A9B4"}}> About</Typography>
            </Box>
          </a>
          {/* Resume */}
          <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
            <Box sx={{display: "flex", alignItems: "center"}}>
              <DescriptionIcon sx={{ color: "white"}} /> 
              <Typography sx={{ color: "#A8A9B4"}}>Resume</Typography>
            </Box>
          </a>
          {/* Projects */}
          <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
            <Box sx={{display: "flex", alignItems: "center"}}>
              <ProjectIcon sx={{ color: "white"}} /> 
              <Typography sx={{ color: "#A8A9B4"}}>Projects</Typography>
            </Box>
          </a>
          {/* Services */}
          <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
            <Box sx={{display: "flex", alignItems: "center"}}>
              <SettingsIcon sx={{ color: "white"}} /> 
              <Typography sx={{ color: "#A8A9B4"}}>Services</Typography>
            </Box>
          </a>
          {/* Contact */}
          <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
            <Box sx={{display: "flex", alignItems: "center"}}>
              <EmailIcon sx={{ color: "white"}} /> 
              <Typography sx={{ color: "#A8A9B4"}}>Contact</Typography>
            </Box>
          </a>
        </Box>
      </Paper>
      
      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: '18%', // Adjust for the width of the fixed navbar
        }}
      >

        {/* Intro Section */}
        <Box
          sx={{
            position: "relative",
            height: '100vh',
            backgroundImage: `url(${bgPic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "space-around", justifyContent: "center",position: 'absolute',
            top: '30%',left: '0', padding: "1rem"}}>
            <Typography sx={{ color: "white", fontSize: "5rem", fontWeight: "bold"}}>
              Ji Bing Ni
            </Typography>
            <Typography sx={{ color: "white", fontSize: "2rem"}}>
              I am a Learner
            </Typography>
            <Button variant="outlined" sx={{ color: "white", fontSize: "2rem", color: "white", borderColor: "white"}}>View My Projects</Button>
          </Box> 
        </Box>


      </Box>
    </>
    
    

  );
}


export default App;
