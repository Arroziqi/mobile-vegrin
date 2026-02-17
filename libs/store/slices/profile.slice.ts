// store/slices/profileSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import {
  ApiResponse,
  GetProfileResponse,
  UpdateProfileRequest,
  UserProfile,
} from '@/libs/store/types/service.type'
import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'

interface ProfileState {
  profile: UserProfile | null
  loading: boolean
  error: string | null
}

const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: null,
}

// Get User Profile
export const getUserProfile = createAsyncThunk(
  'profile/getProfile',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState
      const { token, deviceId } = state.auth

      if (!token || !deviceId) {
        return rejectWithValue('Token atau Device ID tidak ditemukan')
      }

      const response = await fetch(API_ENDPOINTS.PROFILE.GET, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          vtoken: token,
          device_id: deviceId,
        },
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error.message || 'Gagal mengambil profil')
      }

      const data: ApiResponse<GetProfileResponse> = await response.json()

      return data.data.user
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

// Update User Profile
export const updateUserProfile = createAsyncThunk(
  'profile/updateProfile',
  async (profileData: UpdateProfileRequest, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState
      const { token, deviceId } = state.auth

      if (!token || !deviceId) {
        return rejectWithValue('Token atau Device ID tidak ditemukan')
      }

      const response = await fetch(`${API_ENDPOINTS.PROFILE.UPDATE}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          vtoken: token,
          device_id: deviceId,
        },
        body: JSON.stringify(profileData),
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error.message || 'Gagal update profil')
      }

      const data: ApiResponse<UserProfile> = await response.json()
      return data.data
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearProfile: state => {
      state.profile = null
      state.error = null
    },
    clearProfileError: state => {
      state.error = null
    },
  },
  extraReducers: builder => {
    // Get Profile
    builder
      .addCase(getUserProfile.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // Update Profile
    builder
      .addCase(updateUserProfile.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearProfile, clearProfileError } = profileSlice.actions
export default profileSlice.reducer
