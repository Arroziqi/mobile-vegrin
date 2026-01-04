import * as ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native'

interface UseImagePickerOptions {
  allowsEditing?: boolean
  aspect?: [number, number]
  quality?: number
}

export function useImagePicker(options?: UseImagePickerOptions) {
  const pickerOptions: ImagePicker.ImagePickerOptions = {
    mediaTypes: ['images'],
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.8,
    ...options,
  }

  const pickFromCamera = async (): Promise<string | null> => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()

    if (status !== 'granted') {
      Alert.alert('Izin Kamera', 'Akses kamera diperlukan')
      return null
    }

    const result = await ImagePicker.launchCameraAsync(pickerOptions)
    if (result.canceled) return null

    return result.assets[0].uri
  }

  const pickFromGallery = async (): Promise<string | null> => {
    const result = await ImagePicker.launchImageLibraryAsync(pickerOptions)
    if (result.canceled) return null

    return result.assets[0].uri
  }

  return {
    pickFromCamera,
    pickFromGallery,
  }
}
