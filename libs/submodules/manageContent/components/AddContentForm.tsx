import Flex from '@/components/Flex'
import { MaterialIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../styles/ManageContentScreen.style'
import {
  EducationDetail,
  useContentForm,
} from '@/libs/submodules/manageContent/hooks/useContentForm'

interface AddContentFormProps {
  onClose: () => void
  itemToEdit?: EducationDetail
  refetchEducationList: () => Promise<void>
}

export default function AddContentForm({
  onClose,
  itemToEdit,
  refetchEducationList,
}: AddContentFormProps) {
  const {
    title,
    setTitle,
    source,
    setSource,
    url,
    setUrl,
    image,
    handlePickImage,
    submit,
    loading,
    isEditMode,
  } = useContentForm(onClose, refetchEducationList, itemToEdit)

  return (
    <View style={styles.cardWrapper}>
      <Flex
        direction="row"
        justify="space-between"
        style={styles.listHeader}
        gap={10}
      >
        <MaterialIcons name="add-circle" size={24} color="#032746" />
        <Text style={[styles.listHeaderText, { flex: 1 }]}>
          {isEditMode ? 'Edit Konten' : 'Konten Baru'}
        </Text>
        <TouchableOpacity onPress={onClose}>
          <MaterialIcons name="close" size={24} color="#032746" />
        </TouchableOpacity>
      </Flex>

      <Flex direction="column" style={styles.itemContainer} gap={15}>
        <Text style={styles.label}>Gambar Berita</Text>

        <TouchableOpacity
          style={styles.uploadPlaceholder}
          onPress={handlePickImage}
        >
          {image ? (
            <Image source={{ uri: image }} style={styles.previewImage} />
          ) : (
            <Flex direction="column" align="center" gap={5}>
              <MaterialIcons name="cloud-upload" size={32} color="#9CA3AF" />
              <Text style={{ color: '#9CA3AF' }}>Upload Gambar (16:9)</Text>
            </Flex>
          )}
        </TouchableOpacity>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Judul Berita</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Masukkan judul berita..."
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Sumber Berita</Text>
          <TextInput
            style={styles.input}
            value={source}
            onChangeText={setSource}
            placeholder="Contoh: Kompas"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Link External</Text>
          <TextInput
            style={styles.input}
            value={url}
            onChangeText={setUrl}
            placeholder="https://example.com"
            keyboardType="url"
            autoCapitalize="none"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <TouchableOpacity
          style={[styles.submitButton, { opacity: loading ? 0.6 : 1 }]}
          onPress={submit}
          disabled={loading}
        >
          <Text style={styles.submitButtonText}>
            {loading
              ? 'Menyimpan...'
              : isEditMode
                ? 'Update Konten'
                : 'Simpan Konten'}
          </Text>
        </TouchableOpacity>
      </Flex>
    </View>
  )
}
