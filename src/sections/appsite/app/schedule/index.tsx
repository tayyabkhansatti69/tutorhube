// import { MyCalendar } from "@/components/calendar";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import { MyCalendar } from "@/src/components/calendar";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ScheduleSection() {
  return (
    <Grid p={6} mt={6} container>
      <Grid xs={12} md={8} lg={8}>
        <Paper variant="elevation" elevation={2}>
          <MyCalendar />
        </Paper>
      </Grid>
      <Grid xs={12} md={4} flexDirection={'column'} display={'flex'} columnSpacing={0} gap={2}>
        <Grid xs={12} px={1} lg={12}>
          <Paper variant="elevation" sx={{ p: 1 }} elevation={2}>
            <Stack gap={1} alignItems={"flex-start"} justifyContent={"center"}>
              <Typography variant="h4" sx={{ fontSize: { md: '16px' } }} color="#374557">
                Upcoming Task
              </Typography>
              <Box
                width={"100%"}
                borderRadius={1}
                boxShadow={1}
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  bgcolor: "#92D239",
                  p: 1,
                  color: "white",
                }}
              >
                <CircleIcon sx={{ fontSize: 12 }} />
                <Typography variant="body1" fontWeight={"bold"} sx={{ fontSize: { md: '14px' } }} color="white">
                  Set up availability
                </Typography>
              </Box>
              <Box
                width={"100%"}
                borderRadius={1}
                fontWeight={"bold"}
                boxShadow={1}
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  bgcolor: "#55BEE6",
                  p: 1,
                  color: "white",
                }}
              >
                <CircleIcon sx={{ fontSize: 12 }} />
                <Typography variant="body1" fontWeight={'bold'} sx={{ fontSize: { md: '14px' } }} color="white">
                  Add extra slots
                </Typography>
              </Box>
              <Box
                width={"100%"}
                borderRadius={1}
                fontWeight={"bold"}
                boxShadow={1}
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  bgcolor: "#EF4444",
                  p: 1,
                  color: "white",
                }}
              >
                <CircleIcon sx={{ fontSize: 12 }} />
                <Typography variant="body1" fontWeight={'bold'} sx={{ fontSize: { md: '14px' } }} color="white">
                  Add time off
                </Typography>
              </Box>

            </Stack>
          </Paper>
        </Grid>
        <Grid xs={12} px={1} lg={12}>
          <Paper variant="elevation" sx={{ p: 1 }} elevation={2}>
            <Stack gap={1}  alignItems={"flex-start"} justifyContent={"center"}>
              <Typography variant="h4" sx={{ md: { fontSize: '16px', fontWeight: { md: 600 } } }} color="#374557">
                Tags
              </Typography>

              {/* First row */}
              <Stack flexDirection={"row"} gap={4} justifyContent={'space-between'} display={'flex'}>
                <Box display="flex" gap={1} alignItems={"center"}>
                  <CircleIcon sx={{ fontSize: 16, color: "#3269D3" }} />
                  <Typography variant="body1" fontWeight={"bold"} sx={{ fontSize: { md: '12px' },fontWeight:{md:600}  }} color="#9A9A9A">
                    Lesson
                  </Typography>
                </Box>
                <Box display="flex" gap={1} alignItems={"center"}>
                  <CircleIcon sx={{ fontSize: 16, color: "#4CAF50" }} />
                  <Typography variant="body1" fontWeight={"bold"} sx={{ fontSize: { md: '12px' },fontWeight:{md:600} }} color="#9A9A9A">
                    Availability
                  </Typography>
                </Box>
              </Stack>

              {/* Second row */}
              <Stack flexDirection={"row"} gap={4} justifyContent={'space-between'} display={'flex'}>
                <Box display="flex" gap={1} alignItems={"center"}>
                  <CircleIcon sx={{ fontSize: 16, color: "#FC6B57" }} />
                  <Typography variant="body1" fontWeight={"bold"} sx={{ fontSize: { md: '12px' },fontWeight:{md:600} }} color="#9A9A9A">
                    Time off
                  </Typography>
                </Box>
                <Box  display="flex" gap={1} justifyContent={'center'} alignItems={"center"}>
                  <CircleIcon sx={{ fontSize: 16, color: "#D9D9D9" }} />
                  <Typography variant="body1" fontWeight={"bold"} sx={{ fontSize: { md: '12px' },fontWeight:{md:600} }} color="#9A9A9A">
                    Confirmed By student
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        <Grid xs={12} px={1} lg={12}>
          <Paper variant="elevation" sx={{ p: 1 }} elevation={2}>
            <Stack
              gap={1}
              mt={1}
              alignItems={"flex-start"}
              justifyContent={"center"}
            >
              <Typography variant="h4" sx={{fontSize:'16px'}} color="#374557">
                Upcoming Schedule
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  borderLeft: "8px solid",
                  borderColor: "#3269D3",
                  p: 1,
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  borderRadius: 1,
                  boxShadow: 1,
                }}
              >
                <Box
                  width="53px"
                  height={"53px"}
                  sx={{
                    bgcolor: "#DBDBDB",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2" sx={{fontSize:{md:'14px'}}} fontWeight={"bold"} color="#374557">
                    5
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:{md:'14px'}}} color="#374557">
                    Jan
                  </Typography>
                </Box>
                <Stack gap={1}>
                  <Typography variant="body1" fontWeight={"bold"} sx={{fontSize:{md:'14px'}}} color="#374557">
                    course name
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="#9A9A9A"
                    
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                      alignItems: "center",
                      fontSize:{md:'12px'}
                    }}
                  >
                    <AccessAlarmsIcon sx={{ fontSize: 14 }} />
                    07.00 - 08.00 AM
                  </Typography>
                </Stack>
                <Box ml={'auto'}>
                  <ArrowForwardIosIcon sx={{fontSize:16,color:'#3269D3'}}/>
                </Box>
              </Box>

            </Stack>
            <Stack
              gap={1}
              mt={1}
              alignItems={"flex-start"}
              justifyContent={"center"}
            >
             
              <Box
                sx={{
                  width: "100%",
                  borderLeft: "8px solid",
                  borderColor: "#4CAF50",
                  p: 1,
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  borderRadius: 1,
                  boxShadow: 1,
                }}
              >
                <Box
                  width="53px"
                  height={"53px"}
                  sx={{
                    bgcolor: "#DBDBDB",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2" sx={{fontSize:{md:'14px'}}} fontWeight={"bold"} color="#374557">
                    5
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:{md:'14px'}}} color="#374557">
                    Jan
                  </Typography>
                </Box>
                <Stack gap={1}>
                  <Typography variant="body1" fontWeight={"bold"} sx={{fontSize:{md:'14px'}}} color="#374557">
                    course name
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="#9A9A9A"
                    
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                      alignItems: "center",
                      fontSize:{md:'12px'}
                    }}
                  >
                    <AccessAlarmsIcon sx={{ fontSize: 14 }} />
                    07.00 - 08.00 AM
                  </Typography>
                </Stack>
                <Box ml={'auto'}>
                  <ArrowForwardIosIcon sx={{fontSize:16,color:'#3269D3'}}/>
                </Box>
              </Box>

            </Stack>
            <Stack
              gap={1}
              mt={1}
              alignItems={"flex-start"}
              justifyContent={"center"}
            >
              <Box
                sx={{
                  width: "100%",
                  borderLeft: "8px solid",
                  borderColor: "#4CAF50",
                  p: 1,
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  borderRadius: 1,
                  boxShadow: 1,
                }}
              >
                <Box
                  width="53px"
                  height={"53px"}
                  sx={{
                    bgcolor: "#DBDBDB",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2" sx={{fontSize:{md:'14px'}}} fontWeight={"bold"} color="#374557">
                    5
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:{md:'14px'}}} color="#374557">
                    Jan
                  </Typography>
                </Box>
                <Stack gap={1}>
                  <Typography variant="body1" fontWeight={"bold"} sx={{fontSize:{md:'14px'}}} color="#374557">
                    course name
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="#9A9A9A"
                    
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                      alignItems: "center",
                      fontSize:{md:'12px'}
                    }}
                  >
                    <AccessAlarmsIcon sx={{ fontSize: 14 }} />
                    07.00 - 08.00 AM
                  </Typography>
                </Stack>
                <Box ml={'auto'}>
                  <ArrowForwardIosIcon sx={{fontSize:16,color:'#3269D3'}}/>
                </Box>
              </Box>

            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ScheduleSection;
