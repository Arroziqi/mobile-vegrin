import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Flex from '@/components/Flex'
import NoInternetIndicator from '@/components/NoInternetIndicator'

function DisconnectedWarningMessage() {
  return (
    <Flex style={[styles.container]} direction={'column'} gap={10}>
      <NoInternetIndicator size={200} color="#FB2C36" />
      <Text style={styles.title}>Server IoT Tidak Terhubung</Text>
      <Text style={styles.desc}>
        Tidak dapat mengambil data dari server IoT.
      </Text>
      <Text style={styles.suggestion}>
        Pastikan perangkat IoT Anda aktif dan terhubung ke jaringan.
      </Text>
    </Flex>
  )
}

export default DisconnectedWarningMessage

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    color: '#4A5565',
    textAlign: 'center',
  },
  suggestion: {
    fontSize: 12,
    color: '#6A7282',
    textAlign: 'center',
  },
})
