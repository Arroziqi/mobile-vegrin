import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import { useAppSelector } from '@/libs/store/reduxHooks'
import NotificationCard from '@/libs/submodules/notification/components/NotificationCard/NotificationCard'
import NotificationTopBar from '@/libs/submodules/notification/components/NotificationTopBar/NotificationTopBar'
import { Feather } from '@expo/vector-icons'
import { ScrollView, StyleSheet, Text } from 'react-native'

function NotificationScreen() {
  const notifications = useAppSelector(state => state.notification.items)

  return (
    <Container>
      <Flex
        flex={1}
        justify={'flex-start'}
        direction={'column'}
        style={styles.container}
        gap={10}
      >
        <NotificationTopBar />
        <ScrollView style={styles.content}>
          {notifications.length === 0 ? (
            <Text style={styles.emptyText}>Belum ada notifikasi</Text>
          ) : (
            notifications.map(item => (
              <NotificationCard
                key={item.id}
                icon={<Feather name={'bell'} size={24} color={'#155DFC'} />}
                type={'news'}
                title={'📢 Notifikasi Baru'}
                description={item.message}
                time={new Date(item.receivedAt).toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                statusLabel={'Informasi'}
                isLoaded={true}
              />
            ))
          )}
        </ScrollView>
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
})
