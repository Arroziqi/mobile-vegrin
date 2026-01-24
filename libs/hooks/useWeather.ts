// hooks/useWeather.ts
import { useCallback, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/libs/store/reduxHooks'
import { getWeatherData } from '@/libs/store/slices/weather.slice'
import * as Location from 'expo-location'

interface Coordinates {
  latitude: number
  longitude: number
}

export const useWeather = () => {
  const dispatch = useAppDispatch()
  const { weather, loading, error, lastUpdated } = useAppSelector(
    state => state.weather
  )
  const [localError, setLocalError] = useState<string | null>(null)
  const [locationLoading, setLocationLoading] = useState(false)

  // Fetch weather by coordinates
  const fetchWeather = async (lat: string, lon: string) => {
    try {
      setLocalError(null)
      const result = await dispatch(getWeatherData({ lat, lon })).unwrap()
      return { success: true, data: result }
    } catch (err) {
      const errorMessage = err as string
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Get current location dan fetch weather
  const fetchWeatherByCurrentLocation = async () => {
    try {
      setLocationLoading(true)
      setLocalError(null)

      // Request permission
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        throw new Error('Permission to access location was denied')
      }

      // Get location
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      })

      const lat = location.coords.latitude.toString()
      const lon = location.coords.longitude.toString()

      // Fetch weather
      const result = await dispatch(getWeatherData({ lat, lon })).unwrap()

      setLocationLoading(false)
      return {
        success: true,
        data: result,
        coordinates: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      }
    } catch (err) {
      const errorMessage = (err as Error).message
      setLocalError(errorMessage)
      setLocationLoading(false)
      return { success: false, error: errorMessage }
    }
  }

  // Fetch weather by custom coordinates
  const fetchWeatherByCoordinates = useCallback(
    async (coordinates: Coordinates) => {
      return await fetchWeather(
        coordinates.latitude.toString(),
        coordinates.longitude.toString()
      )
    },
    [dispatch]
  )

  // Check if weather data is stale (older than 30 minutes)
  const isStale = () => {
    if (!lastUpdated) return true
    const now = new Date().getTime()
    const updated = new Date(lastUpdated).getTime()
    const thirtyMinutes = 30 * 60 * 1000
    return now - updated > thirtyMinutes
  }

  // Refresh weather if stale
  const refreshIfNeeded = async (lat: string, lon: string) => {
    if (isStale()) {
      return await fetchWeather(lat, lon)
    }
    return { success: true, data: weather }
  }

  // Clear error
  const clearError = () => {
    setLocalError(null)
  }

  // Temperature helpers
  const temperatureInFahrenheit = weather
    ? (weather.temperature * 9) / 5 + 32
    : null

  const temperatureRange = weather
    ? `${weather.minimal_temperature.toFixed(1)}°C - ${weather.maximal_temperature.toFixed(1)}°C`
    : null

  return {
    // State
    weather,
    loading: loading || locationLoading,
    error: error || localError,
    lastUpdated,
    isStale: isStale(),

    // Computed
    temperatureInFahrenheit,
    temperatureRange,

    // Actions
    fetchWeather,
    fetchWeatherByCurrentLocation,
    fetchWeatherByCoordinates,
    refreshIfNeeded,
    clearError,
  }
}
