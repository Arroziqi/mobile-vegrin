import { formatDateOnlyFromISO } from '@/libs/common/helper/formatDate'
import { useAuth, useProfile } from '@/libs/hooks'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

export const useEditProfileForm = () => {
  const router = useRouter()
  const { logout } = useAuth()
  const { profile, updateProfile, refreshProfile, loading } = useProfile()

  const [name, setName] = useState('')
  const [noHp, setNoHp] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [password, setPassword] = useState<string | undefined>(undefined)

  // sync data dari profile → state form
  useEffect(() => {
    if (!profile) return

    setName(profile.front_name ?? '')
    setNoHp(profile.telephone_number ?? '')
    setBirthDate(
      profile.birth_date ? formatDateOnlyFromISO(profile.birth_date) : ''
    )
  }, [profile?.id])

  const handleUpdate = async () => {
    const payload = {
      front_name: name,
      phone_number: noHp,
      birth_date: birthDate ? new Date(birthDate).toISOString() : undefined,
      ...(password ? { password } : {}),
    }

    const result = await updateProfile(payload)

    if (result.success) {
      await refreshProfile()

      if (password) {
        Alert.alert(
          'Password Diperbarui',
          'Password berhasil diubah. Silakan login kembali.',
          [{ text: 'OK', onPress: () => logout() }],
          { cancelable: false }
        )
      } else {
        Alert.alert(
          'Berhasil',
          'Profil berhasil diperbarui',
          [{ text: 'OK', onPress: () => router.back() }],
          { cancelable: false }
        )
      }
    } else {
      Alert.alert('Gagal', result.error || 'Gagal memperbarui profil', [
        { text: 'OK' },
      ])
    }
  }

  return {
    // state
    name,
    noHp,
    birthDate,

    // setter
    setName,
    setNoHp,
    setBirthDate,
    setPassword,

    // action
    handleUpdate,

    // misc
    loading,
    goBack: () => router.back(),
  }
}
