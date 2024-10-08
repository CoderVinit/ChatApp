import { useFileHandler, useInputValidation } from '6pp'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
import { userExists } from '../redux/reducres/auth'
import { Validator } from '../utils/UsernameValidators'
import { local, server } from '../constants/Config'

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const name = useInputValidation("")
  const bio = useInputValidation("")
  const username = useInputValidation("", Validator)
  const password = useInputValidation("")
  const avatar = useFileHandler("single",)

  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()

    const toastId = toast.loading("Logging In...")

    setIsLoading(true)
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      }
    }

    try {
      const { data } = await axios.post(`${server}/api/v1/users/login`, {
        username: username.value,
        password: password.value
      }, config)
      dispatch(userExists(data.user))
      toast.success(data.message, { id: toastId })
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong", { id: toastId })
    }
    finally {
      setIsLoading(false)
    }
  }


  const handleSignup = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Signing Up...");

    setIsLoading(true)
    const formData = new FormData();
    formData.append('avatar', avatar.file);
    formData.append('name', name.value);
    formData.append('username', username.value);
    formData.append('password', password.value);
    formData.append('bio', bio.value);

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      }
    }

    try {
      const { data } = await axios.post(`${server}/api/v1/users/new`, formData, config);
      dispatch(userExists(data.user))
      toast.success(data.message, { id: toastId })
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong", {
        id: toastId
      })
    }
    finally { setIsLoading(false) }

  }


  const toggleLogin = () => {
    setIsLogin(!isLogin)
  }





  return (
    <Container component={'main'} maxWidth={"xs"} sx={{
      height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center'
    }} >
      <Paper elevation={4} variant={'outlined'} sx={{ padding: 4, display: "flex", flexDirection: 'column', alignItems: 'center', maxHeight: !isLogin ? "90%" : "none", }}>
        {
          isLogin ? (<>
            <Typography variant='h6'>Sign In</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>
              <TextField label='username' value={username.value} onChange={username.changeHandler} fullWidth required margin='normal' variant='outlined' />
              <TextField label='password' value={password.value} onChange={password.changeHandler} type='password' fullWidth required margin='normal' variant='outlined' />
              <Button sx={{ marginTop: '1rem' }} fullWidth variant='contained' color='primary' type='submit' disabled={isLoading}>Login</Button>
              <Typography sx={{ textAlign: 'center', marginTop: 2 }}>OR</Typography>
              <Button sx={{ marginTop: '1rem' }} fullWidth variant='text' onClick={toggleLogin} disabled={isLoading}>Register</Button>
            </form>
          </>) : (<>
            <Typography variant='h7' sx={{ fontWeight: "500" }}>Register</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSignup}>
              <Stack position='relative' width={'6rem'} margin='auto'>
                <Avatar sx={{ height: "6rem", width: "6rem" }} objectfit={"contain"} src={avatar.preview} />

                <IconButton sx={
                  {
                    position: 'absolute',
                    bottom: "0",
                    right: "0",
                    color: "#fff",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)"
                    }
                  }
                }
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>
              {
                avatar.error && (
                  <Typography m={"1rem auto"} width={"fit-content"} display={'block'} color="error" variant='caption'>
                    {avatar.error}
                  </Typography>
                )
              }
              <TextField label='name' size="small" value={name.value} onChange={name.changeHandler} fullWidth required margin='normal' variant='outlined' />
              <TextField label='username' size="small" value={username.value} onChange={username.changeHandler} fullWidth required margin='normal' variant='outlined' />
              {
                username.error && (
                  <Typography color="error" variant='caption'>
                    {username.error}
                  </Typography>
                )
              }
              <TextField label='bio' size="small" value={bio.value} onChange={bio.changeHandler} fullWidth margin='normal' variant='outlined' />
              <TextField label='password' size="small" value={password.value} onChange={password.changeHandler} type='password' fullWidth required margin='normal' variant='outlined' />
              {/* {
                password.error && (
                  <Typography color="error" variant='caption'>
                    {password.error}
                  </Typography>
                )
              } */}
              <Button sx={{ marginTop: '1rem' }} fullWidth variant='contained' color='primary' type='submit' disabled={isLoading}>SignUp</Button>
              <Typography sx={{ textAlign: 'center', marginTop: 2 }}>OR</Typography>
              <Button fullWidth sx={{ marginTop: '1rem' }} size="small" variant='text' onClick={toggleLogin} disabled={isLoading}>Login</Button>
            </form>
          </>)
        }
      </Paper>
    </Container >
  )
}

export default Login
