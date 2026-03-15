import ButtonCustome from '@/components/buttons/button-custome/ButtonCustome'
import Flex from '@/components/Flex'
import { ShadowStyles } from '@/libs/common/styles/shadow.style'
import UnreadDot from '@/libs/submodules/notification/components/NotificationCard/UnreadDot'
import { useRouter } from 'expo-router'
import { ReactNode } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import {
  notificationCardConfig,
  NotificationFlagType,
} from './notificationCardConfig'
import NotificationIcon from './NotificationIcon'
import NotificationStatus from './NotificationStatus'

interface NotificationCardProps {
  type: NotificationFlagType
  title: string
  description: string
  time: string
  statusLabel: string
  onPress?: () => void
  icon: ReactNode
  link?: string
  isLoaded?: boolean
}

function NotificationCard({
  type,
  title,
  description,
  time,
  statusLabel,
  onPress,
  icon,
  link,
  isLoaded,
}: NotificationCardProps) {
  const router = useRouter()
  const visual = notificationCardConfig[type]

  const handlePress = () => {
    if (onPress) {
      onPress()
    } else if (link) {
      console.log('Navigating to:', link) // Debug log
      // Navigate ke link jika tersedia
      router.push(link as Parameters<typeof router.push>[0])
    }
  }

  return (
    <Pressable onPress={handlePress}>
      <Flex
        style={[
          styles.container,
          ShadowStyles.shadowBottom,
          { backgroundColor: visual.backgroundColor },
        ]}
      >
        {/* strip */}
        <View style={[styles.strip, { backgroundColor: visual.stripColor }]} />

        <Flex style={styles.card} gap={10} align="flex-start">
          <NotificationIcon
            icon={icon}
            backgroundColor={visual.iconBackgroundColor}
          />

          <Flex
            style={styles.content}
            direction="column"
            gap={6}
            align={'flex-start'}
          >
            <Text style={styles.title}>{title}</Text>

            {/* WRAP FIX */}
            <Text style={styles.description} numberOfLines={0}>
              {description}
            </Text>

            <Flex style={{ width: '100%' }} justify="space-between">
              <Text style={styles.time}>{time}</Text>
              {/* only when type is news */}
              {type === 'news' && (
                <ButtonCustome
                  title="Baca Selengkapnya"
                  onPress={onPress || handlePress}
                  style={styles.buttonAction}
                  textStyle={styles.buttonActionText}
                />
              )}
            </Flex>

            <NotificationStatus
              label={statusLabel}
              dotColor={visual.dotColor}
              textColor={visual.textColor}
            />

            {isLoaded && <UnreadDot />}
          </Flex>
        </Flex>
      </Flex>
    </Pressable>
  )
}

export default NotificationCard

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 14,
    overflow: 'hidden',
  },
  strip: {
    width: 4,
    height: '100%',
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  content: {
    flex: 1,
  },

  // FIXED COLORS
  title: {
    fontSize: 16,
    color: '#1E2939',
  },
  description: {
    fontSize: 12,
    color: '#4A5565',
    flexWrap: 'wrap',
  },
  time: {
    fontSize: 12,
    color: '#6A7282',
  },
  buttonAction: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: 'auto',
  },
  buttonActionText: {
    fontSize: 12,
    color: '#009966',
  },
})
