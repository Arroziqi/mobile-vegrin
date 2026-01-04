import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Flex from '@/components/Flex'

interface NotificationStatusProps {
  label: string
  dotColor: string
  textColor: string
}

const NotificationStatus = ({
  label,
  dotColor,
  textColor,
}: NotificationStatusProps) => {
  return (
    <Flex style={styles.wrapper} gap={6} align="center">
      <View style={[styles.dot, { backgroundColor: dotColor }]} />
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </Flex>
  )
}

export default NotificationStatus

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 20,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  text: {
    fontSize: 12,
  },
})
