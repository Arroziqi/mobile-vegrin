import React from 'react'
import Flex from '@/components/Flex'
import { StyleSheet, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

function TroubleshootingTips() {
  return (
    <Flex style={styles.container} gap={12} align={'flex-start'}>
      <Feather name="info" size={20} color="#E17100" />
      <Flex direction="column" align={'flex-start'} gap={5}>
        <Text style={styles.title}>Tips Troubleshooting:</Text>
        <Text style={styles.item}>
          • Periksa koneksi internet perangkat IoT
        </Text>
        <Text style={styles.item}>
          • Pastikan server IoT dalam keadaan aktif
        </Text>
        <Text style={styles.item}>• Restart perangkat IoT jika diperlukan</Text>
      </Flex>
    </Flex>
  )
}

export default TroubleshootingTips

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEE685',
    backgroundColor: '#FFFBEB',
    padding: 17,
    width: '100%',
  },
  title: {
    color: '#973C00',
    fontSize: 14,
  },
  item: {
    color: '#973C00',
    fontSize: 12,
  },
})
