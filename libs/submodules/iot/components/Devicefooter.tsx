// ============================================================
// components/DeviceCard/DeviceFooter.tsx
// Footer card: lokasi, update interval, sensor aktif, uptime
// ============================================================

import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Row from '@/components/Row'
import Column from '@/components/Column'

interface DeviceFooterProps {
  totalSensors: number
  location?: string
  updateInterval?: string
  uptime?: string
}

function DeviceFooter({
  totalSensors,
  location = 'Lahan A - Sektor 1',
  updateInterval = '1 menit',
  uptime = '45 hari',
}: DeviceFooterProps) {
  return (
    <>
      {/* Location & update interval */}
      <Row justify={'space-between'} style={styles.divider}>
        <Row gap={10}>
          <Text>📍</Text>
          <Text style={styles.mutedText}>{location}</Text>
        </Row>
        <Row gap={10}>
          <Text>⏱️</Text>
          <Text style={styles.mutedText}>Update: {updateInterval}</Text>
        </Row>
      </Row>

      {/* Sensor aktif & uptime */}
      <Row style={styles.statsRow} justify={'space-between'}>
        <Column align={'center'} style={styles.statLeft}>
          <Text style={styles.mutedText}>Sensor Aktif</Text>
          <Text style={styles.statValue}>
            {totalSensors}/{totalSensors}
          </Text>
        </Column>
        <Column align={'center'} style={styles.statRight}>
          <Text style={styles.mutedText}>Uptime</Text>
          <Text style={styles.statValue}>{uptime}</Text>
        </Column>
      </Row>
    </>
  )
}

export default DeviceFooter

const styles = StyleSheet.create({
  divider: {
    paddingVertical: 16,
    borderTopWidth: 1.34,
    borderColor: '#A4F4CF',
  },
  statsRow: {
    backgroundColor: '#D0FAE5',
    borderColor: '#5EE9B5',
    borderWidth: 1.34,
    borderRadius: 10,
    padding: 13,
  },
  statLeft: {
    paddingHorizontal: 16,
    borderRightWidth: 1.34,
    borderRightColor: '#5EE9B5',
  },
  statRight: {
    paddingHorizontal: 16,
    borderLeftWidth: 1.34,
    borderLeftColor: '#5EE9B5',
  },
  mutedText: {
    color: '#6A7282',
    fontSize: 12,
  },
  statValue: {
    color: '#009966',
    fontSize: 18,
  },
})
