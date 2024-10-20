import React from 'react';
import { Box, Grid, Typography, } from '@mui/material';

// Sample data
const data = [
  { id: 1, message: 'New teacher registered in "Course Name"', time: 'Today, 29 Aug at 10:20', type: 'new',amount:'$8400' },
  { id: 2, message: 'Payment received from John Smith for Math class.', time: 'Today, 29 Aug at 10:20', type: 'payment',amount:'$8400' },
  { id: 3, message: 'Payment received from John Smith for Math class.', time: 'Today, 29 Aug at 10:20', type: 'payment',amount:'$8400' },
  { id: 4, message: 'Payment Sent to John Smith for Math Teacher.', time: 'Today, 29 Aug at 10:20', type: 'sent',amount:'$8400' },
  { id: 5, message: 'Payment Sent to John Smith for Math Teacher.', time: 'Today, 29 Aug at 10:20', type: 'sent',amount:'$8400' },
];

const NewPayment = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      {data.map((item) => (
        <Box key={item.id} sx={{ borderBottom: '1px solid #e0e0e0', padding: '10px 0' }}>
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Icon Column */}
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Icon placeholder */}
                <Box sx={{ width: 32, height: 32, backgroundColor: '#d6f5f9', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                  <Typography variant="h6" color="#00bcd4">S</Typography>
                </Box>
                {/* Message and Time */}
                <Box>
                  <Typography variant="body1">{item.message}</Typography>
                  <Typography variant="caption" color="textSecondary">{item.time}</Typography>
                </Box>
              </Box>
            </Grid>
            {/* Approve and Reject Buttons */}
            <Grid item>
            <Box>
                  
                  <Typography variant="body1" color="primary">{item.amount}</Typography>
                </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default NewPayment;
