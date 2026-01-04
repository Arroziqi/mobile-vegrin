import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import Flex from '@/components/Flex'

interface NotificationIconProps {
  icon: ReactNode
  backgroundColor: string
}

const NotificationIcon = ({ icon, backgroundColor }: NotificationIconProps) => {
  return <Flex style={[styles.wrapper, { backgroundColor }]}>{icon}</Flex>
}

export default NotificationIcon

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    borderRadius: 14,
  },
})
