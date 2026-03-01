// Enum asli
export enum PlantCondition {
  SEHAT = 'SEHAT',
  SAKIT = 'SAKIT',
  HAMA = 'HAMA',
}

// Type untuk handle kedua format
export type PlantConditionType =
  | 'Sehat'
  | 'Sakit'
  | 'Hama'
  | 'SEHAT'
  | 'SAKIT'
  | 'HAMA'

// Utility function untuk normalisasi ke format enum
export const normalizeCondition = (condition: string): PlantCondition => {
  const conditionMap: Record<string, PlantCondition> = {
    // Dari API (Indonesia)
    Sehat: PlantCondition.SEHAT,
    Sakit: PlantCondition.SAKIT,
    Hama: PlantCondition.HAMA,
    // Dari enum (UPPERCASE)
    SEHAT: PlantCondition.SEHAT,
    SAKIT: PlantCondition.SAKIT,
    HAMA: PlantCondition.HAMA,
  }

  return conditionMap[condition] || PlantCondition.SEHAT // default SEHAT
}

// Utility function untuk mendapatkan display text
export const getConditionDisplay = (
  condition: PlantCondition | string
): string => {
  const displayMap: Record<string, string> = {
    Sehat: 'Sehat',
    Sakit: 'Sakit',
    Hama: 'Hama',
    SEHAT: 'Sehat',
    SAKIT: 'Sakit',
    HAMA: 'Hama',
  }

  return displayMap[condition] || 'Tidak Diketahui'
}
