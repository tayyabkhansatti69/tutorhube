import { FormProvider, RHFAutocompleteSync, RHFDatePicker, RHFEditor, RHFTextField } from "@/src/components/rhf";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid2, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FlagIcon from '@mui/icons-material/Flag';
import * as Yup from 'yup';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useRouter } from "next/navigation";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

function CreateExam() {
    const router = useRouter()
    const FormSchema = Yup.object().shape({
        editor: Yup.string().required("Editor is required").max(200),

    });

    // Initialize the form with validation schema
    const methods = useForm<any>({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            editor: ''
        },
    });

    const { handleSubmit, } = methods;



    const onSubmit = (data: any) => {
        console.log("Form Data: ", data);
    };
    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid2 px={2} pt={7} container>
                <Grid2 size={{ xs: 12 }}>
                    <Paper variant="elevation" elevation={2} sx={{ padding: 2 }} >
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'} gap={2}>
                            <IconButton onClick={() => { router?.push('/exam') }}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography variant="h5">Exam</Typography>
                            <IconButton>
                                <BorderColorIcon />
                            </IconButton>
                        </Box>
                        <Box p={2} mt={1} mb={1}>
                            <Typography variant="h5">Main Details</Typography>
                        </Box>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xs: 12, md: 9 }}>
                                <Typography variant="body1" fontWeight={700}>Instruction</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 9 }}>

                                <RHFEditor name="editor" />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 9 }}>
                                <Typography variant="body1" fontWeight={700}>Exam Duration</Typography>
                            </Grid2>
                            <Grid2 container alignItems="center" size={{ xs: 12, md: 8 }}>
                                <Grid2 size={{ xs: 10, md: 4 }}>
                                    <RHFAutocompleteSync
                                        name='hours'
                                        placeholder="Hour"
                                        size="small"
                                        options={[
                                            { id: 1, name: '30 min', value: '30min' },
                                            { id: 2, name: '1 hour', value: '1hour' },
                                            { id: 3, name: '1.5 hour', value: '1.5hour' },
                                            { id: 4, name: '2 hours', value: '2hours' },
                                            { id: 5, name: '2.5 hours', value: '2.5hours' },
                                        ]}
                                    />
                                </Grid2>

                                <Grid2 size={{ xs: 10, md: 4 }}>
                                    <RHFAutocompleteSync
                                        name='mintues'
                                        placeholder="minutes"
                                        size="small"
                                        options={[
                                            { id: 1, name: '10 min', value: '10min' },
                                            { id: 2, name: '20 min', value: '20min' },
                                            { id: 3, name: '30 min', value: '30min' },
                                            { id: 4, name: '40 min', value: '40min' },
                                            { id: 5, name: '50 min', value: '50min' },
                                        ]}
                                    />

                                </Grid2>
                            </Grid2>


                            <Grid2 container alignItems="center" size={{ xs: 12, md: 9 }}>
                                <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'} gap={2}>
                                    <Button variant="contained" sx={{ background: '#2F2D82' }}>
                                        Attach File
                                    </Button>

                                    <Button variant="contained" startIcon={<KeyboardVoiceIcon sx={{ color: '#FFF' }} />} sx={{ background: '#2F2D82' }}>

                                    </Button>


                                    <Button variant="contained" sx={{ background: '#2F2D82' }}>
                                        Scheduale
                                    </Button>

                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 9 }}>
                                <Typography variant="body1" fontWeight={700}>Publish Status</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 9 }}>
                                <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'} gap={2}>
                                    <Button variant="contained" startIcon={<FlagIcon sx={{ color: '#000000' }} />} sx={{ background: '#FEF2F2', color: '#000000' }}>
                                        Public
                                    </Button>
                                    <Button variant="contained" startIcon={<FlagIcon sx={{ color: '#FFFF' }} />} sx={{ color: '#FFF' }}>
                                        Private
                                    </Button>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 9 }}>
                                <Typography variant="body1" fontWeight={700}>Courses</Typography>
                            </Grid2>
                            <Grid2 container alignItems="center" size={{ xs: 12, md: 6 }}>
                                <Grid2 size={{ xs: 10, md: 10 }}>
                                    <RHFAutocompleteSync
                                        name='course'
                                        placeholder="Course"
                                        size="small"
                                        options={[
                                            { id: 1, name: 'multiple choice', value: 'hourly' },
                                            { id: 2, name: 'true false', value: 'weekly' },
                                            { id: 3, name: 'matching Answer', value: 'monthly' },
                                            { id: 4, name: 'choose the correct answer', value: 'monthly' },
                                            { id: 5, name: 'Drag and Drop', value: 'monthly' },
                                        ]}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 2, md: 1 }}>
                                </Grid2>
                            </Grid2>

                            <Grid2 container alignItems="center" size={{ xs: 12, md: 6 }}>
                                <Grid2 size={{ xs: 10, md: 10 }}>
                                    <RHFAutocompleteSync
                                        name='student'
                                        placeholder="Select Student"
                                        size="small"
                                        options={[
                                            { id: 1, name: 'multiple choice', value: 'hourly' },
                                            { id: 2, name: 'true false', value: 'weekly' },
                                            { id: 3, name: 'matching Answer', value: 'monthly' },
                                            { id: 4, name: 'choose the correct answer', value: 'monthly' },
                                            { id: 5, name: 'Drag and Drop', value: 'monthly' },
                                        ]}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 2, md: 1 }}>

                                </Grid2>
                            </Grid2>

                            <Grid2 container alignItems="center" size={{ xs: 12, md: 6 }}>
                                <Grid2 size={{ xs: 10, md: 10 }}>
                                    <RHFDatePicker name="startDate" label="Exam Start Date" />
                                </Grid2>
                                <Grid2 size={{ xs: 2, md: 1 }}>
                                </Grid2>
                            </Grid2>

                            <Grid2 container alignItems="center" size={{ xs: 12, md: 6 }}>
                                <Grid2 size={{ xs: 10, md: 10 }}>
                                    <RHFDatePicker name="dueDate" label="Exam End Date" />
                                </Grid2>
                                <Grid2 size={{ xs: 2, md: 1 }}>

                                </Grid2>
                            </Grid2>
                            <Grid2 container alignItems="center" size={{ xs: 12, md: 6 }}>
                                <Grid2 size={{ xs: 10, md: 10 }}>

                                    <RHFAutocompleteSync
                                        name='examNavigation'
                                        label='Exam navigation'
                                        placeholder="Enter Quiz navigation"
                                        size="small"
                                        options={[
                                            { id: 1, name: 'multiple choice', value: 'hourly' },
                                            { id: 2, name: 'true false', value: 'weekly' },
                                            { id: 3, name: 'matching Answer', value: 'monthly' },
                                            { id: 4, name: 'choose the correct answer', value: 'monthly' },
                                            { id: 5, name: 'Drag and Drop', value: 'monthly' },
                                        ]}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 2, md: 1 }}>
                                    <Tooltip title="Question by question - students can't proceed to next question without submitting current one, and can't go back to previous questions.
Section by section - Students can navigate between questions in the same section, and can't move on to next section without answering all questions in section.
One Page - All sections and question will be displayed in one page">
                                        <IconButton sx={{ mr: { xs: 1, lg: 3 } }}>
                                            <ErrorOutlineIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Grid2>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 9 }}>
                                <Typography variant="body1" fontWeight={700}>Grading</Typography>
                            </Grid2>
                            <Grid2 container alignItems="center" size={{ xs: 12, md: 6 }}>
                                <Grid2 size={{ xs: 10, md: 10 }}>
                                    <RHFTextField
                                        name='passgrade'
                                        size="small"
                                        label="Pass grade"
                                        fullWidth
                                        placeholder="Enter Pass grade"
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 2, md: 1 }}>

                                </Grid2>
                            </Grid2>
                            <Grid2 container alignItems="center" size={{ xs: 12, md: 6 }}>
                                <Grid2 size={{ xs: 10, md: 10 }}>
                                    <RHFTextField
                                        name='maxGrade'
                                        size="small"
                                        label="Max grade"
                                        fullWidth
                                        placeholder="Enter Max grade"
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 2, md: 1 }}>

                                </Grid2>
                            </Grid2>


                            <Grid2 size={{ xs: 12, md: 9 }}>
                                <Button variant="contained" sx={{ background: '#2F2D82' }}>
                                    Save and Add Question
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Paper>
                </Grid2>
            </Grid2>

        </FormProvider>

    )

}
export default CreateExam