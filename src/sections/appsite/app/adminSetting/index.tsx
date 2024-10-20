
import { CustomTable,  } from "@/src/components";

import {

    Box,
    Button,
    Checkbox,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import { useRouter } from "next/navigation";
function AdminSettingSection() {

    const router = useRouter()
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

                    <Typography variant="subtitle1" fontWeight={600} color="#374557">
                        {info.getValue()}
                    </Typography>
                </Box>
            ),
            header: () => <span>Name</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.ids ?? "-",
            id: "ids",
            cell: (info: any) => info.getValue(),
            header: () => <span>id</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.joinDate ?? "-",
            id: "joinDate",
            cell: (info: any) => `$ ${info.getValue()}`,
            header: () => <span>Joining Date</span>,
            isSortable: false,
        },

        {
            accessorFn: (row: any) => row.email ?? "-",
            id: "email",
            cell: (info: any) => info.getValue(),
            header: () => <span>Email</span>,
            isSortable: false,
        },

    ];
    const generateDummyData = (count: number) => {
        const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
        const ids = ["1", "2", "3", "4"];
        const joinDate = ['junuary 2,2020', 'junuary 2,2020', 'junuary 2,2020', 'junuary 2,2020'];

        const email = ["2o of 20", "2o of 20", '2o of 20', '2o of 20'];

        const getRandomElement = (arr: any) =>
            arr[Math.floor(Math.random() * arr.length)];

        return Array.from({ length: count }, (_, index) => ({
            id: index,
            Name: getRandomElement(names),
            ids: getRandomElement(ids),
            joinDate: getRandomElement(joinDate),

            email: getRandomElement(email),

        }));
    };
    const dummyData = generateDummyData(10);

    return (
        <Grid px={2} pt={7} container>
             <Grid xs={12} item>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} flexWrap={'nowrap'} alignItems={'end'} mr={4} mb={2}>

                <Button variant="contained" sx={{ backgroundColor: '#242459', color: '#FFF' }} onClick={() => { router?.push('/exam/quiz') }}>
                    Create Role
                </Button>
            </Box>
            </Grid>
            <Grid xs={12} px={4} mt={1} item>
                <Paper variant="elevation" elevation={2}>


                    

                    <CustomTable
                        columns={columns}
                        data={dummyData}
                        isLoading={false}
                        isError={false}
                        isSuccess={true}
                        isFetching={false}
                        isPagination={true}
                    />

                </Paper>
            </Grid>
        </Grid>
    );
}

export default AdminSettingSection;
