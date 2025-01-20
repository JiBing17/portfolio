import React, { useState } from 'react';
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
    github: 'https://github.com/example/project3',
    picture: project3,
    description:
      'I collaborated in a six-member Scrum team, contributing to sprint planning, stand-ups, retrospectives, and backlog management, delivering 70+ high-value features. Engineered a client-server application using React.js for front-end, Flask for server-side development, SQLAlchemy for database, and integrated APIs like Weather API and Geolocation API for real-time functionality.',
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          borderBottom: '2px solid #ff00ff',
          width: '10%',
          margin: '.5rem auto',
        }}
      >
        Projects
      </Typography>
      <Typography sx={{ textAlign: 'center', marginBottom: '1rem' }}>A collection of my work!</Typography>

      <Grid container spacing={4} sx={{ marginTop: '2rem', width: '90%', margin: '0 auto' }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                position: 'relative',
                '&:hover .overlay': { opacity: 1 },
                '&:hover .image': { transform: 'scale(1.1)' },
                overflow: 'hidden',
              }}
            >
              {/* Project Image */}
              <CardMedia
                component="img"
                image={project.picture}
                alt={project.title}
                sx={{
                  transition: 'transform 0.3s ease',
                  height: 220,
                  width: '100%',
                  objectFit: 'contain',
                  className: 'image',
                }}
              />

              {/* Overlay on Hover */}
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
              justifyContent: 'center',
              alignItems: 'center',
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
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            {/* Project Image */}
            <Box
              sx={{
                backgroundImage: `url(${selectedProject.picture})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '70vh',
              }}
            />
            {/* Project Description */}
            <Box sx={{ padding: '1rem', textAlign: 'center', width: '70%' }}>
              <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
                {selectedProject.title}
              </Typography>
              <Typography>{selectedProject.description}</Typography>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
