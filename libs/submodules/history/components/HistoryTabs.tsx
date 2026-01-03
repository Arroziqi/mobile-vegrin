import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface HistoryTabsProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

const HistoryTabs = ({ tabs, activeTab, onTabChange }: HistoryTabsProps) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {tabs.map(tab => {
          const isActive = activeTab === tab
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => onTabChange(tab)}
              style={[styles.chip, isActive && styles.chipActive]}
            >
              <Text style={[styles.text, isActive && styles.textActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default HistoryTabs

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  scrollContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  chipActive: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  text: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  textActive: {
    color: 'white',
    fontWeight: '600',
  },
})
