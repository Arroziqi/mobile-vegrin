import AppBar from '@/components/AppBar'
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import { customizeColors } from '@/libs/core/config/theme/color'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import ActionSection from '../components/ActionSection'
import CameraSection from '../components/CameraSection'

export default function AiCamScanScreen() {
  return (
    <Container>
      <Flex
        direction={'column'}
        style={{ backgroundColor: '#101828', flex: 1 }}
      >
        {/* AppBar with back button */}
        <AppBar title="Scan Tanaman" variant="reverse" />
        <Flex direction="column" align="center" justify="center" gap={5}>
          <Text style={styles.h6}>Arahkan kamera ke tanaman anda</Text>
          <Text style={styles.p}>Posisikan tanaman di dalam frame</Text>
        </Flex>
        {/* Camera Section */}
        <CameraSection />
        {/* Action Section */}
        <ActionSection />
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
