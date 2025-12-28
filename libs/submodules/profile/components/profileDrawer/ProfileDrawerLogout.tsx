import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function ProfileDrawerLogout() {
  return (
    <Pressable style={styles.container}>
      <MaterialIcons name="logout" size={20} />
      <Text style={styles.text}>Logout</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
})
