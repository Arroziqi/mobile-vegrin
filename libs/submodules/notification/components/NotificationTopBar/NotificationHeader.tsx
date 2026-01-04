import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import Flex from '@/components/Flex'
import { customizeColors } from '@/libs/core/config/theme/color'

interface NotificationHeaderProps {
  unreadCount: number
  onMarkAll?: () => void
  onClose?: () => void
}

const NotificationHeader = ({
  unreadCount,
  onMarkAll,
  onClose,
}: NotificationHeaderProps) => {
  const subtitle =
    unreadCount > 0 ? `${unreadCount} belum dibaca` : 'Semua sudah dibaca'

  return (
    <Flex justify="space-between" align="center" style={{ width: '100%' }}>
      <Flex align="center" gap={10}>
        <LinearGradient
          colors={customizeColors.gradient.linear}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.iconWrapper}
        >
          <Ionicons name="notifications-outline" size={24} color="white" />
        </LinearGradient>

        <Flex direction="column">
          <Text style={styles.title}>Notifikasi</Text>
          <Text style={styles.text}>{subtitle}</Text>
        </Flex>
      </Flex>

      <Flex gap={10}>
        {unreadCount > 0 && (
          <Pressable onPress={onMarkAll}>
            <View style={styles.buttonAction}>
              <Text style={styles.buttonText}>Tandai Semua</Text>
            </View>
          </Pressable>
        )}

        <Pressable onPress={onClose}>
          <View style={styles.buttonClose}>
            <MaterialIcons name="close" size={20} color="#4a5565" />
          </View>
        </Pressable>
      </Flex>
    </Flex>
  )
}

export default NotificationHeader

const styles = StyleSheet.create({
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#1E2939',
  },
  text: {
    fontSize: 12,
    color: '#6a7282',
  },
  buttonAction: {
    backgroundColor: '#ECFDF5',
    borderRadius: 10,
    paddingHorizontal: 11,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 12,
    color: '#009966',
  },
  buttonClose: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
