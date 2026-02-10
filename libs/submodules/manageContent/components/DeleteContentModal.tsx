import Flex from '@/components/Flex'
import { MaterialIcons } from '@expo/vector-icons'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/DeleteContentModal.style'

interface DeleteContentModalProps {
  visible: boolean
  setVisible: (visible: boolean) => void
  itemTitle?: string
  onConfirmDelete?: () => void
}

const DeleteContentModal = ({
  visible,
  setVisible,
  itemTitle,
  onConfirmDelete,
}: DeleteContentModalProps) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={() => setVisible(false)}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setVisible(false)}
        style={styles.overlay}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={e => e.stopPropagation()}
          style={styles.sheet}
        >
          {/* Header */}
          <Flex direction="column" align="center" style={styles.header}>
            <View style={styles.iconWrapper}>
              <MaterialIcons name="warning" size={32} color="white" />
            </View>
            <Text style={styles.headerTitle}>Hapus Konten Berita?</Text>
          </Flex>

          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.description}>
              Apakah Anda yakin ingin menghapus konten berita ini?
            </Text>

            <View style={styles.titleBox}>
              <Text numberOfLines={2} style={styles.itemTitle}>
                {itemTitle ?? ''}
              </Text>
            </View>

            <View style={styles.warningBox}>
              <Text style={styles.warningText}>
                Tindakan ini tidak dapat dibatalkan.
              </Text>
            </View>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => {
                setVisible(false)
                onConfirmDelete?.()
              }}
            >
              <Text style={styles.deleteButtonText}>Ya, Hapus Konten</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Batal</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  )
}

export default DeleteContentModal
