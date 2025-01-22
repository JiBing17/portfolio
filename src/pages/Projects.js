import React, { useState, useRef, useEffect } from 'react';
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
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import project1 from '../icons/project-1.png';
import project2 from '../icons/project-2.png';
import project3 from '../icons/project-3.png';

const projects = [
  {
    title: 'PokeAPI',
    tools: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TailwindCSS', 'MUI'],
    github: 'https://github.com/JiBing17/pokemonAPI',
    picture: project1,
    description:
      'I developed a Pokémon web application using the MERN stack, featuring secure user authentication, a responsive UI, and advanced Pokémon display with sorting, search, and pagination. Users can manage favorites, while the backend ensures efficient data processing and robust error handling.',
  },
  {
    title: 'Landing Page for ECELabs.io',
    tools: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/example/project2',
    picture: project2,
    description:
      'I developed an engaging landing page for the ECELabs.io website, aimed at attracting and expanding the user base by showcasing the platform’s capabilities.',
  },
  {
    title: 'EvoPlan',
    tools: ['React', 'Flask', 'SQLAlchemy', 'Open-Meteo API', 'Google Geolocation API'],
    github: 'https://github.com/Z3yphr/CS307-Project',
    picture: project3,
    description:
      'I collaborated in a six-member Scrum team, contributing to sprint planning, stand-ups, retrospectives, and backlog management, delivering 70+ high-value features. Engineered a client-server application using React.js for front-end, Flask for server-side development, SQLAlchemy for database, and integrated APIs like Weather API and Geolocation API for real-time functionality.',
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box
      id="projects"
      ref={projectsRef}
      sx={{
        // Responsive padding
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
        A collection of my work!
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
                // Hover overlay & zoom effect
                '&:hover .overlay': { opacity: 1 },
                '&:hover .image': { transform: 'scale(1.1)' },
              }}
            >
              {/* Project Image */}
              <CardMedia
                component="img"
                image={project.picture}
                alt={project.title}
                sx={{
                  transition: 'transform 0.3s ease',
                  // Responsive height
                  height: { xs: 180, md: 220 },
                  width: '100%',
                  objectFit: 'contain',
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
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                },
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>

            {/* Project Image (Dialog) */}
            <Box
              sx={{
                backgroundImage: `url(${selectedProject.picture})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                // Responsive height in dialog
                height: { xs: '40vh', md: '70vh' },
              }}
            />

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
