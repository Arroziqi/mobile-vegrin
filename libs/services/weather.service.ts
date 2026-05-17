// libs/common/services/weather.service.ts

import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'
import { WeatherApiResponse } from '@/libs/common/types/weather.type'

export const fetchWeather = async (
  lat: number,
  lon: number,
  token: string,
  deviceId: string,
  startDate?: string,
  endDate?: string
): Promise<WeatherApiResponse> => {
  const url = `${API_ENDPOINTS.WEATHER.GET}?lat=${lat}&lon=${lon}&start_date=${startDate}&end_date=${endDate}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      vtoken: token,
      device_id: deviceId,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch weather')
  }

  return response.json()
}
