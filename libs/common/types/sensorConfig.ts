// ============================================================
// constants/sensorConfig.ts
// Konfigurasi metadata sensor dan logika klasifikasi status
// ============================================================

export type SensorType = 'Sensor Cuaca' | 'Sensor Tanah'

export interface SensorThreshold {
  min?: number
  max?: number
  label: string
  emoji: string
  color: string
}

export interface DigitalSensorThreshold {
  value: number | string
  label: string
  emoji: string
  color: string
}

export interface SensorMeta {
  key: string
  label: string
  unit: string
  icon: string
  type: SensorType
  thresholds: SensorThreshold[]
}

export interface DigitalSensorMeta {
  key: string
  label: string
  unit: string
  icon: string
  type: SensorType
  digital: true
  thresholds: DigitalSensorThreshold[]
}

// ─── Icon base URL ────────────────────────────────────────────
const ICON_BASE = 'https://example.com/icons'

// ─── Sensor Cuaca ─────────────────────────────────────────────
export const WEATHER_SENSOR_META: Record<
  string,
  SensorMeta | DigitalSensorMeta
> = {
  temperature: {
    key: 'temperature',
    label: 'Temperature',
    unit: '°C',
    icon: `${ICON_BASE}/temperature.png`,
    type: 'Sensor Cuaca',
    thresholds: [
      { max: 20, label: 'Dingin', emoji: '❄️', color: '#F59E0B' },
      { min: 21, max: 32, label: 'Normal', emoji: '✅', color: '#00A63E' },
      { min: 33, label: 'Panas', emoji: '🔥', color: '#EF4444' },
    ],
  },
  humidity: {
    key: 'humidity',
    label: 'Humidity',
    unit: '%',
    icon: `${ICON_BASE}/humidity.png`,
    type: 'Sensor Cuaca',
    thresholds: [
      { max: 40, label: 'Kering', emoji: '🏜️', color: '#F59E0B' },
      { min: 41, max: 80, label: 'Ideal', emoji: '✅', color: '#00A63E' },
      { min: 81, label: 'Lembap', emoji: '💧', color: '#EF4444' },
    ],
  },
  light_lux: {
    key: 'light_lux',
    label: 'Light Intensity',
    unit: 'lx',
    icon: `${ICON_BASE}/light.png`,
    type: 'Sensor Cuaca',
    thresholds: [
      { max: 300, label: 'Redup', emoji: '🌥️', color: '#F59E0B' },
      { min: 301, max: 5000, label: 'Cukup', emoji: '☀️', color: '#00A63E' },
      { min: 5001, label: 'Terik', emoji: '🌞', color: '#EF4444' },
    ],
  },
  rain_mm: {
    key: 'rain_mm',
    label: 'Rain',
    unit: 'mm',
    icon: `${ICON_BASE}/rain.png`,
    type: 'Sensor Cuaca',
    thresholds: [
      { max: 0, label: 'Tidak Hujan', emoji: '☀️', color: '#00A63E' },
      { min: 0.1, label: 'Hujan', emoji: '🌧️', color: '#F59E0B' },
    ],
  },
  rain_status: {
    key: 'rain_status',
    label: 'Rain Status',
    unit: '',
    icon: `${ICON_BASE}/rain-status.png`,
    type: 'Sensor Cuaca',
    digital: true,
    thresholds: [
      { value: 'Tidak', label: 'Tidak Hujan', emoji: '☀️', color: '#00A63E' },
      { value: 'Ya', label: 'Hujan', emoji: '🌧️', color: '#F59E0B' },
      { value: '0', label: 'Tidak Hujan', emoji: '☀️', color: '#00A63E' },
      { value: '1', label: 'Hujan', emoji: '🌧️', color: '#F59E0B' },
    ],
  } as DigitalSensorMeta,
}

// ─── Soil sensor template (dinamis untuk soil_1 … soil_N) ─────
export const SOIL_SENSOR_THRESHOLDS: SensorThreshold[] = [
  { max: 40, label: 'Kering', emoji: '⚠️', color: '#EF4444' },
  { min: 41, max: 75, label: 'Optimal', emoji: '✅', color: '#00A63E' },
  { min: 76, label: 'Basah', emoji: '💦', color: '#F59E0B' },
]

export const getSoilSensorMeta = (index: number): SensorMeta => ({
  key: `soil_${index}`,
  label: `SOIL ${index}`,
  unit: '%',
  icon: `${ICON_BASE}/soil.png`,
  type: 'Sensor Tanah',
  thresholds: SOIL_SENSOR_THRESHOLDS,
})

// ─── Device name map ──────────────────────────────────────────
export const DEVICE_NAME_MAP: Record<string, string> = {
  'SSW-01': 'Vegrin Weather & Soil Station 1',
  'SSW-02': 'Vegrin Weather & Soil Station 2',
  'SSW-03': 'Vegrin Weather & Soil Station 3',
  // tambah device baru di sini
}

export const getDeviceName = (deviceId: string): string =>
  DEVICE_NAME_MAP[deviceId] ?? `Device ${deviceId}`

// ─── Weather keys yang diketahui (selain soil_*) ──────────────
export const KNOWN_WEATHER_KEYS = new Set([
  'temperature',
  'humidity',
  'light_lux',
  'rain_mm',
  'rain_status',
])

// ─── Keys yang di-skip (metadata, bukan sensor) ───────────────
export const SKIP_KEYS = new Set(['id', 'device_id', 'created_at'])
