import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NotificationItem {
  id: string
  education_id: string
  message: string
  receivedAt: string
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
      action: PayloadAction<{ education_id: string; message: string }>
    ) => {
      state.items.unshift({
        id: Date.now().toString(),
        education_id: action.payload.education_id,
        message: action.payload.message,
        receivedAt: new Date().toISOString(),
      })
    },
    clearNotifications: state => {
      state.items = []
    },
  },
})

export const { addNotification, clearNotifications } = notificationSlice.actions
export default notificationSlice.reducer
