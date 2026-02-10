import Flex from '@/components/Flex'
import { MaterialIcons } from '@expo/vector-icons'
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

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

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    minHeight: 200,
  },
  header: {
    backgroundColor: '#DC2626',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#FFFFFF33',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  content: {
    padding: 20,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,
    textAlign: 'center',
  },
  titleBox: {
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
    padding: 10,
  },
  itemTitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  warningBox: {
    padding: 10,
    backgroundColor: '#FFFBEB',
    borderColor: '#FEE685',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
  },
  warningText: {
    color: '#92400E',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  cancelButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  cancelButtonText: {
    fontWeight: '600',
  },
})
