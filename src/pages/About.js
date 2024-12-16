import React from 'react';
import { Box, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const About = () => {
  return (
    <>
        {/* About Section */}

        <Box sx={{padding: "1rem"}}>
        <Typography sx={{fontSize: "2rem",  borderBottom: '3px solid #ff00ff', display: "inline", paddingBottom: ".2rem",  fontWeight:"bold"}}> About</Typography>

        {/* Description */}
        <Typography sx={{marginTop: "1rem"}}>
        Here is a bit more about me!
        </Typography>

        
        {/* Title followed by personal and academic stats */}
        <Box sx={{display:"flex", flexDirection: "column", alignItems:"center", justifyContent: "space-around", padding:"1rem"}}>
        
        <Typography sx={{fontSize: "1.3rem", fontWeight:"bold"}}>Software Engineer</Typography>
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


        {/* About Section */}
        <Typography sx={{fontSize: "2rem",  borderBottom: '3px solid #ff00ff', display: "inline", paddingBottom: ".2rem",  fontWeight:"bold"}}> Skills</Typography>
        <Typography sx={{marginTop: "1rem"}}>
        Throughout my career, I have gained significant experience and skills in various areas of this field.
        </Typography>
        

        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-around", gap: 4, padding: "1rem"}}> 

        {/* Languages */}
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


        {/* Frameworks */}
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
        
        {/* Databases */}
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
            <Typography sx={{ fontSize: "2rem", marginBottom: 1 }}>Databases</Typography>

            <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
            MongoDB
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
                alt="MongoDB" 
                style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
            </Typography>
        </Box>

        {/* Libraries */}
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
            <Typography sx={{ fontSize: "2rem", marginBottom: 1 }}>Libraries</Typography>

            <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1 }}>
            Material UI
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" 
                alt="Material UI" 
                style={{ width: "24px", height: "24px", marginLeft: "0.5rem" }} />
            </Typography>

            <Typography sx={{ display: "inline-flex", alignItems: "center", marginBottom: 1}}>
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
    </>
  );
};

export default About
