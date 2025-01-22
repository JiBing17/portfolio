import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      sx={{
        // Responsive padding
        px: { xs: '1rem', md: '2rem' },
        py: { xs: '1rem', md: '2rem' },
        backgroundColor: '#1a3d47',
      }}
    >
      {/* Top Section */}
      <Typography
        sx={{
          textAlign: 'center',
          // Responsive font size
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Ji Bing Ni
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontStyle: 'italic',
          mb: { xs: '.5rem', md: '1rem' },
          color: 'white',
          // Slightly smaller text on mobile
          fontSize: { xs: '0.95rem', md: '1rem' },
        }}
      >
        Software Engineering @ Purdue CS
      </Typography>

      {/* Social Links */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '.5rem',
          mb: '.5rem',
        }}
      >
        <Link
          href="https://github.com/JiBing17"
          target="_blank"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#000',
            color: '#fff',
            textDecoration: 'none',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: '#444',
            },
          }}
        >
          <GitHubIcon fontSize="medium" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/jibing-ni/"
          target="_blank"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#0077b5',
            color: '#fff',
            textDecoration: 'none',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: '#005582',
            },
          }}
        >
          <LinkedInIcon fontSize="medium" />
        </Link>

        <Link
          href="https://www.instagram.com/calmly4u/"
          target="_blank"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#E1306C',
            color: '#fff',
            textDecoration: 'none',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: '#ad1852',
            },
          }}
        >
          <InstagramIcon fontSize="medium" />
        </Link>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          // Stack on mobile, row alignment on larger screens
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          mt: { xs: '1rem', md: '2rem' },
        }}
      >
        <Typography sx={{ color: 'white' }}>
          © <strong>Ji Bing 2025.</strong> All Rights Reserved.
        </Typography>
        <Typography
          sx={{
            // On smaller screens, place this below
            // On larger screens, align right
            mt: { xs: '0.5rem', md: 0 },
            ml: { xs: 0, md: 'auto' },
            position: { xs: 'static', md: 'absolute' },
            right: { md: '5%' },
            fontStyle: 'italic',
            color: 'white',
            fontSize: { xs: '0.85rem', md: '1rem' },
          }}
        >
          Last Updated: January 2025
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
