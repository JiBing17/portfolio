import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '1rem',
      }}
    >
      {/* Top Section */}
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          
          color: "rgb(69, 80, 91)"
        }}
      >
        Ji Bing Ni
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontStyle: 'italic',
          marginBottom: '.5rem',
          color: "rgb(69, 80, 91)"

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
          marginBottom: '.5rem',
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          mt: '1rem',
        }}
      >
        <Typography sx={{color: "rgb(69, 80, 91)"}}>
          © <strong>Ji Bing 2024.</strong> All Rights Reserved.
        </Typography>
        <Typography
          sx={{
            position: 'absolute',
            right: "5%",
            fontStyle: 'italic',
            color: "rgb(69, 80, 91)"
        }}
        >
          Last Updated: January 2025
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
