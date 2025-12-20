import { customizeColors } from '@/libs/core/config/theme/color'
import { StyleSheet } from 'react-native'

const authFormCardStyles = StyleSheet.create({
  form: {
    backgroundColor: '#fff',
    padding: 28,
    borderRadius: 12,
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  titleWrapper: {
    marginTop: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitleWrapper: {
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: customizeColors.grey,
    textAlign: 'center',
  },
  formInput: {
    marginVertical: 28,
  },
  footer: {
    marginTop: 16,
    alignItems: 'center',
  },
  errorWrapper: {
    alignItems: 'center',
    marginBottom: -10,
  },
  errorText: {
    color: customizeColors.accents.red ?? '#E53935',
    fontSize: 13,
    textAlign: 'center',
  },
  errorHint: {
    marginTop: 10,
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
})

export default authFormCardStyles
