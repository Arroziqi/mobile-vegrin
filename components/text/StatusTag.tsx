import {
  getConditionDisplay,
  normalizeCondition,
  PlantCondition,
} from '@/libs/common/utils/getPlantCondition'
import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

interface StatusTagProps {
  condition: PlantCondition
}

const conditionConfig = {
  [PlantCondition.BAIK]: {
    label: 'Baik',
    backgroundColor: customizeColors.lightGreen,
    textColor: customizeColors.green4,
    iconColor: customizeColors.green4,
    icon: 'check-circle',
  },
  [PlantCondition.CUKUP]: {
    label: 'Cukup',
    backgroundColor: '#FEF3C7', // kuning soft
    textColor: '#B45309',
    iconColor: '#B45309',
    icon: 'error-outline',
  },
  [PlantCondition.PERLU_PERHATIAN]: {
    label: 'Perlu Perhatian',
    backgroundColor: '#FEE2E2', // merah soft
    textColor: '#DC2626',
    iconColor: '#DC2626',
    icon: 'warning',
  },
}

const StatusTag = ({ condition }: StatusTagProps) => {
  // Normalisasi condition ke enum
  const normalizedCondition = normalizeCondition(condition)
  const config = conditionConfig[normalizedCondition]

  // Atau pakai display text dari utility function
  const displayLabel = getConditionDisplay(condition)

  return (
    <View
      style={[styles.container, { backgroundColor: config.backgroundColor }]}
    >
      <MaterialIcons
        name={config.icon as any}
        size={16}
        color={config.iconColor}
      />
      <Text style={[styles.text, { color: config.textColor }]}>
        {displayLabel}
      </Text>
    </View>
  )
}

export default StatusTag

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
  },
})
