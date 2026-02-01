import { useEffect, useState } from 'react'
import type { PermissionStatus } from 'expo-location'
import * as Location from 'expo-location'
import { Camera } from 'expo-camera'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

export const useSettings = () => {
  const [locationStatus, setLocationStatus] = useState<PermissionStatus>()

  const [cameraStatus, setCameraStatus] = useState<PermissionStatus>()
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
    setLoading(true)
    const { status } = await Location.requestForegroundPermissionsAsync()
    setLocationStatus(status)
    setLoading(false)
  }

  const requestCameraPermission = async () => {
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
