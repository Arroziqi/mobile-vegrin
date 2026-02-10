import AppBar from '@/components/AppBar'
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import { MaterialIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import * as ImagePicker from 'expo-image-picker'

import { ADMIN_NEWS_DUMMY_CONTENTS } from '@/libs/dummyData/adminNewsItem.dummy'
import { useState } from 'react'
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import DeleteContentModal from '../components/DeleteContentModal'
import ManageNewsCard from '../components/ManageNewsCard'

export default function ManageContentScreen() {
  const [title, setTitle] = useState<string>('')
  const [source, setSource] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [image, setImage] = useState<string | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | null>(null)

  const handleAddContent = () => {
    console.log('Add New Content')
    setShowAddForm(true)
  }

  const handleEdit = (id: string) => {
    console.log('Edit item:', id)
  }

  const handleDelete = (id: string) => {
    console.log('Delete item:', id)
    setItemToDelete(id)
    setDeleteModalVisible(true)
  }

  const confirmDelete = () => {
    if (itemToDelete) {
      console.log('Confirming delete for item:', itemToDelete)
      Alert.alert('Sukses', 'Konten berhasil dihapus')
      setItemToDelete(null)
    }
  }

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
    Alert.alert('Sukses', 'Konten berhasil ditambahkan')
  }

  return (
    <Container style={styles.container}>
      <AppBar variant="default" title="Admin - Kelola Konten Berita" />
      <View style={styles.topActionContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddContent}
          activeOpacity={0.8}
        >
          <Flex direction="row" align="center" gap={10}>
            <MaterialIcons name="add" size={24} color="white" />
            <Text style={styles.actionButtonText}>Tambah Konten Baru</Text>
          </Flex>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {showAddForm && (
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
              <TouchableOpacity onPress={() => setShowAddForm(false)}>
                <MaterialIcons name="close" size={24} color="#032746" />
              </TouchableOpacity>
            </Flex>
            <Flex direction="column" style={styles.itemContainer} gap={15}>
              {/* Field: Upload Gambar */}
              <Text style={styles.label}>Gambar Berita</Text>
              <TouchableOpacity
                style={styles.uploadPlaceholder}
                onPress={pickImage}
              >
                {image ? (
                  <Image source={{ uri: image }} style={styles.previewImage} />
                ) : (
                  <Flex direction="column" align="center" gap={5}>
                    <MaterialIcons
                      name="cloud-upload"
                      size={32}
                      color="#9CA3AF"
                    />
                    <Text style={{ color: '#9CA3AF' }}>
                      Upload Gambar (16:9)
                    </Text>
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
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>Simpan Konten</Text>
              </TouchableOpacity>
            </Flex>
          </View>
        )}

        <View style={styles.cardWrapper}>
          <Flex direction="row" style={styles.listHeader} gap={10}>
            <MaterialIcons name="article" size={24} color="#032746" />
            <Text style={styles.listHeaderText}>
              Daftar Konten ({ADMIN_NEWS_DUMMY_CONTENTS.length})
            </Text>
          </Flex>

          {ADMIN_NEWS_DUMMY_CONTENTS.map(item => (
            <ManageNewsCard
              key={item.id}
              item={item}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </View>
      </ScrollView>
      <DeleteContentModal
        visible={deleteModalVisible}
        setVisible={setDeleteModalVisible}
        itemTitle={
          itemToDelete
            ? ADMIN_NEWS_DUMMY_CONTENTS.find(item => item.id === itemToDelete)
                ?.title
            : undefined
        }
        onConfirmDelete={confirmDelete}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  topActionContainer: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderBottomColor: '#E5E7EB',
    borderBottomWidth: 2,
  },
  scrollContent: {
    paddingVertical: 20,
    paddingBottom: 40,
  },
  cardWrapper: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginHorizontal: 20,
  },
  listHeader: {
    padding: 20,
    backgroundColor: '#F9FAFB', // Sedikit warna berbeda untuk header list
  },
  listHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#032746',
  },
  badgeNumber: {
    backgroundColor: '#2B9846',
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 12,
    height: 52,
    backgroundColor: '#2B9846',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 6,
  },
  uploadPlaceholder: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderStyle: 'dashed',
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  submitButton: {
    backgroundColor: '#2B9846',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  inputGroup: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#1F2937',
    backgroundColor: '#FBFBFB',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
})
