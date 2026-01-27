import React, { useState } from 'react'
import { LayoutChangeEvent, StyleSheet, View } from 'react-native'
import { Entypo, Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import Flex from '@/components/Flex'
import IotInfoCard from '@/libs/submodules/iot/components/Cards/IotInfoCard'

const NUM_COLUMNS = 2
const GRID_GAP = 12
const DISABLED_COLOR = '#D1D5DC'
const CARD_VALUE = '-- '

function NoSignalIotDataList() {
  const [itemWidth, setItemWidth] = useState<number>(0)

  const handleLayout = (event: LayoutChangeEvent) => {
    const containerWidth = event.nativeEvent.layout.width
    const calculatedWidth =
      (containerWidth - GRID_GAP * (NUM_COLUMNS - 1)) / NUM_COLUMNS
    setItemWidth(calculatedWidth)
  }

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <Flex wrap="wrap" direction="row" style={{ gap: GRID_GAP }}>
        <IotInfoCard
          color={DISABLED_COLOR}
          disabled={true}
          style={{ width: itemWidth }}
          label="Suhu"
          value={CARD_VALUE}
          unit="°C"
          icon={
            <FontAwesome6 name="temperature-empty" size={16} color="#99A1AF" />
          }
        />

        <IotInfoCard
          color={DISABLED_COLOR}
          disabled={true}
          style={{ width: itemWidth }}
          label="Kecerahan"
          value={CARD_VALUE}
          unit="(gelap)"
          icon={<Entypo name="light-up" size={16} color="#99A1AF" />}
        />

        <IotInfoCard
          color={DISABLED_COLOR}
          disabled={true}
          style={{ width: itemWidth }}
          label="Hujan"
          value={CARD_VALUE}
          unit="(Hujan)"
          icon={<Feather name="cloud-rain" size={16} color="#99A1AF" />}
        />

        <IotInfoCard
          color={DISABLED_COLOR}
          disabled={true}
          style={{ width: itemWidth }}
          label="Kelembapan"
          value={CARD_VALUE}
          unit="%"
          icon={<Ionicons name="water-outline" size={16} color="#99A1AF" />}
        />
      </Flex>
    </View>
  )
}

export default NoSignalIotDataList

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})
