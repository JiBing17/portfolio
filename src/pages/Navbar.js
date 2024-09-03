import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from '../icons/gitpic.jpeg';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ProjectIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import { Paper, Box, Typography } from '@mui/material';



const Navbar = () => {
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
          alignItems: "center", p: 4, gap: 1.5 
          }}>

          <img src={profilePic} alt="Profile Pic" className='rounded-full size-32 border-4 border-white'/>
          <Typography sx={{ color: "white", fontSize: "1.5rem"}}> Ji Bing Ni</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 1.5}}>
              <a href='https://leetcode.com/u/Ji_Bing/' target="_blank" rel="noreferrer">
                <CodeIcon sx={{ color: "white" , backgroundColor: "#A8A9B4", borderRadius: "50%", padding: 1, fontSize: "2rem", 
                // hover effect for background color change and size increase
                "&:hover":{
                  backgroundColor: "#ff00ff", // Change background color on hover
                  transform: "scale(1.1)"
                }  }}/>
              </a>
              <a href='https://github.com/JiBing17' target="_blank" rel="noreferrer">
                <GitHubIcon sx={{ color: "white", backgroundColor: "#A8A9B4", borderRadius: "50%", padding: 1, fontSize: "2rem",
                // hover effect for background color change and size increase
                "&:hover":{
                  backgroundColor: "#ff00ff", // Change background color on hover
                  transform: "scale(1.1)"
                }
                }} />
              </a>

              <a href='https://github.com/JiBing17' target="_blank" rel="noreferrer">
                <LinkedInIcon sx={{ color: "white", backgroundColor: "#A8A9B4", borderRadius: "50%", padding: 1, fontSize: "2rem",
                // hover effect for background color change and size increase
                "&:hover":{
                  backgroundColor: "#ff00ff", // Change background color on hover
                  transform: "scale(1.1)"
                }
                }} />
              </a>

              <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer">
                <DescriptionIcon sx={{ color: "white", backgroundColor: "#A8A9B4", borderRadius: "50%", padding: 1, fontSize: "2rem",
                // hover effect for background color change and size increase
                "&:hover":{
                  backgroundColor: "#ff00ff", 
                  transform: "scale(1.1)"
                }}} />
              </a>
            </Box>
        </Box>
        
        {/* page links*/}
        <Box sx={{display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "100%"}}>

          {/* Home*/}
          <a href='./' target="_blank" rel="noreferrer" style={{ width: '100%' }}>
            <Box 
              sx={{
                display: "flex", 
                alignItems: "center",
                width: "100%",
                justifyContent: "center", 

                // hover effect used for text color change, icon color change, and size change for both
                '&:hover': {
                  '& .home-icon': {
                    color: "#ff00ff", 
                    transform: "scale(1.1)", 
                  },
                  '& .home-text': {
                    color: "white", 
                    transform: "scale(1.1)", 
                  },
                },
              }}
            >
              <HomeIcon 
                className="home-icon"
                sx={{ 
                  color: "white", 
                  marginRight: ".5rem",
                  transition: "transform 0.3s ease, color 0.3s ease", 
                }} 
              />
              <Typography 
                className="home-text"
                sx={{ 
                  color: "#A8A9B4", 
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              >
                Home
              </Typography>

              
            </Box>
          </a>



          {/* About */}
          <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer" style={{ width: '100%' }}>
          
          <Box 
              sx={{
                display: "flex", 
                alignItems: "center",
                width: "100%",
                justifyContent: "center", 

                // hover effect used for text color change, icon color change, and size change for both
                '&:hover': {
                  '& .about-icon': {
                    color: "#ff00ff", 
                    transform: "scale(1.1)", 
                    transition: "transform 0.3s ease, color 0.3s ease", 

                  },
                  '& .about-text': {
                    color: "white", 
                    transform: "scale(1.1)", 
                    transition: "transform 0.3s ease, color 0.3s ease",

                  },
                },
              }}
            >
              <PersonIcon className="about-icon" sx={{ color: "white", marginRight: ".5rem"}} /> 
              <Typography className="about-text" sx={{ color: "#A8A9B4"}}> About</Typography>

            </Box>


              
          </a>
          {/* Resume */}
          <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer" style={{ width: '100%' }}>

          <Box 
              sx={{
                display: "flex", 
                alignItems: "center",
                width: "100%",
                justifyContent: "center", 

                // hover effect used for text color change, icon color change, and size change for both
                '&:hover': {
                  '& .resume-icon': {
                    color: "#ff00ff", 
                    transform: "scale(1.1)", 
                    transition: "transform 0.3s ease, color 0.3s ease",

                  },
                  '& .resume-text': {
                    color: "white", 
                    transform: "scale(1.1)", 
                    transition: "transform 0.3s ease, color 0.3s ease", 

                  },
                },
              }}
            >
              <DescriptionIcon className="resume-icon" sx={{ color: "white", marginRight: ".5rem"}} /> 
              <Typography className="resume-text" sx={{ color: "#A8A9B4",}}>Resume</Typography>
            </Box>
          </a>

          {/* Projects */}
          <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer" style={{ width: '100%' }}>

          <Box 
              sx={{
                display: "flex", 
                alignItems: "center",
                width: "100%",
                justifyContent: "center", 

                // hover effect used for text color change, icon color change, and size change for both
                '&:hover': {
                  '& .projects-icon': {
                    color: "#ff00ff", 
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease, color 0.3s ease",

                  },
                  '& .projects-text': {
                    color: "white", 
                    transform: "scale(1.1)", 
                    transition: "transform 0.3s ease, color 0.3s ease", 

                  },
                },
              }}
            >
              <ProjectIcon className="projects-icon" sx={{ color: "white", marginRight: ".5rem"}} /> 
              <Typography className="projects-text" sx={{ color: "#A8A9B4"}}>Projects</Typography>
            </Box>              
          </a>



          {/* Services */}
          <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer" style={{ width: '100%' }}>

          <Box 
              sx={{
                display: "flex", 
                alignItems: "center",
                width: "100%",
                justifyContent: "center", 

                // hover effect used for text color change, icon color change, and size change for both
                '&:hover': {
                  '& .services-icon': {
                    color: "#ff00ff", 
                    transform: "scale(1.1)", 
                    transition: "transform 0.3s ease, color 0.3s ease", 

                  },
                  '& .services-text': {
                    color: "white", 
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease, color 0.3s ease", 

                  },
                },
              }}
            >
              <SettingsIcon className="services-icon" sx={{ color: "white", marginRight: ".5rem"}} /> 
              <Typography className="services-text" sx={{ color: "#A8A9B4"}}>Services</Typography>
            </Box>
          </a>
          {/* Contact */}
          <a href='https://www.linkedin.com/in/jibing-ni/' target="_blank" rel="noreferrer" style={{ width: '100%' }}>

          <Box 
              sx={{
                display: "flex", 
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                
                // hover effect used for text color change, icon color change, and size change for both
                '&:hover': {
                  '& .contact-icon': {
                    color: "#ff00ff", 
                    transform: "scale(1.1)", 
                    transition: "transform 0.3s ease, color 0.3s ease", 

                  },
                  '& .contact-text': {
                    color: "white", 
                    transform: "scale(1.1)", 
                    transition: "transform 0.3s ease, color 0.3s ease",

                  },
                },
              }}
            >
              <EmailIcon className="contact-icon" sx={{ color: "white", marginRight: ".5rem"}} /> 
              <Typography className="contact-text" sx={{ color: "#A8A9B4"}}>Contact</Typography>
            </Box>
              
          </a>
        </Box>
      </Paper>
    </>
  );
};

export default Navbar
