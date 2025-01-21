import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import bgPic from '../icons/hero_background.png';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflowX: 'hidden',
        backgroundImage: `url(${bgPic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3))`, // Semi-transparent gradient overlay
          zIndex: 1, // Ensures the overlay is above the background image
        }}
      ></Box>

      {/* Container for nav links and hero text */}
      <Box
        sx={{
          position: 'relative', // Ensure this is above the overlay
          zIndex: 2,
          display: 'flex',
          top: '30%',
          left: '10%',
          padding: '1rem',
          alignItems: 'center',
          justifyContent: 'start',
          width: '100%',
          '@keyframes popIn': {
            '0%': {
              transform: 'translate(60px, 40px) scale(0.4)',
              opacity: 0,
            },
            '100%': {
              transform: 'translate(0, 0) scale(1)',
              opacity: 1,
            },
          },
          animation: 'popIn 1s ease-out forwards',
        }}
      >
        {/* Hero Text */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: '5rem',
              fontWeight: 'bold',
            }}
          >
            Ji Bing Ni
          </Typography>

          <Typography sx={{ color: 'white', fontSize: '2rem' }}>
            I&apos;m a{' '}
            <TypeAnimation
              sequence={['CS major @ Purdue ', 1000, 'Developer', 1000, 'Learner', 1000, 'Designer', 1000, 'Innovator', 1000]}
              speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
              style={{ display: 'inline-block', color: '#f76e65' }}
              repeat={Infinity}
            />
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={2} sx={{ marginTop: '1rem' }}>
            <Link
              href="https://github.com/JiBing17"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-white text-2xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jibing-ni/"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-white text-2xl" />
            </Link>
            <Link
              href="https://www.instagram.com/calmly4u/"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-white text-2xl" />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
