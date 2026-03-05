// Enum asli
export enum PlantCondition {
  BAIK = 'BAIK',
  CUKUP = 'CUKUP',
  PERLU_PERHATIAN = 'PERLU_PERHATIAN',
}

// Type untuk handle kedua format
export type PlantConditionType =
  | 'Baik'
  | 'Cukup'
  | 'Perlu Perhatian'
  | 'BAIK'
  | 'CUKUP'
  | 'PERLU_PERHATIAN'

// Utility function untuk normalisasi ke format enum
export const normalizeCondition = (condition: string): PlantCondition => {
  const conditionMap: Record<string, PlantCondition> = {
    // Dari API (Indonesia)
    Baik: PlantCondition.BAIK,
    Cukup: PlantCondition.CUKUP,
    'Perlu Perhatian': PlantCondition.PERLU_PERHATIAN,
    // Dari enum (UPPERCASE)
    BAIK: PlantCondition.BAIK,
    CUKUP: PlantCondition.CUKUP,
    PERLU_PERHATIAN: PlantCondition.PERLU_PERHATIAN,
  }

  return conditionMap[condition] || PlantCondition.BAIK // default BAIK
}

// Utility function untuk mendapatkan display text
export const getConditionDisplay = (
  condition: PlantCondition | string
): string => {
  const displayMap: Record<string, string> = {
    Baik: 'Baik',
    Cukup: 'Cukup',
    'Perlu Perhatian': 'Perlu Perhatian',
    BAIK: 'Baik',
    CUKUP: 'Cukup',
    PERLU_PERHATIAN: 'Perlu Perhatian',
  }

  return displayMap[condition] || 'Tidak Diketahui'
}
