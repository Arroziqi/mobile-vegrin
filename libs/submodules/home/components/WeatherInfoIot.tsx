import React from 'react'
import { Pressable, Text } from 'react-native'
import Row from '@/components/Row'
import { Entypo, Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import IotInfoCard from '@/libs/submodules/iot/components/Cards/IotInfoCard'
import IotInfoCardSection from '@/libs/submodules/iot/components/Cards/IotInfoCardSection'
import { useGridLayout } from '@/hooks/useGridLayout'
import { useRouter } from 'expo-router'

const ACTIVE_COLOR = '#B9F8CF'

function WeatherInfoIot() {
  const { handleLayout } = useGridLayout()
  const router = useRouter()
  return (
    <IotInfoCardSection
      sectionText={'Sensor Cuaca (4)'}
      onLayout={handleLayout}
      action={
        <Pressable onPress={() => router.push('/dashboard-iot')}>
          <Row gap={5}>
            <Text style={{ color: '#00BBA7', fontSize: 12 }}>
              Lihat Semuanya
            </Text>
            <Feather name={'arrow-right'} size={12} color={'#00BBA7'} />
          </Row>
        </Pressable>
      }
    >
      <IotInfoCard
        color={ACTIVE_COLOR}
        style={{ width: '47%' }}
        label="Suhu"
        value={24}
        unit="°C"
        icon={
          <FontAwesome6 name="temperature-empty" size={16} color="#FF6900" />
        }
        insight={{
          text: '✓ Normal',
        }}
      />

      <IotInfoCard
        color={ACTIVE_COLOR}
        style={{ width: '47%' }}
        label="Kelembapan Udara"
        value={65}
        unit="%"
        icon={<Ionicons name="water-outline" size={16} color="#51A2FF" />}
        insight={{
          text: '✓ Ideal',
        }}
      />

      <IotInfoCard
        color={ACTIVE_COLOR}
        style={{ width: '47%' }}
        label="Kecerahan"
        value={934}
        unit="lux"
        icon={<Entypo name="light-up" size={16} color="#F0B100" />}
        insight={{
          text: '🌥️ Redup',
          status: 'negative',
        }}
      />

      <IotInfoCard
        color={ACTIVE_COLOR}
        style={{ width: '47%' }}
        label="Hujan"
        value={1}
        unit="(Hujan)"
        icon={<Feather name="cloud-rain" size={16} color="#2B7FFF" />}
        insight={{
          text: '☀️ Tidak Hujan',
        }}
      />
    </IotInfoCardSection>
  )
}

export default WeatherInfoIot
