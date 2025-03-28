import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import { keyframes } from '@mui/system';
import { TypeAnimation } from 'react-type-animation';
import bgPic from '../icons/hero.png';

// Define keyframes for sliding in from the left
const slideInLeft = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Define keyframes for sliding in from the right
const slideInRight = keyframes`
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Hero = () => {
  return (

    // hero image 
    <Box
      id="home"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh', // covers user's full view
        overflowX: 'hidden',
        backgroundImage: `url(${bgPic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay shadowing */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
          zIndex: 1,
        }}
      />

      {/* Container for Hero Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          top: '30%',
          left: { xs: '5%', md: '12%' },
          p: '2rem',
          width: '100%',
          display: 'flex',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: { xs: 'center', md: 'flex-start' },
          flexDirection: 'column',
        }}
      >
        {/* Hero Text */}
        <Typography
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '3rem', md: '5rem' },
            lineHeight: { xs: '2.5rem', sm: '3.5rem', md: '5.5rem' },
            opacity: 0, // start hidden
            animation: `${slideInLeft} 1s ease-out forwards`,
            animationDelay: '0.5s', // first element: slides in from left
          }}
        >
          Ji Bing Ni
        </Typography>

        {/* Dynamic typing text with TypeAnimation */}
        <Typography
          sx={{
            color: 'white',
            fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
            mt: { xs: '0.5rem', md: '1rem' },
            opacity: 0, // start hidden
            animation: `${slideInRight} 1s ease-out forwards`,
            animationDelay: '1s', // second element: slides in from right
          }}
        >
          I&apos;m a{' '}
          <TypeAnimation
            sequence={[
              'CS major @ Purdue ',
              1000,
              'Developer',
              1000,
              'Learner',
              1000,
              'Designer',
              1000,
              'Innovator',
              1000,
            ]}
            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
            style={{ display: 'inline-block', color: '#f76e65' }}
            repeat={Infinity}
          />
        </Typography>

        {/* Social Icons */}
        <Stack
          direction="row"
          spacing={3}
          sx={{
            mt: { xs: '1rem', md: '2rem' },
            justifyContent: { xs: 'center', md: 'flex-start' },
            opacity: 0, // start hidden
            animation: `${slideInLeft} 1s ease-out forwards`,
            animationDelay: '1.5s', // third element: slides in from left
          }}
        >
          <Link
            href="https://github.com/JiBing17"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              fontSize: { xs: '1.5rem', md: '2rem' },
              '&:hover': { color: '#f76e65' },
            }}
          >
            <i className="fab fa-github" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jibing-ni/"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              fontSize: { xs: '1.5rem', md: '2rem' },
              '&:hover': { color: '#f76e65' },
            }}
          >
            <i className="fab fa-linkedin" />
          </Link>
          <Link
            href="https://www.instagram.com/calmly4u/"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              fontSize: { xs: '1.5rem', md: '2rem' },
              '&:hover': { color: '#f76e65' },
            }}
          >
            <i className="fab fa-instagram" />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
