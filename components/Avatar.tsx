import React from 'react'
import { Image, ImageProps, Pressable, StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { customizeColors } from '@/libs/core/config/theme/color'

interface AvatarProps extends ImageProps {
  editable?: boolean
  onEditPress?: () => void
}

const Avatar = ({
  style,
  editable = false,
  onEditPress,
  ...props
}: AvatarProps) => {
  return (
    <View style={styles.wrapper}>
      <Image style={[styles.image, style]} {...props} />

      {editable && (
        <Pressable style={styles.editButton} onPress={onEditPress} hitSlop={8}>
          <MaterialIcons name="photo-camera" size={28} color="#fff" />
        </Pressable>
      )}
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    alignSelf: 'center',
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 12.22,
    borderWidth: 1,
    borderColor: customizeColors.brandColor,
  },
  editButton: {
    position: 'absolute',
    right: -14,
    bottom: -14,
    width: 56,
    height: 56,
    borderRadius: 56,
    backgroundColor: '#878787',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
})
