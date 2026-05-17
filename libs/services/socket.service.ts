import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

export const connectSocket = (deviceId: string) => {
  if (socket?.connected) return socket

  socket = io('https://api-vegrin.moratelindo.co.id/', {
    query: { device_id: deviceId },
  })

  return socket
}

export const getSocket = () => socket

export const disconnectSocket = () => {
  socket?.disconnect()
  socket = null
}

