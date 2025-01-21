import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const Skills = () => {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const skills = [
    { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
    { name: 'C++', icon: 'devicon-cplusplus-plain', color: '#00599C' },
    { name: 'Java', icon: 'devicon-java-plain', color: '#007396' },
    { name: 'HTML', icon: 'devicon-html5-plain', color: '#E44D26' },
    { name: 'CSS', icon: 'devicon-css3-plain', color: '#1572B6' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E' },
    { name: 'React', icon: 'devicon-react-original', color: '#61DAFB' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#339933' },
    { name: 'Express.js', icon: 'devicon-express-original', color: '#000000' },
    { name: 'Flask', icon: 'devicon-flask-original', color: '#000000' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', color: '#38B2AC' },
    { name: 'Material-UI', icon: 'devicon-materialui-plain', color: '#007FFF' },
    { name: 'Git', icon: 'devicon-git-plain', color: '#F05032' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248' },
    { name: 'SQLite', icon: 'devicon-sqlite-plain', color: '#003B57' },
    { name: 'Linux', icon: 'devicon-linux-plain', color: '#FCC624' },
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Bar values for each skill
  const barValues = visible
    ? {
        python: 90,
        c: 80,
        sql: 75,
        java: 80,
        javascript: 90,
        htmlcss: 95,
      }
    : {
        python: 0,
        c: 0,
        sql: 0,
        java: 0,
        javascript: 0,
        htmlcss: 0,
      };

  return (
    <Box
      id="skills"
      ref={skillsRef}
      sx={{
        padding: '2rem',
        backgroundColor: '#ffffff',
        // Apply fade-in animation
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1.5s ease-out, transform 1s ease-out',
      }}
    >
      <Typography
  sx={{
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    position: 'relative', // Allows positioning of the pseudo-element
    width: '10%',
    margin: '.5rem auto',
    color: '#1a3d47',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-2px', // Aligns with the text's bottom
      left: 0,
      width: '100%',
      height: '2px', // Thickness of the border
      background: `linear-gradient(
        to right,
        #cccccc 20%,     /* Gray before 20% */
        #f76e65 20%,     /* Start coral color at 20% */
        #f76e65 40%,     /* End coral color at 40% */
        #cccccc 40%      /* Gray after 40% */
      )`, // Gradient starts coral at 20%, ends at 40%
    },
  }}
>
  Skills
</Typography>
      <Typography sx={{ textAlign: 'center', marginBottom: '1rem', color: "#1a3d47" }}>
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
              <Typography sx={{ marginBottom: '0.5rem', color: "#1a3d47", fontWeight: "bold" }}>Python</Typography>
              <Box
                sx={{
                  position: 'relative',
                  height: '10px',
                  width: '100%',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '5px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: `${barValues.python}%`,
                    backgroundColor: '#f76e65',
                    transition: 'width 1.3s ease-in-out',
                  }}
                ></Box>
              </Box>

              <Typography sx={{ marginBottom: '0.5rem', color: "#1a3d47", fontWeight: "bold" }}>C/C++</Typography>
              <Box
                sx={{
                  position: 'relative',
                  height: '10px',
                  width: '100%',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '5px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: `${barValues.c}%`,
                    backgroundColor: '#f76e65',
                    transition: 'width 1.3s ease-in-out',
                  }}
                ></Box>
              </Box>

              <Typography sx={{ marginBottom: '0.5rem', color: "#1a3d47", fontWeight: "bold" }}>SQL</Typography>
              <Box
                sx={{
                  position: 'relative',
                  height: '10px',
                  width: '100%',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '5px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: `${barValues.sql}%`,
                    backgroundColor: '#f76e65',
                    transition: 'width 1.3s ease-in-out',
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>

          {/* Right Column */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
            <Box sx={{ width: '100%' }}>
              <Typography sx={{ marginBottom: '0.5rem', color: "#1a3d47", fontWeight: "bold" }}>Java</Typography>
              <Box
                sx={{
                  position: 'relative',
                  height: '10px',
                  width: '100%',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '5px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: `${barValues.java}%`,
                    backgroundColor: '#f76e65',
                    transition: 'width 1.3s ease-in-out',
                  }}
                ></Box>
              </Box>

              <Typography sx={{ marginBottom: '0.5rem', color: "#1a3d47", fontWeight: "bold"}}>JavaScript</Typography>
              <Box
                sx={{
                  position: 'relative',
                  height: '10px',
                  width: '100%',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '5px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: `${barValues.javascript}%`,
                    backgroundColor: '#f76e65',
                    transition: 'width 1.3s ease-in-out',
                  }}
                ></Box>
              </Box>

              <Typography sx={{ marginBottom: '0.5rem', color: "#1a3d47", fontWeight: "bold"}}>HTML/CSS</Typography>
              <Box
                sx={{
                  position: 'relative',
                  height: '10px',
                  width: '100%',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '5px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: `${barValues.htmlcss}%`,
                    backgroundColor: '#f76e65',
                    transition: 'width 1.3s ease-in-out',
                  }}
                ></Box>
              </Box>
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
          gap: '1.5rem',
          margin: '2rem auto 0 auto',
          width: '100%',
        }}
      >
        {skills.map((tech) => (
          <Box key={tech.name} sx={{ textAlign: 'center'}}>
            <i className={tech.icon} style={{ fontSize: '40px', color: tech.color }}></i>
            <Typography sx={{ fontSize: '.8rem', fontWeight: 'bold', color: "#1a3d47" }}>{tech.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
