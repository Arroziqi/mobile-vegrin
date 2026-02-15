// libs/common/services/weather.service.ts

import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'
import { WeatherApiResponse } from '@/libs/types/weather.type'

export const fetchWeather = async (
  lat: number,
  lon: number,
  token: string,
  deviceId: string
): Promise<WeatherApiResponse> => {
  const response = await fetch(
    `${API_ENDPOINTS.WEATHER.GET}?lat=${lat}&lon=${lon}`,
    {
      method: 'GET',
      headers: {
        vtoken: token,
        device_id: deviceId,
      },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch weather')
  }

  return response.json()
}
