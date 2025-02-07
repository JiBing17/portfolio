import React, { useEffect, useState } from 'react';
import { Box, Link, Typography, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import { keyframes } from '@mui/system';

const Navbar = () => {

  // defined animation for nav btns slide down
  const slideDown = keyframes`
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  // states used to keep track of visuals (hovering, active section, sidebar, mobile, etc.)
  const [activeSection, setActiveSection] = useState('');
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {

    // logic used to select the correct section id based on position 
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

  // function used to scroll to correct section based on id
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsSidebarOpen(false); // Close the sidebar after navigating
  };

  // boolean switch function for side bar 
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // style for active button (uses id to select button)
  const getButtonStyle = (id) => ({
    backgroundColor: activeSection === id || hoveredButton === id ? '#f76e65' : '#eeeeee',
    borderRadius: '50px',
    padding: '.5rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    transition: 'all 0.3s ease-in-out',
    transform: hoveredButton === id ? 'scale(1.1)' : 'scale(1)',
    width: hoveredButton === id ? '120px' : '50px',
    height: '50px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  });

  // same as above but for icons
  const getIconStyle = (id) => ({
    fontSize: '2rem',
    color: activeSection === id || hoveredButton === id ? 'white' : 'black',
    transition: 'color 0.3s ease-in-out',
    marginRight: hoveredButton === id ? '10px' : '0',
  });

  // same as above but for text
  const getTextStyle = (id) => ({
    opacity: hoveredButton === id ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    color: 'white',
  });

  return (
    <>
      {/* Regular Navbar for Larger Screens */}
      {!isMobile && (
        <Box
          sx={{
            position: 'fixed',
            top: { xs: '20%', md: '30%' },
            left: { xs: '2%', md: '1%' },
            zIndex: '100',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '.5rem',
          }}
        >
          <Link
            underline="none"
            sx={{...getButtonStyle('home'), 
              opacity: 0,
              animation: `${slideDown} 0.8s ease-out forwards`,
              animationDelay: '1s',
            }}
            onClick={() => scrollToSection('home')}
            onMouseEnter={() => setHoveredButton('home')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <HomeIcon sx={getIconStyle('home')} />
            <Typography sx={getTextStyle('home')}>Home</Typography>
          </Link>
          <Link
            underline="none"
            sx={{
              ...getButtonStyle('about'),
              opacity: 0,
              animation: `${slideDown} 0.8s ease-out forwards`,
              animationDelay: '.8s',
            }}
            onClick={() => scrollToSection('about')}
            onMouseEnter={() => setHoveredButton('about')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <PersonIcon sx={getIconStyle('about')} />
            <Typography sx={getTextStyle('about')}>About</Typography>
          </Link>
          <Link
            underline="none"
            sx={{
              ...getButtonStyle('skills'), 
              opacity: 0,
              animation: `${slideDown} 0.8s ease-out forwards`,
              animationDelay: '0.6s',
            }}
            onClick={() => scrollToSection('skills')}
            onMouseEnter={() => setHoveredButton('skills')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <EditIcon sx={getIconStyle('skills')} />
            <Typography sx={getTextStyle('skills')}>Skills</Typography>
          </Link>
          <Link
            underline="none"
            sx={{
              ...getButtonStyle('projects'),
              opacity: 0,
              animation: `${slideDown} 0.8s ease-out forwards`,
              animationDelay: '0.4s',
            }}
            onClick={() => scrollToSection('projects')}
            onMouseEnter={() => setHoveredButton('projects')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <WorkIcon sx={getIconStyle('projects')} />
            <Typography sx={getTextStyle('projects')}>Projects</Typography>
          </Link>
          <Link
            underline="none"
            sx={{
              ...getButtonStyle('resume'),
              opacity: 0,
              animation: `${slideDown} 0.8s ease-out forwards`,
              animationDelay: '0.2s',
            }}
            onClick={() => scrollToSection('resume')}
            onMouseEnter={() => setHoveredButton('resume')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <DescriptionIcon sx={getIconStyle('resume')} />
            <Typography sx={getTextStyle('resume')}>Resume</Typography>
          </Link>
        </Box>
      )}

      {/* Hamburger Menu for Mobile */}
      {isMobile && (
        <>
          <IconButton
            onClick={toggleSidebar}
            sx={{
              position: 'fixed',
              top: '1rem',
              right: '1rem',
              zIndex: 1200,
              color: 'white',
              backgroundColor: "#666666"
            }}
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: isSidebarOpen ? 0 : '-100%',
              height: '100%',
              width: '75%',
              maxWidth: '200px',
              backgroundColor: '#f5f5f5',
              color: 'black',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
              padding: '1rem',
              transition: 'all 0.3s ease-in-out',
              zIndex: 1100,
            }}
          >
            <Link
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '.5rem 1rem',
                width: '100%',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f76e65',
                  color: 'white',
                },
              }}
              onClick={() => scrollToSection('home')}
            >
              <HomeIcon />
              <Typography>Home</Typography>
            </Link>
            <Link
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '.5rem 1rem',
                width: '100%',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f76e65',
                  color: 'white',
                },
              }}
              onClick={() => scrollToSection('about')}
            >
              <PersonIcon />
              <Typography>About</Typography>
            </Link>
            <Link
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '.5rem 1rem',
                width: '100%',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f76e65',
                  color: 'white',
                },
              }}
              onClick={() => scrollToSection('skills')}
            >
              <EditIcon />
              <Typography>Skills</Typography>
            </Link>
            <Link
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '.5rem 1rem',
                width: '100%',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f76e65',
                  color: 'white',
                },
              }}
              onClick={() => scrollToSection('projects')}
            >
              <WorkIcon />
              <Typography>Projects</Typography>
            </Link>
            <Link
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '.5rem 1rem',
                width: '100%',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f76e65',
                  color: 'white',
                },
              }}
              onClick={() => scrollToSection('resume')}
            >
              <DescriptionIcon />
              <Typography>Resume</Typography>
            </Link>
          </Box>
        </>
      )}
    </>
  );
};

export default Navbar;
