import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Resume = () => {
  const resumeRef = useRef(null);
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
      { threshold: 0.1 }
    );

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => {
      if (resumeRef.current) {
        observer.unobserve(resumeRef.current);
      }
    };
  }, []);

  return (
    <Box
      id="resume"
      ref={resumeRef}
      sx={{
        // Responsive padding
        px: { xs: '1rem', sm: '2rem', md: '4rem' },
        py: { xs: '2rem', md: '4rem' },
        backgroundColor: '#ffffff',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 1.3s ease-out, transform 1s ease-out',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          // Responsive font size for the main heading
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 'bold',
          position: 'relative',
          width: 'fit-content',
          margin: '.5rem auto',
          color: '#1a3d47',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '100%',
            height: '2px',
            background: `linear-gradient(
              to right,
              #cccccc 0%,
              #cccccc 70%,
              #f76e65 70%,
              #f76e65 100%
            )`,
            zIndex: 1,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: '#cccccc',
            zIndex: 0,
          },
        }}
      >
        Resume
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          mt: { xs: 2, md: 4 },
          justifyContent: 'center',
          alignItems: 'flex-start',
          margin: '0 auto',
        }}
      >
        {/* Left Column: Education */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: { xs: 'center', md: 'center' },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography
            sx={{
              // Responsive heading
              fontSize: { xs: '1.3rem', md: '1.5rem' },
              fontWeight: 'bold',
              // On larger screens, push the text to the left
              marginRight: { xs: 0, md: '18rem' },
              color: '#1a3d47',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            🎓 Education
          </Typography>

          <Box display="flex" mt={2}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              position="relative"
            >
              <Box
                width="16px"
                height="16px"
                border="2px solid #f76e65"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#f76e65" flexGrow={1} />
            </Box>
            <Box ml={2}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 'bold',
                  color: '#f76e65',
                }}
              >
                Bachelor of Science in Computer Science
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  mt: 1,
                  color: '#1a3d47',
                }}
              >
                2022-2026 (Expected)
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', mt: 1, color: '#1a3d47' }}
              >
                Purdue University, West Lafayette, IN
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  color: '#1a3d47',
                }}
              >
                Relevant Course Work
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,
                  // Slightly smaller text for the list on mobile
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                <Typography component="li" sx={{ color: '#1a3d47' }}>
                  CS 18000 - Object-Oriented Programming
                </Typography>
                <Typography component="li" sx={{ color: '#1a3d47' }}>
                  CS 19300 - Developer Tools
                </Typography>
                <Typography component="li" sx={{ color: '#1a3d47' }}>
                  CS 18200 - Discrete Mathematics
                </Typography>
                <Typography component="li" sx={{ color: '#1a3d47' }}>
                  CS 21100 - Competitive Programming I
                </Typography>
                <Typography component="li" sx={{ color: '#1a3d47' }}>
                  CS 24000 - Programming in C
                </Typography>
                <Typography component="li" sx={{ color: '#1a3d47' }}>
                  CS 25000 - Computer Architecture
                </Typography>
                <Typography component="li" sx={{ color: '#1a3d47' }}>
                  CS 25100 - Data Structures and Algorithms
                </Typography>
                <Typography component="li" sx={{ color: '#1a3d47' }}>
                  CS 25200 - Systems Programming
                </Typography>
                <Typography component="li" sx={{ color: '#1a3d47' }}>
                  CS 30700 - Software Engineering I
                </Typography>
                <Typography component="li" sx={{ color: '#1a3d47' }}>
                  CS 37500 - Human and Computer Interaction
                </Typography>
                <Typography component="li" sx={{ color: '#1a3d47' }}>
                  CS 38100 - Introduction to the Analysis of Algorithms
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Column: Professional Experience */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1.3rem', md: '1.5rem' },
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#1a3d47',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            💻 Professional Experience
          </Typography>

          {/* 1. Undergraduate Data Science Researcher */}
          <Box display="flex">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              position="relative"
            >
              <Box
                width="16px"
                height="16px"
                border="2px solid #f76e65"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#f76e65" flexGrow={1} />
            </Box>
            <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 'bold',
                  color: '#f76e65',
                }}
              >
                Undergraduate Data Science Researcher
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  mt: 1,
                  color: '#1a3d47',
                }}
              >
                August 2024 - Present
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', mt: 1, color: '#1a3d47' }}
              >
                Purdue University, West Lafayette, IN
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,
                  pl: 2,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                <Typography sx={{ color: '#1a3d47' }} component="li">
                  Created an AI-powered chatbot for Wabash National's website, developing a responsive and user-friendly front-end
                  interface that improved customer support efficiency and reduced reliance on call center agents
                </Typography>
                <Typography sx={{ color: '#1a3d47' }} component="li">
                  Applied Agile/Scrumban methodology within a team of 8, executing 2-week sprints, reviews, demos, and backlog
                  management via Azure DevOps
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* 2. AI & Game Development Research Assistant */}
          <Box display="flex">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              position="relative"
            >
              <Box
                width="16px"
                height="16px"
                border="2px solid #f76e65"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#f76e65" flexGrow={1} />
            </Box>
            <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 'bold',
                  color: '#f76e65',
                }}
              >
                AI & GameDevelopment Research Assistant
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', fontWeight: 'bold', mt: 1, color: '#1a3d47' }}
              >
                January 2025 - Present
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', mt: 1, color: '#1a3d47' }}
              >
                Purdue University, West Lafayette, IN
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,
                  pl: 2,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                <Typography sx={{ color: '#1a3d47' }} component="li">
                  Collaborated with a team to develop AI-driven Non-Player Characters (NPCs) and interactive virtual environments
                </Typography>
                <Typography sx={{ color: '#1a3d47' }} component="li">
                  Contributed to the design and implementation of NPC behaviors using Unreal Engine and machine learning techniques
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* 3. Undergraduate Teaching Assistant - Undergraduate Student Board */}
          <Box display="flex">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              position="relative"
            >
              <Box
                width="16px"
                height="16px"
                border="2px solid #f76e65"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#f76e65" flexGrow={1} />
            </Box>
            <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 'bold',
                  color: '#f76e65',
                }}
              >
                Undergraduate Teaching Assistant - Undergraduate Student Board
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', fontWeight: 'bold', mt: 1, color: '#1a3d47' }}
              >
                January 2025 - Present
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', mt: 1, color: '#1a3d47' }}
              >
                Purdue University, West Lafayette, IN
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,
                  pl: 2,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                <Typography sx={{ color: '#1a3d47' }} component="li">
                  Conducted office hours focused on helping students master Object-Oriented Programming and C Programming
                </Typography>
                <Typography sx={{ color: '#1a3d47' }} component="li">
                  Delivered personalized guidance to enhance students’ understanding and application of core programming concepts
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* 4. Undergraduate Teaching Assistant - Tools */}
          <Box display="flex">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              position="relative"
            >
              <Box
                width="16px"
                height="16px"
                border="2px solid #f76e65"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#f76e65" flexGrow={1} />
            </Box>
            <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 'bold',
                  color: '#f76e65',
                }}
              >
                Undergraduate Teaching Assistant - Tools
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', fontWeight: 'bold', mt: 1, color: '#1a3d47' }}
              >
                August 2024 - December 2024
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', mt: 1, color: '#1a3d47' }}
              >
                Purdue University, West Lafayette, IN
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,
                  pl: 2,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                <Typography sx={{ color: '#1a3d47' }} component="li">
                  Monitored and responded to student questions on Ed Discussion regarding terminal commands, Git/GitHub, and LaTeX
                </Typography>
                <Typography sx={{ color: '#1a3d47' }} component="li">
                  Conducted virtual office hours focused on helping students master terminal commands, Git/GitHub operations, and LateX
                </Typography>
                <Typography sx={{ color: '#1a3d47' }} component="li">
                  Graded assignments and provided feedback to support student’s understanding of course concepts
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* 5. Software Development Research Assistant */}
          <Box display="flex">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              position="relative"
            >
              <Box
                width="16px"
                height="16px"
                border="2px solid #f76e65"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#f76e65" flexGrow={1} />
            </Box>
            <Box sx={{ padding: '0 1rem 1rem 1rem' }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 'bold',
                  color: '#f76e65',
                }}
              >
                Software Development Research Assistant
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', fontWeight: 'bold', mt: 1, color: '#1a3d47' }}
              >
                August 2024 - December 2024
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', mt: 1, color: '#1a3d47' }}
              >
                Purdue University, West Lafayette, IN
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,
                  pl: 2,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                <Typography sx={{ color: '#1a3d47' }} component="li">
                  Developed an engaging landing page for the ECELabs.io website, aimed at showcasing the platform’s capabilities
                </Typography>
                <Typography sx={{ color: '#1a3d47' }} component="li">
                  Maintained the ECELabs.io website to enable remote access to hardware labs across Electrical and Computer Engineering
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
