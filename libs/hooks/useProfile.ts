// hooks/useProfile.ts
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/libs/store/reduxHooks'
import {
  getUserProfile,
  updateUserProfile,
} from '@/libs/store/slices/profile.slice'
import { UpdateProfileRequest } from '@/libs/store/types/service.type'

export const useProfile = (autoFetch = false) => {
  const dispatch = useAppDispatch()
  const { profile, loading, error } = useAppSelector(state => state.profile)
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const [localError, setLocalError] = useState<string | null>(null)

  // Fetch user profile
  const fetchProfile = async () => {
    try {
      setLocalError(null)
      const result = await dispatch(getUserProfile()).unwrap()
      return { success: true, data: result }
    } catch (err) {
      const errorMessage = err as string
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
  }
}
