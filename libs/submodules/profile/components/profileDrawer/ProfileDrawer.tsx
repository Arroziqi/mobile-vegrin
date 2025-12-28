import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import ProfileDrawerHeader from './ProfileDrawerHeader'
import ProfileDrawerMenu from './ProfileDrawerMenu'
import ProfileDrawerLogout from './ProfileDrawerLogout'

interface ProfileDrawerProps {
  visible: boolean
  onClose: () => void
}

const DRAWER_WIDTH = 330

export default function ProfileDrawer({
  visible,
  onClose,
}: ProfileDrawerProps) {
  const progress = useSharedValue(0)
  const [settingOpen, setSettingOpen] = useState(false)

  useEffect(() => {
    progress.value = withTiming(visible ? 1 : 0, { duration: 280 })
    if (!visible) setSettingOpen(false)
  }, [visible])

  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      if (e.translationX <= 0) {
        progress.value = Math.max(0, 1 + e.translationX / DRAWER_WIDTH)
      }
    })
    .onEnd(() => {
      if (progress.value < 0.7) {
        progress.value = withTiming(0, {}, finished => {
          if (finished) onClose()
        })
      } else {
        progress.value = withTiming(1)
      }
    })

  const drawerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -DRAWER_WIDTH + DRAWER_WIDTH * progress.value }],
  }))

  const backdropStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
    opacity: progress.value * 0.35,
  }))

  if (!visible) return null

  return (
    <View style={styles.overlay}>
      {/* Backdrop */}
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
      </Animated.View>

      {/* Drawer */}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.drawer, drawerStyle]}>
          <ProfileDrawerHeader />

          <ProfileDrawerMenu
            settingOpen={settingOpen}
            onToggleSetting={() => setSettingOpen(v => !v)}
          />

          <ProfileDrawerLogout />
        </Animated.View>
      </GestureDetector>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
  },
  drawer: {
    position: 'absolute',
    left: 0,
    width: DRAWER_WIDTH,
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 2,
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    height: '100%',
    backgroundColor: '#000',
    zIndex: 1,
  },
})
