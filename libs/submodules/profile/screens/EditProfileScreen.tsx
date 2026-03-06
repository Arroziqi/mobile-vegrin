import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import InputWithLabel from '@/components/input/InputWithLabel/InputWithLabel'
import { customizeColors } from '@/libs/core/config/theme/color'
import ProfileBottomBar from '@/libs/submodules/profile/components/bottombar/ProfileBottomBar'
import ProfileTopBar from '@/libs/submodules/profile/components/topbar/ProfileTopBar'
import { useEditProfileForm } from '@/libs/submodules/profile/hooks/useEditProfileForm'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

function EditProfileScreen() {
  const {
    name,
    noHp,
    birthDate,
    setName,
    setNoHp,
    setBirthDate,
    setPassword,
    handleUpdate,
    loading,
    goBack,
  } = useEditProfileForm()

  const [showPasswordFields, setShowPasswordFields] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  const handleConfirmPasswordChange = (val: string) => {
    setConfirmPassword(val)
    if (newPassword && val && newPassword !== val) {
      setPasswordError('Password tidak sama')
      setPassword(undefined)
    } else {
      setPasswordError('')
      setPassword(newPassword || undefined)
    }
  }

  const handleNewPasswordChange = (val: string) => {
    setNewPassword(val)
    if (confirmPassword && val !== confirmPassword) {
      setPasswordError('Password tidak sama')
      setPassword(undefined)
    } else {
      setPasswordError('')
      setPassword(val || undefined)
    }
  }

  return (
    <Container>
      <ProfileTopBar title="Edit Profile" />

      <Flex flex={1} direction="column" gap={21} style={styles.container}>
        <InputWithLabel label="Nama" value={name} onChange={setName} />
        <InputWithLabel label="NO HP" value={noHp} onChange={setNoHp} />

        <InputWithLabel
          label="Tanggal Lahir"
          value={birthDate}
          onChange={setBirthDate}
          textContentType="dateTime"
          placeholder="Pilih tanggal"
        />

        {!showPasswordFields ? (
          <Pressable onPress={() => setShowPasswordFields(true)}>
            <Text style={styles.changePasswordText}>Ubah Password</Text>
          </Pressable>
        ) : (
          <>
            <InputWithLabel
              label="Password Baru"
              value={newPassword}
              onChange={handleNewPasswordChange}
              secureTextEntry={!showNewPassword}
              textContentType="newPassword"
              placeholder="Masukkan password baru"
              rightElement={
                <Pressable
                  onPress={() => setShowNewPassword(v => !v)}
                  hitSlop={8}
                >
                  <MaterialIcons
                    name={showNewPassword ? 'visibility' : 'visibility-off'}
                    size={20}
                    color={customizeColors.primary.color1}
                  />
                </Pressable>
              }
            />
            <InputWithLabel
              label="Konfirmasi Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              secureTextEntry={!showConfirmPassword}
              errorText={passwordError}
              textContentType="newPassword"
              placeholder="Ulangi password baru"
              rightElement={
                <Pressable
                  onPress={() => setShowConfirmPassword(v => !v)}
                  hitSlop={8}
                >
                  <MaterialIcons
                    name={showConfirmPassword ? 'visibility' : 'visibility-off'}
                    size={20}
                    color={customizeColors.primary.color1}
                  />
                </Pressable>
              }
            />
            <Pressable
              onPress={() => {
                setShowPasswordFields(false)
                setNewPassword('')
                setConfirmPassword('')
                setPasswordError('')
                setPassword(undefined)
              }}
            >
              <Text style={styles.cancelPasswordText}>Batal Ubah Password</Text>
            </Pressable>
          </>
        )}
      </Flex>

      <ProfileBottomBar
        onCancel={goBack}
        onUpdate={handleUpdate}
        loading={loading}
      />
    </Container>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 21,
  },
  cancelPasswordText: {
    fontSize: 14,
    color: customizeColors.primary.color1,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  changePasswordText: {
    fontSize: 14,
    color: customizeColors.primary.color1,
    textDecorationLine: 'underline',
    textAlign: 'left',
  },
})
