import { Padding, Send, Share } from '@mui/icons-material'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Container sx={{ padding: 5, backgroundColor: '#E0DD14' }}>
                <Box display={'flex'} >

                    <Box width={'50%'} backgroundColor='#f5d7db' padding={5}>
                        <Typography variant='h4' sx={{ textDecoration: 'underline' }} color={'secondary'} >
                            Address:
                        </Typography>
                        <Typography variant='h4' color={'secondary'} >
                            Our Office
                        </Typography>
                        <Typography variant='h5' color={'secondary'} >
                            Jamal,Kathmandu
                        </Typography>
                        <Typography variant='h5' color={'secondary'} >
                            Phone:984000000
                        </Typography>
                        <Typography variant='h5' color={'secondary'} >
                            Email:info@ourstore.com.np
                        </Typography>
                    </Box>
                    <Box width={'50%'} backgroundColor='#6da5c0' padding={5}>
                        <Typography variant='h4' sx={{ textDecoration: 'underline' }} color={'secondary'} >
                            Contact Form:
                        </Typography>
                         <TextField variant='outlined' label='Email' color='secondary' fullWidth required placeholder='enter your email here' />
                         <TextField variant='filled' label='Subject' color='secondary' fullWidth required placeholder='Subject' sx={{marginTop:1}} />
                         <TextField variant='filled' label='Body' color='secondary'  placeholder='Body' sx={{marginTop:1}} multiline rows={4} fullWidth required />
                         <hr />
                         <Button variant='conatained' color='secondary' fullWidth size='large' startIcon={<Share/> } endIcon={<Send/>}>Submit</Button>
                    </Box>
                </Box>
               <Box>
                <>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240403353673!2d85.31233177534659!3d27.709862776181136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1687771075030!5m2!1sen!2snp" width="600"  height="450" margin='auto'  style={{width:'100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
                </>
               </Box>
 
            </Container>




        </>
    )
}

export default Contact