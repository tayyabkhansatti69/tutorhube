
import { FormProvider, RHFTextField } from '@/src/components/rhf'
import { yupResolver } from '@hookform/resolvers/yup';
import {  Button, Grid2, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

function AdminPasswordSection() {

  const FormSchema = Yup.object().shape({
    oldpassword: Yup.string().required('Email is required'),

  });

  // Initialize the form with validation schema
  const methods = useForm<any>({
    resolver: yupResolver(FormSchema),
    defaultValues: {
    oldpassword: ''
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

          <Typography variant='h5'>Password</Typography>
          <Grid2 size={{ xs: 12, md: 6 }} />


          <Grid2 size={{ xs: 12, md: 6 }} sx={{mt:1}} >
            <RHFTextField
              name="oldPAssword"
              size="small"
              label="Old Password"
              fullWidth
              placeholder="Old Password is required"
            />
          </Grid2>
          <Grid2 size={{ xs: 0, md: 6 }} />
          <Grid2 size={{ xs: 12, md: 6 }} >
            <RHFTextField
              name="newPassword"
              size="small"
              label="New Password"
              fullWidth
              placeholder="New Password is required"
            />
          </Grid2>
          <Grid2 size={{ xs: 0, md: 6 }} />
          <Grid2 size={{ xs: 12, md: 6 }} >
            <RHFTextField
              name="rewritePassword"
              size="small"
              label="ReWrite New Password"
              fullWidth
              placeholder=" Rewrite New Password is required"
            />
          </Grid2>
          <Grid2 size={{ xs: 0, md: 6 }} />

          <Grid2 size={{ xs: 12, md: 4 }} mt={1}>
          <Button variant="contained"  sx={{width:"-webkit-fill-available"}}>
          Reset Password
          </Button>
          </Grid2>

        </Grid2 >
      </FormProvider >
    </>
  )
}

export default AdminPasswordSection
