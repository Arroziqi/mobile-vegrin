import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ProfileTopBar from '@/libs/submodules/profile/components/topbar/ProfileTopBar'
import Container from '@/components/container/Container'
import MenuItemCard from '@/libs/submodules/profile/components/MenuItemCard'
import { MaterialIcons } from '@expo/vector-icons'

function SettingsScreen() {
  return (
    <Container>
      <View style={styles.container}>
        <ProfileTopBar title={'Pengaturan Aplikasi'} />
        <ScrollView style={styles.content}>
          <MenuItemCard
            title="Profile"
            description="Kelola foto dan informasi akun"
            icon={<MaterialIcons name="person" size={28} color="#fff" />}
            note={
              <Text style={{ fontSize: 12, color: '#FF3B30' }}>
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
    paddingVertical: 55,
    paddingHorizontal: 21,
    height: '100%',
  },
})
