// store/slices/weatherSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import {
  ApiResponse,
  WeatherQuery,
  WeatherResponse,
} from '@/libs/store/types/service.type'
import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'

interface WeatherState {
  weather: WeatherResponse['weather'] | null
  loading: boolean
  error: string | null
  lastUpdated: string | null
}

const initialState: WeatherState = {
  weather: null,
  loading: false,
  error: null,
  lastUpdated: null,
}

// Get Weather Data
export const getWeatherData = createAsyncThunk(
  'weather/getData',
  async (coordinates: WeatherQuery, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState
      const { token, deviceId } = state.auth

      if (!token || !deviceId) {
        return rejectWithValue('Token atau Device ID tidak ditemukan')
      }

      const url = new URL(API_ENDPOINTS.WEATHER.GET)
      url.searchParams.append('lat', coordinates.lat)
      url.searchParams.append('lon', coordinates.lon)

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          vtoken: token,
          device_id: deviceId,
        },
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error.message || 'Gagal mengambil data cuaca')
      }

      const data: ApiResponse<WeatherResponse> = await response.json()
      return data.data.weather
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearWeather: state => {
      state.weather = null
      state.error = null
      state.lastUpdated = null
    },
    clearWeatherError: state => {
      state.error = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getWeatherData.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.loading = false
        state.weather = action.payload
        state.lastUpdated = new Date().toISOString()
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearWeather, clearWeatherError } = weatherSlice.actions
export default weatherSlice.reducer
