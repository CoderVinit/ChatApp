import { useInputValidation } from '6pp'
import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { adminLogin, getAdmin } from '../../redux/thunks/adminAuth'


const AdminLogin = () => {

  const { isAdmin } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const secretKey = useInputValidation("")

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(adminLogin(secretKey.value))
  }

  useEffect(() => {
    dispatch(getAdmin())
  }, [dispatch])

  if (isAdmin) return <Navigate to="/admin/dashboard" />

  return (
    <Container component={'main'} maxWidth='xs' sx={{ height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: 'column', alignItems: 'center' }}>

        <Typography variant='h5'>Admin Login</Typography>
        <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={submitHandler}>
          <TextField label='password' value={secretKey.value} onChange={secretKey.changeHandler} type='password' fullWidth required margin='normal' variant='outlined' />
          <Button sx={{ marginTop: '1rem' }} fullWidth variant='contained' color='primary' type='submit'>Login</Button>
        </form>

      </Paper>
    </Container >
  )
}

export default AdminLogin