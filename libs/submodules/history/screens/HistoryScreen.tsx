import AppBar from '@/components/AppBar'
import Container from '@/components/container/Container'
import { groupPlantsByDate, TPlant } from '@/libs/dummyData/plant.dummy'
import { usePlant } from '@/libs/hooks'
import { format } from 'date-fns'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useMemo, useState } from 'react'
import {
  ActivityIndicator,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import HistoryCard from '../components/HistoryCard'
import HistoryTabs from '../components/HistoryTabs'
import SearchBar from '../components/SearchBar'
import {
  normalizeCondition,
  PlantCondition,
} from '@/libs/common/utils/getPlantCondition'

const FILTER_TABS = [
  { label: 'Semua', value: 'Semua' },
  { label: 'Sehat', value: PlantCondition.SEHAT },
  { label: 'Sakit', value: PlantCondition.SAKIT },
  { label: 'Hama', value: PlantCondition.HAMA },
]

const HistoryScreen = () => {
  const { fetchLogs, logs, loading } = usePlant()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('Semua')

  useEffect(() => {
    fetchLogs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Map PlantLogData → TPlant agar kompatibel dengan groupPlantsByDate & HistoryCard
  const mappedPlants: TPlant[] = useMemo(
    () =>
      logs.map(log => ({
        id: log.id,
        name: log.plant_name,
        scientificName: '-',
        condition: log.condition,
        accuracy: '0',
        timestamp: log.timestamp
          ? format(new Date(log.timestamp), 'yyyy-MM-dd HH:mm:ss')
          : format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        imageUrl: log.plant_image,
      })),
    [logs]
  )

  console.log('logs:', logs) // Debug: cek hasil mapping

  const sections = useMemo(() => {
    const filtered = mappedPlants.filter(plant => {
      const matchesSearch = plant.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

      const matchesFilter =
        activeFilter === 'Semua' ||
        normalizeCondition(plant.condition) === normalizeCondition(activeFilter)

      return matchesSearch && matchesFilter
    })

    return groupPlantsByDate(filtered)
  }, [mappedPlants, searchQuery, activeFilter])

  return (
    <Container style={styles.container}>
      <LinearGradient colors={['#ECFDF5', '#FFFFFF']} style={styles.gradient}>
        <AppBar variant="default" title="Riwayat Scan" />
        <View style={styles.headerWrapper}>
          <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

          <HistoryTabs
            tabs={FILTER_TABS.map(t => t.label)}
            activeTab={
              FILTER_TABS.find(t => t.value === activeFilter)?.label ?? 'Semua'
            }
            onTabChange={label => {
              const found = FILTER_TABS.find(t => t.label === label)
              setActiveFilter(found?.value ?? 'Semua')
            }}
          />
        </View>

        <SectionList
          sections={sections}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.dateHeader}>
              <Text style={styles.dateText}>{title}</Text>
            </View>
          )}
          renderItem={({ item }) => <HistoryCard {...item} />}
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator
                size="large"
                color="#4CAF50"
                style={{ marginTop: 40 }}
              />
            ) : (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Belum ada riwayat</Text>
              </View>
            )
          }
        />
      </LinearGradient>
    </Container>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: 'white',
    paddingBottom: 10,
    zIndex: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  gradient: {
    flex: 1,
    paddingBottom: 50,
  },
  listContainer: {
    padding: 20,
    paddingBottom: 20,
    gap: 10,
  },
  dateHeader: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  dateText: {
    fontSize: 16,
    color: '#888',
    fontWeight: '400',
  },
  emptyContainer: {
    paddingTop: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: '#9CA3AF',
  },
})
