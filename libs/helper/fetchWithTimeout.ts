export async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeout = 10_000
) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    })
  } catch (error) {
    if ((error as Error).name === 'AbortError') {
      throw new Error('REQUEST_TIMEOUT')
    }
    throw error
  } finally {
    clearTimeout(id)
  }
}
