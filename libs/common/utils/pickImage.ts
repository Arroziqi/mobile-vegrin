import * as ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native'

interface PickImageOptions {
  aspect?: [number, number]
  quality?: number
}

export const pickImageFromLibrary = async (
  options?: PickImageOptions
): Promise<string | null> => {
  try {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!permission.granted) {
      Alert.alert(
        'Izin Ditolak',
        'Aplikasi membutuhkan akses galeri untuk upload gambar.'
      )
      return null
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: options?.aspect ?? [1, 1],
      quality: options?.quality ?? 1,
    })

    if (!result.canceled) {
      return result.assets[0].uri
    }

    return null
  } catch (error) {
    console.error('Pick Image Error:', error)
    return null
  }
}
