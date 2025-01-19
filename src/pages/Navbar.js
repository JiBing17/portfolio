import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';


const Navbar = () => {
  return (
    <>
        {/* Navigation Links */}
        <Box
            sx={{
              position: "absolute",
              top: '30%',
              left: '1%',
              zIndex: "100",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '9rem',
              gap: '.5rem',
            }}
          >
            <Link href="/home" underline="hover" sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '.5rem' }}>
              <HomeIcon sx={{ fontSize: '2rem', color: 'black' }} />
            </Link>
            <Link href="/about" underline="hover" sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '.5rem' }}>
              <PersonIcon sx={{ fontSize: '2rem', color: 'black' }} />
            </Link>
            <Link href="/skills" underline="hover" sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '.5rem' }}>
              <EditIcon sx={{ fontSize: '2rem', color: 'black' }} />
            </Link>
            <Link href="/projects" underline="hover" sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '.5rem' }}>
              <WorkIcon sx={{ fontSize: '2rem', color: 'black' }} />
            </Link>
            <Link href="/resume" underline="hover" sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '.5rem' }}>
              <DescriptionIcon sx={{ fontSize: '2rem', color: 'black' }} />
            </Link>
          </Box>
    </>
  );
};

export default Navbar
