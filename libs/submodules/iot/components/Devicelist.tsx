// ============================================================
// components/DeviceCard/DeviceList.tsx
// Loop semua device dari API dan render DeviceCard masing-masing
// ============================================================

import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import DeviceCard from './DeviceCard'
import { useDeviceAreaList } from '@/libs/hooks/iot/useIot'

function DeviceList() {
  const { data: devices, isLoading, isError, error } = useDeviceAreaList()

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#00A63E" />
        <Text style={styles.mutedText}>Memuat perangkat...</Text>
      </View>
    )
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          ⚠️ {(error as Error)?.message ?? 'Gagal memuat perangkat'}
        </Text>
      </View>
    )
  }

  if (!devices || devices.length === 0) {
    return (
      <View style={styles.emptyWrapper}>
        <Text style={styles.mutedText}>
          💡 Tips: Klik tombol Tambah untuk menghubungkan perangkat IoT lainnya
        </Text>
      </View>
    )
  }

  return (
    <>
      {devices.map(device => (
        <DeviceCard key={device.device_id} device={device} />
      ))}

      {/* Tip di paling bawah */}
      <View style={styles.emptyWrapper}>
        <Text style={styles.mutedText}>
          💡 Tips: Klik tombol Tambah untuk menghubungkan perangkat IoT lainnya
        </Text>
      </View>
    </>
  )
}

export default DeviceList

const styles = StyleSheet.create({
  center: {
    padding: 32,
    alignItems: 'center',
    gap: 12,
  },
  emptyWrapper: {
    padding: 16,
    borderColor: '#00D492',
    borderWidth: 1,
    borderRadius: 14,
    margin: 16,
    marginTop: 0,
  },
  mutedText: {
    textAlign: 'center',
    color: '#6A7282',
  },
  errorText: {
    textAlign: 'center',
    color: '#EF4444',
    fontSize: 13,
  },
})
