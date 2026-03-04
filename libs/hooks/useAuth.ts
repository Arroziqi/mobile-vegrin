// hooks/useAuth.ts
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/libs/store/reduxHooks'
import {
  GoogleLoginRequest,
  LoginRequest,
  ResetPasswordRequest,
} from '@/libs/store/types/service.type'
import {
  googleLogin,
  loginUser,
  logout,
  logoutUser,
  resetPassword,
  verifyEmailReset,
} from '@/libs/store/slices/auth.slice'

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const { isAuthenticated, loading, error, token, deviceId, userId, roleName } =
    useAppSelector(state => state.auth)
  const [localError, setLocalError] = useState<string | null>(null)

  // Login dengan email & password
  const login = async (
    credentials: Omit<LoginRequest, 'device_id' | 'device_name'>
  ) => {
    try {
      setLocalError(null)

      // Generate device info (bisa disesuaikan)
      const generatedDeviceId = `device-${Date.now()}`
      const deviceName = 'Mobile App'

      const result = await dispatch(
        loginUser({
          ...credentials,
          device_id: generatedDeviceId,
          device_name: deviceName,
        })
      ).unwrap()

      return { success: true, data: result }
    } catch (err) {
      const errorMessage = err as string
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Login dengan Google
  const loginWithGoogle = async (credentials: GoogleLoginRequest) => {
    try {
      setLocalError(null)
      const result = await dispatch(googleLogin(credentials)).unwrap()
      return { success: true, data: result }
    } catch (err) {
      const errorMessage = err as string
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Logout
  const logoutHandler = async () => {
    try {
      if (!token || !deviceId) {
        dispatch(logout())
        return { success: true }
      }

      await dispatch(logoutUser({ token, deviceId })).unwrap()
      return { success: true }
    } catch (err) {
      // Tetap logout meskipun API gagal
      dispatch(logout())
      return { success: true }
    }
  }

  // Verify email untuk reset password
  const verifyEmail = async (email: string) => {
    try {
      setLocalError(null)
      const result = await dispatch(verifyEmailReset({ email })).unwrap()
      return { success: true, message: result }
    } catch (err) {
      const errorMessage = err as string
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Reset password
  const resetUserPassword = async (data: ResetPasswordRequest) => {
    try {
      setLocalError(null)
      const result = await dispatch(resetPassword(data)).unwrap()
      return { success: true, message: result }
    } catch (err) {
      const errorMessage = err as string
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Clear error
  const clearError = () => {
    setLocalError(null)
  }

  return {
    // State
    isAuthenticated,
    loading,
    error: error || localError,
    token,
    deviceId,
    userId,
    roleName,

    // Actions
    login,
    loginWithGoogle,
    logout: logoutHandler,
    verifyEmail,
    resetPassword: resetUserPassword,
    clearError,
  }
}
