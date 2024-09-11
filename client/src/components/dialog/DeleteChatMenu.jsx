import { Menu, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { setIsDeleteMenu } from '../../redux/reducres/misc'
import { Delete as DeleteIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material'

const DeleteChatMenu = ({ dispatch, deleteMenuAnchor }) => {


  const { isDeleteMenu, selectedDeleteChat } = useSelector(state => state.misc)
  const isGroup = selectedDeleteChat.groupChat;

  const closeHandler = () => {
    dispatch(setIsDeleteMenu(false))
  }

  const leaveGroupHandler = () => { }
  const deleteChatHandler = () => { }

  return (
    <Menu open={isDeleteMenu} onClose={closeHandler} anchorEl={deleteMenuAnchor.current} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "center", horizontal: "center" }}>
      <Stack
        sx={{
          width: "10rem",
          padding: "0.5rem",
          cursor: "pointer"
        }}
        direction={"row"}
        alignItems={"center"}
        spacing={"0.5rem"}
        onClick={isGroup ? leaveGroupHandler : deleteChatHandler}
      >
        {
          isGroup ? (<><ExitToAppIcon /><Typography>Leave Group</Typography></>) : (<><DeleteIcon /><Typography>Delete Chat</Typography></>)
        }
      </Stack>
    </Menu>
  )
}

export default DeleteChatMenu