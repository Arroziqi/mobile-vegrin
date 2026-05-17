import { API_BASE_URL } from '@/libs/core/config/app.config'

export const buildAvatarUrl = (
  path: string | null | undefined
): string | null => {
  if (!path) return null
  if (path.startsWith('http')) return path
  return `${API_BASE_URL}/${path}`
}
