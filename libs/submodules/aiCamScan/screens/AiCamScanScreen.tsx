import AppBar from '@/components/AppBar'
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import { customizeColors } from '@/libs/core/config/theme/color'
import React from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import ActionSection from '../components/ActionSection'
import CameraSection from '../components/CameraSection'
import { useRouter } from 'expo-router'
import { usePlant } from '@/libs/hooks'

export default function AiCamScanScreen() {
  const router = useRouter()
  const { pickAndAnalyze, captureAndAnalyze, analyzing, error } = usePlant()

  const handlePickGallery = async () => {
    const result = await pickAndAnalyze()
    if (result.success) {
      router.push('/analyze')
    } else {
      Alert.alert('Gagal', result.error || 'Gagal menganalisis tanaman')
    }
  }

  const handleCaptureCamera = async () => {
    const result = await captureAndAnalyze()
    if (result.success) {
      router.push('/analyze')
    } else {
      Alert.alert('Gagal', result.error || 'Gagal menganalisis tanaman')
    }
  }

  return (
    <Container>
      <Flex direction="column" style={{ backgroundColor: '#101828', flex: 1 }}>
        <AppBar title="Scan Tanaman" variant="reverse" />

        <Flex direction="column" align="center" justify="center" gap={5}>
          <Text style={styles.h6}>Arahkan kamera ke tanaman anda</Text>
          <Text style={styles.p}>Posisikan tanaman di dalam frame</Text>
        </Flex>

        <CameraSection />

        <ActionSection
          onCamera={handleCaptureCamera}
          onGallery={handlePickGallery}
          loading={analyzing}
        />
      </Flex>
    </Container>
  )
}

const styles = StyleSheet.create({
  h6: {
    fontSize: 14,
    fontWeight: 'regular',
    color: customizeColors.text.reverse,
    opacity: 0.8,
  },
  p: {
    fontSize: 12,
    fontWeight: 'regular',
    color: customizeColors.text.reverse,
    opacity: 0.6,
  },
})
