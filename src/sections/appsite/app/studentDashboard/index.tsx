import IconBalance from "@/src/assets/icons/dashboard-main/icon-balance";
import IconCourseCompleted from "@/src/assets/icons/dashboard-main/icon-course-completed";
import IconLastPayment from "@/src/assets/icons/dashboard-main/icon-last-payment";
import IconProgress from "@/src/assets/icons/dashboard-main/icon-progress";
import IconTotalPayment from "@/src/assets/icons/dashboard-main/icon-total-spending";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react';
import Chart from 'react-apexcharts';
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import Course1 from '@/src/assets/image/coursesImage/course1.png';
import Course2 from '@/src/assets/image/coursesImage/course2.png';
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import IconCourseContent from "@/src/assets/icons/dashboard-main/course-content";
import student from "@/src/assets/image/coursesImage/student.png"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from "next/navigation";

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
      IconColor: '#3269D3'
    },
    {
      Amount: "34",
      HeadIcon: IconProgress,
      Status: "Courses In Progress",
      IconColor: '#FEC64F'
    },


  ];
  const data3 = [
    {
      course: 60,
      Total: 110,
      courseName: "Course Name",
      IconColor: '#3269D3'
    },
    {
      course: 34,
      Total: 80,
      courseName: "Course Name",
      IconColor: '#FEC64F'
    },


  ];

  const courseData = [
    {
      images: Course1,
      courseName: 'Course Name',
      price: '50.09',
      teacherName: 'Teacher Name',
      rating: '5',
      content: '100',
    },
    {
      images: Course2,
      courseName: 'Course Name',
      price: '50.09',
      teacherName: 'Teacher Name',
      rating: '4',
      content: '110',
    },
  ]
  const scheduleData = [
    {
      date: '5 Jan',
      courseName: 'course name',
      live: 'live after 5 minutes',
      time: '',
      backgroundColor: '#C1F6DF', // light green
      borderColor: '#1AAE6F',
      isLive: true,
    },
    {
      date: '5 Jan',
      courseName: 'course name',
      live: '',
      time: '07:00 - 08:00 AM',
      backgroundColor: '#E9F1FC', // blue
      borderColor: '#007BFF',
      isLive: false,
    },
    {
      date: '5 Jan',
      courseName: 'course name',
      live: '',
      time: '07:00 - 08:10 AM',
      backgroundColor: '#F9F9F9', // light grey
      borderColor: '#34A853',
      isLive: false,
    },
  ];
const router=useRouter()

  return (
    <Grid px={3} pt={4} spacing={2} container>
      <Grid item xs={12} md={8}>
        <Grid item xs={12} md={12} flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'} gap={1}>

          {data.map((item) => (
            <Card key={item.Amount} {...item} />
          ))}

        </Grid>
        <Grid item xs={12} md={12} flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'flex-start'} gap={2} mt={2}>

          {data2.map((item) => (
            <Card2 key={item.Amount} {...item} />
          ))}

        </Grid>
        <Box mt={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
          <Typography variant='h5'>Current Courses</Typography>
          <Typography variant='body1' color='primary'>view all</Typography>
        </Box>
        <Grid item xs={12} md={12} gap={2} mt={2} flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'flex-start'} >

          {data3.map((item) => (
            <Card3 key={item.course} {...item} />
          ))}
        </Grid>
        <Box mt={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
          <Typography variant='h5'>More Courses</Typography>
          <Box sx={{cursor:'pointer'}} onClick={()=>{router.push('/studentDashboard/allCourses')}}>
          <Typography variant='body1' color='primary'>view all</Typography>
          </Box>
        </Box>

        <Grid item xs={12} md={12} gap={2} mt={2} flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'flex-start'} >

          {courseData.map((item) => (
            <Card4 key={item.courseName} {...item} />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          variant="elevation"
          sx={{ p: 2, }}
          elevation={2}
        >
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={2}>
            <Box display={'flex'} alignItems={'flex-start'} flexDirection={'row'} justifyContent={'center'} >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="auto"

              >
                <Image
                  src={student}
                  alt="Course image"
                  width={120}
                  height={120}
                />
              </Box>
              <MoreHorizIcon />
            </Box>
            <Box alignItems='center' display={'flex'} flexDirection={'column'}>
              <Typography variant='body1' fontWeight={'bold'}>Student Name</Typography>
              <Typography variant='caption'>Member Since 2020</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Box

                justifyContent="center"
                flexDirection="column"
                alignItems="flex-start"
                gap={1}
                p={2}
                sx={{
                  background: '#F7F7F7',
                  borderRadius: '16px',
                  width: { xs: '100px', sm: '120px', md: '194px' }, // responsive width
                  height: { xs: '80px', sm: '100px', md: '109px' }, // responsive height
                  display: 'flex',
                }}
              >
                <Typography variant="body2">Points</Typography>
                <Typography variant="body1" fontWeight="bold">
                  2300
                </Typography>
              </Box>
              <Box
                p={2}
                justifyContent="center"
                flexDirection="column"
                alignItems="flex-start"
                gap={2}
                sx={{
                  background: '#F7F7F7',
                  borderRadius: '16px',
                  width: { xs: '100px', sm: '120px', md: '194px' }, // responsive width
                  height: { xs: '80px', sm: '100px', md: '109px' }, // responsive height
                  display: 'flex',
                }}
              >
                <Typography variant="body2">Certificate</Typography>
                <Typography variant="body1" fontWeight="bold">
                  50
                </Typography>
              </Box>
            </Box>
            <Box sx={{ padding: '8px' }}>
              <Typography variant="h6" sx={{ marginBottom: '16px' }}>
                Upcoming Schedule
              </Typography>
              {scheduleData.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: item.backgroundColor,
                    borderRadius: '8px',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    borderLeft: `8px solid ${item.borderColor}`,
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Date Box */}
                  <Box
                    sx={{
                      minWidth: '40px',
                      backgroundColor: '#fff',
                      padding: '4px',
                      borderRadius: '4px',
                      textAlign: 'center',
                      marginRight: '16px',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {item.date}
                    </Typography>
                  </Box>

                  {/* Course Details */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {item.courseName}
                    </Typography>
                    {item.isLive ? (
                      <Box onClick={()=>{router.push('/liveclass/testclass')}} sx={{cursor:'pointer'}}>
                      <Typography
                        variant="caption"
                        sx={{ color: 'red', fontWeight: 'bold' }}
                      >
                        🔴 {item.live}
                      </Typography>
                      </Box>
                    ) : (
                      <Typography variant="body2" sx={{ color: 'gray' }}>
                        {item.time}
                      </Typography>
                    )}
                  </Box>

                  {/* Arrow Icon */}
                  <IconButton>
                    <ArrowForwardIosIcon sx={{ fontSize: '16px', color: '#333' }} />
                  </IconButton>
                </Box>
              ))}
            </Box>

          </Box>
        </Paper>
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
          <HeadIcon sx={{ width: '60px', height: '60px' }} />
          <Box flexDirection={'column'} alignItems={'flex-start'} gap={1}>
            <Typography variant="body1" fontWeight={'bold'}>{Amount}</Typography>
            <Typography variant="caption" fontWeight={500}>{Status}</Typography>
          </Box>

        </Box>

      </Paper>
    </Grid>
  );
};

const Card2 = ({ Amount, HeadIcon, Status, IconColor }: any) => {
  return (
    <Grid xs={12} md={6} item>
      <Paper
        variant="elevation"
        sx={{ p: 2, }}
        elevation={2}
      >
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={1}>
          <HeadIcon sx={{ width: '60px', height: '60px' }} />
          <Box flexDirection={'column'} alignItems={'flex-start'} gap={1}>
            <Typography variant="body1" fontWeight={'bold'}>{Amount}</Typography>
            <Typography variant="caption" fontWeight={500}>{Status}</Typography>
          </Box>
          <Box ml={'auto'}>
            <ChevronRightIcon sx={{ color: IconColor, fontsize: 14 }} />
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





const Card4 = ({
  images,
  courseName,
  price,
  teacherName,
  rating,
  content,
}: any) => {
  return (
    <Grid xs={12} md={6} item>
      <Paper variant="elevation" sx={{ p: 2 }} elevation={2}>
        <Box display="flex" flexDirection="column" gap={1}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="auto"
            sx={{ aspectRatio: '16/9', position: 'relative' }}
          >
            <Image
              src={images}
              alt="Course image"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
          >
            <Typography variant="body2" fontWeight="bold">
              {courseName}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              <span style={{ color: 'primary' }}>$</span>
              {price}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            flexDirection="row"
            gap={1}
          >
            <Typography variant="caption">{teacherName}</Typography>
            <Typography variant="caption">{rating}</Typography>
            <StarIcon sx={{ color: '#FEC64F' }} />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
          >
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <IconCourseContent sx={{ fontSize: 14 }} />
              <Typography variant="caption" sx={{ color: '#B4B4B4' }}>{content}+ Content</Typography>
            </Box>
            <Typography variant="caption" fontWeight="bold" color="primary">
              View Details
            </Typography>

          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};


