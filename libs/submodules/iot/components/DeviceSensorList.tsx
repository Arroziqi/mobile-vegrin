// ============================================================
// components/DeviceCard/DeviceSensorList.tsx
// Render sensor items grouped by type (Cuaca / Tanah)
// ============================================================

import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Entypo, Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import IotInfoCard from '@/libs/submodules/iot/components/Cards/IotInfoCard'
import IotInfoCardSection from '@/libs/submodules/iot/components/Cards/IotInfoCardSection'
import { useGridLayout } from '@/hooks/useGridLayout'
import type { SensorItem } from '@/libs/common/utils/sensorTransformer'

const ACTIVE_COLOR = '#B9F8CF'

interface DeviceSensorListProps {
  sensors: SensorItem[]
}

function DeviceSensorList({ sensors }: DeviceSensorListProps) {
  const { handleLayout, itemWidth } = useGridLayout()

  const weatherSensors = useMemo(
    () => sensors.filter(s => s.type === 'Sensor Cuaca'),
    [sensors]
  )
  const soilSensors = useMemo(
    () => sensors.filter(s => s.type === 'Sensor Tanah'),
    [sensors]
  )

  return (
    <View style={styles.container} onLayout={handleLayout}>
      {weatherSensors.length > 0 && (
        <IotInfoCardSection
          sectionText={`Sensor Cuaca (${weatherSensors.length})`}
        >
          {weatherSensors.map(sensor => (
            <IotInfoCard
              key={sensor.key}
              color={ACTIVE_COLOR}
              style={{ width: itemWidth }}
              label={sensor.label}
              value={sensor.value}
              unit={sensor.unit}
              icon={getSensorIcon(sensor.key)}
              insight={{
                text: sensor.status,
                status: getInsightStatus(sensor.color),
              }}
            />
          ))}
        </IotInfoCardSection>
      )}

      {soilSensors.length > 0 && (
        <IotInfoCardSection
          sectionText={`Sensor Tanah (${soilSensors.length})`}
        >
          {soilSensors.map(sensor => (
            <IotInfoCard
              key={sensor.key}
              color={ACTIVE_COLOR}
              style={{ width: itemWidth }}
              label={sensor.label}
              value={sensor.value}
              unit={sensor.unit}
              icon={getSensorIcon(sensor.key)}
              insight={{
                text: sensor.status,
                status: getInsightStatus(sensor.color),
              }}
            />
          ))}
        </IotInfoCardSection>
      )}
    </View>
  )
}

export default DeviceSensorList

// ─── Icon resolver ─────────────────────────────────────────────
// Mapping key sensor → icon component

function getSensorIcon(key: string): React.ReactNode {
  if (key === 'temperature')
    return <FontAwesome6 name="temperature-empty" size={16} color="#FF6900" />
  if (key === 'humidity')
    return <Ionicons name="water-outline" size={16} color="#51A2FF" />
  if (key === 'light_lux')
    return <Entypo name="light-up" size={16} color="#F0B100" />
  if (key === 'rain_mm' || key === 'rain_status')
    return <Feather name="cloud-rain" size={16} color="#2B7FFF" />
  if (key.startsWith('soil_'))
    return <Ionicons name="water-outline" size={16} color="#51A2FF" />
  // fallback
  return <Feather name="activity" size={16} color="#6A7282" />
}

// ─── Insight status resolver ───────────────────────────────────
// Mapping color hex → insight status prop

function getInsightStatus(
  color: string
): 'positive' | 'negative' | 'warning' | undefined {
  if (color === '#00A63E') return 'positive'
  if (color === '#EF4444') return 'negative'
  if (color === '#F59E0B') return 'warning'
  return undefined
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
})
