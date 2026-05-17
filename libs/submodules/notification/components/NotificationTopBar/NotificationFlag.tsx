import Flex from '@/components/Flex'
import { ReactNode } from 'react'
import { StyleSheet, Text } from 'react-native'

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
    <Flex
      align="center"
      gap={icon ? 8 : 0}
      style={[
        styles.wrapper,
        {
          borderColor,
          backgroundColor,
        },
      ]}
    >
      {icon && icon}
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </Flex>
  )
}

export default NotificationFlag

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    minHeight: 32,
  },
  text: {
    fontSize: 13,
    fontWeight: '500',
  },
})
