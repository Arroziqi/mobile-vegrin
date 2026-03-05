import Avatar from '@/components/Avatar'
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import ImagePickerBottomSheet from '@/components/ImagePickerBottomSheet'
import { useImagePicker } from '@/hooks/useImagePicker'
import { customizeColors } from '@/libs/core/config/theme/color'
import { useProfile } from '@/libs/hooks'
import ProfileInfoRow from '@/libs/submodules/profile/components/ProfileInfoRow'
import ProfileTopBar from '@/libs/submodules/profile/components/topbar/ProfileTopBar'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Link } from 'expo-router'
import { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ProfileScreen() {
  const { profile } = useProfile()
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const { pickFromCamera, pickFromGallery } = useImagePicker()
  const [avatar, setAvatar] = useState<string | null>(
    profile?.photo_profile ?? null
  )

  const { updateProfilePhoto } = useProfile()

  const handleCamera = async () => {
    bottomSheetRef.current?.close()
    const uri = await pickFromCamera()

    if (uri) {
      setAvatar(uri)
      await updateProfilePhoto(uri)
    }
  }

  const handleGallery = async () => {
    bottomSheetRef.current?.close()
    const uri = await pickFromGallery()

    if (uri) {
      setAvatar(uri)
      await updateProfilePhoto(uri)
    }
  }

  return (
    <Container>
      <View style={styles.container}>
        <ProfileTopBar title={'Profil Ku'} />
        <View style={styles.content}>
          <Avatar
            source={
              avatar ? { uri: avatar } : require('@/assets/images/avatar.jpg')
            }
            editable
            onEditPress={() => bottomSheetRef.current?.present()}
            style={styles.avatar}
          />

          <View style={{ height: 48 }} />

          <Flex gap={14} direction={'column'} flex={1}>
            <Flex
              justify={'space-between'}
              align={'center'}
              style={{ width: '100%' }}
            >
              <Text style={styles.name}>
                {profile?.front_name ?? 'username'}
              </Text>
              <Link href={'/profile/edit'} style={styles.editText}>
                Edit
              </Link>
            </Flex>

            <View style={styles.infoContainer}>
              <ProfileInfoRow
                label="Nomor Hp"
                value={profile?.telephone_number ?? 'No Hp Belum diset'}
              />
              <ProfileInfoRow
                label="Email"
                value={profile?.email ?? 'email@email.co'}
              />
              <ProfileInfoRow label="Password" value="******" />
            </View>
          </Flex>
        </View>
      </View>
      <ImagePickerBottomSheet
        ref={bottomSheetRef}
        onPickCamera={handleCamera}
        onPickGallery={handleGallery}
      />
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
