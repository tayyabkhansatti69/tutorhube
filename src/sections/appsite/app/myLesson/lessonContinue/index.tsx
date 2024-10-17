import { Box, Button, CardMedia, Divider, Grid, IconButton, LinearProgress, Rating, Stack, Typography, } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/navigation";
import StarIcon from '@mui/icons-material/Star';
import { CustomTabs } from "@/src/components";
import ProgressCard from "./progress";
import CourseList from "./courses";
function LessonContinueSection() {
    const router = useRouter()
    return (
        <Grid container px={1} py={4}>
            <Grid item xs={12} md={8}>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={2}>
                    <IconButton sx={{ cursor: 'ointer' }} onClick={() => { router.push('/myLesson') }}><ArrowBackIcon /></IconButton>
                    <Typography variant='h6' fontWeight={'bold'}>Lesson Name</Typography>
                </Box>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={1} mt={1} mb={1}>
                    <Typography variant="caption">5</Typography>
                    <StarIcon sx={{ color: '#FEC64F' }} />
                    <Divider orientation="vertical" sx={{ border: '1px solid gray', height: '10px' }} />
                    <Typography variant="caption"> Review (1k)</Typography>
                    <Divider orientation="vertical" sx={{ border: '1px solid gray', height: '10px' }} />
                    <Typography variant="caption"> 10k Student</Typography>
                </Box>
                <Box sx={{ maxWidth: 650 }}>
                    <CardMedia
                        component="video"
                        controls
                        height="400"
                        src="/videos/my-video.mp4"
                    />
                </Box>
                <CustomTabs tabsNameArray={["About", "Reviews","Subscription"]}>
                    <Box p={1} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'} gap={1}>
                        <Typography variant="h6">About Course</Typography>
                        <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Box>
                    <Box p={1}>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} >
                            <Typography variant="h6">Why my Student says</Typography>
                            <Box ml={'auto'}>
                                <Button variant="contained">Write a Review</Button>
                            </Box>

                        </Box>
                        <Box display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'} flexDirection={'row'} gap={1}>
                            <Box display={'flex'} flexDirection={'column'} gap={1}>
                                <Typography component="legend">3</Typography>
                                <Rating name="customized-10" defaultValue={3} max={5} />
                            </Box>
                            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={1}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Typography variant="caption">5</Typography>
                                    <LinearProgress sx={{ flexGrow: 1 }} color="secondary" value={3} />
                                    <Typography variant="caption">[1]</Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={1}>
                                    <Typography variant="caption">4</Typography>
                                    <LinearProgress sx={{ flexGrow: 1 }} color="success" value={0} />
                                    <Typography variant="caption">[0]</Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={1}>
                                    <Typography variant="caption">3</Typography>
                                    <LinearProgress sx={{ flexGrow: 1 }} color="inherit" value={0} />
                                    <Typography variant="caption">[0]</Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={1}>
                                    <Typography variant="caption">2</Typography>
                                    <LinearProgress sx={{ flexGrow: 1 }} color="inherit" value={0} />
                                    <Typography variant="caption">[0]</Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={1}>
                                    <Typography variant="caption">1</Typography>
                                    <LinearProgress sx={{ flexGrow: 1 }} color="inherit" value={0} />
                                    <Typography variant="caption">[0]</Typography>
                                </Box>
                            </Stack>

                        </Box>
                    </Box>
                    <Box p={1} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'} gap={1}>
                        <Typography variant="h6">SubScription</Typography>
                        <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Box>
                </CustomTabs>
            </Grid>

            <Grid item xs={12} md={4} >
                <Grid container spacing={2}>
            <Grid item xs={12}>
            <ProgressCard/>
            </Grid>
            <Grid item xs={12}>
            <CourseList/>
            </Grid>
            </Grid>
            </Grid>


        </Grid>
    )
}
export default LessonContinueSection