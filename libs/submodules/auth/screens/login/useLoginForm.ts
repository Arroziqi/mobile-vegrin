import { useState } from 'react'
import { Alert } from 'react-native'
import { useRouter } from 'expo-router'
import { useAuth } from '@/libs/hooks'
import setupDeviceAfterLogin from '@/libs/services/setupDeviceAfterLogin'

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

    await setupDeviceAfterLogin()

    setLoading(false)

    if (!result.success) {
      Alert.alert('Login gagal', result.error)
      return
    }

    // ✅ login sukses → redirect ke home
    router.replace('/')
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
