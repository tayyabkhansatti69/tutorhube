import { FormProvider, RHFCheckbox, } from '@/src/components/rhf';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box,  Grid2, Typography } from '@mui/material';
import React, { useEffect, useState, } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

function NotificationSection() {
    const [dataOfNotifications, setDataOfNotifications] = useState<any[]>([]);
  

  // Initialize the form with validation schema
  const FormSchema = Yup.object().shape({
    notification: Yup.object().required('Notification is required'),
  });

  // Initialize the form with validation schema
  const methods = useForm<any>({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      notification: {}, // Initially empty, will be updated after data is fetched
    },
  });

  const { watch, } = methods;

  const dataOfNotification = [
    {
      id: 1,
      heading: 'Lessons and learning',
      text: 'Get updates about lessons, messages, and learning journey',
    },
    {
      id: 2,
      heading: 'Tips and discounts',
      text: 'Discover tips for learning on Tutor Hub and receive promotions',
    },
  ];


  const selectedNotification = watch('notification');

  useEffect(() => {
    setDataOfNotifications(selectedNotification);
  }, [selectedNotification]);

  console.log('Selected Notification Checkboxes:', dataOfNotifications);
  // Effect to log selected values whenever they change

  

  return (
    <>
      <FormProvider methods={methods} >
        <Grid2 container spacing={2}>
        <Box display="flex" justifyContent="flex-start" alignItems="flex-start" flexDirection={'column'} mt={1} mb={1} gap={2}>
          <Typography variant="h5">Notification Setting</Typography>
          
            <Typography variant="body1" fontWeight={600}>
             Email Notification
            </Typography>
          </Box>

          {dataOfNotification.map((item) => (
            <>
            <Grid2 key={item.id} size={{ xs: 12, md: 12 }}>
                <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="flex-start" >
              <RHFCheckbox name={`notification.${item.id}`} size="small" fullWidth />
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="start">
                <Typography variant='h6' fontWeight={600}>{item.heading}</Typography>
                <Typography variant='body2'>{item.text}</Typography>
              </Box>
              </Box>
            </Grid2>
            {/* <Grid2 size={{xs:0,md:6}}/> */}
            </>
          ))}

          
        </Grid2>
      </FormProvider>
    </>
  );
}

export default NotificationSection;
