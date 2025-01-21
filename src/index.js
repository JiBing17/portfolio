import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import App from './App';

// Create a custom Material-UI theme
const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif', // Use Open Sans globally for MUI
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
