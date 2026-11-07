import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Stack, Typography } from '@mui/material';
import { ChatBubbleOutline as ChatIcon } from '@mui/icons-material';

const Home = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center" spacing={1} bgcolor="background.default">
      <ChatIcon sx={{ fontSize: 56, color: "text.secondary" }} />
      <Typography variant='h6' fontWeight={600}>Your messages</Typography>
      <Typography variant='body2' color="text.secondary">Select a chat to start talking.</Typography>
    </Stack>
  )
}

export default AppLayout()(Home);
