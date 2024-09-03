import React from 'react';
import bgPic from '../icons/bg.webp'
import { Box, Typography, Button, } from '@mui/material';

const Hero = () => {
  return (
    <>
    {/* Intro Section */}
        <Box
            sx={{
            position: "relative",
            height: '100vh',
            backgroundImage: `url(${bgPic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "space-around", justifyContent: "center",position: 'absolute',
            top: '30%',left: '0', padding: "1rem"}}>
                <Typography sx={{ color: "white", fontSize: "5rem", fontWeight: "bold"}}>
                    Ji Bing Ni
                </Typography>
                <Typography sx={{ color: "white", fontSize: "2rem"}}>
                    I am a Learner
                </Typography>
                <Button variant="outlined" sx={{ color: "white", fontSize: "2rem", color: "white", borderColor: "white"}}>View My Projects</Button>
            </Box> 
        </Box>
    </>
  );
};

export default Hero
