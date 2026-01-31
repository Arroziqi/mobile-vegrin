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
import { Pressable, ScrollView, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { useGridLayout } from '@/hooks/useGridLayout'
import IotInfoCardSection from '@/libs/submodules/iot/components/Cards/IotInfoCardSection'
import IotInfoCard from '@/libs/submodules/iot/components/Cards/IotInfoCard'
import { Entypo, Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import Row from '@/components/Row'

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

  const ACTIVE_COLOR = '#B9F8CF'

  const [activeTab, setActiveTab] = useState<
    'yesterday' | 'today' | 'tomorrow'
  >('today')

  const { itemWidth, handleLayout } = useGridLayout()

  const router = useRouter()

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

            <IotInfoCardSection
              sectionText={'Sensor Cuaca (4)'}
              onLayout={handleLayout}
              action={
                <Pressable onPress={() => router.push('/dashboard-iot')}>
                  <Row gap={5}>
                    <Text style={{ color: '#00BBA7', fontSize: 12 }}>
                      Lihat Semuanya
                    </Text>
                    <Feather name={'arrow-right'} size={12} color={'#00BBA7'} />
                  </Row>
                </Pressable>
              }
            >
              <IotInfoCard
                color={ACTIVE_COLOR}
                style={{ width: '47%' }}
                label="Suhu"
                value={24}
                unit="°C"
                icon={
                  <FontAwesome6
                    name="temperature-empty"
                    size={16}
                    color="#FF6900"
                  />
                }
                insight={{
                  text: '✓ Normal',
                }}
              />

              <IotInfoCard
                color={ACTIVE_COLOR}
                style={{ width: '47%' }}
                label="Kelembapan Udara"
                value={65}
                unit="%"
                icon={
                  <Ionicons name="water-outline" size={16} color="#51A2FF" />
                }
                insight={{
                  text: '✓ Ideal',
                }}
              />

              <IotInfoCard
                color={ACTIVE_COLOR}
                style={{ width: '47%' }}
                label="Kecerahan"
                value={934}
                unit="lux"
                icon={<Entypo name="light-up" size={16} color="#F0B100" />}
                insight={{
                  text: '🌥️ Redup',
                  status: 'negative',
                }}
              />

              <IotInfoCard
                color={ACTIVE_COLOR}
                style={{ width: '47%' }}
                label="Hujan"
                value={1}
                unit="(Hujan)"
                icon={<Feather name="cloud-rain" size={16} color="#2B7FFF" />}
                insight={{
                  text: '☀️ Tidak Hujan',
                }}
              />
            </IotInfoCardSection>

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
