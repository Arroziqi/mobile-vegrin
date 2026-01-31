import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import TopBarIot from '@/libs/submodules/iot/components/TopBar/TopBarIot'
import BottomStatus from '@/libs/submodules/iot/components/BottomStatus'
import IotDataList from '@/libs/submodules/iot/components/IotDataList/IotDataList'
import { Feather } from '@expo/vector-icons'
import Row from '@/components/Row'
import { LinearGradient } from 'expo-linear-gradient'
import { customizeColors } from '@/libs/core/config/theme/color'
import Column from '@/components/Column'
import Dot from '@/components/Dot'

function DashboardIotContent() {
  return (
    <>
      <TopBarIot isConnected={true} />
      <ScrollView style={[styles.container]}>
        <View style={[styles.contentWrapper]}>
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

              <Pressable style={styles.addButton}>
                <Row gap={5} justify={'space-between'}>
                  <Feather name={'plus'} size={16} color="white" />
                  <Text style={styles.textAddButton}>Tambah</Text>
                </Row>
              </Pressable>
            </Row>
          </LinearGradient>

          <View style={styles.content}>
            <Row justify={'space-between'} gap={12} align={'flex-start'}>
              <View style={styles.iconWrapper}>
                <Feather name="cloud-rain" size={27} color="white" />
              </View>
              <Column gap={5} style={{ flex: 1, flexShrink: 1 }}>
                <Text style={{ fontSize: 14, color: '#101828' }}>
                  Vegrin Weather & Soil Station 1
                </Text>
                <Text style={{ fontSize: 12, color: '#009966' }}>
                  ID: VWS-2024-A001
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#6A7282',
                    flexWrap: 'wrap',
                    flexShrink: 1,
                  }}
                >
                  All-in-one weather monitoring dengan sensor cuaca dan tanah
                  terintegrasi
                </Text>
                <Row gap={10}>
                  <Row gap={5} style={styles.badge}>
                    <Dot />
                    <Text style={{ color: '#008236', fontSize: 12 }}>
                      Online
                    </Text>
                  </Row>
                  <Row gap={10} style={styles.badge}>
                    <Feather name="wifi" size={12} color="#008236" />
                    <Text style={{ color: '#008236', fontSize: 12 }}>
                      8 Sensor
                    </Text>
                  </Row>
                </Row>
              </Column>
              <Column justify={'center'} align={'center'}>
                <Feather name={'watch'} size={20} color="#00C950" />
                <Text style={{ color: '#99A1AF', fontSize: 12 }}>1m lalu</Text>
              </Column>
            </Row>

            <IotDataList />

            <Row
              justify={'space-between'}
              style={{
                paddingVertical: 16,
                borderTopWidth: 1.34,
                borderColor: '#A4F4CF',
              }}
            >
              <Row gap={10}>
                <Text>📍</Text>
                <Text style={{ color: '#6A7282', fontSize: 12 }}>
                  Lahan A - Sektor 1
                </Text>
              </Row>
              <Row gap={10}>
                <Text>⏱️</Text>
                <Text style={{ color: '#6A7282', fontSize: 12 }}>
                  Update: 1 menit
                </Text>
              </Row>
            </Row>

            <Row
              style={{
                backgroundColor: '#D0FAE5',
                borderColor: '#5EE9B5',
                borderWidth: 1.34,
                borderRadius: 10,
                padding: 13,
              }}
              justify={'space-between'}
            >
              <Column
                align={'center'}
                style={{
                  paddingHorizontal: 16,
                  borderRightWidth: 1.34,
                  borderRightColor: '#5EE9B5',
                }}
              >
                <Text style={{ color: '#6A7282', fontSize: 12 }}>
                  Sensor Aktif
                </Text>
                <Text style={{ color: '#009966', fontSize: 18 }}>8/8</Text>
              </Column>
              <Column
                align={'center'}
                style={{
                  paddingHorizontal: 16,
                  borderLeftWidth: 1.34,
                  borderLeftColor: '#5EE9B5',
                }}
              >
                <Text style={{ color: '#6A7282', fontSize: 12 }}>Uptime</Text>
                <Text style={{ color: '#009966', fontSize: 18 }}>45 hari</Text>
              </Column>
            </Row>
          </View>
          <View style={[styles.content, { marginTop: 0 }]}>
            <Text style={{ textAlign: 'center', color: '#6A7282' }}>
              💡 Tips: Klik tombol Tambah untuk menghubungkan perangkat IoT
              lainnya
            </Text>
          </View>
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
    borderColor: '#00D492',
    borderWidth: 1,
    borderRadius: 14,
    margin: 16,
    gap: 20,
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
  iconWrapper: {
    backgroundColor: '#00BBA7',
    borderRadius: 14,
    padding: 16,
  },
  badge: {
    backgroundColor: '#DCFCE7',
    borderRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
})
