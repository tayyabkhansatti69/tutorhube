import { Box, Divider, Grid2, IconButton, Typography } from "@mui/material"
import messagnger1 from "@/src/assets/png/messanger-img.png"
import contact1 from "@/src/assets/png/contact1.png"
import contact2 from "@/src/assets/png/contact2.png"
import contact3 from "@/src/assets/png/contact3.png"
import contact4 from "@/src/assets/png/contact4.png"
import contact5 from "@/src/assets/png/contact5.png"
import contact6 from "@/src/assets/png/contact6.png"


import Image from "next/image"
import { CustomTabs } from "@/src/components"
function MessageSection() {

    const contactsData = [
        {
            id: 1,
            image: contact1
        },
        {
            id: 2,
            image: contact2
        },
        {
            id: 3,
            image: contact3
        },
        {
            id: 4,
            image: contact4
        },
        {
            id: 5,
            image: contact5
        },
        {
            id: 6,
            image: contact6
        },
        {
            id: 7,
            image: contact5
        },
        {
            id: 8,
            image: contact6
        },

    ]
    const chatsData = [

        {
            id: 1,
            live: false,
            image: contact1,
            name: 'student1',
            status: 'unread',
            message: 'hello how are',
            time: '12:45 PM',
            count: '2'
        },
        {
            id: 2,
            live: true,
            image: contact2,
            name: 'student2',
            status: 'unread',
            message: 'hello how are',
            time: '12:45 PM',
            count: '2'
        },
        {
            id: 3,
            live: false,
            image: contact3,
            name: 'student3',
            status: 'read',
            message: 'hello how are',
            time: '12:45 PM',
            count: '0'
        },
        {
            id: 4,
            live: true,
            image: contact4,
            name: 'student4',
            status: 'unread',
            message: 'hello how are',
            time: '12:45 PM',
            count: '2'
        },
        {
            id: 5,
            live: true,
            image: contact5,
            name: 'student5',
            status: 'unread',
            message: 'hello how are',
            time: '12:45 PM',
            count: '2'
        },
    ]

    const unReadData = chatsData.filter(item => item.status === "unread");
    console.log(unReadData)
    return (
        <Grid2 container spacing={2} px={2} pt={7} >
            <Grid2 size={{ xs: 12, md: 3 }}>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={2} >
                    <Image src={messagnger1} alt={'messagnger1'} width={88.7} height={88.7} />
                    <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                        <Typography variant='h6' fontWeight={700}>
                            Mohamed farag
                        </Typography>
                        <Typography variant='body1'>
                            Student
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={{ mb: 3, marginTop: 3, border: '1px solid rgba(219, 219, 219, 1)' }} />
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={"space-between"}>
                    <Typography variant="body2" fontWeight={600}>
                        Contacts
                    </Typography>
                    <Typography variant="caption" fontWeight={400}>
                        View All
                    </Typography>
                </Box>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    mt={2}
                    gap={1}
                    pb={2}// Add gaps between images
                    sx={{
                        maxWidth: '330px',
                        overflowX: 'auto',
                        '&::-webkit-scrollbar': {
                            height: '0px',
                            width: '10px',
                            mt: '1rem' // Custom scrollbar height (optional)
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888', // Custom scrollbar color (optional)
                            borderRadius: '10px',
                        },
                    }}
                >
                    {contactsData?.map((item) => {
                        return (
                            <Image
                                src={item?.image}
                                alt={'contacts'}
                                width={44.4}
                                height={44.4}
                                key={item?.id} // Add a key if available
                            />
                        );
                    })}
                </Box>

                <Divider sx={{ mb: 3, marginTop: 1, border: '1px solid rgba(219, 219, 219, 1)' }} />
                <Box mt={4} display={'flex'} flexDirection={'column'}>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
                        <Typography variant="body2" fontWeight={600}>
                            Chats
                        </Typography>
                    </Box>
                    <CustomTabs tabsNameArray={["All", "Urread"]} >
                        <Box>
                            <Divider sx={{ mb: 1, width: '100%', marginTop: '-26px', border: '0.92px solid rgba(219, 219, 219, 1)' }} />

                            <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" gap={0}>
                                {chatsData?.map((item, index) => (
                                    <>
                                        <Box
                                            key={index} // Add a key prop when mapping
                                            display="flex"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            flexDirection="row"
                                            width="100%" // Optional: to ensure full-width for alignment
                                            mb={1} // Optional: margin-bottom for spacing between rows
                                        >

                                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={0} >

                                                <Box display="flex" alignItems="center" position="relative">
                                                    <Image src={item?.image} alt="chats" width={55.5} height={55.5} />
                                                    {item?.live && (
                                                        <IconButton
                                                            sx={{
                                                                border: '1.8px solid white',
                                                                borderRadius: '3.75px',
                                                                position: 'absolute',
                                                                bottom: 0,
                                                                right: 0,
                                                                width: '14.78px',
                                                                height: '14.78px',
                                                                background: 'rgba(50, 105, 211, 1)'
                                                            }}
                                                        />
                                                    )}
                                                </Box>


                                                <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" ml={1}>
                                                    <Typography variant="body2" fontWeight={700}>
                                                        {item?.name}
                                                    </Typography>
                                                    <Typography variant="caption">
                                                        {item?.message}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="flex-start" ml={2}>
                                                <Typography variant="caption" fontWeight={400}>
                                                    {item?.time}
                                                </Typography>
                                                {item?.count !== '0' && (


                                                    <Box display="flex" justifyContent={'center'} alignItems={'center'} sx={{
                                                        width: '22.17px',
                                                        height: '22.17px',
                                                        borderRadius: '3.75px',
                                                        background: 'rgba(50, 105, 211, 1)'
                                                    }}>
                                                        <Typography variant="caption" color="#FFF">
                                                            {item?.count}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>

                                        </Box>

                                        <Divider sx={{ mb: 1, width: '100%', marginTop: 0, border: '0.92px solid rgba(219, 219, 219, 1)' }} />
                                    </>
                                ))}
                            </Box>


                        </Box>

                        <Box>
                            <Divider sx={{ mb: 1, width: '100%', marginTop: '-26px', border: '0.92px solid rgba(219, 219, 219, 1)' }} />

                            <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                                {unReadData?.map((item, index) => (
                                    <>

                                        <Box

                                            key={index} // Add a key prop when mapping
                                            display="flex"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            flexDirection="row"
                                            width="100%" // Optional: to ensure full-width for alignment
                                            mb={1} // Optional: margin-bottom for spacing between rows
                                        >
                                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={0} >

                                                <Box display="flex" alignItems="center" position="relative">
                                                    <Image src={item?.image} alt="chats" width={55.5} height={55.5} />
                                                    {item?.live && (
                                                        <IconButton
                                                            sx={{
                                                                border: '1.8px solid white',
                                                                borderRadius: '3.75px',
                                                                position: 'absolute',
                                                                bottom: 0,
                                                                right: 0,
                                                                width: '14.78px',
                                                                height: '14.78px',
                                                                background: 'rgba(50, 105, 211, 1)'
                                                            }}
                                                        />
                                                    )}
                                                </Box>


                                                <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" ml={1}>
                                                    <Typography variant="body2" fontWeight={700}>
                                                        {item?.name}
                                                    </Typography>
                                                    <Typography variant="caption">
                                                        {item?.message}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="flex-start" ml={2}>
                                                <Typography variant="caption" fontWeight={400}>
                                                    {item?.time}
                                                </Typography>
                                                {item?.count !== '0' && (


                                                    <Box display="flex" justifyContent={'center'} alignItems={'center'} sx={{
                                                        width: '22.17px',
                                                        height: '22.17px',
                                                        borderRadius: '3.75px',
                                                        background: 'rgba(50, 105, 211, 1)'
                                                    }}>
                                                        <Typography variant="caption" color="#FFF">
                                                            {item?.count}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>

                                        </Box>
                                        <Divider sx={{ mb: 1, width: '100%', marginTop: 0, border: '0.92px solid rgba(219, 219, 219, 1)' }} />
                                    </>
                                ))}
                            </Box>


                        </Box>

                    </CustomTabs>

                </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }} ml={6} pt={4}>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={2} >
                    <Image src={messagnger1} alt={'messagnger1'} width={64} height={64} />
                    <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                        <Typography variant='h6' fontWeight={700}>
                            Mohamed farag
                        </Typography>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={1}>
                            <Box
                                sx={{

                                    borderRadius: '50%',
                                    width: '10px',
                                    height: '10px',
                                    background: 'rgba(50, 105, 211, 1)'
                                }}
                            />
                            <Typography variant='body1'>
                                Online
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ mb: 3, marginTop: 3, border: '1px solid rgba(219, 219, 219, 1)' }} />

            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>

            </Grid2>

        </Grid2>
    )
}
export default MessageSection