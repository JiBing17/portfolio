import project1Main from '../icons/project-1-main.jpg';
import pokeworld_1 from '../icons/pokeworld_1.png';
import pokeworld_2 from '../icons/pokeworld_2.png';
import pokeworld_3 from '../icons/pokeworld_3.png';
import pokeworld_4 from '../icons/pokeworld_4.png';
import pokeworld_5 from '../icons/pokeworld_5.png';
import pokeworld_6 from '../icons/pokeworld_6.png';
import pokeworld_7 from '../icons/pokeworld_7.png';
import pokeworld_8 from '../icons/pokeworld_8.png';
import pokeworld_9 from '../icons/pokeworld_9.png';

import project2Main from '../icons/project-2-main.jpg';
import project2 from '../icons/project-2.png';
import project2_2 from '../icons/project-2-2.png';
import project2_3 from '../icons/project-2-3.png';
import project2_4 from '../icons/project-2-4.png';
import project2_5 from '../icons/project-2-5.png';
import project2_6 from '../icons/project-2-6.png';

import project3Main from '../icons/project-3-main.jpg';
import project3 from '../icons/project-3.png';
import project3_2 from '../icons/project-3-2.png';
import project3_3 from '../icons/project-3-3.png';
import project3_4 from '../icons/project-3-4.png';
import project3_5 from '../icons/project-3-5.png';
import project3_6 from '../icons/project-3-6.png';

import project4Main from '../icons/project-4-main.jpg';
import project4 from '../icons/project-4.png';
import project4_2 from '../icons/project-4-2.png';
import project4_3 from '../icons/project-4-3.png';

import project5Main from '../icons/project-5-main.jpg';
import project5_1 from '../icons/project-5-1.png';
import project5_2 from '../icons/project-5-2.png';
import project5_3 from '../icons/project-5-3.png';
import project5_4 from '../icons/project-5-4.png';
import project5_5 from '../icons/project-5-5.png';
import project5_6 from '../icons/project-5-6.png';
import project5_7 from '../icons/project-5-7.png';
import project5_8 from '../icons/project-5-8.png';
import project5_9 from '../icons/project-5-9.png';
import project5_10 from '../icons/project-5-10.png';
import project5_11 from '../icons/project-5-11.png';
import project5_12 from '../icons/project-5-12.png';
import project5_13 from '../icons/project-5-13.png';
import project5_14 from '../icons/project-5-14.png';

import project6Main from '../icons/project-6-main.jpg';
import project6_1 from '../icons/project-6-1.png';
import project6_2 from '../icons/project-6-2.png';
import project6_3 from '../icons/project-6-3.png';

import project7Main from '../icons/time_scale_0.jpg';
import project7_1 from '../icons/time_scale_1.png';
import project7_2 from '../icons/time_scale_2.png';
import project7_3 from '../icons/time_scale_3.png';
import project7_4 from '../icons/time_scale_4.png';

export const projects = [
  {
    title: 'TimeScale Creator Online',
    tools: ['ReactJS', 'Typescript', 'Model Context Protocol', 'Fastify', 'GeoGPT'],
    link: 'https://tsconline.timescalecreator.org/datapacks',
    linkLabel: 'Visit Site',
    featured: true,
    pictures: [project7Main, project7_1, project7_2, project7_3, project7_4],
    description:
      'TimeScale Creator is an advanced online cloud service designed to help you explore and visualize the geologic time scale with ease. With access to a vast internal database of over 20,000 global and regional events—including biologic, geomagnetic, sea-level, and stable isotope data—TimeScale Creator is the ultimate tool for researchers, educators, and enthusiasts of Earth history.',
  },
  {
    title: 'PokeWorld',
    tools: ['React', 'Express.js', 'Node.js', 'MongoDB', 'TailwindCSS', 'Material-UI', 'REST APIs', 'Google OAuth', 'Google Gemini'],
    link: 'https://pokeworld-lime.vercel.app/',
    linkLabel: 'Visit Site',
    pictures: [project1Main, pokeworld_1, pokeworld_2, pokeworld_3, pokeworld_4, pokeworld_5, pokeworld_6, pokeworld_7, pokeworld_8, pokeworld_9],
    description:
      'An interactive Pokémon fan platform built as a full-stack MERN app, pulling from PokeAPI (1,000+ Pokémon), the Pokémon TCG API (150+ sets, 10,000+ cards), and the TMDB API for related media. Google OAuth 2.0 streamlines sign-in, with user data persisted on MongoDB Atlas. I built an AI navigation assistant with Google Gemini and prompt engineering, and reduced redundant API calls through debounced search, client-side caching, and on-demand pagination. Shipped live on Vercel and Render.',
  },
  {
    title: 'Evaluator Audio App',
    tools: ['React Native', 'Typescript', 'Expo Go', 'OpenSheetMusicDisplay API', 'Dynamic Time Warping Algorithm'],
    link: 'https://github.com/JiBing17/Evaluator-Audio-App',
    linkLabel: 'View on GitHub',
    featured: true,
    pictures: [project6Main, project6_1, project6_2, project6_3],
    description:
      'Your on-demand practice guide, allowing you to practice with score progress visualization and mistake detection anytime, anywhere.',
  },
  {
    title: 'BoilerFinds – Discover. Connect. Share.',
    tools: ['ReactJS', 'Flask', 'PostgreSQL', 'Bootstrap', 'Leaflet', 'OpenStreetMap API', 'TMDB API'],
    link: 'https://github.com/JiBing17/boilerFinds',
    linkLabel: 'View on GitHub',
    pictures: [project5Main, project5_1, project5_2, project5_3, project5_4, project5_5, project5_6, project5_7, project5_8, project5_9, project5_10, project5_11, project5_12, project5_13, project5_14],
    description:
      'A full-stack lifestyle web app that helps users discover local restaurants, explore trending movies, buy and sell items, and connect with friends. Features include user authentication, real-time messaging, geolocation-based food discovery, interactive maps, friend requests, and movie saving with TMDB integration.',
  },
  {
    title: 'Landing Page for ECELabs.io',
    tools: ['HTML', 'CSS', 'Javascript'],
    link: 'https://github.com/JiBing17/ECELabs.io-Landing-Page',
    linkLabel: 'View on GitHub',
    pictures: [project2Main, project2, project2_2, project2_3, project2_4, project2_5, project2_6],
    description:
      'I developed an engaging landing page for the ECELabs.io website, aimed at attracting and expanding the user base by showcasing the platform\'s capabilities.',
  },
  {
    title: 'EvoPlan',
    tools: ['React', 'Flask', 'SQLAlchemy', 'Open-Meteo API', 'Google Geolocation API'],
    link: 'https://github.com/Z3yphr/CS307-Project',
    linkLabel: 'View on GitHub',
    pictures: [project3Main, project3, project3_2, project3_3, project3_4, project3_5, project3_6],
    description:
      'I collaborated in a six-member Scrum team, contributing to sprint planning, stand-ups, retrospectives, and backlog management, delivering 70+ high-value features. Engineered a client-server application using React.js for front-end, Flask for server-side development, SQLAlchemy for database, and integrated APIs like Weather API and Geolocation API for real-time functionality.',
  },
  {
    title: 'Marketplace Messaging App',
    tools: ['Java', 'Object-Oriented Programming (OOP)', 'Socket Programming', 'File I/O Operations', 'Data Structures'],
    link: 'https://github.com/Taconio/CS-180-Project5',
    linkLabel: 'View on GitHub',
    pictures: [project4Main, project4, project4_2, project4_3],
    description:
      'I collaborated in a team of 5 to develop a messaging application for the CS180 cumulative final project. The app features account creation, real-time customer-seller messaging, user management, and message statistics, utilizing OOP, socket programming, and file I/O.',
  },
];
