import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { MaterialIcons } from '@expo/vector-icons'
import OutlineButton from './OutlineButton'

interface Props {
  settingOpen: boolean
  onToggleSetting: () => void
}

export default function ProfileDrawerMenu({
  settingOpen,
  onToggleSetting,
}: Props) {
  const arrow = useSharedValue(0)

  useEffect(() => {
    arrow.value = withTiming(settingOpen ? 1 : 0, { duration: 200 })
  }, [arrow, settingOpen])

  const arrowStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${arrow.value * 180}deg` }],
  }))

  return (
    <View style={styles.container}>
      <OutlineButton label="Profilku" />

      <OutlineButton
        label="Pengaturan"
        rightIcon={
          <Animated.View style={arrowStyle}>
            <MaterialIcons name="keyboard-arrow-down" size={24} />
          </Animated.View>
        }
        onPress={onToggleSetting}
      />

      {settingOpen && (
        <View style={styles.dropdown}>
          <OutlineButton label="Pengaturan Aplikasi" indent small />
          <OutlineButton label="Privacy Policy" indent small />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  dropdown: {
    gap: 8,
  },
})
