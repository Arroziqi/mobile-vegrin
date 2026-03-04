import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ProfileTopBar from '@/libs/submodules/profile/components/topbar/ProfileTopBar'
import Container from '@/components/container/Container'
import MenuItemCard from '@/libs/submodules/profile/components/MenuItemCard'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import useSettings from '../hooks/useSettings'

function SettingsScreen() {
  const {
    locationStatus,
    cameraStatus,
    requestLocationPermission,
    requestCameraPermission,
    clearCache,
  } = useSettings()

  const renderNote = (status: string) => (
    <Text
      style={{
        fontSize: 12,
        color: status === 'granted' ? '#34C759' : '#FF3B30',
      }}
    >
      {status === 'granted' ? 'Aktif' : 'Belum lengkap'}
    </Text>
  )

  return (
    <Container>
      <View style={styles.container}>
        <ProfileTopBar title="Pengaturan Aplikasi" />
        <ScrollView style={styles.content}>
          <MenuItemCard
            title="Akses Lokasi"
            description="Untuk Akurasi Perkiraan Cuaca"
            icon={<Ionicons name="location-outline" size={36} color="white" />}
            note={renderNote(locationStatus)}
            onPress={requestLocationPermission}
            disabled={locationStatus === 'granted'}
          />

          <MenuItemCard
            title="Akses Kamera"
            description="Untuk Bisa Gunain Fitur AI Kami"
            icon={<Ionicons name="camera-outline" size={36} color="white" />}
            note={renderNote(cameraStatus)}
            onPress={requestCameraPermission}
            disabled={cameraStatus === 'granted'}
          />

          <MenuItemCard
            title="Bersihkan Cache"
            description="Solusi Cepat Untuk Atasi Masalah Aplikasi"
            icon={<FontAwesome6 name="trash-can" size={34} color="white" />}
            note={
              <Text style={{ fontSize: 12, color: '#8E8E93' }}>Opsional</Text>
            }
            onPress={clearCache}
          />
        </ScrollView>
      </View>
    </Container>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 10,
    height: '100%',
  },
})
