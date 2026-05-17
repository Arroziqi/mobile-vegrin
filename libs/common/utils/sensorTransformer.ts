// ============================================================
// utils/sensorTransformer.ts
// Pure transformer: raw API response → normalized SensorDevice[]
// ============================================================

import {
  type DigitalSensorMeta,
  type DigitalSensorThreshold,
  getDeviceName,
  getSoilSensorMeta,
  KNOWN_WEATHER_KEYS,
  type SensorMeta,
  type SensorThreshold,
  SKIP_KEYS,
  WEATHER_SENSOR_META,
} from '../types/sensorConfig'

// ─── Output types ─────────────────────────────────────────────

export interface SensorItem {
  key: string
  label: string
  value: string
  unit: string
  icon: string
  status: string // e.g. "✅ Optimal"
  type: string // "Sensor Cuaca" | "Sensor Tanah"
  color: string // hex color based on classification
}

export interface SensorDevice {
  device_id: string
  device_name: string
  type: string
  status: 'online' | 'offline' | 'error'
  total_sensors: string
  last_updated: string
  sensors: SensorItem[]
}

// ─── Raw API types (dari response backend) ────────────────────

interface RawSensorData {
  id: string
  device_id: string
  created_at: string
  [key: string]: string
}

interface RawDevice {
  status: string
  device_id: string
  type: string
  sensor_data: RawSensorData
}

interface RawApiResponse {
  success: boolean
  code: number
  data: {
    device: RawDevice[]
  }
}

// ─── Classifier ───────────────────────────────────────────────

function classifyAnalog(
  value: number,
  thresholds: SensorThreshold[]
): { label: string; emoji: string; color: string } {
  for (const threshold of thresholds) {
    const aboveMin = threshold.min === undefined || value >= threshold.min
    const belowMax = threshold.max === undefined || value <= threshold.max
    if (aboveMin && belowMax) {
      return {
        label: threshold.label,
        emoji: threshold.emoji,
        color: threshold.color,
      }
    }
  }
  // fallback ke threshold terakhir
  const last = thresholds[thresholds.length - 1]
  return { label: last.label, emoji: last.emoji, color: last.color }
}

function classifyDigital(
  value: string,
  thresholds: DigitalSensorThreshold[]
): { label: string; emoji: string; color: string } {
  const match = thresholds.find(
    t => String(t.value).toLowerCase() === value.toLowerCase()
  )
  if (match)
    return { label: match.label, emoji: match.emoji, color: match.color }
  // fallback
  return { label: value, emoji: '❓', color: '#9CA3AF' }
}

function classifySensor(
  meta: SensorMeta | DigitalSensorMeta,
  rawValue: string
): { status: string; color: string } {
  if ('digital' in meta && meta.digital) {
    const result = classifyDigital(
      rawValue,
      meta.thresholds as DigitalSensorThreshold[]
    )
    return {
      status: `${result.emoji} ${result.label}`,
      color: result.color,
    }
  }

  const numericValue = parseFloat(rawValue)
  if (isNaN(numericValue)) {
    return { status: '❓ Tidak Diketahui', color: '#9CA3AF' }
  }

  const result = classifyAnalog(
    numericValue,
    meta.thresholds as SensorThreshold[]
  )
  return {
    status: `${result.emoji} ${result.label}`,
    color: result.color,
  }
}

// ─── Per-key transformer ──────────────────────────────────────

function transformSensorKey(key: string, rawValue: string): SensorItem | null {
  // Skip metadata keys
  if (SKIP_KEYS.has(key)) return null

  let meta: SensorMeta | DigitalSensorMeta | undefined

  if (KNOWN_WEATHER_KEYS.has(key)) {
    meta = WEATHER_SENSOR_META[key]
  } else if (key.startsWith('soil_')) {
    const index = parseInt(key.split('_')[1], 10)
    if (!isNaN(index)) {
      meta = getSoilSensorMeta(index)
    }
  }

  // Key tidak dikenali — improvisasi dengan fallback generic
  if (!meta) {
    return {
      key,
      label: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      value: rawValue,
      unit: '',
      icon: 'https://example.com/icons/sensor.png',
      status: '❓ Tidak Diketahui',
      type: 'Sensor Cuaca',
      color: '#9CA3AF',
    }
  }

  const { status, color } = classifySensor(meta, rawValue)

  return {
    key,
    label: meta.label,
    value: rawValue,
    unit: meta.unit,
    icon: meta.icon,
    status,
    type: meta.type,
    color,
  }
}

// ─── Device-level transformer ─────────────────────────────────

function transformDevice(rawDevice: RawDevice): SensorDevice {
  const { device_id, type, status, sensor_data } = rawDevice

  const sensors: SensorItem[] = Object.entries(sensor_data)
    .map(([key, value]) => transformSensorKey(key, value))
    .filter((item): item is SensorItem => item !== null)

  return {
    device_id,
    device_name: getDeviceName(device_id),
    type,
    status:
      status === 'success'
        ? 'online'
        : status === 'error'
          ? 'error'
          : 'offline',
    total_sensors: String(sensors.length),
    last_updated: sensor_data.created_at ?? '',
    sensors,
  }
}

// ─── Main transformer (entry point) ──────────────────────────

export function transformDeviceListResponse(
  response: RawApiResponse
): SensorDevice[] {
  if (!response?.success || !response?.data?.device) return []
  return response.data.device.map(transformDevice)
}

export function transformDeviceSpecificResponse(
  response: any
): SensorDevice | null {
  // Untuk endpoint specific /area/:id yang mungkin return single device
  const device = response?.data?.device
  if (!device) return null
  if (Array.isArray(device))
    return device.length > 0 ? transformDevice(device[0]) : null
  return transformDevice(device)
}
