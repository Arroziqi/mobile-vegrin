import { View } from 'react-native'
import { NewsItemCardListProps } from './NewsItemCardList.type'
import NewsItemCard from '@/libs/submodules/home/components/newsItemCard/NewsItemCard'

const NewsItemCardList = ({ data }: NewsItemCardListProps) => {
  return (
    <>
      {data.map(item => (
        <View key={item.id} style={{ marginBottom: 12 }}>
          <NewsItemCard
            image={item.image}
            description={item.description}
            publishedAt={item.publishedAt}
            linkLabel={item.linkLabel}
            onPressLink={item.onPressLink}
          />
        </View>
      ))}
    </>
  )
}

export default NewsItemCardList
