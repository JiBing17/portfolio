module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all JS, JSX, TS, TSX files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        coral: '#f76e65', 
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'], // Default `sans` font now includes Open Sans
    },
  },
  plugins: [],
};