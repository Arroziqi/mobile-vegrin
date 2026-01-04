import React, { ReactNode } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import Flex from '@/components/Flex'

export interface NotificationFlagProps {
  label: string
  icon: ReactNode
  borderColor: string
  backgroundColor: string
  textColor: string
  onPress?: () => void
}

const NotificationFlag = ({
  label,
  icon,
  borderColor,
  backgroundColor,
  textColor,
  onPress,
}: NotificationFlagProps) => {
  return (
    <Pressable onPress={onPress}>
      <Flex
        align="center"
        gap={7}
        style={[
          styles.wrapper,
          {
            borderColor,
            backgroundColor,
          },
        ]}
      >
        {icon}
        <Text style={[styles.text, { color: textColor }]}>{label}</Text>
      </Flex>
    </Pressable>
  )
}

export default NotificationFlag

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  text: {
    fontSize: 12,
  },
})
