import PillButtonTabs from '@/components/tabs/pill/PillButtonTabs'
import {
  WeatherTabKey,
  weatherTabs,
} from '@/libs/common/utils/weatherTransform'
import { useWeather } from '@/libs/hooks'
import WeatherItem, {
  WeatherItemProps,
} from '@/libs/submodules/home/components/WeatherItem'

import {
  getCurrentLocation,
  getLocationFromStorage,
  saveLocationToStorage,
} from '@/libs/common/utils/location'
import EmptyState from '@/libs/submodules/manageContent/components/EmptyState'
import { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

const { width } = Dimensions.get('window')

const ITEM_VISIBLE = 5
const ITEM_WIDTH = width / ITEM_VISIBLE

const WeatherForecastingCard = () => {
  const [activeTab, setActiveTab] = useState<WeatherTabKey>('today')
  const [lat, setLat] = useState<number | null>(null)
  const [lon, setLon] = useState<number | null>(null)
  const [locationLoading, setLocationLoading] = useState(true)

  const flatListRef = useRef<FlatList<WeatherItemProps>>(null)

  // 🔥 Load location once
  useEffect(() => {
    const loadLocation = async () => {
      try {
        const location = await getLocationFromStorage()

        if (location.lat && location.lon) {
          setLat(Number(location.lat))
          setLon(Number(location.lon))
        }
      } catch (err) {
        console.log('Failed to load location', err)
      } finally {
        setLocationLoading(false)
      }
    }

    loadLocation()
  }, [])

  // 🔥 Panggil hook SELALU, jangan conditional
  const { data, loading, refetch } = useWeather(lat ?? 0, lon ?? 0)

  const weatherData = lat && lon ? data?.[activeTab] || [] : []

  const getCurrentHourIndex = (): number => {
    const nowHour = new Date().getHours().toString().padStart(2, '0')
    return weatherData.findIndex(item => item.time.startsWith(nowHour))
  }

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

  // 🔥 Handling UI state
  if (locationLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Loading location...</Text>
      </View>
    )
  }

  const handleSetCurrentLocation = async () => {
    try {
      setLocationLoading(true)

      const current = await getCurrentLocation()

      await saveLocationToStorage(current.lat, current.lon)

      setLat(current.lat)
      setLon(current.lon)
    } catch (err) {
      console.log('Failed to get location', err)
    } finally {
      setLocationLoading(false)
    }
  }

  if (!lat || !lon) {
    return (
      <View style={styles.container}>
        <EmptyState
          hideIcon
          message="Lokasi belum tersedia"
          onPress={handleSetCurrentLocation}
        />
      </View>
    )
  }

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
        <EmptyState onPress={refetch} hideIcon message="Data tidak tersedia" />
      ) : (
        <FlatList
          ref={flatListRef}
          horizontal
          nestedScrollEnabled
          scrollEnabled={weatherData.length > 5}
          showsHorizontalScrollIndicator={false}
          data={weatherData}
          keyExtractor={(item, index) => item.time + '_' + index}
          getItemLayout={(_, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_WIDTH * index,
            index,
          })}
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
  container: { width: '100%', gap: 14 },
  emptyContainer: { alignItems: 'center', marginTop: 16 },
  infoText: { textAlign: 'center', color: '#999', marginTop: 12 },
  refreshBtn: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  refreshText: { color: 'white', fontWeight: '600' },
})
