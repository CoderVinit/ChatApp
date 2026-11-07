import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Face as FaceIcon, AlternateEmail as UsernameIcon, CalendarMonth as CalenderIcon } from "@mui/icons-material"
import moment from 'moment'
import { useSelector } from 'react-redux'
import { transformImage } from '../../lib/Features'

const Profile = () => {

  const { user } = useSelector(state => state.auth)

  return (
    <Stack display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} >

      <Avatar
        src={transformImage(user?.data?.avatar.url)}
        sx={{
          width: 160,
          height: 160,
          marginBottom: "1.5rem",
          border: "1px solid", borderColor: "divider",
        }}
        alt={user?.data?.name}
      />
      <ProfileCard heading={"Bio"} text={user?.data?.bio} />
      <ProfileCard heading={"Username"} text={user?.data?.username} Icon={<UsernameIcon />} />
      <ProfileCard heading={"Name"} text={user?.data?.name} Icon={<FaceIcon />} />
      <ProfileCard heading={"Joined"} text={moment(user?.data?.createdAt).fromNow()} Icon={<CalenderIcon />} />
    </Stack>
  )
};


const ProfileCard = ({ heading, text, Icon }) => (
  <Stack direction={"row"} alignItems={"center"} spacing={1.5} color="text.primary" marginBottom={"1.2rem"} width="100%" >
    {Icon && <span style={{ color: "var(--muted)", display: "flex", marginRight: 12 }}>{Icon}</span>}
    <Stack>
      <Typography variant='body1'>{text}</Typography>
      <Typography color="text.secondary" variant='caption'>{heading}</Typography>
    </Stack>
  </Stack >
)

export default Profile