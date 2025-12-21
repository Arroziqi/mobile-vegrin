import { Image, ImageProps, StyleSheet } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'

const Avatar = ({ style, ...props }: ImageProps) => {
  return <Image style={[styles.image, style]} {...props} />
}

export default Avatar

const styles = StyleSheet.create({
  image: {
    width: 46,
    height: 46,
    borderRadius: 12.22,
    borderWidth: 1,
    borderColor: customizeColors.brandColor,
  },
})
