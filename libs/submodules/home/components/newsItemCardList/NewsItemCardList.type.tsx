import { NewsItemCardProps } from '@/libs/submodules/home/components/newsItemCard/NewsItemCard.type'

export type NewsItem = NewsItemCardProps & {
  id: string
}

export type NewsItemCardListProps = {
  data: NewsItem[]
}
