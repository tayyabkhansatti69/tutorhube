
import { FormProvider, RHFTextField } from '@/src/components/rhf'
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid2, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

function DeleteAccountSection() {

  const FormSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),

  });

  // Initialize the form with validation schema
  const methods = useForm<any>({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      email: ''
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data)

  }

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2}>

          <Typography variant='h5'>Delete Account</Typography>
          <Box display="flex" justifyContent={'flex-start'} alignItems={'flex-start'} mt={1} mb={1}>
            <Typography variant='body1'>Deleting your account is permanent and all your account information will be deleted along with it. If you&apos;re sure you want to proceed, enter your email address below.</Typography>
          </Box>


          <Grid2 size={{ xs: 12, md: 6 }} >
            <RHFTextField
              name="email"
              size="small"
              label="Email"
              fullWidth
              placeholder="Email is required"
            />
          </Grid2>
          <Grid2 size={{ xs: 0, md: 6 }} />
          <Grid2 size={{ xs: 12, md: 4 }} mt={1}>
          <Button variant="contained"  sx={{width:"-webkit-fill-available"}}>
            Delete Account
          </Button>
          </Grid2>

        </Grid2 >
      </FormProvider >
    </>
  )
}

export default DeleteAccountSection
