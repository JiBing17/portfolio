import React from 'react';
import { Box, Typography } from '@mui/material';

const Resume = () => {
  return (
    <>
        <Box sx={{padding: "1rem"}}>
            <Typography sx={{fontSize: "2rem",  borderBottom: '3px solid #ff00ff', display: "inline", paddingBottom: ".2rem",  fontWeight:"bold"}}> Resume</Typography>

            {/* Summary */}
            <Box display="flex" mt={10}>
                {/* Left Column for Circle and Line Visual */}
                <Box display="flex" flexDirection="column" alignItems="center" position="relative">
                    {/* Unfilled Circle */}
                    <Box 
                    width="16px" 
                    height="16px" 
                    border="2px solid #ff00ff" 
                    borderRadius="50%" 
                    zIndex={10} 
                    bgcolor="white" 
                    />
                    {/* Line */}
                    <Box 
                    width="2px" 
                    bgcolor="#ff00ff" 
                    flexGrow={1} 
                    />
                </Box>
                {/* Right Column for Content */}
                <Box ml={6}>
                    <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}> Summary </Typography>
                    <Box mt={2}>
                    <Typography variant="h4" component="h4" sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "#606060" }}>
                        Ji Bing Ni
                    </Typography>
                    <Typography variant="body1" sx={{ fontStyle: "italic", mt: 1 }}>
                        I'm a junior studying Computer Science at Purdue University. Passionate about working/learning with others to expand current knowledge base as well as solidify a strong foundation in CS. Driven by the desire to apply what I learn to real-world situations, turning theory into practice.
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
            <Box display="flex" mt={10}>
                {/* Left Column for Circle and Line Visual */}
                <Box display="flex" flexDirection="column" alignItems="center" position="relative">
                    {/* Unfilled Circle */}
                    <Box 
                    width="16px" 
                    height="16px" 
                    border="2px solid #ff00ff" 
                    borderRadius="50%" 
                    zIndex={10} 
                    bgcolor="white" 
                    />
                    {/* Line */}
                    <Box 
                    width="2px" 
                    bgcolor="#ff00ff" 
                    flexGrow={1} 
                    />
                </Box>
                {/* Right Column for Content */}
                <Box ml={6}>
                    <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}> Education </Typography>
                    <Box mt={2}>
                    <Typography variant="h4" component="h4" sx={{ fontSize: "1.25rem", fontWeight: "bold", color: "#606060" }}>
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
            
        </Box>



    </>
  );
};

export default Resume
