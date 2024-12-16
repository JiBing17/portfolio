import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Resume = () => {
  return (
    <>
      <Box sx={{ padding: "1rem" }}>
        <Typography
          sx={{
            fontSize: "2rem",
            borderBottom: "3px solid #ff00ff",
            display: "inline",
            paddingBottom: ".2rem",
            fontWeight: "bold",
          }}
        >
          Resume
        </Typography>

        <Grid container spacing={6} mt={2}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            {/* Summary */}
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>Summary</Typography>
            <Box display="flex" mt={2}>
              {/* Circle and Line Visual */}
              <Box display="flex" flexDirection="column" alignItems="center" position="relative">
                <Box
                  width="16px"
                  height="16px"
                  border="2px solid #ff00ff"
                  borderRadius="50%"
                  zIndex={10}
                  bgcolor="white"
                />
                <Box width="2px" bgcolor="#ff00ff" flexGrow={1} />
              </Box>
              {/* Summary Content */}
              <Box ml={6}>
                <Box >
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "#606060" }}
                  >
                    Ji Bing Ni
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic", mt: 1 }}>
                    I'm a junior studying Computer Science at Purdue University. Passionate about
                    working/learning with others to expand current knowledge base as well as solidify a strong
                    foundation in CS. Driven by the desire to apply what I learn to real-world situations,
                    turning theory into practice.
                  </Typography>
                  <Box component="ul" sx={{ listStyleType: "disc", listStylePosition: "inside", mt: 2, pl: 2 }}>
                    <Typography component="li">West Lafayette</Typography>
                    <Typography component="li">+1-317-625-5961</Typography>
                    <Typography component="li">jibingni17@gmail.com</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Education */}
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem" }}>Education</Typography>

            <Box display="flex" mt={2}>
              {/* Circle and Line Visual */}

              <Box display="flex" flexDirection="column" alignItems="center" position="relative">
                <Box
                  width="16px"
                  height="16px"
                  border="2px solid #ff00ff"
                  borderRadius="50%"
                  zIndex={10}
                  bgcolor="white"
                />
                <Box width="2px" bgcolor="#ff00ff" flexGrow={1} />
              </Box>
              {/* Education Content */}
              <Box ml={6}>
                <Box >
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "#606060" }}
                  >
                    Bachelor of Science in Computer Science
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic", fontWeight: "bold", mt: 1 }}>
                    2022- 2026 (Expected)
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic", mt: 1 }}>
                    Purdue University, West Lafayette, IN
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            {/* Work Experience */}
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Professional Experience
            </Typography>
            <Box display="flex" mt={2}>
              {/* Circle and Line Visual */}
              <Box display="flex" flexDirection="column" alignItems="center" position="relative">
                <Box
                  width="16px"
                  height="16px"
                  border="2px solid #ff00ff"
                  borderRadius="50%"
                  zIndex={10}
                  bgcolor="white"
                />
                <Box width="2px" bgcolor="#ff00ff" flexGrow={1} />
              </Box>
              {/* Work Experience Content */}
              <Box ml={6}>

                <Box>
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "#606060" }}
                  >
                    Undergraduate Teaching Assistant
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic", fontWeight: "bold", mt: 1 }}>
                    August 2024 - Present
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic", mt: 1 }}>
                    Purdue University, West Lafayette, IN
                  </Typography>
                </Box>
                <Box component="ul" sx={{ listStyleType: "disc", listStylePosition: "inside", mt: 2, pl: 2 }}>
                  <Typography component="li">
                    Actively monitored and responded to student questions on Ed Discussion regarding topics such
                    as terminal commands, Git/GitHub workflows, debugging techniques, and LaTeX formatting.
                  </Typography>
                  <Typography component="li">
                    Conducted virtual office hours focused on helping students master terminal commands,
                    Git/GitHub operations, and debugging processes.
                  </Typography>
                  <Typography component="li">
                    Coordinated with other TAs to manage and grade assignments, ensuring timely feedback and
                    maintaining academic integrity.
                  </Typography>
                </Box>
              </Box>
            </Box>


            <Box display="flex" mt={2}>
              {/* Circle and Line Visual */}
              <Box display="flex" flexDirection="column" alignItems="center" position="relative" >
                <Box
                  width="16px"
                  height="16px"
                  border="2px solid #ff00ff"
                  borderRadius="50%"
                  zIndex={10}
                  bgcolor="white"
                />
                <Box width="2px" bgcolor="#ff00ff" flexGrow={1} />
              </Box>
              {/* Work Experience Content */}
              <Box ml={6}>
                <Box >
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "#606060" }}
                  >
                    Software Development Research Assistant 
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic", fontWeight: "bold", mt: 1 }}>
                    August 2024 - Dec 2024 
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic", mt: 1 }}>
                    Purdue University, West Lafayette, IN
                  </Typography>
                </Box>
                <Box component="ul" sx={{ listStyleType: "disc", listStylePosition: "inside", mt: 2, pl: 2 }}>
                  <Typography component="li">
                    Designed and developed an engaging landing page for the ECELabs.io website, aimed at attracting and expanding 
                    the user base by showcasing the platform’s capabilities and simplifying access for remote laboratory users.
                  </Typography>
                  <Typography component="li">
                    Developed and maintained the ECELabs.io website to facilitate remote access to 
                    hardware labs across Electrical and Computer Engineering (ECE).
                  </Typography>
                </Box>
              </Box>
            </Box>


            <Box display="flex" mt={2}>
              {/* Circle and Line Visual */}
              <Box display="flex" flexDirection="column" alignItems="center" position="relative">
                <Box
                  width="16px"
                  height="16px"
                  border="2px solid #ff00ff"
                  borderRadius="50%"
                  zIndex={10}
                  bgcolor="white"
                />
                <Box width="2px" bgcolor="#ff00ff" flexGrow={1} />
              </Box>
              {/* Work Experience Content */}
              <Box ml={6}>
                <Box >
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "#606060" }}
                  >
                    Undergraduate Data Science Researcher
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic", fontWeight: "bold", mt: 1 }}>
                    August 2024 - Present
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic", mt: 1 }}>
                    Purdue University, West Lafayette, IN
                  </Typography>
                </Box>
                <Box component="ul" sx={{ listStyleType: "disc", listStylePosition: "inside", mt: 2, pl: 2 }}>
                  <Typography component="li">
                    Created an AI-powered chatbot for Wabash Company's website, developing a responsive 
                    and user-friendly front-end interface that improved customer support efficiency and reduced reliance on call center agents.
                  </Typography>
                  <Typography component="li">
                    Enhanced user experience and streamlined support operations by integrating natural language processing 
                    (NLP) and machine learning techniques into a user-friendly chatbot interface.
                  </Typography>
                  <Typography component="li">
                    Applied Agile/Scrumban methodology with 2-week sprints, 
                    reviews, demos, and backlog management via Azure DevOps.
                  </Typography>
                </Box>
              </Box>
            </Box>


            <Box display="flex" mt={2}>
              {/* Circle and Line Visual */}
              <Box display="flex" flexDirection="column" alignItems="center" position="relative">
                <Box
                  width="16px"
                  height="16px"
                  border="2px solid #ff00ff"
                  borderRadius="50%"
                  zIndex={10}
                  bgcolor="white"
                />
                <Box width="2px" bgcolor="#ff00ff" flexGrow={1} />
              </Box>
              {/* Work Experience Content */}
              <Box ml={6}>
                <Box >
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "#606060" }}
                  >
                    Computer Science Mentor
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic", fontWeight: "bold", mt: 1 }}>
                    August 2024 - Present
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: "italic", mt: 1 }}>
                    Purdue University, West Lafayette, IN
                  </Typography>
                </Box>
                <Box component="ul" sx={{ listStyleType: "disc", listStylePosition: "inside", mt: 2, pl: 2 }}>
                  <Typography component="li">
                    Led personalized 1-on-1 tutoring for Horizon at Purdue, 
                    specializing in CS 177, to enhance student understanding and mastery of Python programming.
                  </Typography>
                  <Typography component="li">
                    Adapted teaching methods to help students master Python while fostering a growth mindset in both myself and my students, 
                    encouraging them to tackle challenges and view mistakes as learning opportunities.
                  </Typography>
                </Box>
              </Box>
            </Box>


          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Resume;
