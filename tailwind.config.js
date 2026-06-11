/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--text)',
        stone: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        'accent-muted': 'var(--accent-muted)',
        footer: 'var(--footer-bg)',
        'footer-text': 'var(--footer-fg)',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
      },
      maxWidth: {
        page: '1120px',
      },
    },
  },
  plugins: [],
};
