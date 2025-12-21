import { Image, Pressable, Text, View } from 'react-native'
import { NewsItemCardProps } from './NewsItemCard.type'
import styles from './NewsItemCard.style'

const NewsItemCard = ({
  image,
  description,
  publishedAt,
  linkLabel,
  onPressLink,
}: NewsItemCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
          {description}
        </Text>

        {(publishedAt || (linkLabel && onPressLink)) && (
          <View style={styles.metaWrapper}>
            {publishedAt && (
              <Text style={styles.publishedAt}>{publishedAt}</Text>
            )}

            {linkLabel && onPressLink && (
              <Pressable onPress={onPressLink}>
                <Text style={styles.link}>{linkLabel}</Text>
              </Pressable>
            )}
          </View>
        )}
      </View>
    </View>
  )
}

export default NewsItemCard
