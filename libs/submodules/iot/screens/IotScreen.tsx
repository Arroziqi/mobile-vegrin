import React from 'react'
import Container from '@/components/container/Container'
import { ScrollView, StyleSheet, View } from 'react-native'
import Flex from '@/components/Flex'
import TopBarIot from '@/libs/submodules/iot/components/TopBar/TopBarIot'
import IotDataList from '@/libs/submodules/iot/components/IotDataList/IotDataList'
import DisconnectedWarningMessage from '@/libs/submodules/iot/components/DisconnectedWarningMessage'
import RefreshConnectionButton from '@/libs/submodules/iot/components/RefreshConnectionButton'
import TroubleshootingTips from '@/libs/submodules/iot/components/TroubleshootingTips'
import BottomStatus from '@/libs/submodules/iot/components/BottomStatus'

function IotScreen() {
  const [isConnected, setIsConnected] = React.useState(false)

  const renderContent = () => {
    if (isConnected) {
      return <IotDataList isConnected={isConnected} />
    } else {
      return (
        <>
          <DisconnectedWarningMessage />
          <IotDataList isConnected={isConnected} />
          <Flex
            direction={'column'}
            gap={15}
            style={{ paddingHorizontal: 16, paddingVertical: 24 }}
          >
            <RefreshConnectionButton onPress={() => {}} />
            <TroubleshootingTips />
          </Flex>
        </>
      )
    }
  }

  return (
    <Container>
      <Flex flex={1} align={'flex-start'} direction={'column'}>
        <TopBarIot isConnected={isConnected} />
        <ScrollView
          style={[
            styles.container,
            { backgroundColor: isConnected ? 'white' : '#FEF2F2' },
          ]}
        >
          <View style={styles.content}>{renderContent()}</View>
          <BottomStatus isConnected={isConnected} />
        </ScrollView>
      </Flex>
    </Container>
  )
}

export default IotScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  content: {
    padding: 16,
  },
})
