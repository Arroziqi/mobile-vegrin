import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CustomModal } from './CustomModal'
import { useModal } from '../../hooks/useModal'

export const ExampleUsage: React.FC = () => {
  const modal = useModal()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={modal.show}>
        <Text style={styles.buttonText}>Buka Modal</Text>
      </TouchableOpacity>

      <CustomModal
        isVisible={modal.isVisible}
        onClose={modal.hide}
        title="Judul Modal"
      >
        <Text style={styles.modalText}>
          Ini adalah contoh penggunaan modal reusable. Anda bisa menaruh konten
          apapun di sini.
        </Text>
        <Text style={styles.modalText}>
          Logic modal sudah dipisahkan ke custom hook useModal.
        </Text>
      </CustomModal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  modalText: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 12,
    lineHeight: 24,
  },
})
