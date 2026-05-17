import { useAuth } from '@/libs/hooks'
import setupDeviceAfterLogin from '@/libs/services/setupDeviceAfterLogin'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Alert } from 'react-native'

export const useLoginForm = () => {
  const { login } = useAuth()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Validasi', 'Email dan password wajib diisi')
      return
    }

    setLoading(true)

    const result = await login({
      email,
      password,
    })

    if (!result.success) {
      setLoading(false)
      Alert.alert('Login gagal', result.error)
      return
    }

    await setupDeviceAfterLogin(result.data!.token)

    setLoading(false)

    Alert.alert(
      'Verifikasi Email',
      'Akun Anda berhasil didaftarkan. Silakan cek email untuk verifikasi terlebih dahulu, kemudian login!'
    )
  }

  return {
    email,
    password,
    loading,
    setEmail,
    setPassword,
    handleLogin,
  }
}
