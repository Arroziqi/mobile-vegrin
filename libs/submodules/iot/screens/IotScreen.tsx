import React from 'react'
import Container from '@/components/container/Container'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Flex from '@/components/Flex'
import TopBarIot from '@/libs/submodules/iot/components/TopBar/TopBarIot'
import IotCardWrapper from '@/libs/submodules/iot/components/Cards/IotCardWrapper'
import { FontAwesome6 } from '@expo/vector-icons'

function IotScreen() {
  return (
    <Container>
      <Flex
        flex={1}
        style={styles.container}
        align={'flex-start'}
        direction={'column'}
      >
        <TopBarIot />
        <ScrollView style={[styles.container]}>
          <Flex
            wrap={'wrap'}
            align={'center'}
            flex={1}
            style={{ width: '100%' }}
          >
            <IotCardWrapper color={'#B9F8CF'} style={styles.itemGrid}>
              <Flex gap={10}>
                <FontAwesome6
                  name="temperature-empty"
                  size={16}
                  color="#FF6900"
                />
                <Text style={styles.label}>Suhu</Text>
              </Flex>
              <View
                style={{
                  marginTop: 5,
                }}
              >
                <Text style={styles.textValue}>24</Text>
                <Text style={styles.unit}>°C</Text>
              </View>
            </IotCardWrapper>
          </Flex>
          <Text>Ini page IOT</Text>
        </ScrollView>
      </Flex>
    </Container>
  )
}

export default IotScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  grid: {},
  itemGrid: {
    width: '50%',
  },
  label: {
    color: '#4A5565',
  },
  textValue: {
    fontSize: 24,
    color: '#1E2939',
  },
  unit: {
    position: 'absolute',
    bottom: -3,
    right: -3,
    color: '#6A7282',
  },
})
