import { useState } from 'react'
import { Platform } from 'react-native'
import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'

interface CreateEducationParams {
  title: string
  source: string
  external_link: string
  image: string | null
  token: string
  deviceId: string
}

export const useCreateEducation = () => {
  const [loading, setLoading] = useState(false)

  const createEducation = async ({
    title,
    source,
    external_link,
    image,
    token,
    deviceId,
  }: CreateEducationParams) => {
    setLoading(true)

    try {
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

      return result
    } finally {
      setLoading(false)
    }
  }

  return { createEducation, loading }
}
