// ============================================================
// constants/queryKeys.ts
// Centralized query keys untuk React Query
// ============================================================

export const queryKeys = {
  iot: {
    all: ['iot'] as const,
    deviceList: () => [...queryKeys.iot.all, 'deviceList'] as const,
    deviceDetail: (areaId: string) =>
      [...queryKeys.iot.all, 'device', areaId] as const,
  },
}
