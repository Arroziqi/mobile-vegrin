// HomeScreen.tsx - Menggunakan ScrollView utama
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import homeStyle from '@/libs/submodules/home/styles/Home.style'
import TopBarHome from '@/libs/submodules/home/components/TopBarHome'
import React, { useState } from 'react'
import { WarningMessageType } from '@/libs/submodules/home/types/Home.type'
import WeatherCard from '@/libs/submodules/home/components/WeatherCard'
import PillButtonTabs from '@/components/tabs/pill/PillButtonTabs'
import WeatherForecastingCard from '@/libs/submodules/home/components/WeatherForecastingCard'
import {
  WEATHER_BY_DAY,
  weatherTabsDummy,
} from '@/libs/dummyData/weatherForecasting.dummy'
import { newsItemDummy } from '@/libs/dummyData/newsItem.dummy'
import NewsItemCardList from '@/libs/submodules/home/components/newsItemCardList/NewsItemCardList'
import { ScrollView, View } from 'react-native'
import WeatherInfoIot from '@/libs/submodules/home/components/WeatherInfoIot'

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

  return (
    <Container>
      <Flex direction={'column'} style={{ backgroundColor: 'white', flex: 1 }}>
        <TopBarHome />
        <ScrollView
          style={homeStyle.container}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={homeStyle.scrollContent}
        >
          <Flex direction="column" gap={21} style={homeStyle.contentWrapper}>
            {/*{warningMessage && (*/}
            {/*  <WarningMessage warningMessage={warningMessage} />*/}
            {/*)}*/}

            <WeatherCard />

            <PillButtonTabs
              items={weatherTabsDummy}
              activeKey={activeTab}
              onChange={setActiveTab}
            />

            <WeatherForecastingCard data={WEATHER_BY_DAY[activeTab]} />

            <WeatherInfoIot />

            <View style={{ width: '100%' }}>
              <NewsItemCardList data={newsItemDummy} />
              <View style={{ height: 80, width: 80 }} />
            </View>
          </Flex>
        </ScrollView>
      </Flex>
    </Container>
  )
}

export default HomeScreen
