import { useQuery } from '@tanstack/react-query'
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
  const { token, deviceId } = useAuth()

  return useQuery<NewsData[], Error>({
    queryKey: ['get-education-list', token, deviceId],
    enabled: !!token && !!deviceId,
    staleTime: 1000 * 60 * 5, // 5 menit tidak refetch
    queryFn: async () => {
<<<<<<< Updated upstream
=======
      if (!token || !deviceId) {
        console.log('No access token')
        throw new Error('Token atau Device ID belum tersedia')
      }

>>>>>>> Stashed changes
      const response = await fetch(API_ENDPOINTS.EDUCATION.GET_LIST, {
        method: 'GET',
        headers: {
          vtoken: token!,
          device_Id: deviceId!,
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

      return educations.map((item: any, index: number) => ({
        id: item.id,
        number: index + 1,
        title: item.title,
        author: null,
        source: item.source,
        external_link: item.external_link,
        thumbnail: `${baseUrl}/${item.thumbnail}`,
      }))
    },
  })
}
