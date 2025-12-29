import React, { ReactNode } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'

interface Props {
  label: string
  onPress?: () => void
  rightIcon?: ReactNode
  indent?: boolean
  small?: boolean
}

export default function OutlineButton({
  label,
  onPress,
  rightIcon,
  indent,
  small,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, indent && styles.indent, small && styles.small]}
    >
      <View style={styles.row}>
        <Text style={styles.text}>{label}</Text>
        {rightIcon}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: customizeColors.border,
    borderRadius: 9.78,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  indent: {
    marginLeft: 16,
  },
  small: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
})
