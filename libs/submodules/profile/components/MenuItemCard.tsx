import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { customizeColors } from '@/libs/core/config/theme/color'
import PressableCard from '@/components/card/PressableCard'

interface MenuItemCardProps {
  title: string
  description?: string
  icon: React.ReactNode
  note?: React.ReactNode
  onPress?: () => void
}

const MenuItemCard = ({
  title,
  description,
  icon,
  note,
  onPress,
}: MenuItemCardProps) => {
  return (
    <PressableCard
      onPress={onPress}
      title={title}
      description={description}
      note={note}
      leading={<View style={styles.iconWrapper}>{icon}</View>}
      trailing={<MaterialIcons name="chevron-right" size={24} color="#999" />}
    />
  )
}

export default MenuItemCard

const styles = StyleSheet.create({
  iconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: customizeColors.primary.color1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
