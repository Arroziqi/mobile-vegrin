import React from 'react'
import { useModal, UseModalReturn } from '@/hooks/useModal'
import { Pressable, StyleSheet, Text } from 'react-native'
import { CustomModal } from '@/components/modal/CustomModal'
import Row from '@/components/Row'
import Column from '@/components/Column'
import { Ionicons } from '@expo/vector-icons'
import ScanQrModal from '@/libs/submodules/iot/components/Modals/ScanQRModal'
import ManualInputIdModal from '@/libs/submodules/iot/components/Modals/ManualInputIdModal'

interface Props {
  modal: UseModalReturn
}

function AddDeviceModal({ modal }: Props) {
  const scanQrModal = useModal()
  const manualInputIdModal = useModal()

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
        <Text style={styles.modalText}>
          Pilih metode untuk menambahkan perangkat IoT baru
        </Text>

        <Pressable
          style={[styles.button, { backgroundColor: '#00C950' }]}
          onPress={scanQrModal.show}
        >
          <Row justify={'center'} gap={12}>
            <Ionicons name="qr-code-outline" size={24} color="white" />
            <Column>
              <Text style={styles.buttonText}>Scan QR Code</Text>
              <Text style={styles.buttonTextDesc}>
                Cara tercepat dan termudah
              </Text>
            </Column>
          </Row>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: '#00BBA7' }]}
          onPress={manualInputIdModal.show}
        >
          <Row justify={'center'} gap={12}>
            <Ionicons name="qr-code-outline" size={24} color="white" />
            <Column>
              <Text style={styles.buttonText}>Input Manual ID</Text>
              <Text style={styles.buttonTextDesc}>
                Masukkan ID perangkat secara manual
              </Text>
            </Column>
          </Row>
        </Pressable>
      </CustomModal>

      <ScanQrModal modal={scanQrModal} />

      <ManualInputIdModal modal={manualInputIdModal} />
    </>
  )
}

export default AddDeviceModal

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
  },
  buttonTextDesc: { fontSize: 12, color: 'white' },
  modalText: {
    color: '#4A5565',
    marginBottom: 12,
    textAlign: 'center',
  },
})
