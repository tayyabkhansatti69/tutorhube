import IconBalance from "@/src/assets/icons/dashboard-main/icon-balance";
import IconCourseCompleted from "@/src/assets/icons/dashboard-main/icon-course-completed";
import IconLastPayment from "@/src/assets/icons/dashboard-main/icon-last-payment";
import IconProgress from "@/src/assets/icons/dashboard-main/icon-progress";
import IconTotalPayment from "@/src/assets/icons/dashboard-main/icon-total-spending";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react';
import Chart from 'react-apexcharts';
import { Box, Grid, Paper, Typography } from "@mui/material";



function StudentDashboardSection() {
  const data = [
    {
      Amount: "$13,804.00",
      HeadIcon: IconBalance,

      Status: "Balance",
    },
    {
      Amount: "$16,593.00",
      HeadIcon: IconLastPayment,

      Status: "Last payment",
    },
    {
      Amount: "$13,184.00",
      HeadIcon: IconTotalPayment,
    
      Status: "Total spending",
    },

  ];
  const data2 = [
    {
      Amount: "100",
      HeadIcon: IconCourseCompleted,
      Status: "Courses Completed",
      IconColor:'#3269D3'
    },
    {
      Amount: "34",
      HeadIcon: IconProgress,
      Status: "Courses In Progress",
      IconColor:'#FEC64F'
    },
   

  ];
  const data3 = [
    {
      course: 60,
      Total: 110,
      courseName: "Course Name",
      IconColor:'#3269D3'
    },
    {
      course: 34,
      Total: 80,
      courseName: "Course Name",
      IconColor:'#FEC64F'
    },
   

  ];

  return (
    <Grid px={3} pt={4} spacing={2} container>
      <Grid item xs={12} md={8}>
        <Grid item xs={12} md={12} flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'} gap={2}>

          {data.map((item) => (
            <Card key={item.Amount} {...item} />
          ))}

        </Grid>
        <Grid item xs={12} md={12} flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'flex-start'} gap={2}  mt={2}>

          {data2.map((item) => (
            <Card2 key={item.Amount} {...item} />
          ))}

        </Grid>
        <Box  mt={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
          <Typography variant='h5'>Current Courses</Typography>
          <Typography variant='body1' color='primary'>view all</Typography> 
          </Box>
        <Grid item xs={12} md={12}  gap={2}  mt={2}  flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'flex-start'} >
         
          {data3.map((item) => (
            <Card3 key={item.course} {...item} />
          ))}
        </Grid>
        <Box  mt={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
          <Typography variant='h5'>More Courses</Typography>
          <Typography variant='body1' color='primary'>view all</Typography> 
          </Box>
      </Grid>
      <Grid item xs={12} md={4}>

      </Grid>
    </Grid>

  );
}

export default StudentDashboardSection;

const Card = ({ Amount, HeadIcon, Status, }: any) => {
  return (
    <Grid xs={12} lg={4} item>
      <Paper
        variant="elevation"
        sx={{ p: 2, }}
        elevation={2}
      >
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
        <HeadIcon sx={{width:'60px', height:'60px'}}/>
        <Box flexDirection={'column'} alignItems={'flex-start'} gap={1}>
        <Typography variant="body1" fontWeight={'bold'}>{Amount}</Typography>
        <Typography variant="caption" fontWeight={500}>{Status}</Typography>
        </Box>

        </Box>

      </Paper>
    </Grid>
  );
};

const Card2 = ({ Amount, HeadIcon, Status,IconColor }: any) => {
  return (
    <Grid xs={12} md={6} item>
      <Paper
        variant="elevation"
        sx={{ p: 2, }}
        elevation={2}
      >
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={1}>
        <HeadIcon sx={{width:'60px', height:'60px'}}/>
        <Box flexDirection={'column'} alignItems={'flex-start'} gap={1}>
        <Typography variant="body1" fontWeight={'bold'}>{Amount}</Typography>
        <Typography variant="caption" fontWeight={500}>{Status}</Typography>
        </Box>
        <Box ml={'auto'}>
      <ChevronRightIcon sx={{color:IconColor,fontsize:14}}/>
        </Box>

        </Box>

      </Paper>
    </Grid>
  );
};


const Card3 = ({ course, Total, courseName, IconColor }: any) => {
  // Chart options
  const progress = (course / Total) * 100;

  // Chart options with proper type definition
  const chartOptions: any = {
    series: [progress], // Show the percentage as the series data
    chart: {
      height: 300, // Adjust height as needed
      type: 'radialBar', // Set the chart type
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '40%', // Hollow circle size
        },
        track: {
          strokeWidth: '100%', // Increase width of progress
        },
        dataLabels: {
          name: {
            show: false, // Hide the default label (Progress)
          },
          value: {
            color: IconColor, // Set label color to IconColor
            fontSize: '20px',
            show: true,
            formatter: () => `${Math.round(progress)}%`, // Display percentage as label
          },
        },
      },
    },
    fill: {
      colors: [IconColor], // Set the progress bar color to IconColor
    },
    labels: [`${Math.round(progress)}%`], // Set the label as percentage
  };

  return (
    <Grid xs={12} md={6} item>
      <Paper variant="elevation" sx={{ p: 0 }} elevation={2}>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'} gap={0}>
          
          {/* Chart Box */}
          <Box>
          <Chart
              options={chartOptions}
              series={chartOptions.series}
              type="radialBar"
              height={chartOptions.chart.height}
              width={160}
            />
          </Box>

          {/* Course Information */}
          <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={0}>
            <Typography variant="caption" fontWeight={500}>Class</Typography>
            <Typography variant="body1" fontWeight={'bold'}>{courseName}</Typography>
            <Typography variant="caption" fontWeight={500}>Total Course</Typography>
            <Typography variant="body1" fontWeight={'bold'}>{course}/{Total}</Typography>
          </Box>

         
        </Box>
      </Paper>
    </Grid>
  );
};


