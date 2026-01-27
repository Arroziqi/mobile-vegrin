import React, { useState } from 'react'
import { LayoutChangeEvent, StyleSheet, View } from 'react-native'
import { Entypo, Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import Flex from '@/components/Flex'
import IotInfoCard from '@/libs/submodules/iot/components/Cards/IotInfoCard'

const NUM_COLUMNS = 2
const GRID_GAP = 12

const ACTIVE_COLOR = '#B9F8CF'
const DISABLED_COLOR = '#D1D5DC'

interface IotDataListProps {
  isConnected?: boolean
}

function IotDataList({ isConnected }: IotDataListProps) {
  const [itemWidth, setItemWidth] = useState<number>(0)

  const handleLayout = (event: LayoutChangeEvent) => {
    const containerWidth = event.nativeEvent.layout.width

    const calculatedWidth =
      (containerWidth - GRID_GAP * (NUM_COLUMNS - 1)) / NUM_COLUMNS

    setItemWidth(calculatedWidth)
  }

  const cardColor = isConnected ? ACTIVE_COLOR : DISABLED_COLOR
  const cardValue = isConnected ? undefined : '-- '

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <Flex wrap="wrap" direction="row" style={{ gap: GRID_GAP }}>
        <IotInfoCard
          color={cardColor}
          disabled={!isConnected}
          style={{ width: itemWidth }}
          label="Suhu"
          value={isConnected ? 24 : cardValue}
          unit="°C"
          icon={
            <FontAwesome6
              name="temperature-empty"
              size={16}
              color={isConnected ? '#FF6900' : '#99A1AF'}
            />
          }
          insight={{
            text: '✓ Normal',
          }}
        />

        <IotInfoCard
          color={cardColor}
          disabled={!isConnected}
          style={{ width: itemWidth }}
          label="Kecerahan"
          value={isConnected ? 934 : cardValue}
          unit="(gelap)"
          icon={
            <Entypo
              name="light-up"
              size={16}
              color={isConnected ? '#F0B100' : '#99A1AF'}
            />
          }
        />

        <IotInfoCard
          color={cardColor}
          disabled={!isConnected}
          style={{ width: itemWidth }}
          label="Hujan"
          value={isConnected ? 1 : cardValue}
          unit="(Hujan)"
          icon={
            <Feather
              name="cloud-rain"
              size={16}
              color={isConnected ? '#2B7FFF' : '#99A1AF'}
            />
          }
        />

        <IotInfoCard
          color={cardColor}
          disabled={!isConnected}
          style={{ width: itemWidth }}
          label="Kelembapan"
          value={isConnected ? 65 : cardValue}
          unit="%"
          icon={
            <Ionicons
              name="water-outline"
              size={16}
              color={isConnected ? '#51A2FF' : '#99A1AF'}
            />
          }
        />
      </Flex>
    </View>
  )
}

export default IotDataList

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})
