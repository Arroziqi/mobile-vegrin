import { useState } from 'react'
import { Alert, Platform } from 'react-native'
import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'
import { useAuth } from '@/libs/hooks'
import { useQueryClient } from '@tanstack/react-query'

interface CreateEducationParams {
  title: string
  source: string
  external_link: string
  image: string | null
}

export const useCreateEducation = () => {
  const [loading, setLoading] = useState(false)
  const { token, deviceId } = useAuth()
  const queryClient = useQueryClient()

  const createEducation = async ({
    title,
    source,
    external_link,
    image,
  }: CreateEducationParams) => {
    setLoading(true)

    try {
      if (!token || !deviceId) {
        Alert.alert('Error', 'Token atau Device ID tidak tersedia')
        return
      }

      const formData = new FormData()

      formData.append('title', title)
      formData.append('source', source)
      formData.append('external_link', external_link)

      if (image) {
        const filename = image.split('/').pop()
        const match = /\.(\w+)$/.exec(filename ?? '')
        const type = match ? `image/${match[1]}` : `image`

        formData.append('thumbnail', {
          uri: Platform.OS === 'ios' ? image.replace('file://', '') : image,
          name: filename,
          type,
        } as any)
      }

      const response = await fetch(API_ENDPOINTS.EDUCATION.CREATE, {
        method: 'POST',
        headers: {
          vtoken: token,
          device_id: deviceId,
        },
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.message || 'Gagal membuat konten')
      }

      await queryClient.invalidateQueries({ queryKey: ['get-education-list'] })
      return result
    } finally {
      setLoading(false)
    }
  }

  return { createEducation, loading }
}
