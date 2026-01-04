import React, { ReactNode } from 'react'
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'

interface PressableCardProps {
  leading?: ReactNode
  trailing?: ReactNode

  /** Simple mode */
  title?: string
  description?: string

  /** Optional note / warning (right side of title) */
  note?: ReactNode

  /** Advanced mode */
  body?: ReactNode

  onPress?: () => void
  disabled?: boolean
  style?: ViewStyle
}

const PressableCard = ({
  leading,
  trailing,
  title,
  description,
  note,
  body,
  onPress,
  disabled = false,
  style,
}: PressableCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.container,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {leading && <View style={styles.leading}>{leading}</View>}

      <View style={styles.body}>
        {body ? (
          body
        ) : (
          <>
            {title && <Text style={styles.title}>{title}</Text>}
            {description && (
              <Text style={styles.description}>{description}</Text>
            )}
          </>
        )}
      </View>

      {note && <View style={styles.note}>{note}</View>}

      {trailing && <View style={styles.trailing}>{trailing}</View>}
    </Pressable>
  )
}

export default PressableCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: customizeColors.border,
    gap: 12,
  },

  pressed: {
    opacity: 0.85,
  },

  disabled: {
    opacity: 0.5,
  },

  leading: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    flex: 1,
    gap: 6,
  },

  titleRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },

  trailing: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    maxWidth: '80%',
  },

  description: {
    fontSize: 14,
    color: '#666',
  },
  note: {
    position: 'absolute',
    right: 12,
    top: 16,
  },
})
