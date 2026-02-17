import AppBar from '@/components/AppBar'
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import AddContentForm from '../components/AddContentForm'
import DeleteContentModal from '../components/DeleteContentModal'
import ManageNewsCard from '../components/ManageNewsCard'
import styles from '../styles/ManageContentScreen.style'
import { useDeleteEducation } from '@/libs/hooks/educations/useDeleteEducation'
import { useGetEducationList } from '@/libs/hooks/educations/useGetEducationList'
import EmptyState from '@/libs/submodules/manageContent/components/EmptyState'
import { EducationDetail } from '@/libs/submodules/manageContent/hooks/useContentForm'

export default function ManageContentScreen() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | null>(null)
  const [itemToEdit, setItemToEdit] = useState<EducationDetail | undefined>(
    undefined
  )

  const { deleteEducation } = useDeleteEducation()
  const {
    data: educationList,
    loading: loadingEducationList,
    refetch: refetchEducationList,
  } = useGetEducationList()

  const handleAddContent = () => {
    setShowAddForm(true)
  }

  const handleEdit = (id: string) => {
    const selectedItem = educationList.find(item => item.id === id)

    if (!selectedItem) return

    setItemToEdit(selectedItem)
    setShowAddForm(true)
  }

  const handleDelete = (id: string) => {
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
          <AddContentForm
            itemToEdit={itemToEdit}
            onClose={() => setShowAddForm(false)}
            refetchEducationList={refetchEducationList}
          />
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
            <EmptyState onPress={refetchEducationList} />
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
            ? educationList.find(item => item.id === itemToDelete)?.title
            : undefined
        }
        onConfirmDelete={confirmDelete}
      />
    </Container>
  )
}
