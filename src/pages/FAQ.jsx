import { Translate } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const FAQ = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'success.light' }} m={5} p={3} >
        <Typography fontSize={'40px'} variant='h3' color={'warning.light'} textAlign={'center'} sx={{ textDecoration: "underline" }}>

          FAQs
        </Typography>
        <Box p={3} border={3} borderColor={'gray'} borderRadius={3} backgroundColor={'skyblue'} marginY={'15px'}
          sx={{
            '&:hover': {
              boxShadow: '0 10px 5px -5px red',
              transform: ' TranslateY(-10px)',
              transition: '1s'
            }
          }}
        >
          <Typography variant='h4' color={'secondary'}>
            <u><b>Question:</b></u> Is it trusted and safe to buy products from site?
          </Typography>
          <Typography variant='h4' color={'success.light'}>
            <u><b>Answers:</b></u>  Yes,SabaikoBazar is one of leading E Commerce site and every vendor are trusted and checked before products are listed.
          </Typography>
        </Box>
        <Box p={3} border={3} borderColor={'gray'} borderRadius={3} backgroundColor={'skyblue'}>
          <Typography variant='h4' color={'secondary'}>
            <u><b>Question:</b></u>  Which country is this site from?
          </Typography>
          <Typography variant='h4' color={'success.light'}>
            <u><b>Answers:</b></u>  This is from land of Himalayas Nepal.
          </Typography>
        </Box>
      </Box>

    </>
  )
}

export default FAQ