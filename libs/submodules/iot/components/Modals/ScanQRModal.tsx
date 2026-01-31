import React, { JSX, useEffect } from 'react'
import { Alert, Pressable, StyleSheet, Text } from 'react-native'
import { CustomModal } from '@/components/modal/CustomModal'
import QrCodeScanner from '@/libs/submodules/iot/components/QrCodeScanner'
import { useQrScanner } from '@/hooks/useQrScanner'
import { UseModalReturn } from '@/hooks/useModal'

interface Props {
  modal: UseModalReturn
  onScanSuccess?: (data: string) => void
}

function ScanQrModal({ modal, onScanSuccess }: Props): JSX.Element {
  const scanner = useQrScanner()

  // Handle scan success
  useEffect(() => {
    if (scanner.scannedData) {
      if (onScanSuccess) {
        onScanSuccess(scanner.scannedData)
      } else {
        Alert.alert('QR Code Scanned', `Data: ${scanner.scannedData}`)
      }

      // Reset scanner after showing result
      setTimeout(() => {
        scanner.resetScanner()
      }, 1000)
    }
  }, [scanner.scannedData])

  // Reset scanner when modal closes
  useEffect(() => {
    if (!modal.isVisible) {
      scanner.stopScanning()
      scanner.resetScanner()
    }
  }, [modal.isVisible])

  const handleStartScan = () => {
    if (scanner.hasPermission === null) {
      Alert.alert('Permisi Kamera', 'Meminta akses kamera...')
      scanner.requestPermission()
      return
    }

    if (scanner.hasPermission === false) {
      Alert.alert(
        'Permisi Ditolak',
        'Aplikasi memerlukan akses kamera untuk scan QR code. Silakan aktifkan di pengaturan.'
      )
      return
    }

    scanner.startScanning()
  }

  const handleBack = () => {
    scanner.stopScanning()
    modal.hide()
  }

  return (
    <CustomModal
      isVisible={modal.isVisible}
      onClose={modal.hide}
      title="Scan QR Code"
      headerStyle={styles.headerStyle}
      closeButtonStyle={styles.closeButtonStyle}
      titleStyle={styles.titleStyle}
      contentStyle={styles.container}
    >
      <QrCodeScanner scanner={scanner} />

      <Pressable
        style={[
          styles.button,
          { backgroundColor: scanner.isScanning ? '#6B7280' : '#00C950' },
        ]}
        onPress={handleStartScan}
        disabled={scanner.isScanning}
      >
        <Text style={styles.buttonText}>
          {scanner.isScanning ? 'Sedang Scan...' : 'Mulai Scan'}
        </Text>
      </Pressable>

      <Pressable
        style={[styles.button, { backgroundColor: '#00BBA7' }]}
        onPress={handleBack}
      >
        <Text style={styles.buttonText}>Kembali</Text>
      </Pressable>
    </CustomModal>
  )
}

export default ScanQrModal

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
  modalText: {
    color: '#4A5565',
    marginBottom: 12,
    textAlign: 'center',
  },
})
