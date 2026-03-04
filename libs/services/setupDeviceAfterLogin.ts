import { getDeviceId } from '@/libs/common/utils/getDeviceId'
import { getCurrentLocation } from '@/libs/common/utils/location'
import { createDevice } from '@/libs/services/location.service'
import AsyncStorage from '@react-native-async-storage/async-storage'

const setupDeviceAfterLogin = async () => {
  try {
    const { lat, lon } = await getCurrentLocation()
    const deviceId = await getDeviceId()
    let token = await AsyncStorage.getItem('token')

    if (!token) {
      return
    }

    await createDevice({
      body: {
        device_id: deviceId,
        device_name: 'mobileVegrin',
        lat: lat,
        lon: lon,
      },
      token: token,
    })

    console.log('Device created successfully')
    await AsyncStorage.setItem('lon', lon.toString())
    await AsyncStorage.setItem('lat', lat.toString())
  } catch (error) {
    console.log('Device setup failed:', error)
  }
}

export default setupDeviceAfterLogin
