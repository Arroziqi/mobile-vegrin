// store/slices/plantSlice.ts
import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'
import {
  ApiResponse,
  PlantAnalyzeResponse,
  PlantDetailResponse,
  PlantLogData,
  PlantLogsResponse,
} from '@/libs/store/types/service.type'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface PlantState {
  logs: PlantLogData[]
  currentLog: PlantLogData | null
  loading: boolean
  error: string | null
  analyzing: boolean
}

const initialState: PlantState = {
  logs: [],
  currentLog: null,
  loading: false,
  error: null,
  analyzing: false,
}

// Analyze Plant
export const analyzePlant = createAsyncThunk(
  'plant/analyze',
  async (imageUri: string, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState
      const { token, deviceId } = state.auth

      if (!token || !deviceId) {
        return rejectWithValue('Token atau Device ID tidak ditemukan')
      }

      // React Native FormData: gunakan object URI, bukan Blob
      const formData = new FormData()
      formData.append('image_file', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'plant.jpg',
      } as unknown as Blob)

      const response = await fetch(API_ENDPOINTS.PLANT.ANALYZE, {
        method: 'POST',
        headers: {
          vtoken: token,
          device_id: deviceId,
        },
        body: formData,
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error.message || 'Gagal menganalisis tanaman')
      }

      const data: ApiResponse<PlantAnalyzeResponse> = await response.json()
      return data.data.plant
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

// Get Plant Logs
export const getPlantLogs = createAsyncThunk(
  'plant/getLogs',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState
      const { token, deviceId } = state.auth

      if (!token || !deviceId) {
        return rejectWithValue('Token atau Device ID tidak ditemukan')
      }

      const response = await fetch(API_ENDPOINTS.PLANT.GET_LOGS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          vtoken: token,
          device_id: deviceId,
        },
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error.message || 'Gagal mengambil log tanaman')
      }

      const data: ApiResponse<PlantLogsResponse> = await response.json()
      // API mengembalikan single log_data, tapi kita expect array
      // Jadi wrap dalam array atau sesuaikan dengan response sebenarnya
      return [data.data.plant]
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

// Get Plant Detail
export const getPlantDetail = createAsyncThunk(
  'plant/getDetail',
  async (plantId: string, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState
      const { token, deviceId } = state.auth

      if (!token || !deviceId) {
        return rejectWithValue('Token atau Device ID tidak ditemukan')
      }

      const response = await fetch(API_ENDPOINTS.PLANT.GET_DETAIL(plantId), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          vtoken: token,
          device_id: deviceId,
        },
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(
          error.message || 'Gagal mengambil detail tanaman'
        )
      }

      const data: ApiResponse<PlantDetailResponse> = await response.json()
      return data.data.log_data
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

const plantSlice = createSlice({
  name: 'plant',
  initialState,
  reducers: {
    clearPlantError: state => {
      state.error = null
    },
    clearCurrentLog: state => {
      state.currentLog = null
    },
    clearPlantLogs: state => {
      state.logs = []
    },
  },
  extraReducers: builder => {
    // Analyze Plant
    builder
      .addCase(analyzePlant.pending, state => {
        state.analyzing = true
        state.error = null
      })
      .addCase(analyzePlant.fulfilled, (state, action) => {
        state.analyzing = false
        state.currentLog = action.payload
        // Tambahkan ke logs jika belum ada
        const exists = state.logs.find(log => log.id === action.payload.id)
        if (!exists) {
          state.logs.unshift(action.payload)
        }
      })
      .addCase(analyzePlant.rejected, (state, action) => {
        state.analyzing = false
        state.error = action.payload as string
      })

    // Get Plant Logs
    builder
      .addCase(getPlantLogs.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(getPlantLogs.fulfilled, (state, action) => {
        state.loading = false
        state.logs = action.payload
      })
      .addCase(getPlantLogs.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // Get Plant Detail
    builder
      .addCase(getPlantDetail.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(getPlantDetail.fulfilled, (state, action) => {
        state.loading = false
        state.currentLog = action.payload
      })
      .addCase(getPlantDetail.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearPlantError, clearCurrentLog, clearPlantLogs } =
  plantSlice.actions
export default plantSlice.reducer
