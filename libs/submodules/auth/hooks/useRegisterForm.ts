import { useMemo, useState } from 'react'
import { router } from 'expo-router'
import { RegisterFormValue } from '@/libs/submodules/auth/screens/register/components/RegisterScreen.form'
import { registerUsecase } from '@/libs/submodules/auth/usecases/register.usecase'
import { ApiError, NetworkError, TimeoutError } from '@/libs/common/types/error'

export const useRegisterForm = () => {
  const [form, setForm] = useState<RegisterFormValue>({
    front_name: '',
    back_name: '',
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isValid = useMemo(() => {
    return (
      form.front_name.trim() !== '' &&
      form.back_name.trim() !== '' &&
      form.email.trim() !== '' &&
      form.password.trim() !== ''
    )
  }, [form])

  const onChange = <K extends keyof RegisterFormValue>(
    key: K,
    value: RegisterFormValue[K]
  ) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (error) setError(null)
  }

  const submitRegister = async () => {
    if (!isValid || loading) return

    setLoading(true)
    setError(null)

    try {
      await registerUsecase(form)
      router.replace('/(auth)/login')
    } catch (e) {
      if (e instanceof ApiError) {
        setError(e.message)
      } else if (e instanceof TimeoutError) {
        setError('Registrasi terlalu lama, coba lagi')
      } else if (e instanceof NetworkError) {
        setError('Koneksi bermasalah')
      } else {
        setError('Registrasi gagal')
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    form,
    loading,
    error,
    isValid,
    onChange,
    submitRegister,
  }
}
