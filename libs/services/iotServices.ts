// ============================================================
// libs/services/iotServices.ts
// API service layer — raw HTTP calls + transform ke normalized schema
// ============================================================

import axios from 'axios'
import { API_BASE_URL } from '@/libs/core/config/app.config'
import {
  getDeviceIdFromPersist,
  getTokenFromPersist,
} from '@/libs/common/utils/auth'
import {
  type SensorDevice,
  transformDeviceListResponse,
  transformDeviceSpecificResponse,
} from '@/libs/common/utils/sensorTransformer'

// ─── Axios instance factory ───────────────────────────────────

const getApiInstance = async () => {
  const token = await getTokenFromPersist()
  const deviceId = await getDeviceIdFromPersist()

  return axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      vtoken: token ?? '',
      device_id: deviceId ?? '',
    },
  })
}

// ─── Services ─────────────────────────────────────────────────

/** GET /area — list semua device & sensor data, sudah di-transform */
export const getDeviceAreaList = async (
  device_id?: string
): Promise<SensorDevice[]> => {
  const api = await getApiInstance()
  const response = await api.get('/area', { params: { device_id } })
  return transformDeviceListResponse(response.data)
}

/** GET /area/:id — detail satu area/device, sudah di-transform */
export const getDeviceAreaSpecific = async (
  areaId: string,
  device_id?: string
): Promise<SensorDevice | null> => {
  const api = await getApiInstance()
  const response = await api.get(`/area/${areaId}`, { params: { device_id } })
  return transformDeviceSpecificResponse(response.data)
}

/** POST /area — tambah device IOT */
export const createDeviceIOT = async (device_id: string) => {
  const api = await getApiInstance()
  const response = await api.post('/area', { device_id })
  return response.data
}

/** DELETE /area/:id — hapus device IOT */
export const deleteDeviceIOT = async (deviceId: string) => {
  const api = await getApiInstance()
  const response = await api.delete(`/area/${deviceId}`)
  return response.data
}
