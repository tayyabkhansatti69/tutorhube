import React from 'react';
import { Grid, Box, Typography, Divider } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle'; // For colored dots
import { blue, red, teal } from '@mui/material/colors';

const cardData = [
  {
    title: 'Total Tutors',
    total: 95,
    active: 60,
    inactive: 20,
    iconColor: teal[300], // Color for icon background
    activeColor: blue[400],
    inactiveColor: red[400],
    icon: '🧑‍🏫',
  },
  {
    title: 'Total Students',
    total: 95,
    active: 60,
    inactive: 20,
    iconColor: teal[300],
    activeColor: blue[400],
    inactiveColor: red[400],
    icon: '👨‍🎓',
  },
  {
    title: 'Earnings',
    currentMonth: '£268',
    lastMonth: '£450',
    currentYear: '£1,280',
    lastYear: '£11,250',
    iconColor: teal[300],
    icon: '💰',
  },
];

const DashboardCard = () => {
  return (
    <Grid container spacing={1}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 1,
              borderRadius: '12px',
              boxShadow: 3,
              bgcolor: '#fff',
              position: 'relative',
              height: '150px',
            }}
          >
            {/* Icon section */}
            <Box
              sx={{
                backgroundColor: card.iconColor,
                height: 50,
                width: 50,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 2,
              }}
            >
              <Typography variant="h6" color="#fff">
                {card.icon}
              </Typography>
            </Box>

            {/* Divider */}
            <Divider orientation="vertical" flexItem sx={{ height: '80px', marginRight: 2,border:1 }} />

            {/* Conditional rendering for different card types */}
            <Box flexGrow={1}>
              <Typography variant="caption" fontWeight="bold" mb={1}>
                {card.title}
              </Typography>
              {card.total !== undefined ? (
                <Typography variant="h5" fontWeight="bold" mb={1}>
                  {card.total}
                </Typography>
              ) : null}
              {card.currentMonth ? (
                <>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="caption" color='primary'>Current Month</Typography>
                    <Typography variant="caption" fontWeight="bold">
                      {card.currentMonth}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="caption" color='primary'>Last Month</Typography>
                    <Typography variant="caption" fontWeight="bold">
                      {card.lastMonth}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="caption" color='primary'>Current Year</Typography>
                    <Typography variant="caption" fontWeight="bold">
                      {card.currentYear}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="caption" color='primary'>Last Year</Typography>
                    <Typography variant="caption" fontWeight="bold">
                      {card.lastYear}
                    </Typography>
                  </Box>
                </>
              ) : null}
            </Box>

            {/* Active/Inactive section, only for cards with active/inactive data */}
            {card.active !== undefined && card.inactive !== undefined && (
              <Box sx={{ textAlign: 'right' }}>
                <Box display="flex" alignItems="center" mb={1} gap={1}>
                  <CircleIcon  sx={{ fontSize:'10px',color: card.activeColor,  }} />
                  <Typography variant="caption" color='primary'>Active</Typography>
                  <Typography variant="caption"  fontWeight="bold">
                    {card.active}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <CircleIcon  sx={{ fontSize:'10px',color: card.inactiveColor,  }} />
                  <Typography variant="caption" color='primary'>Inactive</Typography>
                  <Typography variant="caption" fontWeight="bold">
                    {card.inactive}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCard;
