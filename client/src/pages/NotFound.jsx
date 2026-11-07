import React from 'react'
import { Error as ErrorIcon } from "@mui/icons-material";
import { Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Container maxWidth={"lg"} sx={{ height: "100vh" }}>
    <Stack alignItems="center" spacing={"2rem"} justifyContent={"center"} height={"100%"}>
      <ErrorIcon sx={{ fontSize: "5rem", color: "text.secondary" }} />
      <Typography variant='h4'>404</Typography>
      <Typography variant='h6' color='text.secondary'>Page not found</Typography>
      <Link to="/" style={{ color: "var(--color-accent)", fontWeight: 600 }}>Go to Home</Link>
    </Stack>
  </Container>
)

export default NotFound
