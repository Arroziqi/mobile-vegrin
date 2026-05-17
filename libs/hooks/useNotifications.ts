import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'
import { useAppSelector } from '@/libs/store/reduxHooks'
import { useEffect, useState } from 'react'

export interface NotificationItem {
  id?: string
  link: string
  notify_at: string
  text: string
  title: string
  type: string
}

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const token = useAppSelector(state => state.auth.token)
  const deviceId = useAppSelector(state => state.auth.deviceId)

  const fetchNotifications = async () => {
    if (!token || !deviceId) {
      console.warn('⚠️ Token or DeviceId not available for notifications fetch')
      setError('Token or DeviceId not available')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const baseUrl = 'https://api-vegrin.moratelindo.co.id'
      const url =
        API_ENDPOINTS.NOTIFICATION.GET_LIST || `${baseUrl}/notifications`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          vtoken: token,
          device_id: deviceId,
        },
      })

      if (!response.ok) {
        const responseText = await response.text()
        console.error('❌ API Error Response:', responseText)
        throw new Error(`API Error ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()

      // Extract notifications from the nested data structure
      const notificationsArray = Array.isArray(data?.data?.notifications)
        ? data.data.notifications
        : []

      setNotifications(notificationsArray)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Unknown error occurred'
      console.error('❌ Error fetching notifications:', {
        message: errorMessage,
        stack: err instanceof Error ? err.stack : undefined,
      })
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotifications()
  }, [token])

  return {
    notifications,
    loading,
    error,
    refetch: fetchNotifications,
  }
}
