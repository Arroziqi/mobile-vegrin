import { StyleSheet } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'

const newsItemCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 12,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 12,
    // shadow (soft, right-bottom)
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#262626',
  },
  metaWrapper: {
    flexDirection: 'column',
    marginTop: 6,
    alignItems: 'flex-start',
  },
  publishedAt: {
    fontSize: 12,
    color: '#8C8C8C',
  },
  link: {
    fontSize: 12,
    color: customizeColors.brandColor,
    fontWeight: '500',
  },
})

export default newsItemCardStyle
