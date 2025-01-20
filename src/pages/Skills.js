import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const Skills = () => {
  return (
    <>
      <Box sx={{ padding: '2rem', backgroundColor: "#f5f5f5"}}>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            borderBottom: '2px solid #ff00ff',
            width: '10%',
            margin: '.5rem auto',
          }}
        >
          Skills
        </Typography>
        <Typography sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          Programming Languages and Developer Tools
        </Typography>

        {/* Progress Bars Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              gap: '3rem',
            }}
          >
            {/* Left Column */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
              <Box sx={{ width: '100%' }}>
                <Typography sx={{ marginBottom: '0.5rem' }}>Python</Typography>
                <LinearProgress variant="determinate" value={90} sx={{ height: '10px', borderRadius: '5px', marginBottom: '1rem' }} />

                <Typography sx={{ marginBottom: '0.5rem' }}>C/C++</Typography>
                <LinearProgress variant="determinate" value={80} sx={{ height: '10px', borderRadius: '5px', marginBottom: '1rem' }} />

                <Typography sx={{ marginBottom: '0.5rem' }}>SQL</Typography>
                <LinearProgress variant="determinate" value={75} sx={{ height: '10px', borderRadius: '5px', marginBottom: '1rem' }} />
              </Box>
            </Box>

            {/* Right Column */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
              <Box sx={{ width: '100%' }}>
                <Typography sx={{ marginBottom: '0.5rem' }}>Java</Typography>
                <LinearProgress variant="determinate" value={80} sx={{ height: '10px', borderRadius: '5px', marginBottom: '1rem' }} />

                <Typography sx={{ marginBottom: '0.5rem' }}>JavaScript</Typography>
                <LinearProgress variant="determinate" value={90} sx={{ height: '10px', borderRadius: '5px', marginBottom: '1rem' }} />

                <Typography sx={{ marginBottom: '0.5rem' }}>HTML/CSS</Typography>
                <LinearProgress variant="determinate" value={95} sx={{ height: '10px', borderRadius: '5px', marginBottom: '1rem' }} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Icons Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            margin: "2rem auto 0 auto",
            width: "50%"
            
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-python-plain" style={{ fontSize: '40px', color: '#3776AB' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>Python</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-cplusplus-plain" style={{ fontSize: '40px', color: '#00599C' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>C++</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-java-plain" style={{ fontSize: '40px', color: '#007396' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>Java</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-html5-plain" style={{ fontSize: '40px', color: '#E44D26' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>HTML</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-css3-plain" style={{ fontSize: '40px', color: '#1572B6' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>CSS</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-javascript-plain" style={{ fontSize: '40px', color: '#F7DF1E' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>JavaScript</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-react-original" style={{ fontSize: '40px', color: '#61DAFB' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>React</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-nodejs-plain" style={{ fontSize: '40px', color: '#339933' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>Node.js</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-express-original" style={{ fontSize: '40px', color: '#000000' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>Express.js</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-flask-original" style={{ fontSize: '40px', color: '#000000' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>Flask</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-tailwindcss-plain" style={{ fontSize: '40px', color: '#38B2AC' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>Tailwind CSS</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-materialui-plain" style={{ fontSize: '40px', color: '#007FFF' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>Material-UI</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-git-plain" style={{ fontSize: '40px', color: '#F05032' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>Git</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-mongodb-plain" style={{ fontSize: '40px', color: '#47A248' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>MongoDB</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-sqlite-plain" style={{ fontSize: '40px', color: '#003B57' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>SQLite</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <i className="devicon-linux-plain" style={{ fontSize: '40px', color: '#FCC624' }}></i>
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold"}}>Linux</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
