// store/slices/authSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  ApiResponse,
  GoogleLoginRequest,
  GoogleLoginResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
} from '@/libs/store/types/service.type'
import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'

interface AuthState {
  token: string | null
  deviceId: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
  userId: string | null
  email: string | null
}

const initialState: AuthState = {
  token: null,
  deviceId: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  userId: null,
  email: null,
}

// Login with email/password
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error.message || 'Login gagal')
      }

      const data: ApiResponse<LoginResponse> = await response.json()
      return {
        token: data.data.token.token,
        userId: data.data.token.id,
        email: data.data.token.email,
        deviceId: credentials.device_id,
      }
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

// Register new user
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData: RegisterRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.AUTH.REGISTER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error.message || 'Registrasi gagal')
      }

      const data: ApiResponse<RegisterResponse> = await response.json()
      return data.data
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

// Google Login
export const googleLogin = createAsyncThunk(
  'auth/googleLogin',
  async (credentials: GoogleLoginRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.AUTH.GOOGLE_LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error.message || 'Google login gagal')
      }

      const data: ApiResponse<GoogleLoginResponse> = await response.json()
      return {
        token: data.data.user_session.token,
        userId: data.data.user_session.user_id,
        deviceId: data.data.user_session.device_id,
      }
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

// Logout
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (
    { token, deviceId }: { token: string; deviceId: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(API_ENDPOINTS.AUTH.LOGOUT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          vtoken: token,
          device_id: deviceId,
        },
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error.message || 'Logout gagal')
      }

      return true
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

// Verify Email for Reset Password
export const verifyEmailReset = createAsyncThunk(
  'auth/verifyEmailReset',
  async (emailData: VerifyEmailRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.AUTH.VERIFY_EMAIL_RESET, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error.message || 'Verifikasi email gagal')
      }

      const data: ApiResponse<VerifyEmailResponse> = await response.json()
      return data.data.message
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

// Reset Password
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (resetData: ResetPasswordRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resetData),
      })

      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue(error.message || 'Reset password gagal')
      }

      const data: ApiResponse<ResetPasswordResponse> = await response.json()
      return data.data.message
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null
      state.deviceId = null
      state.isAuthenticated = false
      state.userId = null
      state.email = null
      state.error = null
    },
    setCredentials: (
      state,
      action: PayloadAction<{
        token: string
        deviceId: string
        userId: string
        email: string
      }>
    ) => {
      state.token = action.payload.token
      state.deviceId = action.payload.deviceId
      state.userId = action.payload.userId
      state.email = action.payload.email
      state.isAuthenticated = true
    },
    clearError: state => {
      state.error = null
    },
  },
  extraReducers: builder => {
    // Login
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
        state.deviceId = action.payload.deviceId
        state.userId = action.payload.userId
        state.email = action.payload.email
        state.isAuthenticated = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // Register
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, state => {
        state.loading = false
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // Google Login
    builder
      .addCase(googleLogin.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
        state.deviceId = action.payload.deviceId
        state.userId = action.payload.userId
        state.isAuthenticated = true
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // Logout
    builder
      .addCase(logoutUser.pending, state => {
        state.loading = true
      })
      .addCase(logoutUser.fulfilled, state => {
        state.loading = false
        state.token = null
        state.deviceId = null
        state.isAuthenticated = false
        state.userId = null
        state.email = null
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // Verify Email Reset
    builder
      .addCase(verifyEmailReset.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(verifyEmailReset.fulfilled, state => {
        state.loading = false
      })
      .addCase(verifyEmailReset.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

    // Reset Password
    builder
      .addCase(resetPassword.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(resetPassword.fulfilled, state => {
        state.loading = false
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { logout, setCredentials, clearError } = authSlice.actions
export default authSlice.reducer
