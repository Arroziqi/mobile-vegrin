// utils/location.ts
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getCurrentLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync()

  if (status !== 'granted') {
    throw new Error('Location permission denied')
  }

  const location = await Location.getCurrentPositionAsync({})

  return {
    lat: location.coords.latitude,
    lon: location.coords.longitude,
  }
}

export const getLocationFromStorage = async () => {
  const lat = await AsyncStorage.getItem('lat')
  const lon = await AsyncStorage.getItem('lon')

  return {
    lat: lat,
    lon: lon,
  }
}

export const saveLocationToStorage = async (lat: number, lon: number) => {
  await AsyncStorage.setItem('lat', String(lat))
  await AsyncStorage.setItem('lon', String(lon))
}
