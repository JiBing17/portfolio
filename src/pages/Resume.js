import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Resume = () => {
  return (
    <Box sx={{ padding: '1rem', backgroundColor: '#f5f5f5' }} id="resume">
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          borderBottom: '2px solid #ff00ff',
          width: '10%',
          margin: '.5rem auto',
        }}
      >
        Resume
      </Typography>

      <Grid
        container
        spacing={2}
        mt={4}
        
        sx={{
          justifyContent: 'center',
          alignItems: 'flex-start', 
          margin: "0 auto"
        }}
      >
        {/* Left Column */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center', 
          }}
        >
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            Education 🎓
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
                border="2px solid #ff80ed"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#ff80ed" flexGrow={1} />
            </Box>
            <Box ml={2}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#ff80ed',
                }}
              >
                Bachelor of Science in Computer Science
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', fontWeight: 'bold', mt: 1 }}
              >
                2022-2026 (Expected)
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mt: 1 }}>
                Purdue University, West Lafayette, IN
              </Typography>
              <Typography sx={{ mt: 1, textDecoration: 'underline', textUnderlineOffset: '4px', }}>
                Relevant Course Work
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,

                }}
              >
                <Typography component="li">CS 18000 - Problem Solving and Object-Oriented Programming</Typography>
                <Typography component="li">CS 19300 - Developer Tools</Typography>
                <Typography component="li">CS 18200 - Discrete Mathematics</Typography>
                <Typography component="li">CS 21100 - Competitive Programming I</Typography>
                <Typography component="li">CS 24000 - Programming in C</Typography>
                <Typography component="li">CS 25000 - Computer Architecture</Typography>
                <Typography component="li">CS 25100 - Data Structures and Algorithms</Typography>
                <Typography component="li">CS 25200 - Systems Programming</Typography>
                <Typography component="li">CS 30700 - Software Engineering I</Typography>
                <Typography component="li">CS 37500 - Human and Computer Interaction</Typography>
                <Typography component="li">CS 38100 - Introduction to the Analysis of Algorithms</Typography>
              </Box>


            </Box>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center', 
          }}
        >
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            Professional Experience 💻
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
                border="2px solid #ff80ed"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#ff80ed" flexGrow={1} />
            </Box>
            <Box ml={2}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#ff80ed',
                }}
              >
                Undergraduate Data Science Researcher
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', fontWeight: 'bold', mt: 1}}
              >
                August 2024 - Present
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mt: 1 }}>
                Purdue University, West Lafayette, IN
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,
                  pl: 2,
                }}
              >
                <Typography component="li">
                  Created an AI-powered chatbot for Wabash National's website, developing a responsive and user-friendly front-end
                  interface that improved customer support efficiency and reduced reliance on call center agents
                </Typography>
                <Typography component="li">
                  Applied Agile/Scrumban methodology within a team of 8, executing 2-week sprints, reviews, demos, and backlog manage
                  ment via Azure DevOps
                </Typography>
      
              </Box>
            </Box>
          </Box>
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
                border="2px solid #ff80ed"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#ff80ed" flexGrow={1} />
            </Box>
            <Box ml={2}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#ff80ed',
                }}
              >
                 AI & GameDevelopment Research Assistant
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', fontWeight: 'bold', mt: 1 }}
              >
                January  2025 - Present
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mt: 1 }}>
                Purdue University, West Lafayette, IN
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,
                  pl: 2,
                }}
              >
                <Typography component="li">
                  Collaborated with a team to develop AI-driven Non-Player Characters (NPCs) and interactive virtual environments
                </Typography>
                <Typography component="li">
                  Contributed to the design and implementation of NPC behaviors using Unreal Engine and machine learning techniques
                </Typography>
              </Box>
            </Box>
          </Box>
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
                border="2px solid #ff80ed"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#ff80ed" flexGrow={1} />
            </Box>
            <Box ml={2}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#ff80ed',
                }}
              >
                Undergraduate Teaching Assistant - Undergraduate Student Board
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', fontWeight: 'bold', mt: 1 }}
              >
                January 2025 - Present
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mt: 1 }}>
                Purdue University, West Lafayette, IN
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,
                  pl: 2,
                }}
              >
                <Typography component="li">
                  Conducted office hours focused on helping students master Object-Oriented Programming and C Programming
                </Typography>
                <Typography component="li">
                  Delivered personalized guidance to enhance students’ understanding and application of core programming concepts
                </Typography>

              </Box>
            </Box>
          </Box>
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
                border="2px solid #ff80ed"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#ff80ed" flexGrow={1} />
            </Box>
            <Box ml={2}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#ff80ed',
                }}
              >
                Undergraduate Teaching Assistant - Tools
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', fontWeight: 'bold', mt: 1 }}
              >
                August 2024 - December 2024
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mt: 1 }}>
                Purdue University, West Lafayette, IN
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,
                  pl: 2,
                }}
              >
                <Typography component="li">
                  Monitored and responded to student questions on Ed Discussion regarding terminal commands, Git/GitHub, and LaTeX
                </Typography>
                <Typography component="li">
                  Conducted virtual office hours focused on helping students master terminal commands, Git/GitHub operations, and LateX
                </Typography>
                <Typography component="li">
                  Graded assignments and provided feedback to support student’s understanding of course concepts
                </Typography>
              </Box>
            </Box>
          </Box>
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
                border="2px solid #ff80ed"
                borderRadius="50%"
                zIndex={10}
                bgcolor="white"
              />
              <Box width="2px" bgcolor="#ff80ed" flexGrow={1} />
            </Box>
            <Box ml={2}>
              <Typography
                variant="h4 "
                component="h4"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#ff80ed',
                }}
              >
                Software Development Research Assistant
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontStyle: 'italic', fontWeight: 'bold', mt: 1 }}
              >
                August 2024 - December 2024
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mt: 1 }}>
                Purdue University, West Lafayette, IN
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  mt: 2,
                  pl: 2,
                }}
              >
                <Typography component="li">
                  Developed an engaging landing page for the ECELabs.io website, aimed at showcasing the platform’s capabilities
                </Typography>
                <Typography component="li">
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
