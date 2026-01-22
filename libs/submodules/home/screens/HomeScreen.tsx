// HomeScreen.tsx - Menggunakan ScrollView utama
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import homeStyle from '@/libs/submodules/home/styles/Home.style'
import TopBarHome from '@/libs/submodules/home/components/TopBarHome'
import { useState } from 'react'
import { WarningMessageType } from '@/libs/submodules/home/types/Home.type'
import WarningMessage from '@/libs/submodules/home/components/WarningMessage'
import WeatherCard from '@/libs/submodules/home/components/WeatherCard'
import PillButtonTabs from '@/components/tabs/pill/PillButtonTabs'
import WeatherForecastingCard from '@/libs/submodules/home/components/WeatherForecastingCard'
import {
  WEATHER_BY_DAY,
  weatherTabsDummy,
} from '@/libs/dummyData/weatherForecasting.dummy'
import { newsItemDummy } from '@/libs/dummyData/newsItem.dummy'
import NewsItemCardList from '@/libs/submodules/home/components/newsItemCardList/NewsItemCardList'
import { Pressable, ScrollView, View } from 'react-native'
import { useRouter } from 'expo-router'
import ButtonCustome from '@/components/buttons/button-custome/ButtonCustome'

const HomeScreen = () => {
  const [warningMessage] = useState<WarningMessageType[]>([
    {
      message: 'Akses kamera belum aktif',
      suggestion: 'Segera aktifkan untuk layanan AI scan',
    },
    {
      message: 'Layanan lokasi belum aktif.',
      suggestion:
        'Segera aktifkan untuk menikmati fitur Prediksi Cuaca untuk lahan anda',
    },
  ])

  const [activeTab, setActiveTab] = useState<
    'yesterday' | 'today' | 'tomorrow'
  >('today')

  const router = useRouter()

  return (
    <Container>
      <Flex direction={'column'} style={{ backgroundColor: 'white', flex: 1 }}>
        <TopBarHome />
        <ButtonCustome
          title={'Register'}
          onPress={() => router.push('/(auth)/register')}
        />
        <ScrollView
          style={homeStyle.container}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={homeStyle.scrollContent}
        >
          <Flex direction="column" gap={21} style={homeStyle.contentWrapper}>
            {warningMessage && (
              <WarningMessage warningMessage={warningMessage} />
            )}

            <Pressable
              style={{ width: '100%' }}
              onPress={() => router.push('/dashboard-iot')}
            >
              <WeatherCard />
            </Pressable>

            <PillButtonTabs
              items={weatherTabsDummy}
              activeKey={activeTab}
              onChange={setActiveTab}
            />

            <WeatherForecastingCard data={WEATHER_BY_DAY[activeTab]} />

            <View style={{ width: '100%' }}>
              <NewsItemCardList data={newsItemDummy} />
            </View>
          </Flex>
        </ScrollView>
      </Flex>
    </Container>
  )
}

export default HomeScreen
