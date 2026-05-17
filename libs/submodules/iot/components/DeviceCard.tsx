// ============================================================
// components/DeviceCard/DeviceCard.tsx
// Card satu device IoT — header info + sensor list + footer
// ============================================================

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Row from '@/components/Row'
import Column from '@/components/Column'
import Dot from '@/components/Dot'
import type { SensorDevice } from '@/libs/common/utils/sensorTransformer'
import DeviceSensorList from '@/libs/submodules/iot/components/DeviceSensorList'
import DeviceFooter from '@/libs/submodules/iot/components/Devicefooter'

interface DeviceCardProps {
  device: SensorDevice
}

function DeviceCard({ device }: DeviceCardProps) {
  const totalSensors = device.sensors.length

  return (
    <View style={styles.content}>
      {/* Header */}
      <Row justify={'space-between'} gap={12} align={'flex-start'}>
        <View style={styles.iconWrapper}>
          <Feather name="cloud-rain" size={27} color="white" />
        </View>

        <Column gap={5} style={{ flex: 1, flexShrink: 1 }}>
          <Text style={styles.deviceName}>{device.device_name}</Text>
          <Text style={styles.deviceId}>ID: {device.device_id}</Text>
          <Text style={styles.deviceDesc}>
            All-in-one weather monitoring dengan sensor cuaca dan tanah
            terintegrasi
          </Text>
          <Row gap={10}>
            <Row gap={5} style={styles.badge}>
              <Dot />
              <Text style={styles.badgeText}>
                {device.status === 'online' ? 'Online' : 'Offline'}
              </Text>
            </Row>
            <Row gap={10} style={styles.badge}>
              <Feather name="wifi" size={12} color="#008236" />
              <Text style={styles.badgeText}>{totalSensors} Sensor</Text>
            </Row>
          </Row>
        </Column>

        <Column justify={'center'} align={'center'}>
          <Feather name={'watch'} size={20} color="#00C950" />
          <Text style={styles.lastUpdatedText}>
            {formatRelativeTime(device.last_updated)}
          </Text>
        </Column>
      </Row>

      {/* Sensor list */}
      <DeviceSensorList sensors={device.sensors} />

      {/* Footer info */}
      <DeviceFooter totalSensors={totalSensors} />
    </View>
  )
}

export default DeviceCard

// ─── Helper ───────────────────────────────────────────────────

function formatRelativeTime(dateStr: string): string {
  if (!dateStr) return '-'
  try {
    const date = new Date(dateStr.replace(' ', 'T'))
    const diffMs = Date.now() - date.getTime()
    const diffMin = Math.floor(diffMs / 60000)
    if (diffMin < 1) return 'Baru saja'
    if (diffMin < 60) return `${diffMin}m lalu`
    const diffHr = Math.floor(diffMin / 60)
    if (diffHr < 24) return `${diffHr}j lalu`
    return `${Math.floor(diffHr / 24)}h lalu`
  } catch {
    return '-'
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    borderColor: '#00D492',
    borderWidth: 1,
    borderRadius: 14,
    margin: 16,
    gap: 20,
  },
  iconWrapper: {
    backgroundColor: '#00BBA7',
    borderRadius: 14,
    padding: 16,
  },
  deviceName: {
    fontSize: 14,
    color: '#101828',
  },
  deviceId: {
    fontSize: 12,
    color: '#009966',
  },
  deviceDesc: {
    fontSize: 12,
    color: '#6A7282',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  badge: {
    backgroundColor: '#DCFCE7',
    borderRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  badgeText: {
    color: '#008236',
    fontSize: 12,
  },
  lastUpdatedText: {
    color: '#99A1AF',
    fontSize: 12,
  },
})
