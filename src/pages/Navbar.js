import React from 'react';
import { Box, Link } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '30%',
        left: '1%',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '.5rem',
      }}
    >
      <Link
        underline="hover"
        sx={{
          backgroundColor: '#eeeeee',
          borderRadius: '50%',
          padding: '.5rem',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('home')}
      >
        <HomeIcon sx={{ fontSize: '2rem', color: 'black' }} />
      </Link>
      <Link
        underline="hover"
        sx={{
          backgroundColor: '#eeeeee',
          borderRadius: '50%',
          padding: '.5rem',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('about')}
      >
        <PersonIcon sx={{ fontSize: '2rem', color: 'black' }} />
      </Link>
      <Link
        underline="hover"
        sx={{
          backgroundColor: '#eeeeee',
          borderRadius: '50%',
          padding: '.5rem',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('skills')}
      >
        <EditIcon sx={{ fontSize: '2rem', color: 'black' }} />
      </Link>
      <Link
        underline="hover"
        sx={{
          backgroundColor: '#eeeeee',
          borderRadius: '50%',
          padding: '.5rem',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('projects')}
      >
        <WorkIcon sx={{ fontSize: '2rem', color: 'black' }} />
      </Link>
      <Link
        underline="hover"
        sx={{
          backgroundColor: '#eeeeee',
          borderRadius: '50%',
          padding: '.5rem',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('resume')}
      >
        <DescriptionIcon sx={{ fontSize: '2rem', color: 'black' }} />
      </Link>
    </Box>
  );
};

export default Navbar;
