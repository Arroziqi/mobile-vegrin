import { sendLocalNotification } from '@/libs/common/helper/localNotification'
import { connectSocket, disconnectSocket } from '@/libs/services/socket.service'
import { useAppDispatch, useAppSelector } from '@/libs/store/reduxHooks'
import { useEffect } from 'react'
import { addNotification } from '../store/slices/notification.slice'

export const useSocket = () => {
  const dispatch = useAppDispatch()
  const deviceId = useAppSelector(state => state.auth.deviceId)

  useEffect(() => {
    if (!deviceId) return

    const socket = connectSocket(deviceId)

    socket.on('notification', data => {
      dispatch(addNotification(data))
      sendLocalNotification(data.title, data.text)
    })

    return () => {
      disconnectSocket()
    }
  }, [deviceId, dispatch])
}
