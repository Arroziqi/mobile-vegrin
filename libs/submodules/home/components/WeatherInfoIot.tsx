// ============================================================
// WeatherInfoIot.tsx
// Cuplikan 4 sensor cuaca dari device dengan last_updated terbaru
// ============================================================

import React from 'react'
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Row from '@/components/Row'
import { Entypo, Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import IotInfoCard from '@/libs/submodules/iot/components/Cards/IotInfoCard'
import IotInfoCardSection from '@/libs/submodules/iot/components/Cards/IotInfoCardSection'
import { useRouter } from 'expo-router'
import { useDeviceAreaList } from '@/libs/hooks/iot/useIot'
import type { SensorItem } from '@/libs/common/utils/sensorTransformer'

const ACTIVE_COLOR = '#B9F8CF'
const WEATHER_KEYS_ORDER = [
  'temperature',
  'humidity',
  'light_lux',
  'rain_mm',
  'rain_status',
]

// ─── Icon per sensor key ──────────────────────────────────────

function getSensorIcon(key: string): React.ReactNode {
  if (key === 'temperature')
    return <FontAwesome6 name="temperature-empty" size={16} color="#FF6900" />
  if (key === 'humidity')
    return <Ionicons name="water-outline" size={16} color="#51A2FF" />
  if (key === 'light_lux')
    return <Entypo name="light-up" size={16} color="#F0B100" />
  if (key === 'rain_mm' || key === 'rain_status')
    return <Feather name="cloud-rain" size={16} color="#2B7FFF" />
  return <Feather name="activity" size={16} color="#6A7282" />
}

function getInsightStatus(
  color: string
): 'positive' | 'negative' | 'warning' | undefined {
  if (color === '#00A63E') return 'positive'
  if (color === '#EF4444') return 'negative'
  if (color === '#F59E0B') return 'warning'
  return undefined
}

// ─── Main component ───────────────────────────────────────────

function WeatherInfoIot() {
  const router = useRouter()
  const { data: devices, isLoading, isError } = useDeviceAreaList()

  // Ambil device dengan last_updated terbaru
  const latestDevice = React.useMemo(() => {
    if (!devices || devices.length === 0) return null
    return [...devices].sort((a, b) => {
      const dateA = new Date(a.last_updated?.replace(' ', 'T') ?? 0).getTime()
      const dateB = new Date(b.last_updated?.replace(' ', 'T') ?? 0).getTime()
      return dateB - dateA
    })[0]
  }, [devices])

  // Ambil max 4 sensor cuaca, diurutkan sesuai WEATHER_KEYS_ORDER
  const weatherSensors = React.useMemo((): SensorItem[] => {
    if (!latestDevice) return []
    const cuaca = latestDevice.sensors.filter(s => s.type === 'Sensor Cuaca')
    const sorted = WEATHER_KEYS_ORDER.map(key =>
      cuaca.find(s => s.key === key)
    ).filter((s): s is SensorItem => !!s)
    // fallback: kalau key order tidak cocok, ambil langsung dari list
    const result = sorted.length > 0 ? sorted : cuaca
    return result.slice(0, 4)
  }, [latestDevice])

  const sectionLabel = latestDevice
    ? `Sensor Cuaca (${weatherSensors.length}) · ${latestDevice.device_id}`
    : 'Sensor Cuaca'

  const action = (
    <Pressable onPress={() => router.push('/dashboard-iot')}>
      <Row gap={5}>
        <Text style={styles.actionText}>Lihat Semuanya</Text>
        <Feather name={'arrow-right'} size={12} color={'#00BBA7'} />
      </Row>
    </Pressable>
  )

  if (isLoading) {
    return (
      <IotInfoCardSection sectionText="Sensor Cuaca" action={action}>
        <View style={styles.stateWrapper}>
          <ActivityIndicator size="small" color="#00A63E" />
          <Text style={styles.stateText}>Memuat data sensor...</Text>
        </View>
      </IotInfoCardSection>
    )
  }

  if (isError || !latestDevice || weatherSensors.length === 0) {
    return (
      <IotInfoCardSection sectionText="Sensor Cuaca" action={action}>
        <View style={styles.stateWrapper}>
          <Text style={styles.stateText}>⚠️ Data sensor tidak tersedia</Text>
        </View>
      </IotInfoCardSection>
    )
  }

  return (
    <IotInfoCardSection sectionText={sectionLabel} action={action}>
      {weatherSensors.map(sensor => (
        <IotInfoCard
          key={sensor.key}
          color={ACTIVE_COLOR}
          style={styles.card}
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
  )
}

export default WeatherInfoIot

const styles = StyleSheet.create({
  card: {
    width: '47%',
  },
  actionText: {
    color: '#00BBA7',
    fontSize: 12,
  },
  stateWrapper: {
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    gap: 8,
  },
  stateText: {
    color: '#6A7282',
    fontSize: 12,
  },
})
