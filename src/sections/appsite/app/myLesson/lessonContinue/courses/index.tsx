import React from 'react';
import { Grid, Paper, Typography, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LockIcon from '@mui/icons-material/Lock';

const courses = [
  { title: 'Introduction', duration: '1:00', status: 'playable' },
  { title: 'Introduction', duration: '1:00', status: 'playable' },
  { title: 'Getting Started', duration: 'Live after 5 min', status: 'upcoming' },
  { title: 'Lesson', duration: 'Started', status: 'started' },
  { title: 'Tools', duration: '1:00', status: 'locked' },
  { title: 'lorem ipsum', duration: '1:00', status: 'locked' },
  { title: 'lorem ipsum', duration: '1:00', status: 'locked' },
];

const getStatusStyles = (status) => {
  switch (status) {
    case 'playable':
      return { backgroundColor: '#70d4f1', icon: <PlayCircleOutlineIcon /> };
    case 'upcoming':
      return { backgroundColor: '#8fe0c6', icon: <LockIcon /> };
    case 'started':
      return { backgroundColor: '#f8a6a0', icon: <LockIcon /> };
    case 'locked':
      return { backgroundColor: '#f0f0f0', icon: <LockIcon /> };
    default:
      return {};
  }
};

const CourseList = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 1,
        borderRadius: '10px',
        maxHeight: '400px', // Set a height for scrolling
        overflowY: 'auto',  // Enable scrolling
        scrollbarWidth: 'thin', // Firefox
        scrollbarColor: 'blue transparent', // Firefox
        '&::-webkit-scrollbar': {
          width: '8px', // Webkit browsers
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'blue',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Video Courses
      </Typography>
      <Grid container direction="column" spacing={1}>
        {courses.map((course, index) => {
          const { backgroundColor, icon } = getStatusStyles(course.status);

          return (
            <Grid item key={index}>
              <Paper
                elevation={1}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 1,
                  backgroundColor,
                  borderRadius: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton>{icon}</IconButton>
                  <Typography variant="body1">{course.title}</Typography>
                </div>
                <Typography variant="body2">{course.duration}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default CourseList;
