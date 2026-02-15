// libs/common/types/weather.api.ts

export interface WeatherApiItem {
  name: string
  local_datetime: string
  temperature: number
  humidity: number
  total_cloud_cover: number
  curah_hujan: number
  icon: string
  wind_direction: number
  wind_speed: number
  shortwave_radiation: number
}

export interface WeatherApiResponse {
  success: boolean
  code: number
  message: string
  data: {
    message: string
    weather: WeatherApiItem[]
  }
}
