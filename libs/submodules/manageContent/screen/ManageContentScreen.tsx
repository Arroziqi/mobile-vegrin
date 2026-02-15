import AppBar from '@/components/AppBar'
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import { ADMIN_NEWS_DUMMY_CONTENTS } from '@/libs/dummyData/adminNewsItem.dummy'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import AddContentForm from '../components/AddContentForm'
import DeleteContentModal from '../components/DeleteContentModal'
import ManageNewsCard from '../components/ManageNewsCard'
import styles from '../styles/ManageContentScreen.style'
import { useDeleteEducation } from '@/libs/hooks/educations/useDeleteEducation'
import { useGetEducationList } from '@/libs/hooks/educations/useGetEducationList'

export default function ManageContentScreen() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | null>(null)

  const { deleteEducation } = useDeleteEducation()
  const {
    data: educationList,
    loading: loadingEducationList,
    refetch: refetchEducationList,
  } = useGetEducationList()

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

  const confirmDelete = async () => {
    if (!itemToDelete) return

    try {
      await deleteEducation({
        id: itemToDelete,
      })

      setDeleteModalVisible(false)
      setItemToDelete(null)

      // TODO: nanti kita bisa refresh list di sini
      await refetchEducationList()
    } catch {
      // error sudah ditangani di hook
    }
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
          <AddContentForm onClose={() => setShowAddForm(false)} />
        )}

        <View style={styles.cardWrapper}>
          <Flex direction="row" style={styles.listHeader} gap={10}>
            <MaterialIcons name="article" size={24} color="#032746" />
            <Text style={styles.listHeaderText}>
              Daftar Konten ({educationList.length})
            </Text>
          </Flex>

          {/* Loading */}
          {loadingEducationList && (
            <View style={{ paddingVertical: 20, alignItems: 'center' }}>
              <Text>Memuat data...</Text>
            </View>
          )}

          {/* Empty State */}
          {!loadingEducationList && educationList.length === 0 && (
            <View
              style={{ paddingVertical: 30, alignItems: 'center', gap: 15 }}
            >
              <MaterialIcons name="inbox" size={48} color="#9CA3AF" />
              <Text style={{ color: '#6B7280', fontSize: 16 }}>
                Belum ada konten
              </Text>

              <TouchableOpacity
                onPress={refetchEducationList}
                style={{
                  backgroundColor: '#032746',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 8,
                }}
                activeOpacity={0.8}
              >
                <Flex direction="row" align="center" gap={8}>
                  <MaterialIcons name="refresh" size={18} color="white" />
                  <Text style={{ color: 'white', fontWeight: '600' }}>
                    Refresh
                  </Text>
                </Flex>
              </TouchableOpacity>
            </View>
          )}

          {/* List */}
          {!loadingEducationList &&
            educationList.length > 0 &&
            educationList.map(item => (
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
