import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BackToTop = () => {

  // state used to determined whether or not we should hide this component
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
      // Responsive positioning (slightly larger offset on bigger screens)
      sx={{
        position: 'fixed',
        bottom: { xs: '1rem', md: '2rem' },
        right: { xs: '1rem', md: '2rem' },
        zIndex: 1000,
        opacity: showButton ? 1 : 0,
        visibility: showButton ? 'visible' : 'hidden',
        transition: 'opacity 0.5s ease, visibility 0.5s ease',
      }}
    >
      <IconButton
        onClick={scrollToTop}
        disableRipple
        sx={{
          // Responsive button sizing
          width: { xs: '40px', md: '48px' },
          height: { xs: '40px', md: '48px' },
          borderRadius: '50%',
          backgroundColor: '#f76e65',
          color: '#fff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          '&:hover': {
            backgroundColor: '#ff8578',
            transform: 'scale(1.1)',
          },
        }}
      >
        <ArrowUpwardIcon
          // Make icon size responsive too
          sx={{
            fontSize: { xs: '1.25rem', md: '1.5rem' },
          }}
        />
      </IconButton>
    </Box>
  );
};

export default BackToTop;
