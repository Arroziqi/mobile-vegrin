const today = new Date()

// Kemarin
const yesterday = new Date(today)
yesterday.setDate(today.getDate() - 1)
yesterday.setHours(0, 0, 0, 0)

// Besok
const tomorrow = new Date(today)
tomorrow.setDate(today.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export const startDate = yesterday.toISOString()
export const endDate = tomorrow.toISOString()
