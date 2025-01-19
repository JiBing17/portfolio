import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import bgPic from '../icons/hero_background.png';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <>
      {/* Hero Background Image */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          backgroundImage: `url(${bgPic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Container for nav links and hero text */}
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            top: '30%',
            left: '2%',
            padding: '1rem',
            alignItems: 'center',
            justifyContent: 'start',
            width: '100%',
          }}
        >
          {/* Navigation Links */}
          <Box
            sx={{
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

          {/* Hero Text */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }}>
            <Typography sx={{ color: 'white', fontSize: '5rem', fontWeight: 'bold' }}>Ji Bing Ni</Typography>
            <Typography sx={{ color: 'white', fontSize: '2rem', marginTop: '-1rem' }}>
              I'm a {' '}
              <TypeAnimation
                sequence={['CS major @ Purdue ', 1000, 'Learner', 1000, 'Developer', 1000, 'Designer', 1000]}
                speed={{ type: 'keyStrokeDelayInMs', value: 100 }} // Adjust the typing speed here
                style={{ display: 'inline-block', color: "#f7cac9"}}
                repeat={Infinity}
              />
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="https://github.com/JiBing17" underline="hover">
                <i className="fab fa-github text-white text-2xl"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/jibing-ni/" underline="hover">
                <i className="fab fa-linkedin text-white text-2xl"></i>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;

