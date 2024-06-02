import React, { Suspense, lazy, memo, useEffect, useState } from 'react'
import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from "@mui/icons-material"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Link } from "../components/styles/StyledComponents"
import AvatarCard from '../components/shared/AvatarCard'
import { sampleChats, sampleUser } from "../constants/SampleData"
import UserItems from '../components/shared/UserItems';
const ConfirmDeleteDialog = lazy(() => import("../components/dialog/ConfirmDeleteDialog"))
const AddMemberDialog = lazy(() => import("../components/dialog/AddMemberDialog"))

const isAddMember = false;

const Group = () => {



  const chatId = useSearchParams()[0].get('group')
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [groupName, setGroupName] = useState("")
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("")
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false)




  const navigateBack = () => {
    navigate("/")
  }

  const handleMobile = () => {
    setIsMobileMenuOpen(pre => !pre)
  }
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false)
  }

  const updateGroupName = () => {
    setIsEdit(false)
    console.log(groupNameUpdatedValue)
  }

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true)
    console.log("Group deleted")
  }
  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false)
  }
  const openAddMembers = () => { }

  const deleteHandler = () => {
    closeConfirmDeleteHandler()
  }
  const removeMemberHandler = (id) => {
    console.log("Remove member", id)
  }

  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`)
      setGroupNameUpdatedValue(`Group Name ${chatId}`)
    }

    return () => {
      setGroupName("")
      setGroupNameUpdatedValue("")
      setIsEdit(false)
    }
  }, [chatId])


  const IconsBtn = <>


    <Box sx={{
      display: {
        xs: "block",
        sm: "none"
      },
      position: "fixed",
      right: "1rem",
      top: "1rem"
    }}>
      <IconButton onClick={handleMobile}>
        <MenuIcon />
      </IconButton>
    </Box>


    <Tooltip title="back">
      <IconButton sx={{
        position: "absolute", top: "2rem", left: "2rem", bgcolor: "rgba(0,0,0,0.7)", color: "white", "&:hover": {
          bgcolor: "rgba(0,0,0,0.8)"
        }
      }} onClick={navigateBack} >
        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  </>


  const GroupName = <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} p={"2rem"} spacing={"1rem"}>
    {
      isEdit ? <>
        <TextField value={groupNameUpdatedValue} onChange={(e) => setGroupNameUpdatedValue(e.target.value)} />
        <IconButton onClick={updateGroupName}><DoneIcon /></IconButton>
      </> : (<>
        <Typography variant='h4'>{groupName}</Typography>
        <IconButton onClick={() => setIsEdit(true)}>{<EditIcon />}</IconButton>
      </>)
    }
  </Stack>

  const ButtonGroup = (
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "row"
      }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem"
      }}
    >
      <Button size='large' color='error' variant='outlined' startIcon={<DeleteIcon />} onClick={openConfirmDeleteHandler}>Delete Group</Button>
      <Button variant='contained' size='large' startIcon={<AddIcon />} onClick={openAddMembers}>Add Member</Button>
    </Stack>
  )


  return (
    <Grid container height={"100vh"}>
      <Grid item sx={{ display: { xs: "none", sm: "block" }, overflowY: "auto", height: "100%" }} position={"relative"} sm={4} bgcolor={"bisque"}> <GroupList myGroup={sampleChats} chatId={chatId} /></Grid>
      <Grid item xs={12} sm={8} sx={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", padding: "1rem 3rem" }}>

        {IconsBtn}
        {groupName && (<>
          {GroupName}
          <Typography margin={"1rem"} alignSelf={"flex-start"} variant='body1'>Members</Typography>
          <Stack maxWidth={"45rem"}
            width={"100%"}
            boxSizing={"border-box"}
            padding={{
              sm: "1rem",
              xs: "0",
              md: "1rem 4rem"
            }}
            spacing={"2rem"}
            height={"50vh"}
            sx={{ overflowY: "auto" }}
          >
            {/* Members */}
            {
              sampleUser.map((i) => (
                <UserItems key={i._id} user={i} isAdded styling={{
                  boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                  padding: "1rem 2rem",
                  borderRadius: "1rem"
                }}
                  handler={removeMemberHandler}
                />
              ))
            }
          </Stack>
          {ButtonGroup}
        </>)}

      </Grid>
      {
        isAddMember && <Suspense fallback={<Backdrop open />}><AddMemberDialog /></Suspense>
      }

      {
        confirmDeleteDialog && <Suspense fallback={<Backdrop open />}><ConfirmDeleteDialog open={confirmDeleteDialog} handleClose={closeConfirmDeleteHandler} deleteHandler={deleteHandler} /></Suspense>
      }

      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none"
          }
        }} open={isMobileMenuOpen} onClose={handleMobileClose} anchor="left">
        <GroupList w='50vw' myGroup={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  )
}

const GroupList = ({ w = "100%", myGroup = [], chatId }) => (
  <Stack width={w}>
    {myGroup.length > 0 ? (
      myGroup.map((group) => <GroupListItem group={group} chatId={chatId} />)) : (
      <Typography textAlign={"center"} padding={"1rem"}>No Groups</Typography>
    )
    }
  </Stack>
)

const GroupListItem = memo(({ group, chatId }) => {
  const { name, _id, avatar } = group;
  return <Link to={`?group=${_id}`} onClick={(e) => { if (chatId === _id) e.preventDefault() }}>
    <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
      <AvatarCard avatar={avatar} />
      <Typography>{name}</Typography>
    </Stack>
  </Link>
})

export default Group