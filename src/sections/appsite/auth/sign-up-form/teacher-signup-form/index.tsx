import {
  Box,
  Button,
  Divider,
  // Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useRouter, useSearchParams } from "next/navigation";
// import {
//   FormProvider,
//   RHFSelect,
//   RHFTelInput,
//   RHFTextField,
// } from "@/components/rhf";
// import { RHFUploadSingleFileWithoutPreview } from "@/components/rhf/rhf-upload";
import { LoadingButton } from "@mui/lab";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import {
//   CustomChildRenderer,
//   CustomJobStepper,
//   StyledLink,
// } from "@/components";
import PersonalForm from "./personalForm";
import WorkDetailsForm from "./WorkDetailsForm";
import IntroVideoForm from "./IntroVideoForm";
import { CustomChildRenderer, CustomJobStepper, StyledLink } from "@/src/components";
import { FormProvider } from "@/src/components/rhf";
import { useSignUpMutation } from "@/src/services/auth-api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import toast from "react-hot-toast";
import { setLocalStorage } from "@/src/utils";

const steps = ["Personal", "Work Details", "Intro Video"];
export const Schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  // password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref('password')], 'Passwords must match')
  //   .required('Confirm Password is required'),
  // // rememberMe: Yup.boolean().oneOf([true], 'Terms and Conditions must be accepted').required('Terms and Conditions must be accepted'),
  // gender: Yup.string().optional(),
  // profile_image: Yup.string(),
  // age: Yup.number().positive('Age must be a positive number').integer('Age must be an integer').optional(),
  // major: Yup.string().optional(),
  // subject: Yup.string().optional(),
  // level: Yup.string().optional(),
  // experience: Yup.string().optional(),
  // about: Yup.string().optional(),
  // phone_no: Yup.string()
  //   .min(10, 'Phone number must be at least 10 digits')
  //   .optional(),
  // grade: Yup.string().optional(),
  // cv: Yup.mixed().optional(),
  // intro_video_url: Yup.string(),
});

// Default values
export const defaultValues = {
  name: "",
  email: "",
  gender: "",
  profile_image: '',
  password: '',
  confirm_password: '',
  age: "",
  account_type: "",
  major: "",
  subject: "",
  level: "",
  experience: "",
  about: "",
  phone_no: "",
  grade: "",
  cv: '',
  intro_video_url: '',
};

function TeacherSignupForm() {
  const [postSignUp] = useSignUpMutation()
  const methods = useForm<any>({
    resolver: yupResolver(Schema),  // Pass Yup schema to the resolver
    defaultValues: defaultValues,
  });
  const searchParams = useSearchParams();

  // Retrieve a specific parameter
  const role = searchParams.get('role');
  const { handleSubmit } = methods;
  const Router = useRouter();
  const onSubmit = async (data: any) => {
    console.log(data)
    const {
      name,
      email,
      gender,
      profile_image,
      password,
      confirm_password,
      age,
      major,
      subject,
      level,
      experience,
      about,
      phone_no,
      grade,
      cv,
      intro_video_url,
    } = data;
  
    try {
      // Initialize a FormData object
      const formData = new FormData();
  
      // Append fields to FormData
      formData.append("name", name);
      formData.append("email", email);
      formData.append("gender", gender?.value);
      formData.append("password", password);
      formData.append("confirm_password", confirm_password);
      formData.append("age", age);
      formData.append("account_type", role as string);
      formData.append("major", major);
      formData.append("subject", subject);
      formData.append("level", level?.value);
      formData.append("experience", experience);
      formData.append("about", about);
      formData.append("phone_no", phone_no);
      formData.append("grade", grade?.value || "");
      formData.append("intro_video_url", intro_video_url || "");
  
      // Append file fields, checking if files are provided
      if (profile_image) {
        formData.append("profile_image", profile_image); // assuming profile_image is a FileList
      }
      if (cv) {
        formData.append("cv", cv); // assuming cv is a FileList
      }
  
      // Perform signup mutation using RTK Query
      const response = await postSignUp(formData).unwrap();
  
      setLocalStorage("rememberMe", response);
      toast.success(response?.message || "Signed up successfully!");
  
      if(response?.error===false)
        {
        Router.push("/dashboard");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Something went wrong!");
    }
  };
  
  const [active, setActive] = useState(0);
  const nextStepHandler = (): void => {
    setActive(active < steps.length - 1 ? active + 1 : 0);
  };
  const previousStepHandler = (): void => {
    setActive(active > 0 ? active - 1 : 0);
  };
  return (
    <Stack spacing={1.5} px={2}>
      <Stack spacing={1} alignItems="center" direction="row" mt={1}>
        <IconButton onClick={() => Router.back()}>
          <ArrowBackOutlinedIcon sx={{ color: "primary.main", fontSize: 60 }} />
        </IconButton>
        <Typography variant="h2" color="primary.main">
          Sign up
        </Typography>
      </Stack>
      <Typography variant="body1" color="primary.main">
        Let’s get you all set up so you can access your Tutor account.
      </Typography>
      <Box my={4}>
        <CustomJobStepper active={active} steps={steps} />
      </Box>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <CustomChildRenderer index={active}>
          <PersonalForm />
          <WorkDetailsForm />
          <IntroVideoForm />
        </CustomChildRenderer>
        <Box
          display={"flex"}
          width={"100%"}
          justifyContent={"center"}
          alignContent="center"
          mt={2}
          gap={1}
        >
          {active! == 0 ? null : (
            <Button
              variant="contained"
              sx={{ borderRadius: 30, minWidth: 200 }}
              onClick={previousStepHandler}
            >
              Back
            </Button>
          )}
          {active! == 2 ? (
            <LoadingButton
              type="submit"
              variant="outlined"
              sx={{ borderRadius: 30, minWidth: 200, color: "primary.main" }}
              endIcon={<ArrowForwardIcon />}
            >
              Finish
            </LoadingButton>
          ) : (
            <Button
              variant="outlined"
              sx={{ borderRadius: 30, minWidth: 200, color: "primary.main" }}
              endIcon={<ArrowForwardIcon />}
              onClick={nextStepHandler}
            >
              Next
            </Button>
          )}
        </Box>
      </FormProvider>

      <Typography
        variant="body2"
        component="span"
        textAlign="center"
        fontWeight={600}
        color="primary.main"
      >
        {`Already have an account?`}
        <StyledLink href="/sign-in">Login</StyledLink>
      </Typography>
      <Stack direction="column">
        <Divider>
          <Typography variant="subtitle2" color="primary.main">
            Or login with
          </Typography>
        </Divider>
        <Stack gap={2} direction={"row"} justifyContent="center" mr={1}>
          <IconButton>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 12.0733C24 5.40546 18.6274 0 12 0C5.37262 0 0 5.40536 0 12.0733C0 18.0994 4.38825 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9166 4.71615 14.6575 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3398 7.92313 13.875 8.85381 13.875 9.80864V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6117 23.0943 24 18.0995 24 12.0733Z"
                fill="#1877F2"
              />
            </svg>
          </IconButton>
          <IconButton>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8055 8.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 16 10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z"
                fill="#FFC107"
              />
              <path
                d="M1.15308 5.3455L4.43858 7.755C5.32758 5.554 7.48058 4 10.0001 4C11.5296 4 12.9211 4.577 13.9806 5.5195L16.8091 2.691C15.0231 1.0265 12.6341 0 10.0001 0C6.15908 0 2.82808 2.1685 1.15308 5.3455Z"
                fill="#FF3D00"
              />
              <path
                d="M9.99991 20C12.5829 20 14.9299 19.0115 16.7044 17.404L13.6094 14.785C12.5717 15.5742 11.3036 16.001 9.99991 16C7.39891 16 5.19041 14.3415 4.35841 12.027L1.09741 14.5395C2.75241 17.778 6.11341 20 9.99991 20Z"
                fill="#4CAF50"
              />
              <path
                d="M19.8055 8.0415H19V8H10V12H15.6515C15.2571 13.1082 14.5467 14.0766 13.608 14.7855L13.6095 14.7845L16.7045 17.4035C16.4855 17.6025 20 15 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z"
                fill="#1976D2"
              />
            </svg>
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default TeacherSignupForm;
