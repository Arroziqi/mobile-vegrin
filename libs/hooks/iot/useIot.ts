// ============================================================
// hooks/useIot.ts
// Custom hooks untuk consume IoT services
// Data yang dikembalikan sudah dalam bentuk SensorDevice[] (normalized)
// ============================================================

import { useCallback, useEffect, useState } from 'react'
import {
  createDeviceIOT,
  deleteDeviceIOT,
  getDeviceAreaList,
  getDeviceAreaSpecific,
} from '@/libs/services/iotServices'
import type { SensorDevice } from '@/libs/common/utils/sensorTransformer'

// ─── useDeviceAreaList ────────────────────────────────────────

export const useDeviceAreaList = () => {
  const [data, setData] = useState<SensorDevice[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetch = useCallback(async () => {
    setLoading(true)
    try {
      const result = await getDeviceAreaList()
      setData(result)
      setError(null)
    } catch (err: any) {
      setError(err.message ?? 'Gagal mengambil daftar perangkat')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, loading, error, refetch: fetch }
}

// ─── useDeviceAreaSpecific ────────────────────────────────────

export const useDeviceAreaSpecific = (areaId: string) => {
  const [data, setData] = useState<SensorDevice | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetch = useCallback(async () => {
    if (!areaId) return
    setLoading(true)
    try {
      const result = await getDeviceAreaSpecific(areaId)
      setData(result)
      setError(null)
    } catch (err: any) {
      setError(err.message ?? 'Gagal mengambil detail perangkat')
    } finally {
      setLoading(false)
    }
  }, [areaId])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, loading, error, refetch: fetch }
}

// ─── useCreateDeviceIOT ───────────────────────────────────────

export const useCreateDeviceIOT = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const create = useCallback(async (device_id: string) => {
    setLoading(true)
    try {
      const result = await createDeviceIOT(device_id)
      setError(null)
      return result
    } catch (err: any) {
      setError(err.message ?? 'Gagal menambahkan perangkat')
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return { create, loading, error }
}

// ─── useDeleteDeviceIOT ───────────────────────────────────────

export const useDeleteDeviceIOT = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const remove = useCallback(async (deviceId: string) => {
    setLoading(true)
    try {
      const result = await deleteDeviceIOT(deviceId)
      setError(null)
      return result
    } catch (err: any) {
      setError(err.message ?? 'Gagal menghapus perangkat')
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return { remove, loading, error }
}
