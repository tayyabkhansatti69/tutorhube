// import {
//   RHFSelect,
//   // RHFTelInput,
//   RHFTextField
// } from "@/components/rhf";
// import { RHFUploadSingleFileWithoutPreview } from "@/components/rhf/rhf-upload";
import { RHFAutocompleteSync, RHFTextField } from "@/src/components/rhf";
import { RHFUploadSingleFileWithoutPreview } from "@/src/components/rhf/rhf-upload";
import {
  Grid
} from "@mui/material";

function WorkDetailsForm() {
  return (
    <Grid container>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Major *"
          fullWidth
          name="major"
          placeholder="e.g english"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Subject *"
          fullWidth
          name="subject"
          placeholder="Enter subject"
        />
      </Grid>
      

      <Grid xs={12} sm={6} p={1} item>
        
        <RHFAutocompleteSync
              required
              label="Level *"
              fullWidth
              name="level"
              placeholder="Select Grade"
              options={[
                { id: 1, name: "1", value: "1" },
                { id: 2, name: "2", value: "2" },
                { id: 3, name: "3", value: "3" },
                { id: 4, name: "4", value: "4" },
                { id: 5, name: "5", value: "5" },
                { id: 6, name: "6", value: "6" },
                { id: 7, name: "7", value: "7" },
              ]}
            />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Year of experience *"
          fullWidth
          name="experience"
          placeholder="Enter Year of experience"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFUploadSingleFileWithoutPreview
          placeholder="Upload cv "
          label="Attach cv"
          name="cv"
          accept=".doc, .docx, .pdf, .rtf"
        />
      </Grid>
      
    </Grid>
  )
}

export default WorkDetailsForm
