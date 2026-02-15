import { useCallback, useEffect, useState } from 'react'
import { fetchWeather } from '../services/weather.service'
import { WeatherItemProps } from '@/libs/submodules/home/components/WeatherItem'
import { useSelector } from 'react-redux'
import { RootState } from '@/libs/store'
import {
  transformWeatherData,
  WeatherTabKey,
} from '@/libs/common/utils/weatherTransform'
import { AppState } from 'react-native'

type WeatherState = Record<WeatherTabKey, WeatherItemProps[]>

interface UseWeatherReturn {
  data: WeatherState
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export const useWeather = (lat: number, lon: number): UseWeatherReturn => {
  const { token, deviceId } = useSelector((state: RootState) => state.auth)

  const [data, setData] = useState<WeatherState>({
    yesterday: [],
    today: [],
    tomorrow: [],
  })

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const loadWeather = useCallback(async () => {
    if (!token || !deviceId) return

    try {
      setLoading(true)
      setError(null)

      const res = await fetchWeather(lat, lon, token, deviceId)

      const transformed = transformWeatherData(res.data.weather)

      setData(transformed)
    } catch (err) {
      setError('Failed to fetch weather')
    } finally {
      setLoading(false)
    }
  }, [lat, lon, token, deviceId])

  useEffect(() => {
    const subscription = AppState.addEventListener('change', state => {
      if (state === 'active') {
        loadWeather()
      }
    })

    return () => subscription.remove()
  }, [loadWeather])

  return {
    data,
    loading,
    error,
    refetch: loadWeather,
  }
}
