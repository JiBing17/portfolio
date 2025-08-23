import React, { useRef, useState, useEffect } from 'react'; 
import { Box, Typography } from '@mui/material';

const Skills = () => {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // array of objects used for iteration purposes to display my set of skills with their corresponding info
  const skills = [
    { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
    { name: 'C++', icon: 'devicon-cplusplus-plain', color: '#00599C' },
    { name: 'Java', icon: 'devicon-java-plain', color: '#007396' },
    { name: 'HTML', icon: 'devicon-html5-plain', color: '#E44D26' },
    { name: 'CSS', icon: 'devicon-css3-plain', color: '#1572B6' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
    { name: 'React', icon: 'devicon-react-original', color: '#61DAFB' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#339933' },
    { name: 'Express.js', icon: 'devicon-express-original', color: '#000000' },
    { name: 'Flask', icon: 'devicon-flask-original', color: '#000000' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', color: '#38B2AC' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', color: '#7952B3' },
    { name: 'Material-UI', icon: 'devicon-materialui-plain', color: '#007FFF' },
    { name: 'Git', icon: 'devicon-git-plain', color: '#F05032' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791' },
    { name: 'SQLite', icon: 'devicon-sqlite-plain', color: '#003B57' },
    { name: 'Linux', icon: 'devicon-linux-plain', color: '#FCC624' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
        c: 85,
        sql: 80,
        java: 85,
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

  // Helper function used to render a row label + percentage + bar
  const renderBarRow = (label, value) => (
    <Box sx={{ marginBottom: '1.5rem' }}>
      {/* Row with text label (left) and percentage (right) */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', color: '#1a3d47' }}>
          {label}
        </Typography>
        <Typography sx={{ fontWeight: 'bold', color: '#1a3d47' }}>
          {value}%
        </Typography>
      </Box>

      {/* Progress bar */}
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
            width: `${value}%`,
            backgroundColor: '#f76e65',
            transition: 'width 1.3s ease-in-out',
          }}
        />
      </Box>
    </Box>
  );

  return (
    <Box
      id="skills"
      ref={skillsRef}
      sx={{
        px: { xs: '1rem', sm: '2rem', md: '4rem' }, // Responsive horizontal padding
        py: { xs: '2rem', md: '4rem' },             // Responsive vertical padding
        backgroundColor: '#ffffff',
        // Fade-in animation
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
          position: 'relative',
          width: 'fit-content',
          margin: '.5rem auto',
          color: '#1a3d47',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '100%',
            height: '2px',
            background: `linear-gradient(
              to right,
              #cccccc 20%,
              #f76e65 20%,
              #f76e65 40%,
              #cccccc 40%
            )`,
          },
        }}
      >
        Skills
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1a3d47',
          fontSize: { xs: '1rem', md: '1.1rem' },
        }}
      >
        Programming Languages and Developer Tools
      </Typography>

      {/* Progress Bars Section */}
      <Box
        sx={{
          display: 'flex',
          // On smaller devices, stack columns vertically
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: '3rem',
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            width: { xs: '90%', md: '40%' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {renderBarRow('Python', barValues.python)}
          {renderBarRow('C / C++', barValues.c)}
          {renderBarRow('SQL', barValues.sql)}
        </Box>

        {/* Right Column */}
        <Box
          sx={{
            width: { xs: '90%', md: '40%' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {renderBarRow('Java', barValues.java)}
          {renderBarRow('JavaScript / TypeScript', barValues.javascript)}
          {renderBarRow('HTML/CSS', barValues.htmlcss)}
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
          <Box key={tech.name} sx={{ textAlign: 'center' }}>
            <i
              className={tech.icon}
              style={{
                fontSize: '40px',
                color: tech.color,
              }}
            />
            <Typography
              sx={{
                fontSize: '.8rem',
                fontWeight: 'bold',
                color: '#1a3d47',
                mt: '0.25rem',
              }}
            >
              {tech.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
