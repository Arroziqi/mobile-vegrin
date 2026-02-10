import AppBar from '@/components/AppBar'
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import { ADMIN_NEWS_DUMMY_CONTENTS } from '@/libs/dummyData/adminNewsItem.dummy'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import AddContentForm from '../components/AddContentForm'
import DeleteContentModal from '../components/DeleteContentModal'
import ManageNewsCard from '../components/ManageNewsCard'
import styles from '../styles/ManageContentScreen.style'

export default function ManageContentScreen() {
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

  const handleFormSubmit = (data: {
    title: string
    source: string
    url: string
    image: string | null
  }) => {
    console.log('Form Data:', data)
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
          <AddContentForm
            onClose={() => setShowAddForm(false)}
            onSubmit={handleFormSubmit}
          />
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
