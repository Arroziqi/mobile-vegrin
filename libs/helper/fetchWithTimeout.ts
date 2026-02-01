import { NetworkError, TimeoutError } from '@/libs/common/types/error'

export async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeout = 10_000
): Promise<Response> {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    })
  } catch (e) {
    if ((e as Error).name === 'AbortError') {
      throw new TimeoutError()
    }
    throw new NetworkError()
  } finally {
    clearTimeout(id)
  }
}
