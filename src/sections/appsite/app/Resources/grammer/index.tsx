import { DeleteOutlineIcon } from "@/src/assets/icons/delete-outline-icon";
import { CustomTable, TableHeader } from "@/src/components";
// import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
    Box,
    Button,
    Checkbox,
    Grid2,
    IconButton,
    Paper,
    Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GrammerSection() {
    const router = useRouter();

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
            accessorFn: (row: any) => row.title ?? "-",
            id: "title",
            cell: (info: any) => info.getValue(),
            header: () => <span>Title</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.description ?? "-",
            id: "description",
            cell: (info: any) => info.getValue(),
            header: () => <span>Description</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.link ?? "-",
            id: "link",
            cell: (info: any) => info.getValue(),
            header: () => <span>Link</span>,
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

                    >
                        <IconButton>
                            <BorderColorIcon sx={{ color: '#16A2C4' }} />
                        </IconButton>
                        <IconButton>
                            <DeleteOutlineIcon sx={{ color: '#EF4444', width: '24px', height: '26.66' }} />
                        </IconButton>
                    </Box>
                );
            },
            header: () => <span>Action</span>,
            isSortable: false,
        },
    ];
    const generateDummyData = (count: number) => {
        const title = ["present sample", "present sample",];
        const description = ["how to write article in ILETS session", "how to write article in ILETS session"];
        const link = ['http/youtube.com', 'http/youtube.com'];



        const getRandomElement = (arr: any) =>
            arr[Math.floor(Math.random() * arr.length)];

        return Array.from({ length: count }, (_, index) => ({
            id: index,
            title: getRandomElement(title),
            description: getRandomElement(description),
            link: getRandomElement(link),

            Assigned: Math.random() < 0.5, // Randomly assign Assigned as true or false
        }));
    };

    // Example usage:
    const dummyData = generateDummyData(2);

    const handleClickAdd = () => {
        router?.push("/resources")
    }

    return (
        <Grid2 px={2} pt={7} container>

            <Grid2 size={{ xs: 12 }} px={4} alignItems={'center'} display={'flex'} justifyContent={'space-between'} mb={1} >

                <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'} gap={1}>
                   <IconButton onClick={handleClickAdd}>
                    <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6">Grammer</Typography>
                </Box>

                <Button variant="contained" endIcon={<KeyboardArrowDownIcon sx={{ color: 'white', }} />}  >
                    Action
                </Button>
            </Grid2>

            <Grid2 size={{ xs: 12 }} px={4} >
                <Paper variant="elevation" elevation={2}>

                    <Box>
                        <Box px={2} my={1} pt={1} >
                            <TableHeader
                                tableHeaderData={[
                                    {
                                        type: "search",
                                        FieldProps: { name: "search", placeholder: "Search" },
                                    },
                                ]}
                            />
                        </Box>

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
            </Grid2>
        </Grid2>
    );
}

export default GrammerSection;
