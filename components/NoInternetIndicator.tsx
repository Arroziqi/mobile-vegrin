import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { withAlpha } from '@/libs/common/utils/withAlpha'

interface NoInternetIndicatorProps {
  size?: number
  color?: string
}

const NoInternetIndicator: React.FC<NoInternetIndicatorProps> = ({
  size = 96,
  color = '#99A1AF',
}) => {
  const anim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(anim, {
        toValue: 1,
        duration: 1400,
        useNativeDriver: true,
      })
    ).start()
  }, [anim])

  /**
   * Pulse tumbuh dari core → max radius container
   * Tidak pernah melebihi size
   */
  const scale = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  })

  const opacity = anim.interpolate({
    inputRange: [0, 0.7, 1],
    outputRange: [0.25, 0.15, 0],
  })

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      {/* Pulse layer (dibatasi container) */}
      <Animated.View
        style={[
          styles.pulse,
          {
            backgroundColor: color,
            opacity,
            transform: [{ scale }],
          },
        ]}
      />

      {/* Core */}
      <View
        style={[
          styles.core,
          {
            width: size * 0.5,
            height: size * 0.5,
            borderRadius: (size * 0.5) / 2,
            backgroundColor: withAlpha(color, 0.12),
          },
        ]}
      >
        <Feather name="wifi-off" size={size * 0.24} color={color} />
      </View>
    </View>
  )
}

export default NoInternetIndicator

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  pulse: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 999,
  },
  core: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
