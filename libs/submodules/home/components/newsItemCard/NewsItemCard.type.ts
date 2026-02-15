export interface NewsItemCardProps {
  image: string | null
  description: string | null
  publishedAt?: string | null
  linkLabel?: string | null
  onPressLink?: (() => void) | null
}
