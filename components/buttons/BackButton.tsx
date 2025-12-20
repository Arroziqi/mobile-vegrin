// components/BackButton.tsx
import React from 'react'
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { useRouter } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'

interface BackButtonProps {
  onPress?: () => void
  size?: number
  color?: string
  style?: StyleProp<ViewStyle>
  hitSlop?: number
}

export default function BackButton({
  onPress,
  size = 20,
  color = '#262626',
  style,
  hitSlop = 10,
}: BackButtonProps) {
  const router = useRouter()

  const handlePress = () => {
    if (onPress) {
      onPress()
    } else {
      router.back()
    }
  }

  return (
    <Pressable
      onPress={handlePress}
      hitSlop={hitSlop}
      style={[styles.container, style]}
    >
      <FontAwesome6 name="arrow-left-long" size={size} color={color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
