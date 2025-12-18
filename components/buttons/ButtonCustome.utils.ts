import { TextStyle } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'
import { ButtonCustomeVariant } from '@/components/buttons/ButtonCustome.type'

const getTextColorFromVariant = (
  variant?: ButtonCustomeVariant,
  disabled?: boolean
): TextStyle => {
  // Jika disabled, return warna abu-abu
  if (disabled) {
    return { color: customizeColors.secondary['300'] || '#CCCCCC' }
  }

  // Tentukan warna teks berdasarkan variant
  switch (variant) {
    case 'primary':
      return { color: '#000000' }
    case 'submitButton':
      return { color: customizeColors.white || '#FFFFFF' }
    case 'submitButtonOutline':
      return { color: customizeColors.green1 || '#00FF00' }
    case 'danger':
      return { color: customizeColors.white || '#FFFFFF' }
    case 'scan':
      return { color: customizeColors.white || '#FFFFFF' }
    default:
      return { color: customizeColors.white || '#FFFFFF' }
  }
}

export default getTextColorFromVariant
