// ============================================================
// hooks/useIot.ts
// IoT hooks menggunakan React Query (TanStack Query)
// ============================================================

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createDeviceIOT,
  deleteDeviceIOT,
  getDeviceAreaList,
  getDeviceAreaSpecific,
} from '@/libs/services/iotServices'
import { queryKeys } from '@/libs/common/const/queryKeys'

// ─── useDeviceAreaList ────────────────────────────────────────

export const useDeviceAreaList = () => {
  return useQuery({
    queryKey: queryKeys.iot.deviceList(),
    queryFn: () => getDeviceAreaList(),
  })
}

// ─── useDeviceAreaSpecific ────────────────────────────────────

export const useDeviceAreaSpecific = (areaId: string) => {
  return useQuery({
    queryKey: queryKeys.iot.deviceDetail(areaId),
    queryFn: () => getDeviceAreaSpecific(areaId),
    enabled: !!areaId,
  })
}

// ─── useCreateDeviceIOT ───────────────────────────────────────

export const useCreateDeviceIOT = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (device_id: string) => createDeviceIOT(device_id),
    onSuccess: () => {
      // Invalidate device list → otomatis refetch dashboard
      queryClient.invalidateQueries({ queryKey: queryKeys.iot.deviceList() })
    },
  })
}

// ─── useDeleteDeviceIOT ───────────────────────────────────────

export const useDeleteDeviceIOT = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (deviceId: string) => deleteDeviceIOT(deviceId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.iot.deviceList() })
    },
  })
}
