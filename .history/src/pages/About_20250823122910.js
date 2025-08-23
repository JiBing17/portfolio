import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import pfp from '../icons/IMG_7595.JPEG';

const About = () => {
  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the target element is in view 
          if (entry.isIntersecting) {
            setVisible(true); // Update the state to indicate the element is visible
            observer.unobserve(entry.target); // Stop observing the element 
          }
        });
      },
      {
        // 10% of the element must be in view to trigger the observer
        threshold: 0.1,
      }
    );
  
    // Check if the aboutRef is attached to a DOM element
    if (aboutRef.current) {
      observer.observe(aboutRef.current); // Start observing the element for intersection changes

    }
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current); // Stop observing the element when the component is unmounted

      }
    };
  }, []);
  

  return (
    <Box
      id="about"
      ref={aboutRef}
      sx={{
        // Responsive padding
        px: { xs: '1rem', sm: '2rem' },
        py: { xs: '2rem', sm: '4rem' },
        backgroundColor: '#1a3d47',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 1.4s ease-out, transform 2s ease-out',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          // Responsive font size
          fontSize: { xs: '2rem', sm: '2.5rem' },
          fontWeight: 'bold',
          position: 'relative',
          width: 'fit-content',
          margin: '0.5rem auto',
          color: 'white',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(to right, #f76e65 19%, #ffffff 25%)',
          },
        }}
      >
        About
      </Typography>

      <Box
        sx={{
          // responsive width
          width: { xs: '90%', md: '75%' },
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Intro Text */}
        <Typography
          sx={{
            textAlign: 'center',
            width: '100%',
            color: 'white',
            fontSize: {xs: '0.8rem', sm: '.9rem', md: '1rem'},
            margin: "1rem 0"
          }}
        >
          Hello! 👋 My name is Ji Bing! I’m currently a Senior at Purdue University, studying
          Computer Science 💻. My current interests lie in,{' '} 
          <strong className="text-coral">software engineering</strong>, 
          <strong className="text-coral"> databases</strong>,
          <strong className="text-coral"> web development</strong>, 
          and <strong className="text-coral">mobile app development</strong>.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '2rem',
            marginTop: '1rem',
          }}
        >
          {/* Image Section */}
          <CardMedia
            component="img"
            image={pfp}
            alt="Profile"
            sx={{
              width: { xs: '100%', md: '40%' },
              height: { xs: 'auto', md: '550px' },
              objectFit: 'cover',
              borderRadius: '15px',
            }}
          />

          {/* Text Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'flex-start', sm: 'center' },
                justifyContent: 'space-around',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1.3rem' },
                  fontWeight: 'bold',
                  color: 'white',
                  margin: "0 auto"
                }}
              >
                👨🏻‍💻 Software Engineer
              </Typography>
              <Typography sx={{ fontStyle: 'italic', color: 'white', fontSize: {xs: '0.9rem', sm: '1rem', md: '1.1rem'}, margin: "0 auto"}}>
                Focus: Software Engineering
              </Typography>

              {/* Left Container bullet points */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'flex-start', md: 'center' },
                  justifyContent: 'center',
                  gap: '1rem',
                  marginTop: { xs: '1rem', md: '2rem' },
                  width: "100%"

                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: "center",
                    width: "100%"
                  }}
                >
                  <Typography sx={{ color: 'white', fontSize: {xs: '0.8rem', sm: '.9rem', md: '1rem'}, margin: "0 auto" }}>
                    <ChevronRightIcon sx={{ color: '#f76e65' }} />
                    <strong>Email:</strong> jibingni17@gmail.com
                  </Typography>
                  <Typography sx={{ color: 'white', fontSize: {xs: '0.8rem', sm: '.9rem', md: '1rem'}, margin: "0 auto" }}>
                    <ChevronRightIcon sx={{ color: '#f76e65' }} />
                    <strong>Location:</strong> Indianapolis, IN
                  </Typography>
                </Box>

                {/* Right Container bullet points */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: "100%"

                  }}
                >
                  <Typography sx={{ color: 'white', fontSize: {xs: '0.8rem', sm: '.9rem', md: '1rem'}, margin: "0 auto" }}>
                  <ChevronRightIcon sx={{ color: '#f76e65' }} />
                    <strong>University:</strong> Purdue
                  </Typography>
                  <Typography sx={{ color: 'white', fontSize: {xs: '0.8rem', sm: '.9rem', md: '1rem'}, margin: "0 auto" }}>
                    <ChevronRightIcon sx={{ color: '#f76e65'}} />
                    <strong>Major:</strong> Computer Science
                  </Typography>
                </Box>
              </Box>
              
              {/* Follow up text */}
              <Typography
                sx={{
                  margin: '.5rem 0',
                  color: 'white',
                  fontSize: { xs: '0.8rem', sm: '.9rem', md: '1rem' },
                  textAlign: { xs: 'center', sm: 'left' },
                  marginTop: '1rem',
                }}
              >
                My academic journey includes roles as an
                <strong className="text-coral"> Undergraduate Teaching Assistant</strong> for
                <strong className="text-coral"> Systems Programming</strong> and
                <strong className="text-coral"> Developer Tools</strong>, and as a
                <strong className="text-coral"> CS Help Room Tutor</strong> for
                <strong className="text-coral"> Object-Oriented Programming</strong> and
                <strong className="text-coral"> C Programming</strong>. Additionally, I have
                served as a <strong className="text-coral"> CS tutor </strong>for <strong className="text-coral"> Horizons</strong>,
                offering 1-on-1 sessions for <strong className="text-coral"> Python programming</strong>.
              </Typography>

              <Typography
                sx={{
                  margin: '.5rem 0',
                  color: 'white',
                  fontSize: { xs: '0.8rem', sm: '.9rem', md: '1rem' },
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                Some of my work-related experience includes serving as a
                <strong className="text-coral"> Music Software Development Research Assistant</strong>,
                where I built a cross-platform music evaluator app with
                <strong className="text-coral"> React Native</strong> and
                <strong className="text-coral"> TypeScript</strong>. I also developed an
                AI-powered chatbot for <strong className="text-coral"> Wabash National&apos;s</strong>{' '}
                website to reduce reliance on call centers, and redesigned the
                <strong className="text-coral"> ECELabs.io</strong> homepage and landing page,
                improving the experience for over <strong className="text-coral">450</strong>{' '}
                students using <strong className="text-coral"> HTML, CSS, and JavaScript</strong>.
              </Typography>

              <Typography
                sx={{
                  margin: '.5rem 0',
                  color: 'white',
                  fontSize: { xs: '0.8rem', sm: '.9rem', md: '1rem' },
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                Outside of tech, I enjoy staying active with <strong className="text-coral">cardio</strong>, 
                exploring and enjoying <strong className="text-coral">good food</strong>, watching 
                <strong className="text-coral"> movies/shows</strong>, and playing 
                <strong className="text-coral">video games</strong>.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
