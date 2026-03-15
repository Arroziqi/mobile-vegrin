// ============================================================
// libs/submodules/iot/components/Modals/ManualInputIdModal.tsx
// ============================================================

import React, { JSX, useState } from 'react'
import { CustomModal } from '@/components/modal/CustomModal'
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { UseModalReturn } from '@/hooks/useModal'
import Column from '@/components/Column'
import { useCreateDeviceIOT } from '@/libs/hooks/iot/useIot'

interface Props {
  modal: UseModalReturn
  onSuccess?: (deviceId: string) => void
}

function ManualInputIdModal({ modal, onSuccess }: Props): JSX.Element {
  const [deviceId, setDeviceId] = useState('')
  // React Query mutation — mutateAsync, isPending
  const { mutateAsync: createDevice, isPending: creating } =
    useCreateDeviceIOT()

  const handleConnect = async () => {
    const trimmed = deviceId.trim().toUpperCase()
    if (!trimmed) {
      Alert.alert('Device ID kosong', 'Silakan masukkan Device ID')
      return
    }

    try {
      await createDevice(trimmed)
      // onSuccess di hook sudah invalidate → dashboard refetch otomatis
      Alert.alert('Berhasil', `Device IOT berhasil ditambahkan: ${trimmed}`)
      setDeviceId('')
      modal.hide()
      onSuccess?.(trimmed)
    } catch (err: any) {
      Alert.alert(
        'Gagal',
        err.message || 'Terjadi kesalahan saat menambahkan perangkat'
      )
    }
  }

  return (
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
        autoCapitalize="characters"
        placeholder="WS-2024-001"
        value={deviceId}
        onChangeText={setDeviceId}
        editable={!creating}
      />
      <Text style={styles.inputHint}>
        Format: XX-XXXX-XXX (Huruf kapital dan angka)
      </Text>

      <View style={styles.exampleContainer}>
        <Text style={{ color: '#0A0A0A', fontSize: 12 }}>
          Contoh Device ID:
        </Text>
        <Column gap={5}>
          <Text style={styles.exampleValue}>SS-03</Text>
          <Text style={styles.exampleValue}>SSW-01</Text>
          <Text style={styles.exampleValue}>SSW-02</Text>
        </Column>
      </View>

      <Pressable
        style={[
          styles.button,
          { backgroundColor: creating ? '#6B7280' : '#00C950' },
        ]}
        onPress={handleConnect}
        disabled={creating}
      >
        <Text style={styles.buttonText}>
          {creating ? 'Menghubungkan...' : 'Hubungkan Perangkat'}
        </Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: '#00BBA7' }]}
        onPress={modal.hide}
        disabled={creating}
      >
        <Text style={styles.buttonText}>Kembali</Text>
      </Pressable>
    </CustomModal>
  )
}

export default ManualInputIdModal

const styles = StyleSheet.create({
  headerStyle: { backgroundColor: '#00BC7D' },
  closeButtonStyle: { color: 'white' },
  titleStyle: { color: 'white', fontWeight: 'regular' },
  container: { gap: 12, padding: 20 },
  button: { padding: 12, borderRadius: 14 },
  buttonText: { color: 'white', fontSize: 16, textAlign: 'center' },
  input: {
    borderRadius: 14,
    borderWidth: 1.34,
    borderColor: '#D1D5DC',
    padding: 16,
    color: 'rgba(10, 10, 10, 0.9)',
  },
  inputLabel: { color: '#364153' },
  inputHint: { color: '#6A7282', fontSize: 12 },
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
