import React from 'react';
import { Paper, LinearProgress, Typography, Box, Grid } from '@mui/material';

const ProgressCard = () => {
  return (
    <Paper elevation={3} sx={{ p: 1, borderRadius: 2 }}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="h6" fontWeight="bold">
            Progress
          </Typography>
        </Grid>

        <Grid item>
          <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <LinearProgress variant="determinate" value={10} />
            </Box>
          </Box>
        </Grid>

        <Grid item>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="body1">Full-Stack Web Developer</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                10/110
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProgressCard;
