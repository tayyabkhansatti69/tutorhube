import { useEffect } from 'react';
import { CustomModal } from "@/src/components";
import { FormProvider, RHFTextField } from "@/src/components/rhf";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid2 } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import * as Yup from 'yup';

// Define the TypeScript interface for the form fields
interface FormValues {
    question: string;
    description: string;
    options: string[];
}

function ChooseCorrectAnswer(props: any) {
    const { openChooseAnswer, setOpenChooseAnswer, questionTypeEnter } = props;

    const FormSchema = Yup.object().shape({
        question: Yup.string().required('Question is required'),
        description: Yup.string().required('Description is required'),
        options: Yup.array().of(Yup.string().required('Option is required')).min(4, 'At least 4 options are required'),
    });

    // Initialize the form with validation schema
    const methods = useForm<any>({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            question: '',
            description: '',
            options: []  // Do not set initial options here
        },
    });

    const { handleSubmit, control } = methods;

    const { fields, append, remove } = useFieldArray({
        control,
        name: "options",  // Specify the field array name as part of the defined interface
    });

    // Initialize with 4 empty options on component mount
    useEffect(() => {
        if (fields.length === 0) {
            // Append 4 options if none exist
            for (let i = 0; i < 4; i++) {
                append('');
            }
        }
    }, [append, fields.length]);

    const onSubmit = (data: FormValues) => {
        console.log("Form Data: ", data);
    };

    return (
        <CustomModal
            isOpen={openChooseAnswer}
            onClose={() => setOpenChooseAnswer(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            headerLabel={questionTypeEnter?.[0]?.name}
            closeButtonProps={{ onClick: () => setOpenChooseAnswer(false) }}
            rootSx={{
                maxWidth: 600,
                maxHeight: 600, // Set a maximum height for the modal
                overflowY: 'auto',
                
            }}
        >
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Grid2 container spacing={2} padding={'16px'}>
                    <Grid2 size={{ xs: 12 }}>
                        <RHFTextField name="question" fullWidth label="Question" placeholder="Enter The Question" />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <RHFTextField name="description" fullWidth label="Description" placeholder="Enter The Description" multiline rows={3} />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }}>
                        {fields.map((item, index) => (
                            <Box key={item.id} display={'flex'} alignItems="center" mb={1} mt={1}>
                                <Grid2 size={{ xs: fields.length > 4 && index >= 4 ? 12 : 12 }}>
                                    <RHFTextField
                                        name={`options.${index}`}
                                        label={`Option ${String.fromCharCode(65 + index)}`} // A, B, C, D, etc.
                                        fullWidth
                                        size="small"
                                        placeholder={`Enter option ${String.fromCharCode(65 + index)}`}
                                    />
                                </Grid2>
                                {fields.length > 4 && (
                                    <Grid2 size={{ xs: 2 }}>
                                        <Button type="button" onClick={() => remove(index)}>
                                            Delete
                                        </Button>
                                    </Grid2>
                                )}
                            </Box>
                        ))}
                    </Grid2>

                    <Grid2 size={{ xs: 12 }} display="flex" justifyContent="flex-start">
                        <Button
                            type="button"
                            size='small'
                            variant="outlined"
                            onClick={() => append('')}
                        >
                            + Add Option
                        </Button>
                    </Grid2>

                    <Grid2 size={{ xs: 12 }}>
                        <Box display="flex" justifyContent="center" gap={2}>
                            <Button variant="contained" fullWidth type="submit">
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ background: '#C65468' }}
                                onClick={() => setOpenChooseAnswer(false)}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </FormProvider>
        </CustomModal>
    );
}

export default ChooseCorrectAnswer;
