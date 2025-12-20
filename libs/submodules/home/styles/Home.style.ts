import { StyleSheet } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'

const homeStyle = StyleSheet.create({
  warning: {
    color: customizeColors.accents.red,
    fontSize: 15,
  },
  regular: {
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  warningMessageContainer: {
    alignSelf: 'flex-start',
  },
  contentWrapper: {
    width: '100%',
    paddingHorizontal: 21,
    flex: 1,
  },
})

export default homeStyle
