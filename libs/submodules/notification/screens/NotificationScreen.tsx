import React from 'react'
import Container from '@/components/container/Container'
import { ScrollView, StyleSheet } from 'react-native'
import NotificationTopBar from '@/libs/submodules/notification/components/NotificationTopBar/NotificationTopBar'
import Flex from '@/components/Flex'
import NotificationCard from '@/libs/submodules/notification/components/NotificationCard/NotificationCard'
import { Feather } from '@expo/vector-icons'

function NotificationScreen() {
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
          <NotificationCard
            icon={<Feather name={'cloud-rain'} size={24} color={'#155DFC'} />}
            type={'urgent'}
            title={'🌧️ Hujan Terdeteksi!'}
            description={
              'Sensor IoT mendeteksi hujan mulai turun. Segera lindungi tanaman sensitif Anda!'
            }
            time={'Baru saja'}
            statusLabel={'Mendesak'}
            isLoaded={true}
          />
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
})
