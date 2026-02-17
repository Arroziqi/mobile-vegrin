// useUpdateEducation.ts
import { useState } from 'react'
import { Platform } from 'react-native'
import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'
import { useAuth } from '@/libs/hooks'

interface UpdateEducationParams {
  id: string
  title: string
  source: string
  external_link: string
  image: string | null
}

export const useUpdateEducation = () => {
  const [loading, setLoading] = useState(false)
  const { token, deviceId } = useAuth()

  const updateEducation = async ({
    id,
    title,
    source,
    external_link,
    image,
  }: UpdateEducationParams) => {
    setLoading(true)

    try {
      if (!deviceId || !token) return

      const formData = new FormData()

      formData.append('title', title)
      formData.append('source', source)
      formData.append('external_link', external_link)

      if (image && !image.startsWith('http')) {
        const filename = image.split('/').pop()
        const match = /\.(\w+)$/.exec(filename ?? '')
        const type = match ? `image/${match[1]}` : `image`

        formData.append('thumbnail', {
          uri: Platform.OS === 'ios' ? image.replace('file://', '') : image,
          name: filename,
          type,
        } as any)
      }

      const response = await fetch(API_ENDPOINTS.EDUCATION.UPDATE(id), {
        method: 'PUT',
        headers: {
          vtoken: token,
          device_id: deviceId,
        },
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.message || 'Gagal update konten')
      }

      return result
    } finally {
      setLoading(false)
    }
  }

  return { updateEducation, loading }
}
