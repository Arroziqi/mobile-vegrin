import { useCallback, useEffect, useState } from 'react'
import { API_ENDPOINTS } from '@/libs/common/const/endpoint.api'
import { useAuth } from '@/libs/hooks'

export interface NewsData {
  id: string
  number?: number
  title: string
  author?: string
  source: string
  external_link: string
  thumbnail: string
}

export const useGetEducationList = () => {
  const [data, setData] = useState<NewsData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { token, deviceId } = useAuth()

  const fetchEducations = useCallback(async () => {
    try {
      if (!token || !deviceId) return

      setLoading(true)
      setError(null)

      const response = await fetch(API_ENDPOINTS.EDUCATION.GET_LIST, {
        method: 'GET',
        headers: {
          vtoken: token,
          device_Id: deviceId,
        },
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Gagal mengambil data')
      }

      const educations = result?.data?.educations ?? []

      const baseUrl = API_ENDPOINTS.EDUCATION.GET_LIST.replace(
        '/education',
        ''
      ).replace(/\/$/, '')

      const mapped: NewsData[] = educations.map((item: any, index: number) => ({
        id: item.id,
        number: index + 1,
        title: item.title,
        author: null, // karena tidak ada di response
        source: item.source,
        external_link: item.external_link,
        thumbnail: `${baseUrl}/${item.thumbnail}`,
      }))

      setData(mapped)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchEducations()
  }, [fetchEducations])

  return {
    data,
    loading,
    error,
    refetch: fetchEducations,
  }
}
