import { pickImageFromLibrary } from '@/libs/common/utils/pickImage'
import { Alert } from 'react-native'
import { useState } from 'react'
import { useAuth } from '@/libs/hooks'
import { useCreateEducation } from '@/libs/hooks/educations/useCreateEducation'
import { useUpdateEducation } from '@/libs/hooks/educations/useUpdateEducation'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { NewsData } from '@/libs/hooks/educations/useGetEducationList'

export interface EducationDetail {
  id: string
  title: string
  source: string
  external_link: string
  thumbnail?: string
}

export const useContentForm = (
  onSuccess: () => void,
  refetchEducationList: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<NewsData[], Error>>,
  itemToEdit?: EducationDetail
) => {
  const isEditMode = !!itemToEdit

  const [title, setTitle] = useState(itemToEdit?.title ?? '')
  const [source, setSource] = useState(itemToEdit?.source ?? '')
  const [url, setUrl] = useState(itemToEdit?.external_link ?? '')
  const [image, setImage] = useState<string | null>(
    itemToEdit?.thumbnail ?? null
  )

  const { token, deviceId } = useAuth()
  const { createEducation, loading: createLoading } = useCreateEducation()
  const { updateEducation, loading: updateLoading } = useUpdateEducation()

  const loading = createLoading || updateLoading

  const submit = async () => {
    if (!token || !deviceId) return

    if (!title || !source || !url) {
      Alert.alert('Validasi', 'Semua field wajib diisi')
      return
    }

    try {
      if (isEditMode && itemToEdit) {
        await updateEducation({
          id: itemToEdit.id,
          title,
          source,
          external_link: url,
          image,
        })
      } else {
        await createEducation({
          title,
          source,
          external_link: url,
          image,
        })
      }

      Alert.alert(
        'Berhasil',
        isEditMode
          ? 'Konten berhasil diupdate 🎉'
          : 'Konten berhasil ditambahkan 🎉'
      )

      await refetchEducationList()
      onSuccess()
    } catch (err: any) {
      Alert.alert('Error', err.message)
    }
  }

  const handlePickImage = async () => {
    const uri = await pickImageFromLibrary({
      aspect: [16, 9],
      quality: 1,
    })
    if (uri) setImage(uri)
  }

  return {
    title,
    setTitle,
    source,
    setSource,
    url,
    setUrl,
    image,
    submit,
    loading,
    handlePickImage,
    isEditMode,
  }
}
