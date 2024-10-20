
import personMale from "@/src/assets/png/maleperson.jpeg";
import {  CustomTable, } from "@/src/components";
import {
    Avatar,
    Box,
    Checkbox,
    Grid,
    IconButton,
    Paper,
    Typography
} from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DashboardCards from "./headerSection";

function AdminDashboardSection() {


    const columns = [
        {
            id: "select",
            header: ({ table }: any) => {
                return (
                    <Box>
                        <Checkbox
                            checked={table.getIsAllRowsSelected()}
                            onChange={table.getToggleAllRowsSelectedHandler()}
                        />
                    </Box>
                );
            },
            cell: ({ row }: any) => (
                <Box>
                    <Checkbox
                        disabled={row?.original?.Assigned}
                        checked={row?.original?.Assigned ? false : row.getIsSelected()}
                        onChange={row.getToggleSelectedHandler()}
                    />
                </Box>
            ),
        },
        {
            accessorFn: (row: any) => row.Name ?? "-",
            id: "Name",
            cell: (info: any) => (
                <Box display={"flex"} gap={2} alignItems={"center"}>
                    <Avatar
                        variant="circular"
                        src={personMale.src}
                        alt={info.getValue()}
                    />
                    <Typography variant="subtitle1" fontWeight={600} color="#374557">
                        {info.getValue()}
                    </Typography>
                </Box>
            ),
            header: () => <span> Teacher Name</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.course ?? "-",
            id: "course",
            cell: (info: any) => info.getValue(),
            header: () => <span>Course Name</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.subject ?? "-",
            id: "subject",
            cell: (info: any) => `$ ${info.getValue()}`,
            header: () => <span>Subject</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.joinDate ?? "-",
            id: "joinDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Join Date</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.Action ?? "-",
            id: "Action",
            cell: () => {
                return (
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        gap={1}
                    >
                        <IconButton>
                            <RemoveRedEyeIcon />
                        </IconButton>
                        <IconButton>
                            <CheckCircleOutlineIcon />
                        </IconButton>
                        <IconButton>
                            <HighlightOffIcon />
                        </IconButton>
                    </Box>
                );
            },
            header: () => <span>Action</span>,
            isSortable: false,
        },
    ];
    const generateDummyData = (count: number) => {
        const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
        const courses = ["S001", "S002", "S003", "S004"];
        const subjects = [20, 25, 30, 35];
        const joinDates = ["2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01"];
        

        const getRandomElement = (arr: any) =>
            arr[Math.floor(Math.random() * arr.length)];

        return Array.from({ length: count }, (_, index) => ({
            id: index,
            Name: getRandomElement(names),
            course: getRandomElement(courses),
            subject: getRandomElement(subjects),
            joinDate: getRandomElement(joinDates),
            Assigned: Math.random() < 0.5, // Randomly assign Assigned as true or false
        }));
    };

    // Example usage:
    const dummyData = generateDummyData(10);
    return (
        <Grid px={2} pt={7} container>
            <Grid item xs={12} px={3}>
                <DashboardCards/>
            </Grid>
            <Grid item xs={12} px={3} mt={4} mb={4}>
                <Typography variant="h5" fontWeight={'bold'}>Pending Approvals</Typography>
            </Grid>
            <Grid xs={12} px={3} item>
                <Paper variant="elevation" elevation={2}>
                    <Box p={1}>
                        
                        <CustomTable
                            columns={columns}
                            data={dummyData}
                            isLoading={false}
                            isError={false}
                            isSuccess={true}
                            isFetching={false}
                            isPagination={true}
                        />
                    </Box>


                </Paper>
            </Grid>
        </Grid>
    );
}

export default AdminDashboardSection;
