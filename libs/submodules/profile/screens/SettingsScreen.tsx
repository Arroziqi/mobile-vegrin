import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ProfileTopBar from '@/libs/submodules/profile/components/topbar/ProfileTopBar'
import Container from '@/components/container/Container'
import MenuItemCard from '@/libs/submodules/profile/components/MenuItemCard'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'

function SettingsScreen() {
  return (
    <Container>
      <View style={styles.container}>
        <ProfileTopBar title={'Pengaturan Aplikasi'} />
        <ScrollView style={styles.content}>
          <MenuItemCard
            title="Akses Lokasi"
            description="Untuk Akurasi Perkiraan Cuaca"
            icon={<Ionicons name="location-outline" size={36} color="white" />}
            note={
              <Text
                style={{
                  fontSize: 12,
                  color: '#FF3B30',
                }}
              >
                Belum lengkap
              </Text>
            }
            onPress={() => {}}
          />

          <MenuItemCard
            title="Akses Kamera "
            description="Untuk Bisa Gunain Fitur AI Kami"
            icon={<Ionicons name="camera-outline" size={36} color="white" />}
            note={
              <Text
                style={{
                  fontSize: 12,
                  color: '#FF3B30',
                }}
              >
                Belum lengkap
              </Text>
            }
            onPress={() => {}}
          />

          <MenuItemCard
            title="Bersihkan Cache"
            description="Solusi Cepat Untuk Atasi Masalah Aplikasi"
            icon={<FontAwesome6 name="trash-can" size={34} color="white" />}
            note={
              <Text
                style={{
                  fontSize: 12,
                  color: '#FF3B30',
                }}
              >
                Belum lengkap
              </Text>
            }
            onPress={() => {}}
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
