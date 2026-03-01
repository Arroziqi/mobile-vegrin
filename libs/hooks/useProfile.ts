// hooks/useProfile.ts
import { useAppDispatch, useAppSelector } from '@/libs/store/reduxHooks'
import { logout } from '@/libs/store/slices/auth.slice'
import {
  getUserProfile,
  updateUserProfile,
} from '@/libs/store/slices/profile.slice'
import { UpdateProfileRequest } from '@/libs/store/types/service.type'
import { useEffect, useState } from 'react'
import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'
import { useAuth } from '@/libs/hooks/useAuth'

export const useProfile = (autoFetch = false) => {
  const dispatch = useAppDispatch()
  const { profile, loading, error } = useAppSelector(state => state.profile)
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const [localError, setLocalError] = useState<string | null>(null)
  const { token, deviceId } = useAuth()

  // Fetch user profile
  const fetchProfile = async () => {
    try {
      setLocalError(null)
      const result = await dispatch(getUserProfile()).unwrap()
      return { success: true, data: result }
    } catch (err) {
      const errorMessage = err as string

      console.log(errorMessage)

      // FORCE LOGOUT
      dispatch(logout())

      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Update profile
  const updateProfile = async (data: UpdateProfileRequest) => {
    try {
      setLocalError(null)
      const result = await dispatch(updateUserProfile(data)).unwrap()
      return { success: true, data: result }
    } catch (err) {
      const errorMessage = err as string
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Update profile photo
  const updateProfilePhoto = async (imageUri: string) => {
    try {
      setLocalError(null)

      const formData = new FormData()

      formData.append('photo_profile', {
        uri: imageUri,
        name: `profile-${Date.now()}.jpg`,
        type: 'image/jpeg',
      } as any)

      const response = await fetch(API_ENDPOINTS.PROFILE.UPDATE, {
        method: 'PUT',
        headers: {
          vtoken: token!,
          device_id: deviceId!,
        },
        body: formData,
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message)
      }

      const data = await response.json()

      // refresh profile setelah upload sukses
      await fetchProfile()

      return { success: true, data }
    } catch (err) {
      const errorMessage = (err as Error).message
      setLocalError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  // Refresh profile (force fetch)
  const refreshProfile = async () => {
    return await fetchProfile()
  }

  // Clear error
  const clearError = () => {
    setLocalError(null)
  }

  // Get full name
  const fullName = profile
    ? `${profile.front_name} ${profile.back_name}`.trim()
    : null

  // Auto fetch profile ketika mounted jika autoFetch = true
  useEffect(() => {
    if (autoFetch && isAuthenticated && !profile) {
      fetchProfile()
    }
  }, [autoFetch, isAuthenticated, profile])

  return {
    // State
    profile,
    loading,
    error: error || localError,
    fullName,
    isLoaded: !!profile,

    // Actions
    fetchProfile,
    updateProfile,
    refreshProfile,
    clearError,
    updateProfilePhoto,
  }
}
