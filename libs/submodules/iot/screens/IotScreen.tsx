import React from 'react'
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import DashboardIotContent from '@/libs/submodules/iot/components/DashboardIotContent'
import NoSignalContent from '@/libs/submodules/iot/components/NoSignalContent'

function IotScreen() {
  const [isConnected, setIsConnected] = React.useState(false)

  const renderContent = () => {
    if (isConnected) {
      return <DashboardIotContent />
    } else {
      return <NoSignalContent />
    }
  }

  return (
    <Container>
      <Flex flex={1} align={'flex-start'} direction={'column'}>
        {renderContent()}
      </Flex>
    </Container>
  )
}

export default IotScreen
