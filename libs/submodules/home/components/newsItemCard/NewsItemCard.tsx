import { Pressable, Text, View } from 'react-native'
import { NewsItemCardProps } from './NewsItemCard.type'
import styles from './NewsItemCard.style'
import { Image } from 'expo-image'
import { DEFAULT_NEWS_IMAGE } from '@/libs/submodules/home/components/newsItemCardList/NewsItemCardList'

const BLURHASH =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

const NewsItemCard = ({
  image,
  description,
  publishedAt,
  linkLabel,
  onPressLink,
}: NewsItemCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={image ?? DEFAULT_NEWS_IMAGE}
        placeholder={{ blurhash: BLURHASH }}
        style={styles.image}
        contentFit="cover"
        transition={1000}
      />

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
