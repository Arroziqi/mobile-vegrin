import Flex from '@/components/Flex'
import { ShadowStyles } from '@/libs/common/styles/shadow.style'
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet } from 'react-native'
import NotificationFlag from './NotificationFlag'
import {
  notificationFlagConfig,
  NotificationFlagItemType,
} from './notificationFlagConfig'
import NotificationHeader from './NotificationHeader'

type NotificationFilter = 'all' | 'urgent' | 'info' | 'news'

interface NotificationTopBarProps {
  selectedFilter: NotificationFilter
  onFilterChange: (filter: NotificationFilter) => void
  allNotifications: any[]
}

function NotificationTopBar(props: NotificationTopBarProps) {
  const { selectedFilter, onFilterChange, allNotifications } = props
  const router = useRouter()

  // Hitung jumlah notifikasi per tipe
  const getCountByType = (type: string) => {
    return allNotifications.filter(item => item.type === type).length
  }

  const flags: NotificationFlagItemType[] = [
    {
      type: 'urgent',
      count: getCountByType('Mendesak'),
      icon: (
        <Ionicons
          name={'warning-outline'}
          color={notificationFlagConfig.urgent.iconColor}
          size={14}
        />
      ),
      label: 'Mendesak',
    },
    {
      type: 'info',
      count: getCountByType('Cuaca'),
      icon: (
        <Feather
          name={'cloud-rain'}
          color={notificationFlagConfig.info.iconColor}
          size={14}
        />
      ),
      label: 'Cuaca',
    },
    {
      type: 'news',
      count: getCountByType('Berita'),
      icon: (
        <FontAwesome6
          name={'newspaper'}
          color={notificationFlagConfig.news.iconColor}
          size={14}
        />
      ),
      label: 'Berita',
    },
  ]
  return (
    <Flex
      direction="column"
      gap={12}
      style={[styles.container, ShadowStyles.shadowBottom]}
    >
      <NotificationHeader
        // unreadCount={3}
        // onMarkAll={() => console.log('Mark all')}
        onClose={() => router.back()}
      />

      <Flex gap={10} align="center" style={{ width: '100%' }} wrap={'wrap'}>
        {/* All filter */}
        <Pressable
          onPress={() => onFilterChange('all')}
          style={({ pressed }) => [
            styles.filterButton,
            selectedFilter === 'all' && styles.filterButtonActive,
            pressed && styles.filterButtonPressed,
          ]}
        >
          <NotificationFlag
            icon={null}
            label={`${allNotifications.length} Semua`}
            borderColor={selectedFilter === 'all' ? '#155DFC' : '#E0E0E0'}
            backgroundColor={selectedFilter === 'all' ? '#F0F5FF' : '#F9F9F9'}
            textColor={selectedFilter === 'all' ? '#155DFC' : '#666'}
          />
        </Pressable>

        {flags.map((item, index) => {
          const config = notificationFlagConfig[item.type]
          const isActive = selectedFilter === item.type

          return (
            <Pressable
              key={index}
              onPress={() => onFilterChange(item.type)}
              style={({ pressed }) => [
                styles.filterButton,
                isActive && styles.filterButtonActive,
                pressed && styles.filterButtonPressed,
              ]}
            >
              <NotificationFlag
                icon={item.icon}
                label={`${item.count} ${item.label}`}
                borderColor={isActive ? config.borderColor : '#E0E0E0'}
                backgroundColor={isActive ? config.backgroundColor : '#F9F9F9'}
                textColor={isActive ? config.textColor : '#666'}
              />
            </Pressable>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default NotificationTopBar

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 21,
    paddingTop: 40,
  },
  filterButton: {
    borderRadius: 20,
    paddingVertical: 2,
  },
  filterButtonActive: {
    shadowColor: '#155DFC',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  filterButtonPressed: {
    opacity: 0.7,
  },
})
