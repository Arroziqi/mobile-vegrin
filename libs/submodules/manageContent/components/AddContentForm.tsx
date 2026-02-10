import Flex from '@/components/Flex'
import { MaterialIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../styles/ManageContentScreen.style'

interface AddContentFormProps {
  onClose: () => void
  onSubmit: (data: {
    title: string
    source: string
    url: string
    image: string | null
  }) => void
}

export default function AddContentForm({
  onClose,
  onSubmit,
}: AddContentFormProps) {
  const [title, setTitle] = useState<string>('')
  const [source, setSource] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const handleSubmit = () => {
    const payload = { title, source, url, image }
    console.log('Form Data:', payload)
    onSubmit(payload)
    // Reset form
    setTitle('')
    setSource('')
    setUrl('')
    setImage(null)
    onClose()
  }

  return (
    <View style={styles.cardWrapper}>
      <Flex
        direction="row"
        justify="space-between"
        style={styles.listHeader}
        gap={10}
      >
        <MaterialIcons name="add-circle" size={24} color="#032746" />
        <Text style={[styles.listHeaderText, { flex: 1, width: '100%' }]}>
          Konten Baru
        </Text>
        <TouchableOpacity onPress={onClose}>
          <MaterialIcons name="close" size={24} color="#032746" />
        </TouchableOpacity>
      </Flex>
      <Flex direction="column" style={styles.itemContainer} gap={15}>
        {/* Field: Upload Gambar */}
        <Text style={styles.label}>Gambar Berita</Text>
        <TouchableOpacity style={styles.uploadPlaceholder} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.previewImage} />
          ) : (
            <Flex direction="column" align="center" gap={5}>
              <MaterialIcons name="cloud-upload" size={32} color="#9CA3AF" />
              <Text style={{ color: '#9CA3AF' }}>Upload Gambar (16:9)</Text>
            </Flex>
          )}
        </TouchableOpacity>
        {/* Field: Judul Berita */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Judul Berita</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan judul berita..."
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Field: Sumber Berita */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Sumber Berita</Text>
          <TextInput
            style={styles.input}
            placeholder="Contoh: detikProperti, Kompas"
            value={source}
            onChangeText={setSource}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Field: Link External */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Link External (URL)</Text>
          <TextInput
            style={styles.input}
            placeholder="https://example.com"
            value={url}
            onChangeText={setUrl}
            keyboardType="url"
            autoCapitalize="none"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Simpan Konten</Text>
        </TouchableOpacity>
      </Flex>
    </View>
  )
}
