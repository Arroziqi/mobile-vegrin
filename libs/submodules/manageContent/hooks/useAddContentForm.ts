import { useState } from 'react'
import { Alert } from 'react-native'
import { useAuth } from '@/libs/hooks'
import { useCreateEducation } from '@/libs/hooks/educations/useCreateEducation'
import { pickImageFromLibrary } from '@/libs/common/utils/pickImage'
import { useGetEducationList } from '@/libs/hooks/educations/useGetEducationList'

export const useAddContentForm = (onSuccess: () => void) => {
  const [title, setTitle] = useState('')
  const [source, setSource] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState<string | null>(null)

  const { token, deviceId } = useAuth()
  const { refetch: refetchEducationList } = useGetEducationList()
  const { createEducation, loading } = useCreateEducation()

  const resetForm = () => {
    setTitle('')
    setSource('')
    setUrl('')
    setImage(null)
  }

  const submit = async () => {
    if (!token || !deviceId) {
      Alert.alert('Error', 'Token atau Device ID tidak tersedia')
      return
    }

    if (!title || !source || !url) {
      Alert.alert('Validasi', 'Semua field wajib diisi')
      return
    }

    try {
      await createEducation({
        title,
        source,
        external_link: url,
        image,
        token,
        deviceId,
      })

      Alert.alert('Berhasil', 'Konten berhasil ditambahkan 🎉')

      resetForm()
      await refetchEducationList()
      onSuccess()
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Terjadi kesalahan')
    }
  }

  const handlePickImage = async () => {
    const uri = await pickImageFromLibrary({
      aspect: [16, 9],
      quality: 1,
    })

    if (uri) {
      setImage(uri)
    }
  }

  return {
    title,
    setTitle,
    source,
    setSource,
    url,
    setUrl,
    image,
    setImage,
    submit,
    loading,
    handlePickImage,
  }
}
