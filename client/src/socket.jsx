import { createContext, useContext, useMemo } from 'react'
import io from 'socket.io-client'
import { local, server } from './constants/Config'

const SocketContext = createContext()
const getSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }) => {
  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    }
  }
  const socket = useMemo(() => io(`${server}`, config), [])
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}


export { SocketProvider, getSocket }

