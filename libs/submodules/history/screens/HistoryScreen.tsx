import { LinearGradient } from 'expo-linear-gradient'
import React, { useMemo, useState } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'

// Components
import AppBar from '@/components/AppBar'
import Container from '@/components/container/Container'
import HistoryCard from '../components/HistoryCard'

// Data
import plants, { groupPlantsByDate } from '@/libs/dummyData/plant.dummy'
import HistoryTabs from '../components/HistoryTabs'
import SearchBar from '../components/SearchBar'

const FILTER_TABS = ['Semua', 'Baik', 'Cukup', 'Perlu Perhatian']

const HistoryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('Semua')

  const sections = useMemo(() => {
    const filtered = plants.filter(plant => {
      const matchesSearch = plant.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

      const matchesFilter =
        activeFilter === 'Semua' || plant.condition === activeFilter

      return matchesSearch && matchesFilter
    })

    return groupPlantsByDate(filtered)
  }, [searchQuery, activeFilter])

  return (
    <Container style={styles.container}>
      <LinearGradient colors={['#ECFDF5', '#FFFFFF']} style={styles.gradient}>
        <AppBar variant="default" title="Riwayat Sscan" />
        <View style={styles.headerWrapper}>
          <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

          <HistoryTabs
            tabs={FILTER_TABS}
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
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
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Belum ada riwayat</Text>
            </View>
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
