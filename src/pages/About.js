import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import pfp from '../icons/IMG_7595.JPEG';

const About = () => {
  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <Box
      id="about"
      ref={aboutRef}
      sx={{
        padding: '2rem',
        backgroundColor: '#1a3d47',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 2s ease-out, transform 1s ease-out',
        
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          position: 'relative',
          width: '10%',
          margin: '.5rem auto',
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '75%',
          margin: 'auto',
        }}
      >
        <Typography sx={{ textAlign: 'center', width: '80%', color: 'white' }}>
          Hello! 👋 My name is Ji Bing! I’m currently a junior at Purdue University, studying
          Computer Science 💻. My current interests lie in ,{' '} <strong class="text-coral">software engineering</strong>, <strong class="text-coral">web development</strong>, and <strong class="text-coral">Human Computer Interaction</strong>.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            height: '500px',
            gap: '2rem',
            marginTop: '4rem',
          }}
        >
          {/* Image Section */}
          <CardMedia
            component="img"
            image={pfp}
            alt="Description of image"
            sx={{
              width: '40%',
              height: '100%',
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
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '1rem',
              }}
            >
              <Typography sx={{ fontSize: '1.3rem', fontWeight: 'bold', color: "white"}}>
              👨🏻‍💻 Software Engineer
              </Typography>
              <Typography sx={{ fontStyle: 'italic', color: "white"}}>
                Focus: Software Engineering
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '1rem',
                  }}
                >
                  <Typography sx={{color: "white"}}>
                    <ChevronRightIcon sx={{ color: '#f76e65' }} />
                    <strong>Email:</strong> jibingni17@gmail.com
                  </Typography>
                  <Typography sx={{color: "white"}}>
                    <ChevronRightIcon sx={{ color: '#f76e65' }} />
                    <strong>Location:</strong> Indianapolis, Indiana
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '1rem',
                  }}
                >
                  <Typography sx={{color: "white"}}>
                    <ChevronRightIcon sx={{ color: '#f76e65' }} />
                    <strong>University:</strong> Purdue
                  </Typography>
                  <Typography sx={{color: "white"}}>
                    <ChevronRightIcon sx={{ color: '#f76e65' }} />
                    <strong>Major:</strong> Computer Science
                  </Typography>
                </Box>
              </Box>

              <Typography sx={{ margin: '.5rem 0', color: "white"}}>
                My academic journey includes experience as an
                <strong class="text-coral"> Undergraduate Teaching Assistant</strong>, guiding
                students in core courses like <strong class="text-coral">Object Oriented Programming</strong>,{' '}
                <strong class="text-coral">C Programming</strong>, and <strong class="text-coral">Tools</strong>. Additionally, I
                have served as a tutor for <strong class="text-coral">Horizons</strong>, offering 1-on-1, group
                tutoring, and office hours to enhance understanding of{' '}
                <strong class="text-coral">Python programming</strong>, <strong class="text-coral">Systems Programming</strong>,{' '}
                <strong class="text-coral">Competitive Programming</strong>, and{' '}
                <strong class="text-coral">Software Engineering</strong>.
              </Typography>

              <Typography sx={{ margin: '.5rem 0', color: "white" }}>
                I have also conducted research developing AI-driven NPCs with
                <strong class="text-coral"> Unreal Engine</strong> and <strong class="text-coral">machine learning</strong>, 
                designing a landing page for the <strong class="text-coral">ECELabs.io</strong> website to support remote 
                hardware lab access, and creating an AI-powered chatbot for 
                <strong class="text-coral"> Wabash National&apos;s</strong> website to reduce reliance on call 
                center agents.
              </Typography>

              <Typography sx={{ margin: '.5rem 0', color: "white" }}>
                Outside of tech, I enjoy staying active with <strong class="text-coral">cardio</strong>, watching{' '}
                <strong class="text-coral">movies/shows</strong>, playing <strong class="text-coral">video games</strong>, and expressing
                creativity through <strong class="text-coral">drawing</strong>. This year, I’m also exploring new
                hobbies, such as <strong class="text-coral">card collecting</strong>.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
