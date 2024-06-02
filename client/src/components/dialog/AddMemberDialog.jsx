import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUser } from '../../constants/SampleData'
import UserItem from '../shared/UserItems'

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {

  const [members, setMembers] = useState(sampleUser); // eslint-disable-line
  const [selectedMembers, setSelectedMembers] = useState([]); // eslint-disable-line


  const selectMemberHandler = (id) => {
    setSelectedMembers(pre => pre.includes(id) ? pre.filter((currElement) => currElement !== id) : [...pre, id])
  };

  const addMemberSubmitHandler = () => {
    closeHandler()
  }
  const closeHandler = () => {
    setSelectedMembers([])
    setMembers([])
  }

  return (
    <Dialog open onClose={closeHandler}>
      <Stack width={"20rem"} p={"2rem"} spacing={"1rem"}>
        <DialogTitle textAlign={"center"}>Add Members</DialogTitle>
        <Stack spacing={"1rem"}>
          {
            members.length > 0 ? (members.map((user) => (<UserItem key={user._id} user={user} isAdded={selectedMembers.includes(user._id)} handler={selectMemberHandler} />))) : (<Typography textAlign={"center"}>No Friends</Typography>)
          }
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button color='error' onClick={closeHandler}>Cancel</Button>
          <Button variant='contained' onClick={addMemberSubmitHandler} disabled={isLoadingAddMember}>Submit</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default AddMemberDialog