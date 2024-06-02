import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sampleUser } from "../../constants/SampleData";
import UserItems from "../shared/UserItems";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const [members, setMembers] = useState(sampleUser); // eslint-disable-line
  const [selectedMembers, setSelectedMembers] = useState([]); // eslint-disable-line
  const groupName = useInputValidation("")


  const selectMemberHandler = (id) => {
    // setMembers((prev) => prev.map((user) => (user._id === id ? { ...user, isAdded: !user.isAdded } : user)));
    setSelectedMembers(pre => pre.includes(id) ? pre.filter((currElement) => currElement !== id) : [...pre, id])
  };
  console.log(selectedMembers)
  const submitHandler = () => { };
  const closeHandler = () => { }

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">New Group</DialogTitle>
        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler} />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((u) => {
            return (
              <UserItems user={u} key={u._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(u._id)} />
            );
          })}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">Cancel</Button>
          <Button variant="contained" color="primary" size="large" onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
