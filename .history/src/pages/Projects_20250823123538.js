import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActions,
  Button,
  Dialog,
  DialogContent,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import project1Main from '../icons/project-1-main.jpg'
import project1 from '../icons/project-1.png'
import project1_2 from '../icons/project-1-2.png'
import project1_3 from '../icons/project-1-3.png'
import project1_4 from '../icons/project-1-4.png'
import project1_5 from '../icons/project-1-5.png'

import project2Main from '../icons/project-2-main.jpg'
import project2 from '../icons/project-2.png'
import project2_2 from '../icons/project-2-2.png'
import project2_3 from '../icons/project-2-3.png'
import project2_4 from '../icons/project-2-4.png'
import project2_5 from '../icons/project-2-5.png'
import project2_6 from '../icons/project-2-6.png'

import project3Main from '../icons/project-3-main.jpg'
import project3 from '../icons/project-3.png'
import project3_2 from '../icons/project-3-2.png'
import project3_3 from '../icons/project-3-3.png'
import project3_4 from '../icons/project-3-4.png'
import project3_5 from '../icons/project-3-5.png'
import project3_6 from '../icons/project-3-6.png'

import project4Main from '../icons/project-4-main.jpg'

import project4 from '../icons/project-4.png'
import project4_2 from '../icons/project-4-2.png'
import project4_3 from '../icons/project-4-3.png'

import project5Main from '../icons/project-5-main.jpg'
import project5_1 from '../icons/project-5-1.png'
import project5_2 from '../icons/project-5-2.png'
import project5_3 from '../icons/project-5-3.png'
import project5_4 from '../icons/project-5-4.png'
import project5_5 from '../icons/project-5-5.png'
import project5_6 from '../icons/project-5-6.png'
import project5_7 from '../icons/project-5-7.png'
import project5_8 from '../icons/project-5-8.png'
import project5_9 from '../icons/project-5-9.png'
import project5_10 from '../icons/project-5-10.png'
import project5_11 from '../icons/project-5-11.png'
import project5_12 from '../icons/project-5-12.png'
import project5_13 from '../icons/project-5-13.png'
import project5_14 from '../icons/project-5-14.png'


// array of objects used to describe the projects that I have made and the info about each one of them
const projects = [
  {
    title: 'BoilerFinds – Discover. Connect. Share.',
    tools: ['ReactJS', 'Flask', 'PostgreSQL', 'Bootstrap', 'Leaflet', 'OpenStreetMap API', 'TMDB API'],
    github: 'https://github.com/JiBing17/boilerFinds',
    pictures: [project5Main, project5_1, project5_2, project5_3, project5_4, project5_5, project5_6, project5_7, project5_8, project5_9, project5_10, project5_11, project5_12, project5_13, project5_14],
    description:
      'A full-stack lifestyle web app that helps users discover local restaurants, explore trending movies, buy and sell items, and connect with friends. Features include user authentication, real-time messaging, geolocation-based food discovery, interactive maps, friend requests, and movie saving with TMDB integration.',
  },
  {
    title: 'BoilerFinds – Discover. Connect. Share.',
    tools: ['ReactJS', 'Flask', 'PostgreSQL', 'Bootstrap', 'Leaflet', 'OpenStreetMap API', 'TMDB API'],
    github: 'https://github.com/JiBing17/boilerFinds',
    pictures: [project5Main, project5_1, project5_2, project5_3, project5_4, project5_5, project5_6, project5_7, project5_8, project5_9, project5_10, project5_11, project5_12, project5_13, project5_14],
    description:
      'A full-stack lifestyle web app that helps users discover local restaurants, explore trending movies, buy and sell items, and connect with friends. Features include user authentication, real-time messaging, geolocation-based food discovery, interactive maps, friend requests, and movie saving with TMDB integration.',
  },
  {
    title: 'PokeAPI',
    tools: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TailwindCSS', 'MUI'],
    github: 'https://github.com/JiBing17/pokemonAPI',
    pictures: [project1Main, project1, project1_2, project1_3, project1_4, project1_5], 
    description:
      'I developed a Pokémon MERN stack web application using PokeAPI, featuring secure user authentication, a responsive UI, and advanced Pokémon display with sorting, search, and pagination. Users can create accounts to manage favorites, while the backend handles the data with error handling.',
  },
  {
    title: 'Landing Page for ECELabs.io',
    tools: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/JiBing17/ECELabs.io-Landing-Page',
    pictures: [project2Main, project2, project2_2, project2_3, project2_4, project2_5, project2_6],
    description:
      'I developed an engaging landing page for the ECELabs.io website, aimed at attracting and expanding the user base by showcasing the platform’s capabilities.',
  },
  {
    title: 'EvoPlan',
    tools: ['React', 'Flask', 'SQLAlchemy', 'Open-Meteo API', 'Google Geolocation API'],
    github: 'https://github.com/Z3yphr/CS307-Project',
    pictures: [project3Main, project3, project3_2, project3_3, project3_4, project3_5, project3_6],
    description:
      'I collaborated in a six-member Scrum team, contributing to sprint planning, stand-ups, retrospectives, and backlog management, delivering 70+ high-value features. Engineered a client-server application using React.js for front-end, Flask for server-side development, SQLAlchemy for database, and integrated APIs like Weather API and Geolocation API for real-time functionality.',
  },
  {
    title: 'Marketplace Messaging App',
    tools: ['Java', 'Object-Oriented Programming (OOP)', 'Socket Programming', 'File I/O Operations', 'Data Structures'],
    github: 'https://github.com/Taconio/CS-180-Project5',
    pictures: [project4Main, project4, project4_2, project4_3],
    description:
      'I collaborated in a team of 5 to develop a messaging application for the CS180 cumulative final project. The app features account creation, real-time customer-seller messaging, user management, and message statistics, utilizing OOP, socket programming, and file I/O.',
  }
  
];

const Projects = () => {

  // states used to keep track of visuals (view mode, opened or not, etc.)
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // used to keep track of section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // reset to the first image each time you open
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  // Move to the previous image in the array
  const handlePrevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) => {
      // For a wrap-around effect, use modulo
      return (prevIndex - 1 + selectedProject.pictures.length) % selectedProject.pictures.length;
    });
  };

  // Move to the next image in the array
  const handleNextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) => {
      return (prevIndex + 1) % selectedProject.pictures.length;
    });
  };

  return (
    <Box
      id="projects"
      ref={projectsRef}
      sx={{
        px: { xs: '1rem', sm: '2rem', md: '4rem' },
        py: { xs: '2rem', md: '4rem' },
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1.5s ease-out, transform 1s ease-out',
        backgroundColor: '#1a3d47',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          // Responsive font sizes for heading
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 'bold',
          position: 'relative',
          width: 'fit-content',
          margin: '.5rem auto',
          color: 'white',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '100%',
            height: '2px',
            background: `linear-gradient(
              to right,
              white 0%,
              white 35%,
              #ff8578 35%,
              #ff8578 65%,
              white 65%
            )`,
            zIndex: 1,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: 'white',
            zIndex: 0,
          },
        }}
      >
        Projects
      </Typography>

      <Typography
        sx={{
          textAlign: 'center',
          marginBottom: '1rem',
          color: 'white',
          fontSize: { xs: '1rem', md: '1.1rem' },
        }}
      > 
        A collection of my work, big and small 🌟
      </Typography>

      {/* Cards Grid */}
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: '2rem',
          // Responsive width
          width: { xs: '95%', md: '90%' },
          margin: '0 auto',
        }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 1s ease-out ${index * 0.3}s, transform 1s ease-out ${index * 0.3}s`,
            }}
          >
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                boxShadow: "0px 4px 10px rgba(255,255,255, .4)",
                // Hover overlay & zoom effect
                '&:hover .overlay': { opacity: 1 },
                '&:hover .image': { transform: 'scale(1.1)' },
              }}
            >
              {/* Project Image */}
              <CardMedia
                component="img"
                image={project.pictures[0]}
                alt={project.title}
                sx={{
                  transition: 'transform 0.3s ease',
                  // Responsive height
                  height: { xs: 180, md: 220 },
                  width: '100%',
                  objectFit: 'fit',
                  className: 'image',
                }}
              />

              {/* Hover Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1rem',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: '0.5rem' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                  Tools: {project.tools.join(', ')}
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(project)}
                  >
                    View More
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="white"
                    href={project.github}
                    target="_blank"
                    sx={{ ml: 1 }}
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Full-Screen Dialog */}
      <Dialog fullScreen open={open} onClose={handleClose}>
        {selectedProject && (
          <DialogContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#1a3d47',
              color: 'white',
              padding: 0,
            }}
          >
            {/* Close Button */}
            <IconButton
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                color: '#ffffff',
                zIndex: 10,
                backgroundColor: 'rgba(255, 133, 120, 0.8)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 133, 120, 0.9)',
                },
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>

            {/* CAROUSEL SECTION */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                // Responsive height in dialog
                height: { xs: '40vh', md: '70vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Background image for the currently active index */}
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${selectedProject.pictures[currentImageIndex]})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              {/* Prev Button */}
              <IconButton
                onClick={handlePrevImage}
                sx={{
                  position: 'absolute',
                  left: { xs: '5%', sm: '10%' }, 
                  color: 'white',
                  fontSize: { xs: '2rem', sm: '2.5rem' }, 
                  padding: { xs: '0.5rem', sm: '1rem' },
                  backgroundColor: 'rgba(255, 133, 120, 0.8)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 133, 120, 0.9)',
                  },
                }}
              >
                <ArrowBackIosIcon />
              </IconButton>
              {/* Next Button */}
              <IconButton
                onClick={handleNextImage}
                sx={{
                  position: 'absolute',
                  right: { xs: '5%', sm: '10%' }, 
                  color: 'white',
                  fontSize: { xs: '2rem', sm: '2.5rem' }, 
                  padding: { xs: '0.5rem', sm: '1rem' }, 
                  backgroundColor: 'rgba(255, 133, 120, 0.8)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 133, 120, 0.9)',
                  },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>

            {/* Project Description */}
            <Box
              sx={{
                width: '100%',
                backgroundColor: '#ffffff',
                color: '#1a3d47',
                borderRadius: '8px 8px 0 0',
                boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.3)',
                p: { xs: '1rem', md: '2rem' },
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  marginBottom: '1rem',
                  fontWeight: 'bold',
                }}
              >
                {selectedProject.title}
              </Typography>
              <Typography sx={{ marginBottom: '1rem' }}>
                {selectedProject.description}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Tools: {selectedProject.tools.join(', ')}
              </Typography>

              {/* GitHub Button */}
              <Button
                variant="contained"
                href={selectedProject.github}
                target="_blank"
                sx={{
                  marginTop: '1rem',
                  backgroundColor: '#ff8578',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#e76a5b',
                  },
                }}
              >
                View on GitHub
              </Button>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
