import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 1000,
        opacity: showButton ? 1 : 0, // Fade in/out effect
        visibility: showButton ? 'visible' : 'hidden', // Ensures it is hidden when not visible
        transition: 'opacity 0.5s ease, visibility 0.5s ease', // Smooth fade transition
      }}
    >
      <IconButton
        onClick={scrollToTop}
        sx={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#ff00ff',
          color: '#fff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            backgroundColor: '#e000e0',
          },
        }}
      >
        <ArrowUpwardIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};

export default BackToTop;
