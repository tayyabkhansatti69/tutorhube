import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import personMale from "@/src/assets/png/maleperson.jpeg";
import { CustomChip, CustomTable, TableHeader } from "@/src/components";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Grid,
    IconButton,
    Paper,
    Typography
} from "@mui/material";
import { useState } from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function UserManagmentSection() {

    const [showFilter, setShowFilter] = useState(false);
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
            header: () => <span>Name</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.studentID ?? "-",
            id: "studentID",
            cell: (info: any) => info.getValue(),
            header: () => <span>ID</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.pricePerLesson ?? "-",
            id: "pricePerlesson",
            cell: (info: any) => `$ ${info.getValue()}`,
            header: () => <span>Balance</span>,
            isSortable: false,
        },
        {
            accessorFn: (row: any) => row.joinDate ?? "-",
            id: "joinDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Acount Type</span>,
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
            accessorFn: (row: any) => row.prepaidBalance ?? "-",
            id: "prepaidBalance",
            cell: (info: any) => {
                return (
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <CustomChip
                            variant={info.getValue() === "Active" ? "success" : "danger"}
                            rootSx={{
                                fontSize: 11,
                            }}
                            ChipProps={{ label: `${info.getValue()}` }}
                        />
                    </Box>
                );
            },
            header: () => <span>User Status</span>,
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
                            <MoreHorizIcon />
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
        const studentIDs = ["S001", "S002", "S003", "S004"];
        const pricePerLessons = [20, 25, 30, 35];
        const joinDates = ["2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01"];
        const prepaidBalances = ["Active", "deleted"];

        const getRandomElement = (arr: any) =>
            arr[Math.floor(Math.random() * arr.length)];

        return Array.from({ length: count }, (_, index) => ({
            id: index,
            Name: getRandomElement(names),
            studentID: getRandomElement(studentIDs),
            pricePerLesson: getRandomElement(pricePerLessons),
            joinDate: getRandomElement(joinDates),
            prepaidBalance: getRandomElement(prepaidBalances),
            Assigned: Math.random() < 0.5, // Randomly assign Assigned as true or false
        }));
    };

    // Example usage:
    const dummyData = generateDummyData(10);
    return (
        <Grid px={2} pt={7} container>
            <Grid xs={12} px={4} item>
                <Paper variant="elevation" elevation={2}>
                    <Box>
                        <Box px={2} pt={2} my={1} >
                            <Button
                                endIcon={
                                    showFilter ? (
                                        <KeyboardArrowUpIcon
                                            sx={{
                                                color: "text.primary",
                                            }}
                                        />
                                    ) : (
                                        <KeyboardArrowDownIcon
                                            sx={{
                                                color: "text.primary",
                                            }}
                                        />
                                    )
                                }
                                onClick={() => {
                                    showFilter ? setShowFilter(false) : setShowFilter(true);
                                }}
                                sx={{
                                    color: "text.primary",
                                    border: `1px solid`,
                                    borderColor: "neutral.300",
                                    borderRadius: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "7px 12px",
                                    mr: 1,
                                }}
                            >
                                Filter
                            </Button>
                            {showFilter && (
                                <TableHeader
                                    gridProps={{ lg: 2 }}
                                    tableHeaderData={[
                                        {
                                            type: "search",
                                            FieldProps: { name: "search", placeholder: "Search" },
                                        },
                                        {
                                            type: "select",
                                            FieldProps: {
                                                name: "langauage",
                                                label: "Native Langauage",
                                                sx: { '& .css-a6lwaf-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select': { height: '2em', textAlign: { md: "start" } } }
                                            },
                                            options: [
                                                { label: "Open", value: "Open" },
                                                { label: "Closed", value: "Close" },
                                                { label: "Draft", value: "Draft" },
                                            ],
                                        },
                                        {
                                            type: 'date',

                                            FieldProps: {
                                                name: 'startDate',
                                                label: 'Start Date',
                                                minDateName: 'endDate',

                                            },
                                        },
                                        {
                                            type: "select",
                                            FieldProps: {
                                                name: "course",
                                                label: "Select Coures",
                                                sx: { '& .css-a6lwaf-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select': { height: '2em', textAlign: { md: "start" } } }
                                            },
                                            options: [
                                                { label: "Open", value: "Open" },
                                                { label: "Closed", value: "Close" },
                                                { label: "Draft", value: "Draft" },
                                            ],
                                        },
                                    ]}
                                />
                            )}
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
            </Grid>
        </Grid>
    );
}

export default UserManagmentSection;
