import './App.css';
import './index.css';

import { Paper, Box, Typography, Button, } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from './icons/gitpic.jpeg';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ProjectIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import bgPic from './icons/bg.webp'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';

import { SiC, SiCplusplus } from 'react-icons/si'; // Import from the 'si' (Simple Icons) set

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

        {/* About Section */}

        <Box sx={{padding: "1rem"}}>
          <Typography sx={{fontSize: "2rem",  borderBottom: '3px solid #ff00ff', display: "inline", paddingBottom: ".2rem",  fontWeight:"bold"}}> About</Typography>

          {/* Description */}
          <Typography sx={{marginTop: "1rem"}}>
            Here is a bit more about me! I'm a junior studying Computer Science at Purdue University. 
            Passionate about working/learning with others to expand current knowledge base as well as solidify a strong foundation in CS. 
            Driven by the desire to apply what I learn to real-world situations, turning theory into practice.
          </Typography>

            
          {/* Title followed by personal and academic stats */}
          <Box sx={{display:"flex", flexDirection: "column", alignItems:"center", justifyContent: "space-around", padding:"1rem"}}>
            
            <Typography sx={{fontSize: "1.3rem", fontWeight:"bold"}}>Software and Systems Engineer</Typography>
            <Box sx={{ display:"flex", alignItems:"center", justifyContent: "center"}}>
              <Box sx={{display:"flex", flexDirection: "column", alignItems:"center", justifyContent: "space-around", padding:"1rem"}}>
                <Typography sx={{}}> <ChevronRightIcon sx={{color:"#ff00ff"}}/>Email: jibingni17@gmail.com</Typography>
                <Typography sx={{}}> <ChevronRightIcon sx={{color:"#ff00ff"}}/>City: Indianapolis, Indiana</Typography>
                <Typography sx={{}}> <ChevronRightIcon sx={{color:"#ff00ff"}}/>Freelance: Available</Typography>
              </Box>
              <Box sx={{display:"flex", flexDirection: "column", alignItems:"center", justifyContent: "space-around", padding:"1rem"}}>
                <Typography sx={{}}> <ChevronRightIcon sx={{color:"#ff00ff"}}/>University: Purdue</Typography>
                <Typography sx={{}}> <ChevronRightIcon sx={{color:"#ff00ff"}}/>Major: Computer Science</Typography>
                <Typography sx={{}}> <ChevronRightIcon sx={{color:"#ff00ff"}}/>Degree: Bachelors</Typography>
              </Box>
            </Box>

          </Box>

          <Typography sx={{fontSize: "2rem",  borderBottom: '3px solid #ff00ff', display: "inline", paddingBottom: ".2rem",  fontWeight:"bold"}}> Skills</Typography>
          <Typography sx={{marginTop: "1rem"}}>
            Throughout my career, I have gained significant experience and skills in various areas of this field.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-around", gap: 4, padding: "1rem"}}>
            
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
              <Typography sx={{ fontSize: "2rem", marginBottom: 1 }}>Languages</Typography>

              <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
                Python 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
                    alt="Python" 
                    style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
              </Typography>

              <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
                C
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" 
                    alt="C" 
                    style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
              </Typography>

              <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
                C++
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" 
                    alt="C++" 
                    style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
              </Typography>

              <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
                Java 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" 
                    alt="Java" 
                    style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
              </Typography>

              <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
                Javascript
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                    alt="Javascript" 
                    style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
              </Typography>
            </Box>

            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
              <Typography sx={{ fontSize: "2rem", marginBottom: 1 }}>Frameworks</Typography>

              <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
                React
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
                    alt="React" 
                    style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
              </Typography>

              <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
                Flask
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" 
                    alt="Flask" 
                    style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
              </Typography>
            </Box>

            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
              <Typography sx={{ fontSize: "2rem", marginBottom: 1 }}>Databases</Typography>

              <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
                MongoDB
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
                    alt="MongoDB" 
                    style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
              </Typography>
            </Box>

            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
              <Typography sx={{ fontSize: "2rem", marginBottom: 1 }}>Libraries</Typography>

              <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
                Material UI
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" 
                    alt="Material UI" 
                    style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
              </Typography>

              <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
                Tailwind CSS 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt="Tailwind CSS" 
                    style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
              </Typography>

              <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
                Bootstrap
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" 
                    alt="Bootstrap" 
                    style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
              </Typography>


            </Box>
</Box>

          
          

  
      
    
        </Box>

      </Box>
    </>
    
    

  );
}


export default App;
