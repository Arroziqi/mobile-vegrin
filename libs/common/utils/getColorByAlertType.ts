import { VariantType } from '@/libs/common/types/Alert.type'
import { customizeColors } from '@/libs/core/config/theme/color'

const getColorByAlertType = (variant: VariantType) => {
  switch (variant) {
    case 'success':
      return '#09B232'
    case 'warning':
      return customizeColors.warning
    case 'info':
      return customizeColors.blue1
    default:
      return customizeColors.grey
  }
}

export default getColorByAlertType
