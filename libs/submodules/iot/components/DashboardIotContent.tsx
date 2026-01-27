import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import TopBarIot from '@/libs/submodules/iot/components/TopBar/TopBarIot'
import BottomStatus from '@/libs/submodules/iot/components/BottomStatus'
import IotDataList from '@/libs/submodules/iot/components/IotDataList/IotDataList'

function DashboardIotContent() {
  return (
    <>
      <TopBarIot isConnected={true} />
      <ScrollView style={[styles.container]}>
        <View style={styles.content}>
          <IotDataList />
        </View>
        <BottomStatus isConnected={true} />
      </ScrollView>
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
  content: {
    padding: 16,
  },
})
