
import Course1 from '@/src/assets/image/coursesImage/course1.png';
import Course2 from '@/src/assets/image/coursesImage/course2.png';
import Course3 from '@/src/assets/image/coursesImage/course3.png';
import Course4 from '@/src/assets/image/coursesImage/course4.png';
import Course5 from '@/src/assets/image/coursesImage/course5.png';
import Course6 from '@/src/assets/image/coursesImage/course6.png';
import { Box, Grid, IconButton, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import IconCourseContent from "@/src/assets/icons/dashboard-main/course-content";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

function AllCourseSection() {

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
        {
            images: Course3,
            courseName: 'Course Name',
            price: '50.09',
            teacherName: 'Teacher Name',
            rating: '4',
            content: '110',
        },
        {
            images: Course4,
            courseName: 'Course Name',
            price: '50.09',
            teacherName: 'Teacher Name',
            rating: '4',
            content: '110',
        },
        {
            images: Course5,
            courseName: 'Course Name',
            price: '50.09',
            teacherName: 'Teacher Name',
            rating: '4',
            content: '110',
        },
        {
            images: Course6,
            courseName: 'Course Name',
            price: '50.09',
            teacherName: 'Teacher Name',
            rating: '4',
            content: '110',
        },
    ]

    const router = useRouter()

    return (
        <>
            <Box px={3} pt={6} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'} gap={2}>
                <IconButton sx={{ cursor: 'ointer' }} onClick={() => { router.push('/studentDashboard') }}><ArrowBackIcon /></IconButton>
                <Typography variant='h6' fontWeight={'bold'}>All Courses</Typography>
            </Box>
            <Grid px={3} pt={1} spacing={2} container mt={2} flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'flex-start'}>


                {courseData.map((item) => (
                    <Card4 key={item.courseName} {...item} />
                ))}

            </Grid>

        </>

    )
}
export default AllCourseSection

const Card4 = ({
    images,
    courseName,
    price,
    teacherName,
    rating,
    content,
}: any) => {
    return (
        <Grid xs={12} md={4} item>
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