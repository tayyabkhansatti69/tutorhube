import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

const lessons = [
  {
    id: 1,
    lessonName: 'Math Lesson',
    teacherName: 'John Doe',
    date: 'January 5, 2024',
    time: '07:00 - 08:00 AM',
    avatar: '/path/to/avatar1.jpg',
    status: 'live',
    liveMessage: 'Live after 5 minutes',
  },
  {
    id: 2,
    lessonName: 'Science Lesson',
    teacherName: 'Jane Smith',
    date: 'January 6, 2024',
    time: '08:00 - 09:00 AM',
    avatar: '/path/to/avatar2.jpg',
    status: 'scheduled',
  },
  {
    id: 3,
    lessonName: 'History Lesson',
    teacherName: 'Emily Johnson',
    date: 'January 7, 2024',
    time: '09:00 - 10:00 AM',
    avatar: '/path/to/avatar3.jpg',
    status: 'scheduled',
  },
];

const LessonCard = () => {
  return (
    <Grid container spacing={2}>
      {lessons.map((lesson) => (
        <Grid item xs={4} key={lesson.id}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: lesson.status === 'live' ? '#d8f8e3' : '#fff',
              boxShadow: 2,
              borderLeft: lesson.status === 'live' ? '8px solid blue' : '8px solid orange',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">{lesson.lessonName}</Typography>
              <Typography variant="body2">{'>'}</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Avatar src={lesson.avatar} sx={{ width: 24, height: 24 }} />
              <Typography variant="caption">{lesson.teacherName}</Typography>
            </Box>

            {lesson.status === 'live' && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'red' }}>
                <AccessTimeIcon sx={{ color: 'red',fontSize:16 }} />
                <Typography variant="caption">{lesson.liveMessage}</Typography>
              </Box>
            )}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between', gap: 0 }}>
              <Typography variant="caption">{lesson.date}</Typography>
              <Box display={'flex'} alignItems={'center'} gap={0.5}>
              <AccessTimeIcon sx={{fontSize:16}} />
              <Typography variant="caption">{lesson.time}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default LessonCard;
