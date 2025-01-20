import React, { useEffect, useState } from 'react';
import { Box, Link, Typography } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to set the active section initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getButtonStyle = (id) => ({
    backgroundColor: activeSection === id ? '#ff9800' : '#eeeeee', // Highlight active button
    borderRadius: '50px',
    padding: '.5rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    transition: 'all 0.3s ease-in-out',
    width: hoveredButton === id ? '120px' : '50px', // Expand width only on hover
    height: '50px', // Consistent height
    overflow: 'hidden', // Hide overflowing content
    whiteSpace: 'nowrap',
  });

  const getIconStyle = (id) => ({
    fontSize: '2rem',
    color: activeSection === id ? 'white' : 'black',
    transition: 'color 0.3s ease-in-out',
    marginRight: hoveredButton === id ? '10px' : '0', // Add spacing for the text only when hovered
  });

  const getTextStyle = (id) => ({
    opacity: hoveredButton === id ? 1 : 0, // Show text only when hovered
    transition: 'opacity 0.3s ease-in-out',
    color: 'black',
  });

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '30%',
        left: '1%',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '.5rem',
      }}
    >
      <Link
        underline="none"
        sx={getButtonStyle('home')}
        onClick={() => scrollToSection('home')}
        onMouseEnter={() => setHoveredButton('home')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <HomeIcon sx={getIconStyle('home')} />
        <Typography sx={getTextStyle('home')}>Home</Typography>
      </Link>
      <Link
        underline="none"
        sx={getButtonStyle('about')}
        onClick={() => scrollToSection('about')}
        onMouseEnter={() => setHoveredButton('about')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <PersonIcon sx={getIconStyle('about')} />
        <Typography sx={getTextStyle('about')}>About</Typography>
      </Link>
      <Link
        underline="none"
        sx={getButtonStyle('skills')}
        onClick={() => scrollToSection('skills')}
        onMouseEnter={() => setHoveredButton('skills')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <EditIcon sx={getIconStyle('skills')} />
        <Typography sx={getTextStyle('skills')}>Skills</Typography>
      </Link>
      <Link
        underline="none"
        sx={getButtonStyle('projects')}
        onClick={() => scrollToSection('projects')}
        onMouseEnter={() => setHoveredButton('projects')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <WorkIcon sx={getIconStyle('projects')} />
        <Typography sx={getTextStyle('projects')}>Projects</Typography>
      </Link>
      <Link
        underline="none"
        sx={getButtonStyle('resume')}
        onClick={() => scrollToSection('resume')}
        onMouseEnter={() => setHoveredButton('resume')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <DescriptionIcon sx={getIconStyle('resume')} />
        <Typography sx={getTextStyle('resume')}>Resume</Typography>
      </Link>
    </Box>
  );
};

export default Navbar;
