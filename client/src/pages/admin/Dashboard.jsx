import React from 'react'
import AdminLayout from './layout/AdminLayout'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Message as MessageIcon, Notifications as NotificationsIcon, Person as PersonIcon } from '@mui/icons-material'
import moment from "moment";
import { SearchField, CurveButton } from '../../components/styles/StyledComponents';
import { DoughnutChart, LineChart } from '../../components/specific/Charts';

const Dashboard = () => {

  const AppBar = <Paper
    elevation={3}
    sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
  >
    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
      <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
      <SearchField placeholder='Search...' type='text' />
      <CurveButton>Search</CurveButton>
      <Box flexGrow={1} />
      <Typography
        sx={{
          display: { xs: "none", lg: "block" },
          color: "rgba(0,0,0,0.7)",
          textAlign: "center"
        }}
      >{moment().format("MMMM Do YYYY")}</Typography>
      <NotificationsIcon />
    </Stack>
  </Paper>


  const Widgets = <Stack direction={{
    xs: "column", sm: "row"
  }}
    spacing={"2rem"}
    justifyContent={"space-between"}
    alignItems={"center"}
    margin={"2rem 0"}
  >
    <Widget title={"Users"} value={34} Icon={<PersonIcon />} />
    <Widget title={"Chats"} value={4} Icon={<GroupIcon />} />
    <Widget title={"Messages"} value={45} Icon={<MessageIcon />} />

  </Stack >


  return (
    <AdminLayout>
      <Container component={"main"}>{AppBar}
        <Stack direction={{ xs: "column", sm: "row" }} flexWrap={"wrap"} sx={{ gap: "2rem" }} justifyContent={"center"} alignItems={{ xs: "center", lg: "stretch" }}>
          <Paper
            elevation={3}
            sx={{
              padding: "3rem 3.5rem",
              borderRadius: "1.5rem",
              width: { xs: "100%", lg: "50%" },
              minWidth: "25rem",
            }}
          >
            <Typography margin={"2rem 0"} variant='h5'>Last Messages</Typography>
            <LineChart value={[13, 10, 18, 19]} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              maxWidth: "25rem",
            }}
          >
            {<DoughnutChart label={["Single Chats", "Group chats"]} value={[13, 10]} />}
            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <GroupIcon /> <Typography>Vs</Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>
        {
          Widgets
        }
      </Container>
    </AdminLayout >
  )
}

const Widget = ({ title, value, Icon }) =>
  <Paper
    elevation={3}
    sx={{
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "1rem",
      width: "20rem"
    }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: "5px solid #f1f1f1",
          width: "5rem",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"

        }}
      >{value}</Typography>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        {Icon}
        <Typography>{title}</Typography>
      </Stack>

    </Stack>
  </Paper>

export default Dashboard