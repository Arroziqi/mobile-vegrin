import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Entypo,
  Feather,
  FontAwesome6,
  Fontisto,
  Ionicons,
} from '@expo/vector-icons'
import IotInfoCard from '@/libs/submodules/iot/components/Cards/IotInfoCard'
import IotInfoCardSection from '@/libs/submodules/iot/components/Cards/IotInfoCardSection'
import { useGridLayout } from '@/hooks/useGridLayout'

const ACTIVE_COLOR = '#B9F8CF'

function IotDataList() {
  const { handleLayout, itemWidth } = useGridLayout()

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <IotInfoCardSection sectionText={'Sensor Cuaca (4)'}>
        <IotInfoCard
          color={ACTIVE_COLOR}
          style={{ width: itemWidth }}
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
          style={{ width: itemWidth }}
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
          style={{ width: itemWidth }}
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
          style={{ width: itemWidth }}
          label="Hujan"
          value={1}
          unit="(Hujan)"
          icon={<Feather name="cloud-rain" size={16} color="#2B7FFF" />}
          insight={{
            text: '☀️ Tidak Hujan',
          }}
        />
      </IotInfoCardSection>
      <IotInfoCardSection sectionText={'Sensor Tanah (4)'}>
        <IotInfoCard
          color={ACTIVE_COLOR}
          style={{ width: itemWidth }}
          label="Kelembapan #1"
          value={24}
          unit="%"
          icon={<Ionicons name="water-outline" size={16} color="#51A2FF" />}
          insight={{
            text: '🏜️  Kering',
            status: 'negative',
          }}
        />

        <IotInfoCard
          color={ACTIVE_COLOR}
          style={{ width: itemWidth }}
          label="Kelembapan #2"
          value={68}
          unit="%"
          icon={<Ionicons name="water-outline" size={16} color="#51A2FF" />}
          insight={{
            text: '🏜️  Optimal',
          }}
        />

        <IotInfoCard
          color={ACTIVE_COLOR}
          style={{ width: itemWidth }}
          label="pH Tanah #1"
          value={6.5}
          unit="pH"
          icon={<Fontisto name="laboratory" size={16} color="#AD46FF" />}
          insight={{
            text: '✓ pH Netral',
          }}
        />

        <IotInfoCard
          color={ACTIVE_COLOR}
          style={{ width: itemWidth }}
          label="pH Tanah #2"
          value={6.5}
          unit="pH"
          icon={<Fontisto name="laboratory" size={16} color="#AD46FF" />}
          insight={{
            text: '✓ pH Netral',
          }}
        />
      </IotInfoCardSection>
    </View>
  )
}

export default IotDataList

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
})
