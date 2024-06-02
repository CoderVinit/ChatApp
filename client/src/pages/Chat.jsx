import { useInfiniteScrollTop } from '6pp';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { IconButton, Skeleton, Stack } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import FileMenu from '../components/dialog/FileMenu';
import AppLayout from '../components/layout/AppLayout';
import MessageComponent from '../components/shared/MessageComponent';
import { InputBox } from '../components/styles/StyledComponents';
import { grayColor, orange } from '../constants/Color';
import { NEW_MESSAGE } from '../constants/events';
import { useErrors, useSocketEvents } from '../hooks/Hooks';
import { useChatDetailsQuery, useGetMessagesQuery } from '../redux/api/api';
import { setIsFileMenu } from '../redux/reducres/misc';
import { getSocket } from '../socket';





const Chat = ({ chatId, user }) => {

  const containerRef = useRef(null)
  const socket = getSocket()
  const dispatch = useDispatch()

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [page, setPage] = useState(1)
  const [fileMenuAnchor, setFileMenuAnchor] = useState(null)


  const chatDetails = useChatDetailsQuery({ chatId, skip: !chatId })

  const oldMessagesChunk = useGetMessagesQuery({ chatId, page })

  const { data: oldMessage, setData: setOldMessage } = useInfiniteScrollTop(
    containerRef,
    oldMessagesChunk.data?.totalPages,
    page,
    setPage,
    oldMessagesChunk.data?.message
  )

  const errors = [{ isError: chatDetails.isError, error: chatDetails.error },
  { isError: oldMessagesChunk.isError, error: oldMessagesChunk.error }]
  const members = chatDetails?.data?.chat?.members

  const submitHandler = (e) => {
    e.preventDefault()
    if (!message.trim()) return
    socket.emit(NEW_MESSAGE, { members, chatId, message });
    setMessage("")
  }

  useEffect(() => {
    return () => {
      setMessages([])
      setOldMessage([])
      setMessage("")
      setPage(1)
    }
  }, [chatId])


  const newMessageHandler = useCallback((data) => {
    if (data.chatId !== chatId) return;
    setMessages(prev => [...prev, data.message])
  }, [chatId])

  const handleFileOpen = (e) => {
    dispatch(setIsFileMenu(true))
    setFileMenuAnchor(e.currentTarget)
  }



  const eventHandlers = { [NEW_MESSAGE]: newMessageHandler }

  useSocketEvents(socket, eventHandlers)

  useErrors(errors)

  const allMessages = [...oldMessage, ...messages]

  return chatDetails.isLoading ? <Skeleton /> : (
    <>
      <Stack ref={containerRef} boxSizing={"border-box"} padding={"1rem"} spacing={"1rem"} bgcolor={grayColor} height={"90%"}
        sx={{
          overflowX: 'hidden',
          overflowY: "auto"
        }}
      >
        {
          allMessages?.map((i) => (
            <MessageComponent message={i} key={i._id} user={user.data} />
          ))
        }
      </Stack>
      <form style={{ height: "10%" }} onSubmit={submitHandler}>
        <Stack direction={"row"} alignItems={"center"} height={"100%"} padding={"1rem"} position={"relative"}>
          <IconButton sx={{ position: "absolute", rotate: "30deg", left: "1.5rem" }} onClick={handleFileOpen}>
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder='Type your message here....' value={message} onChange={e => setMessage(e.target.value)} />
          <IconButton type='submit' sx={{
            backgroundColor: orange,
            color: "white",
            marginLeft: "1rem",
            padding: "0.5rem",
            "&:hover": {
              backgroundColor: "error.dark",
            }


          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu anchorE1={fileMenuAnchor} chatId={chatId} />
    </>
  )
}

export default AppLayout()(Chat);
