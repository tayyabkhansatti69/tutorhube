import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// import SquareIcon from "@mui/icons-material/Square";
import "./calendar-style.scss";

export function MyCalendar(): JSX.Element {

  // let schedules = [];
  // let reminders = [];
  // date time filters
  const todayDate = dayjs().format("YYYY-MM-DD");
  // const todayTime: string|undefined = dayjs().format("HH:mm:ss");
  const [dateFilter, setDateFilter] = useState<any>({
    date: todayDate,
    time: undefined,
  });

  const calendarRef = useRef<any>(null);

  console.log(setDateFilter)
  calendarRef.current?.getApi()?.gotoDate(dateFilter.date);
  const events = [{ title: "Course Name", start: new Date() }];

  // Function to handle navigation to the next month

  function getBackground(identifier: string | undefined): string {
    switch (identifier) {
      case "reminder":
        return "#ea5454";
      case "demo":
        return "#7a5af8";
      default:
        return "#3269D3";
    }
  }

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (calendarRef.current) {
      setTitle(calendarRef.current.getApi().view.title);
    }
  }, []);

  const handlePrev = () => {
    calendarRef.current.getApi().prev();
    setTitle(calendarRef.current.getApi().view.title);
  };

  const handleNext = () => {
    calendarRef.current.getApi().next();
    setTitle(calendarRef.current.getApi().view.title);
  };

  const eff = calendarRef.current?.getApi();
  console.log(eff)


  return (
    <>
      <Grid
        container
        textAlign="center"
        // position="relative"
        // height="100vh"
        // width="100%"
        boxShadow={1}
        p={3}
        sx={{
          "& ::-webkit-scrollbar": {
            width: "3px",
            backgroundColor: " #f5f5f5",
            borderRadius: "10px",
            height: "4px",
            cursor: "pointer",
          },

          "& ::-webkit-scrollbar-thumb": {
            backgroundColor: "#7a5af8",
            borderRadius: "10px",
            cursor: "pointer",
          },
        }}
      >
        <Grid item xs={12} mb={0} mt={2} >
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            {/* Start: First Stack aligned to the start */}
            <Box display="flex" flexDirection="row" alignItems="center">
              <IconButton onClick={handlePrev}>
                <KeyboardArrowLeftIcon />
              </IconButton>
              <Typography variant="h5" fontWeight={800} sx={{ fontSize: { md: '14px' } }} color="#374557">
                {title}
              </Typography>
              <IconButton onClick={handleNext}>
                <KeyboardArrowRightIcon />
              </IconButton>
            </Box>

            {/* End: Second Stack aligned to the end */}
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" ml="auto">
              <Typography
                variant="body2"
                sx={{
                  fontSize: 10,
                  padding: '4px 8px',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
              >
                Today
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: 10,
                  padding: '4px 8px',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: '4px',
                  marginLeft: '8px',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
              >
                Individual Course
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: 10,
                  padding: '4px 8px',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: '4px',
                  marginLeft: '8px',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                }}
              >
                Group Course
              </Typography>
            </Box>
          </Box>
        </Grid>



        <FullCalendar
          dayMaxEvents={2}
          ref={calendarRef}
          dayHeaderContent={(data: any) => (
            <Box p={1}><Typography variant="caption" sx={{ fontWeight: { md: 700 }, fontSize: { md: '10px', l: '12px' } }}>{dayjs(data?.date).format("dddd")}</Typography></Box>
          )}
          eventContent={(e) => (
            <Box
              p="2px 10px"
              width="200px"
              height="fit-content"
              display="flex"
              gap={1}
              overflow="hidden"
              alignItems="center"
              borderRadius={1}
              bgcolor={"white"}
              flexDirection={"column"}
              borderLeft={"10px solid"}
              borderColor={() => getBackground(e.event.classNames[0])}

            // bgcolor={() => getBackground(e.event.classNames[0])}
            >
              <Typography variant="subtitle1" fontWeight={600} sx={{ fontSize: { md: '10px' } }}>
                {e.event.title}
              </Typography>
              <Typography variant="caption" fontWeight={400} sx={{ fontSize: { md: '8px' } }}>
                {dayjs(e.event.start).format("hh:mm A")}
              </Typography>
            </Box>
          )}
          headerToolbar={false}
          titleFormat={{ year: "numeric", month: "long" }}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventTimeFormat={{
            hour: "numeric",
            meridiem: true,
          }}
        />
      </Grid>


    </>
  );
}

