import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import { useNotifications } from '@/libs/hooks/useNotifications'
import { useAppSelector } from '@/libs/store/reduxHooks'
import NotificationCard from '@/libs/submodules/notification/components/NotificationCard/NotificationCard'
import { NotificationFlagType } from '@/libs/submodules/notification/components/NotificationCard/notificationCardConfig'
import NotificationTopBar from '@/libs/submodules/notification/components/NotificationTopBar/NotificationTopBar'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native'

type NotificationFilter = 'all' | 'urgent' | 'info' | 'news'

function NotificationScreen() {
  const [selectedFilter, setSelectedFilter] =
    useState<NotificationFilter>('all')
  const reduxNotifications = useAppSelector(state => state.notification.items)
  const { notifications: apiNotifications, loading, error } = useNotifications()

  // Gabungkan notifikasi dari Redux (real-time) dan API (persistent)
  const allNotifications = [...reduxNotifications, ...apiNotifications]
  const uniqueNotifications = Array.from(
    new Map(allNotifications.map(item => [item.id || item.link, item])).values()
  ).sort((a, b) => {
    const dateA = new Date(a.notify_at || new Date()).getTime()
    const dateB = new Date(b.notify_at || new Date()).getTime()
    return dateB - dateA
  })

  // Filter notifikasi berdasarkan tipe
  const filteredNotifications =
    selectedFilter === 'all'
      ? uniqueNotifications
      : uniqueNotifications.filter(item => {
          const typeMap: Record<NotificationFilter, string> = {
            all: 'all',
            urgent: 'Mendesak',
            info: 'Cuaca',
            news: 'Berita',
          }
          return item.type === typeMap[selectedFilter]
        })

  return (
    <Container>
      <Flex
        flex={1}
        justify={'flex-start'}
        direction={'column'}
        style={styles.container}
        gap={10}
      >
        <NotificationTopBar
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          allNotifications={uniqueNotifications}
        />
        {loading && (
          <Flex justify="center" align="center" style={{ flex: 1 }}>
            <ActivityIndicator size="large" color="#155DFC" />
          </Flex>
        )}
        {error && <Text style={styles.errorText}>Error: {error}</Text>}
        {!loading && (
          <ScrollView style={styles.content}>
            {filteredNotifications.length === 0 ? (
              <Text style={styles.emptyText}>Belum ada notifikasi</Text>
            ) : (
              filteredNotifications.map(item => {
                const typeMap: Record<string, NotificationFlagType> = {
                  Mendesak: 'urgent',
                  Cuaca: 'info',
                  Berita: 'news',
                }
                return (
                  <NotificationCard
                    key={item.id || item.link}
                    icon={<Feather name={'bell'} size={24} color={'#155DFC'} />}
                    type={typeMap[item.type] || 'news'}
                    title={item.title}
                    description={item.text}
                    time={new Date(item.notify_at).toLocaleTimeString('id-ID', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                    statusLabel={item.type}
                    link={item.link}
                    isLoaded={true}
                  />
                )
              })
            )}
          </ScrollView>
        )}
      </Flex>
    </Container>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#999',
    fontSize: 14,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#FF3B3B',
    fontSize: 14,
  },
})
