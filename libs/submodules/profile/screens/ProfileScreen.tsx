import React from 'react'
import Container from '@/components/container/Container'
import { StyleSheet, Text, View } from 'react-native'
import ProfileTopBar from '@/libs/submodules/profile/components/topbar/ProfileTopBar'
import { customizeColors } from '@/libs/core/config/theme/color'
import Avatar from '@/components/Avatar'
import Flex from '@/components/Flex'
import { Link } from 'expo-router'
import ProfileInfoRow from '@/libs/submodules/profile/components/ProfileInfoRow'

function ProfileScreen() {
  return (
    <Container>
      <View style={styles.container}>
        <ProfileTopBar title={'Profil Ku'} />
        <View style={styles.content}>
          <Avatar
            source={require('@/assets/images/avatar.jpg')}
            style={styles.avatar}
            editable
            onEditPress={() => {
              console.log('Edit avatar')
            }}
          />

          <View style={{ height: 48 }} />

          <Flex gap={14} direction={'column'} flex={1}>
            <Flex
              justify={'space-between'}
              align={'center'}
              style={{ width: '100%' }}
            >
              <Text style={styles.name}>Ahmad</Text>
              <Link href={'/profile/edit'} style={styles.editText}>
                Edit
              </Link>
            </Flex>

            <View style={styles.infoContainer}>
              <ProfileInfoRow label="Nomor Hp" value="08121221" />
              <ProfileInfoRow label="Email" value="email@gmail" />
              <ProfileInfoRow label="Password" value="******" />
            </View>
          </Flex>
        </View>
      </View>
    </Container>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  content: {
    padding: 55,
    height: '100%',
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  editText: {
    color: customizeColors.primary.color1,
    fontSize: 18,
    fontWeight: '600',
  },
  avatar: {
    width: 210,
    height: 210,
    alignSelf: 'center',
  },
  infoContainer: {
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderColor: customizeColors.border,
    width: '100%',
    gap: 10,
  },
})
