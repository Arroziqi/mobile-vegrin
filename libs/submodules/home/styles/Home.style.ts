// Home.style.ts
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
  scrollContent: {
    flexGrow: 1,
  },
  warningMessageContainer: {
    alignSelf: 'flex-start',
  },
  contentWrapper: {
    width: '100%',
    paddingHorizontal: 21,
    paddingBottom: 36,
  },
})

export default homeStyle
