// utils/auth.js
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getTokenFromPersist = async () => {
  try {
    // Ambil data persist dari AsyncStorage
    const data = await AsyncStorage.getItem('persist:auth')
    if (!data) return null

    // Redux persist menyimpan setiap field sebagai string
    const parsed = JSON.parse(data)

    // Ambil token
    const token = parsed.token ? JSON.parse(parsed.token) : null

    return token
  } catch (error) {
    console.error('Error getting token from AsyncStorage:', error)
    return null
  }
}

export const getDeviceIdFromPersist = async () => {
  try {
    const data = await AsyncStorage.getItem('persist:auth')
    if (!data) return null

    const parsed = JSON.parse(data)
    const deviceId = parsed.deviceId ? JSON.parse(parsed.deviceId) : null

    return deviceId
  } catch (error) {
    console.error('Error getting deviceId from AsyncStorage:', error)
    return null
  }
}
