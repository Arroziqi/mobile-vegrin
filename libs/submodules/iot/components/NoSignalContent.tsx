import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import TopBarIot from '@/libs/submodules/iot/components/TopBar/TopBarIot'
import BottomStatus from '@/libs/submodules/iot/components/BottomStatus'
import DisconnectedWarningMessage from '@/libs/submodules/iot/components/DisconnectedWarningMessage'
import Flex from '@/components/Flex'
import RefreshConnectionButton from '@/libs/submodules/iot/components/RefreshConnectionButton'
import TroubleshootingTips from '@/libs/submodules/iot/components/TroubleshootingTips'
import NoSignalIotDataList from '@/libs/submodules/iot/components/IotDataList/NoSIgnalIotDataList'

function NoSignalContent() {
  return (
    <>
      <TopBarIot isConnected={false} />
      <ScrollView style={[styles.container]}>
        <View style={styles.content}>
          <DisconnectedWarningMessage />
          <NoSignalIotDataList />
          <Flex
            direction={'column'}
            gap={15}
            style={{ paddingHorizontal: 16, paddingVertical: 24 }}
          >
            <RefreshConnectionButton onPress={() => {}} />
            <TroubleshootingTips />
          </Flex>
        </View>
        <BottomStatus isConnected={false} />
      </ScrollView>
    </>
  )
}

export default NoSignalContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FEF2F2',
  },
  content: {
    padding: 16,
  },
})
