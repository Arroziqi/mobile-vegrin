import { useState } from 'react'
import { Alert } from 'react-native'
import { useAuth } from '@/libs/hooks'
import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'

interface DeleteEducationParams {
  id: string
}

export const useDeleteEducation = () => {
  const [loading, setLoading] = useState(false)
  const { deviceId, token } = useAuth()

  const deleteEducation = async ({ id }: DeleteEducationParams) => {
    try {
      setLoading(true)

      if (!token || !deviceId) return

      const response = await fetch(API_ENDPOINTS.EDUCATION.DELETE(id), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          vtoken: token,
          device_id: deviceId,
        },
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Gagal menghapus konten')
      }

      Alert.alert('Sukses', 'Konten berhasil dihapus')
      return result
    } catch (error: any) {
      Alert.alert('Error', error.message)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return {
    deleteEducation,
    loading,
  }
}
