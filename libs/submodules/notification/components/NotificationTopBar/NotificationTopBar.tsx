import React from 'react'
import { StyleSheet } from 'react-native'
import Flex from '@/components/Flex'
import NotificationHeader from './NotificationHeader'
import NotificationFlag from './NotificationFlag'
import {
  notificationFlagConfig,
  NotificationFlagItemType,
} from './notificationFlagConfig'
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { ShadowStyles } from '@/libs/common/styles/shadow.style'
import { useRouter } from 'expo-router'

const flags: NotificationFlagItemType[] = [
  {
    type: 'urgent',
    count: 1,
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
    count: 4,
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
    count: 3,
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

function NotificationTopBar() {
  const router = useRouter()
  return (
    <Flex
      direction="column"
      gap={12}
      style={[styles.container, ShadowStyles.shadowBottom]}
    >
      <NotificationHeader
        unreadCount={3}
        onMarkAll={() => console.log('Mark all')}
        onClose={() => router.back()}
      />

      <Flex gap={10} align="center" style={{ width: '100%' }} wrap={'wrap'}>
        {flags.map((item, index) => {
          const config = notificationFlagConfig[item.type]

          return (
            <NotificationFlag
              key={index}
              icon={item.icon}
              label={`${item.count} ${item.label}`}
              borderColor={config.borderColor}
              backgroundColor={config.backgroundColor}
              textColor={config.textColor}
            />
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
})
