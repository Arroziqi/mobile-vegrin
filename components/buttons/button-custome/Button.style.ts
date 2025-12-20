import { StyleSheet } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'

export const ButtonVariantStyles = StyleSheet.create({
  buttonBase: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  primary: {
    backgroundColor: customizeColors.green1,
  },
  primaryOutline: {
    backgroundColor: 'transparent',
    borderColor: customizeColors.green1,
    borderWidth: 2,
  },
  submitButton: {
    backgroundColor: customizeColors.blue3,
  },
  submitButtonOutline: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderColor: customizeColors.brandColor,
    borderWidth: 2,
  },
  danger: {
    backgroundColor: customizeColors.accents.red,
  },
  scan: {},
})

export const buttonStyles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBase: {
    fontSize: 16,
    fontWeight: '600',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  disabled: {
    opacity: 0.5,
  },
})
