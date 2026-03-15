import { Platform } from 'react-native'

let handlerSet = false

async function getNotifications() {
  return await import('expo-notifications')
}

async function getDevice() {
  return await import('expo-device')
}

async function ensureHandler() {
  if (handlerSet) return
  const Notifications = await getNotifications()
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  })
  handlerSet = true
}

export async function requestNotificationPermission(): Promise<boolean> {
  const Device = await getDevice()
  if (!Device.isDevice) return false

  const Notifications = await getNotifications()
  const { status: existing } = await Notifications.getPermissionsAsync()
  if (existing === 'granted') return true

  const { status } = await Notifications.requestPermissionsAsync()
  return status === 'granted'
}

export async function sendLocalNotification(
  title: string,
  body: string
): Promise<void> {
  await ensureHandler()

  const granted = await requestNotificationPermission()
  if (!granted) return

  const Notifications = await getNotifications()

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Default',
      importance: Notifications.AndroidImportance.MAX,
      sound: 'default',
    })
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: 'default',
    },
    trigger: null,
  })
}
