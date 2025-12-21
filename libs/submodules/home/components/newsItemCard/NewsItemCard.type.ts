import { ImageSourcePropType } from 'react-native'

export type NewsItemCardProps = {
  image: ImageSourcePropType
  description: string
  publishedAt?: string
  linkLabel?: string
  onPressLink?: () => void
}
