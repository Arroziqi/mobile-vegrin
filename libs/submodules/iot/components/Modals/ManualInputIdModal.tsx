import React, { JSX } from 'react'
import { CustomModal } from '@/components/modal/CustomModal'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { UseModalReturn } from '@/hooks/useModal'
import Column from '@/components/Column'

interface Props {
  modal: UseModalReturn
}

function ManualInputIdModal({ modal }: Props): JSX.Element {
  return (
    <>
      <CustomModal
        isVisible={modal.isVisible}
        onClose={modal.hide}
        title="Tambah Perangkat IoT"
        headerStyle={styles.headerStyle}
        closeButtonStyle={styles.closeButtonStyle}
        titleStyle={styles.titleStyle}
        contentStyle={styles.container}
      >
        <Text style={styles.inputLabel}>Device ID</Text>
        <TextInput
          style={styles.input}
          autoCapitalize={'characters'}
          placeholder={'WS-2024-001'}
        />
        <Text style={styles.inputHint}>
          Format: XX-XXXX-XXX (Huruf kapital dan angka)
        </Text>

        <View style={styles.exampleContainer}>
          <Text style={{ color: '#0A0A0A', fontSize: 12 }}>
            Contoh Device ID:
          </Text>
          <Column gap={5}>
            <Text style={styles.exampleValue}>WS-2024-001</Text>
            <Text style={styles.exampleValue}>WS-2024-002</Text>
            <Text style={styles.exampleValue}>WS-2024-003</Text>
          </Column>
        </View>

        <Pressable style={[styles.button, { backgroundColor: '#00C950' }]}>
          <Text style={styles.buttonText}>Hubungkan Perangkat</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: '#00BBA7' }]}
          onPress={modal.hide}
        >
          <Text style={styles.buttonText}>Kembali</Text>
        </Pressable>
      </CustomModal>
    </>
  )
}

export default ManualInputIdModal

const styles = StyleSheet.create({
  headerStyle: { backgroundColor: '#00BC7D' },
  closeButtonStyle: { color: 'white' },
  titleStyle: { color: 'white', fontWeight: 'regular' },
  container: {
    gap: 12,
    padding: 20,
  },
  button: {
    padding: 12,
    borderRadius: 14,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonTextDesc: { fontSize: 12, color: 'white' },
  modalText: {
    color: '#4A5565',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderRadius: 14,
    borderWidth: 1.34,
    borderColor: '#D1D5DC',
    padding: 16,
    color: 'rgba(10, 10, 10, 0.5)',
  },
  inputLabel: {
    color: '#364153',
  },
  inputHint: {
    color: '#6A7282',
    fontSize: 12,
  },
  exampleContainer: {
    borderRadius: 10,
    borderWidth: 1.34,
    borderColor: '#D1D5DC',
    backgroundColor: '#f3f4f6',
    padding: 16,
    gap: 10,
    marginBottom: 12,
  },
  exampleValue: {
    fontSize: 12,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D1D5DC',
  },
})
