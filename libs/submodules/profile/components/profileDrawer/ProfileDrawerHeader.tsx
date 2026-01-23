import React from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import Avatar from '@/components/Avatar'
import { useProfile } from '@/libs/hooks'

const HEADER_HEIGHT = 200

export default function ProfileDrawerHeader() {
  const { profile } = useProfile()
  return (
    <ImageBackground
      source={require('@/assets/images/bg-header-sidebar.png')}
      style={styles.header}
      resizeMode="cover"
    >
      <Avatar
        source={require('@/assets/images/avatar.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.name}>{profile?.front_name ?? 'username'}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#454743',
  },
})
