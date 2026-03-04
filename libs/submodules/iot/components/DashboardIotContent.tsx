// ============================================================
// DashboardIotContent.tsx
// ============================================================

import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import TopBarIot from '@/libs/submodules/iot/components/TopBar/TopBarIot'
import BottomStatus from '@/libs/submodules/iot/components/BottomStatus'
import { Feather } from '@expo/vector-icons'
import Row from '@/components/Row'
import { LinearGradient } from 'expo-linear-gradient'
import { customizeColors } from '@/libs/core/config/theme/color'
import { useModal } from '@/hooks/useModal'
import AddDeviceModal from '@/libs/submodules/iot/components/Modals/AddDeviceModal'
import DeviceList from '@/libs/submodules/iot/components/Devicelist'

function DashboardIotContent() {
  const modal = useModal()

  return (
    <>
      <TopBarIot isConnected={true} />
      <ScrollView style={styles.container}>
        <View style={styles.contentWrapper}>
          {/* Header bar */}
          <LinearGradient
            colors={customizeColors.gradient.linear}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.titleWrapper}
          >
            <Row justify={'space-between'}>
              <Row gap={8}>
                <Feather name="wifi" size={20} color="white" />
                <Text style={styles.titleText}>Perangkat IoT Terhubung</Text>
              </Row>
              <Pressable style={styles.addButton} onPress={modal.show}>
                <Row gap={5} justify={'space-between'}>
                  <Feather name={'plus'} size={16} color="white" />
                  <Text style={styles.textAddButton}>Tambah</Text>
                </Row>
              </Pressable>
            </Row>
          </LinearGradient>

          {/* Device list — loop otomatis dari API */}
          <DeviceList />
        </View>

        <BottomStatus isConnected={true} />
      </ScrollView>

      <AddDeviceModal modal={modal} />
    </>
  )
}

export default DashboardIotContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  contentWrapper: {
    borderWidth: 1,
    borderColor: '#B9F8CF',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    margin: 16,
  },
  titleWrapper: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    padding: 16,
  },
  addButton: {
    width: 'auto',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  titleText: {
    color: 'white',
    fontSize: 14,
  },
  textAddButton: {
    color: 'white',
    fontSize: 12,
  },
})
