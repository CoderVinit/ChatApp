import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Button, Stack, Typography } from '@mui/material';
import { ChatBubbleOutline as ChatIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setIsSearch } from '../redux/reducres/misc';

const Home = () => {
  const dispatch = useDispatch()
  return (
    <Stack height="100%" alignItems="center" justifyContent="center" spacing={1} bgcolor="background.default">
      <ChatIcon sx={{ fontSize: 56, color: "text.secondary" }} />
      <Typography variant='h6'>No chat open</Typography>
      <Typography variant='body2' color="text.secondary">Pick a chat from the list, or find someone to message.</Typography>
      <Button variant="contained" onClick={() => dispatch(setIsSearch(true))} sx={{ mt: 1 }}>Find people</Button>
    </Stack>
  )
}

export default AppLayout()(Home);
