import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NotificationItem {
  id?: string
  link: string
  notify_at: string
  text: string
  title: string
  type: string
}

interface NotificationState {
  items: NotificationItem[]
}

const initialState: NotificationState = {
  items: [],
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<Omit<NotificationItem, 'id'>>
    ) => {
      const newNotification: NotificationItem = {
        id: Date.now().toString(),
        ...action.payload,
      }
      console.log('✅ Notification Added to Redux:', newNotification)
      console.log('📊 Total Notifications:', state.items.length + 1)
      state.items.unshift(newNotification)
    },
    clearNotifications: state => {
      state.items = []
    },
  },
})

export const { addNotification, clearNotifications } = notificationSlice.actions
export default notificationSlice.reducer
