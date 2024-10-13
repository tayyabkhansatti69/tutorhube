import IconBrainCloud from "@/src/assets/icons/Icon-brain-cloud";
import IconAttachment from "@/src/assets/icons/iconAttachment";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import IconGrammar from "@/src/assets/icons/resource/IconGrammer";
import IconListening from "@/src/assets/icons/resource/IconListen";
import IconSpeaking from "@/src/assets/icons/resource/iconSpeaking";
import IconWriting from "@/src/assets/icons/resource/iconWriting";
import IconOtherSkills from "@/src/assets/icons/resource/IconOtherSkills";
import IconReading from "@/src/assets/icons/resource/IconReading";
import IconPresentSample from "@/src/assets/icons/resource/IconPresentSample";
import IconAudio24 from "@/src/assets/icons/resource/IconAudio24";
import IconLecture23 from "@/src/assets/icons/resource/IconLecture23";
import IconFile3 from "@/src/assets/icons/resource/IconFile3";
import IconLectureContant from "@/src/assets/icons/resource/IconLectureContant";
import IconDataStock from "@/src/assets/icons/resource/IconDataStock";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddResources from "./addresource";
import { useRouter } from "next/navigation";

function ResourcesSection() {
  const data = [
    {
      header: "Grammar",
      HeadIcon: IconGrammar,
      headIconBgColor: "#E4F8FFE5",
      subtitle: "Present Sample",
      SubtitleIcon: IconPresentSample,
    },
    {
      header: "Listening",
      HeadIcon: IconListening,
      headIconBgColor: "#EBEBFF",
      subtitle: "Audio 24",
      SubtitleIcon: IconAudio24,
    },
    {
      header: "Speaking",
      HeadIcon: IconSpeaking,
      headIconBgColor: "#D0E0FF",
      subtitle: "Lecture 23",
      SubtitleIcon: IconLecture23,
    },
    {
      header: "Reading",
      HeadIcon: IconReading,
      headIconBgColor: "#E1F7E3",
      subtitle: "File 3",
      SubtitleIcon: IconFile3,
    },
    {
      header: "Writing",
      HeadIcon: IconWriting,
      headIconBgColor: "#D1FAE5",
      subtitle: "Lecture Content",
      SubtitleIcon: IconLectureContant,
    },
    {
      header: "Other Skills",
      HeadIcon: IconOtherSkills,
      headIconBgColor: "#FEF3C7",
      subtitle: "Data stock",
      SubtitleIcon: IconDataStock,
    },
  ];
  return (
    <Grid mt={7} p={5} spacing={2} container>
      {data.map((item) => (
        <Card key={item.header} {...item} />
      ))}
      <Grid item xs={12} display="flex" flexDirection={'row'} alignItems={'flex-end'} justifyContent={'flex-end'}>
        <Box >
          <Button variant="contained" sx={{ background: '#2F2D82', color: 'white' }}>
            Create Card
          </Button>


        </Box>
      </Grid>
    </Grid>
  );
}

export default ResourcesSection;

const Card = ({
  header,
  subtitle,
  HeadIcon,
  headIconBgColor,

}: any) => {

const router=useRouter()
  const [openChooseAnswer, setOpenChooseAnswer] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid xs={12} lg={4} item>
      <Paper
        variant="elevation"
        sx={{ p: 1, height: "fit-content" }}
        elevation={2}
      >
        <Stack gap={1}>
          <Stack gap={2} flexDirection={"row"} alignItems={"center"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1
              }}
            ><IconButton sx={{
              bgcolor: headIconBgColor,
              borderRadius: "50%",
            }}>
                <HeadIcon sx={{
                  width: "30px",
                  height: "30px",
                }} />
              </IconButton>
              <Typography variant="body1" fontWeight={"bold"} color="#1D2026">
                {header}
              </Typography>
            </Box>

            <IconButton sx={{ ml: 'auto' }} id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          </Stack>



          <Stack gap={2} flexDirection={"row"} alignItems={"center"} justifyContent={'flex-start'}>
            <Typography variant="body1" fontWeight={"bold"} color="#1D2026">
              Recent
            </Typography>
            <Box ml={"auto"} sx={{cursor:'pointer'}} onClick={()=>{router?.push('/resources/grammer')}}>
              <Typography variant="caption" fontWeight={600} sx={{ color: '#16A2C4' }}>See all</Typography>
            </Box>
          </Stack>

          <Stack mt={1} mb={1} justifyContent={'center'} alignItems={"center"}>

            <IconBrainCloud />

          </Stack>
          <Stack
            sx={{ bgcolor: "#E0E7FF", p: 1, borderRadius: 2, mb: 1, mt: 1 }}
            gap={2}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <IconAttachment />
            <Typography variant="body1" color="#374151">
              {subtitle}
            </Typography>

          </Stack>
        </Stack>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => { setOpenChooseAnswer(true) }}><BorderColorIcon sx={{ color: "#16A2C4" }} /></MenuItem>
          <MenuItem onClick={handleClose}><DeleteIcon sx={{ color: "error.main" }} /></MenuItem>

        </Menu>
      </Paper>
      {openChooseAnswer && (
        <AddResources openChooseAnswer={openChooseAnswer} setOpenChooseAnswer={setOpenChooseAnswer} />
      )}
    </Grid>
  );
};
