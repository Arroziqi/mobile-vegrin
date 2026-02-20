import WeatherItem, {
  WeatherItemProps,
} from '@/libs/submodules/home/components/WeatherItem'
import PillButtonTabs from '@/components/tabs/pill/PillButtonTabs'
import { useWeather } from '@/libs/hooks'
import {
  WeatherTabKey,
  weatherTabs,
} from '@/libs/common/utils/weatherTransform'

import {
  AppState,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useEffect, useRef, useState } from 'react'
import EmptyState from '@/libs/submodules/manageContent/components/EmptyState'

const { width } = Dimensions.get('window')

const ITEM_VISIBLE = 5
const ITEM_WIDTH = width / ITEM_VISIBLE

// TODO: ini nanti sesuaikan dengan data user
const LAT = -6.228161576699955
const LON = 106.77819428123819

const WeatherForecastingCard = () => {
  const [activeTab, setActiveTab] = useState<WeatherTabKey>('today')

  const { data, loading, refetch } = useWeather(LAT, LON)

  const flatListRef = useRef<FlatList<WeatherItemProps>>(null)

  const weatherData = data[activeTab] || []

  const getCurrentHourIndex = (): number => {
    const nowHour = new Date().getHours().toString().padStart(2, '0')
    return weatherData.findIndex(item => item.time.startsWith(nowHour))
  }

  // Auto center current hour
  useEffect(() => {
    if (!weatherData.length) return

    const index = getCurrentHourIndex()

    if (index > -1 && flatListRef.current) {
      const centerIndex = Math.max(index - 2, 0)

      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index: centerIndex,
          animated: true,
        })
      }, 300)
    }
  }, [weatherData])

  // Refresh when app reopen
  useEffect(() => {
    const subscription = AppState.addEventListener('change', state => {
      if (state === 'active') {
        refetch()
      }
    })

    return () => subscription.remove()
  }, [refetch])

  return (
    <View style={styles.container}>
      <PillButtonTabs
        items={weatherTabs}
        activeKey={activeTab}
        onChange={setActiveTab}
      />

      {loading ? (
        <Text style={styles.infoText}>Loading weather...</Text>
      ) : weatherData.length === 0 ? (
        <EmptyState
          onPress={refetch}
          hideIcon={true}
          message={'Data tidak tersedia'}
        />
      ) : (
        <FlatList
          ref={flatListRef}
          horizontal
          nestedScrollEnabled
          scrollEnabled={weatherData.length > 5}
          showsHorizontalScrollIndicator={false}
          data={weatherData}
          keyExtractor={item => item.time}
          getItemLayout={(_, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_WIDTH * index,
            index,
          })}
          onScrollToIndexFailed={() => {}}
          renderItem={({ item }) => (
            <View style={{ width: ITEM_WIDTH }}>
              <WeatherItem
                time={item.time}
                source={item.source}
                degree={item.degree}
              />
            </View>
          )}
        />
      )}
    </View>
  )
}

export default WeatherForecastingCard

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 14,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  infoText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 12,
  },
  refreshBtn: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  refreshText: {
    color: 'white',
    fontWeight: '600',
  },
})
