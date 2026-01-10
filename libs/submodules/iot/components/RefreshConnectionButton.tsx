import React, { useEffect, useRef } from 'react'
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

interface RefreshConnectionButtonProps {
  onPress: () => void
  loading?: boolean
  disabled?: boolean
}

const RefreshConnectionButton: React.FC<RefreshConnectionButtonProps> = ({
  onPress,
  loading = false,
  disabled = false,
}) => {
  const rotateAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (!loading) {
      rotateAnim.setValue(0)
      return
    }

    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      })
    ).start()
  }, [loading, rotateAnim])

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  const isDisabled = disabled || loading

  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.wrapper,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
      ]}
    >
      <LinearGradient
        colors={['#FB2C36', '#EC003F']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <View style={styles.content}>
          {loading ? (
            <Animated.View style={{ transform: [{ rotate }] }}>
              <Feather name="refresh-cw" size={20} color="#FFFFFF" />
            </Animated.View>
          ) : (
            <Feather name="refresh-cw" size={20} color="#FFFFFF" />
          )}

          <Text style={styles.text}>Coba hubungkan ulang</Text>
        </View>
      </LinearGradient>
    </Pressable>
  )
}

export default RefreshConnectionButton

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderRadius: 14,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.9,
  },
  disabled: {
    opacity: 0.6,
  },
})
