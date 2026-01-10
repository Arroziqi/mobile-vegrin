export function withAlpha(hex: string, alpha: number) {
  const sanitized = hex.replace('#', '')
  const r = parseInt(sanitized.substring(0, 2), 16)
  const g = parseInt(sanitized.substring(2, 4), 16)
  const b = parseInt(sanitized.substring(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
