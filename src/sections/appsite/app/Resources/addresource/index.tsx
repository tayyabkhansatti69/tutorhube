// import ClearIcon from '@mui/icons-material/Clear';
// import IconAttachment from "@/src/assets/icons/iconAttachment";
import { CustomModal, CustomTabs } from "@/src/components";
import { FormProvider, RHFTextField } from "@/src/components/rhf";
import { RHFUploadSingleFileWithPreview } from "@/src/components/rhf/rhf-upload";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid2,} from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';


function AddResources(props: any) {
    const { openChooseAnswer, setOpenChooseAnswer, } = props;

    const FormSchema = Yup.object().shape({
        title: Yup.string().required('Question is required'),
        description: Yup.string().required('Description is required'),
        link: Yup.string(),
        file: Yup.string(),

    });

    // Initialize the form with validation schema
    const methods = useForm<any>({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            title: '',
            description: '',
            link: '', // Do not set initial options here
            file: '',
        },
    });

    const { handleSubmit, } = methods;



    const onSubmit = (data: any) => {
        console.log("Form Data: ", data);
    };

    return (
        <CustomModal
            isOpen={openChooseAnswer}
            onClose={() => setOpenChooseAnswer(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            headerLabel="Edit"
            headerTypographyProps={{ color: '#FFFFFF' }}
            closeButtonProps={{ onClick: () => setOpenChooseAnswer(false) }}
            rootSx={{
                maxWidth: { md: 400, xs: 300, sm: 350 },

            }}
        >

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Grid2 container spacing={2} padding={'16px'}>

                    <Grid2 size={{ xs: 12 }}>
                        <RHFTextField size="small" name="question" fullWidth label="Question" placeholder="Enter The Question" />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <RHFTextField name="description" size="small" fullWidth label="Description" placeholder="Enter The Description" multiline rows={2} />
                    </Grid2>
                    <CustomTabs tabsNameArray={["Paste link", "Upload File",]}>
                        
                    <Grid2 size={{ xs: 12 }}>
                        <RHFTextField size="small" name="link" fullWidth label="Link" placeholder="Enter The Link" />
                    </Grid2>
                        <Grid2 size={{ xs: 12,md:12}} alignItems={'center'}>
                            <RHFUploadSingleFileWithPreview name="file" fullWidth
                                label="Upload your Video of leactur here " />
                        </Grid2>
                    </CustomTabs>

                    <Grid2 size={{ xs: 12 }}>
                        
                            <Button variant="contained" fullWidth type="submit">
                                Submit
                            </Button>
                        
                    </Grid2>
                </Grid2>
            </FormProvider>
        </CustomModal>
    );
}

export default AddResources;
