import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface TabIconWithLabelProps {
  label: string
  focused: boolean
  children: React.ReactNode
}

export function TabIconWithLabel({
  label,
  focused,
  children,
}: TabIconWithLabelProps) {
  return (
    <View style={styles.container}>
      {children}
      <Text style={[styles.label, focused && styles.activeLabel]}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: '#888888',
  },
  activeLabel: {
    fontWeight: '600',
  },
})
