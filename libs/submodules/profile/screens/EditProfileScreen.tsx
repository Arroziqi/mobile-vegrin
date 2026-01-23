import React from 'react'
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import { StyleSheet } from 'react-native'
import InputWithLabel from '@/components/input/InputWithLabel/InputWithLabel'
import ProfileTopBar from '@/libs/submodules/profile/components/topbar/ProfileTopBar'
import ProfileBottomBar from '@/libs/submodules/profile/components/bottombar/ProfileBottomBar'
import DisplayPassword from '@/libs/submodules/profile/components/DisplayPassword'
import { useRouter } from 'expo-router'
import { useProfile } from '@/libs/hooks'

function EditProfileScreen() {
  const { profile } = useProfile()
  const [name, setName] = React.useState(profile?.front_name ?? '')
  const [noHp, setNoHp] = React.useState(profile?.telephone_number ?? '')
  const [birthDate, setBirthDate] = React.useState(profile?.birth_date ?? '')
  const router = useRouter()

  return (
    <Container>
      <ProfileTopBar title={'Edit Profile'} />
      <Flex flex={1} direction={'column'} gap={21} style={styles.container}>
        <InputWithLabel label="Nama" value={name} onChange={setName} />
        <InputWithLabel label="NO HP" value={noHp} onChange={setNoHp} />

        <InputWithLabel
          label="Tanggal Lahir"
          value={birthDate}
          onChange={setBirthDate}
          textContentType="dateTime"
          placeholder="Pilih tanggal"
        />

        <DisplayPassword
          label="Password"
          onChangePassword={() => {
            router.push('/forgot-password')
          }}
        />
      </Flex>
      <ProfileBottomBar />
    </Container>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 21,
  },
})
