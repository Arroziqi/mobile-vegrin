import React from 'react'
import { Alert, Pressable, StyleSheet, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useAuth } from '@/libs/hooks'

export default function ProfileDrawerLogout() {
  const { logout, loading } = useAuth()

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Yakin mau keluar dari akun ini?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await logout()
          },
        },
      ],
      { cancelable: true }
    )
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={handleLogout}
      disabled={loading}
    >
      <MaterialIcons name="logout" size={20} color="#D32F2F" />
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
    paddingBottom: 30,
  },
  pressed: {
    opacity: 0.6,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#D32F2F',
  },
})
