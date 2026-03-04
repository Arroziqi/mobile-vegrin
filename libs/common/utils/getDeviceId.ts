import AsyncStorage from '@react-native-async-storage/async-storage'

export const getDeviceId = async (): Promise<string> => {
  let deviceId = await AsyncStorage.getItem('deviceId')

  if (!deviceId) {
    deviceId = `device-${Date.now()}`
    await AsyncStorage.setItem('deviceId', deviceId)
  }

  return deviceId
}
