import { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { PermissionStatus } from 'expo-location'
import { Camera } from 'expo-camera'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

const useSettings = () => {
  const [locationStatus, setLocationStatus] = useState<PermissionStatus>(
    PermissionStatus.UNDETERMINED
  )

  const [cameraStatus, setCameraStatus] = useState<PermissionStatus>(
    PermissionStatus.UNDETERMINED
  )

  const [loading, setLoading] = useState(false)

  // 🔍 cek status awal (pas screen kebuka)
  useEffect(() => {
    checkPermissions()
  }, [])

  const checkPermissions = async () => {
    const location = await Location.getForegroundPermissionsAsync()
    setLocationStatus(location.status)

    const camera = await Camera.getCameraPermissionsAsync()
    setCameraStatus(camera.status)
  }

  const requestLocationPermission = async () => {
    if (locationStatus === PermissionStatus.GRANTED) return

    setLoading(true)
    const { status } = await Location.requestForegroundPermissionsAsync()
    setLocationStatus(status)
    setLoading(false)
  }

  const requestCameraPermission = async () => {
    if (cameraStatus === PermissionStatus.GRANTED) return

    setLoading(true)
    const { status } = await Camera.requestCameraPermissionsAsync()
    setCameraStatus(status)
    setLoading(false)
  }

  const clearCache = async () => {
    Alert.alert('Bersihkan Cache', 'Cache aplikasi akan dihapus. Lanjutkan?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Hapus',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.clear()
          Alert.alert('Berhasil', 'Cache berhasil dibersihkan')
        },
      },
    ])
  }

  return {
    locationStatus,
    cameraStatus,
    loading,
    requestLocationPermission,
    requestCameraPermission,
    clearCache,
  }
}
export default useSettings
