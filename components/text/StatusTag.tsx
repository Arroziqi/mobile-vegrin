import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

interface StatusTagProps {
  label: string
  icon?: string
  backgroundColor?: string
  textColor?: string
  iconColor?: string
}

const StatusTag = ({
  label,
  icon = 'check-circle',
  backgroundColor = customizeColors.lightGreen,
  textColor = customizeColors.green4,
  iconColor = customizeColors.green4,
}: StatusTagProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
    >
      <MaterialIcons name={icon as any} size={18} color={iconColor} />
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </View>
  )
}

export default StatusTag

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
})
