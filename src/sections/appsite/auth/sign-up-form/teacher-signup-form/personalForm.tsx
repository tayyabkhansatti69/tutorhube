
import { RHFAutocompleteSync,  RHFTelInput, RHFTextField } from "@/src/components/rhf";
import { RHFUploadSingleFileWithoutPreview } from "@/src/components/rhf/rhf-upload";
import { Grid } from "@mui/material";

function PersonalForm() {
  return (
    <Grid container>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Name *"
          fullWidth
          name="name"
          placeholder="Enter Name Here"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Email *"
          fullWidth
          name="email"
          placeholder="Enter Email Here"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTelInput
          label="Phone *"
          fullWidth
          name="phone_no"
          placeholder="+xx xxxx xxxx"
        />
      </Grid>

      <Grid xs={12} sm={6} p={1} item>
      <RHFAutocompleteSync
              required
              label="Gender *"
              fullWidth
              name="gender"
              placeholder="Select Grade"
              options={[
                { id: 1, name: "Male", value: "male" },
                { id: 2, name: "Female", value: "female" },
                { id: 3, name: "other", value: "other" },
                
              ]}
            />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Age *"
          fullWidth
          name="age"
          placeholder="Enter Age "
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFUploadSingleFileWithoutPreview
          placeholder="Upload Photo .jpeg , .png , .jpg"
          label="Photo *"
          name="profile_image"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="password"
          fullWidth
          label="Password *"
          name="password"
          placeholder="Enter Password Here"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="password"
          fullWidth
          label="confirm Password *"
          name="confirm_password"
          placeholder="Enter Password Here"
        />
      </Grid>
    </Grid>
  );
}

export default PersonalForm;
