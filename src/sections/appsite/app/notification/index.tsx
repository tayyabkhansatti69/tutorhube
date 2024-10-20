
import { CustomTabs,  } from "@/src/components";
import {
    
    Box,
    
    Grid,
    
    Paper,
    
} from "@mui/material";
import NotificationList from "./newTeacher";
import NewPayment from "./newPayment";
import SupportRequest from "./supportRequest";
function NotificationSection() {
 
  return (
    <Grid px={2} pt={7} container>
      <Grid xs={12} px={4} item>
        <Paper variant="elevation" elevation={2}>
          <CustomTabs tabsNameArray={["New Payment", "New Teacher Registered","Refund Action","Support Request"]}>
            <Box>
            <NewPayment/>            
            </Box>
            <Box>
            <NotificationList/>
            </Box>
            <Box>
             <NotificationList/>
            </Box>
            <Box>
             <SupportRequest/>
             </Box>

          </CustomTabs>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default NotificationSection;
