import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import homeStyle from '@/libs/submodules/home/styles/Home.style'
import TopBarHome from '@/libs/submodules/home/components/TopBarHome'
import { useState } from 'react'
import { WarningMessageType } from '@/libs/submodules/home/types/Home.type'
import WarningMessage from '@/libs/submodules/home/components/WarningMessage'
import WeatherCard from '@/libs/submodules/home/components/WeatherCard'

const HomeScreen = () => {
  const [warningMessage, setWarningMessage] = useState<WarningMessageType>({
    message: 'Akses kamera belum aktif',
    suggestion: 'Segera aktifkan untuk layanan AI scan',
  })

  return (
    <Container>
      <Flex style={homeStyle.container} direction={'column'}>
        <TopBarHome />

        <Flex direction={'column'} gap={21} style={homeStyle.contentWrapper}>
          {warningMessage && <WarningMessage warningMessage={warningMessage} />}

          <WeatherCard />
        </Flex>
      </Flex>
    </Container>
  )
}

export default HomeScreen
