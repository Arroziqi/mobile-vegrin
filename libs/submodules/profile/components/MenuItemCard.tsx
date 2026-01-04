import React from 'react'
import { StyleSheet, View } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'
import PressableCard from '@/components/card/PressableCard'
import { FontAwesome6 } from '@expo/vector-icons'

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
      style={styles.container}
      onPress={onPress}
      title={title}
      description={description}
      note={note}
      leading={<View style={styles.iconWrapper}>{icon}</View>}
      trailing={<FontAwesome6 name="arrow-right" size={24} color="black" />}
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
  container: {
    borderWidth: 0,
  },
})
