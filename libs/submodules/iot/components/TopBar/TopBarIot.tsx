import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Flex from '@/components/Flex'
import BackButton from '@/components/buttons/BackButton'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'
import { ShadowStyles } from '@/libs/common/styles/shadow.style'
import Brightnesss from '@/libs/submodules/iot/components/Brightnesss'
import Column from '@/components/Column'

interface TopBarProps {
  isConnected?: boolean
}

function TopBarIot({ isConnected = false }: TopBarProps) {
  return (
    <LinearGradient
      style={[{ width: '100%' }, ShadowStyles.shadowBottom]}
      colors={isConnected ? ['#05DF72', '#00BC7D'] : ['#FF6467', '#FF2056']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Flex
        gap={8}
        style={[styles.container]}
        direction={'column'}
        align={'flex-start'}
      >
        <Flex justify={'space-between'} style={{ width: '100%' }}>
          <BackButton color={'#fff'} />

          <Flex gap={12}>
            {isConnected ? (
              <Brightnesss />
            ) : (
              <View style={[styles.iconWrapper]}>
                <Feather name="wifi-off" size={20} color="white" />
              </View>
            )}
            <Column>
              <Text style={styles.title}>Weather Control IoT</Text>
              {isConnected && (
                <Text style={styles.subtitle}>Smart Farming System</Text>
              )}
            </Column>
          </Flex>

          <Flex style={[styles.iconWrapper]} gap={6}>
            <View
              style={[
                styles.dot,
                { backgroundColor: isConnected ? '#7BF1A8' : '#FFA2A2' },
              ]}
            />
            <Text style={styles.text}>{isConnected ? 'Live' : 'Offline'}</Text>
          </Flex>
        </Flex>
        {isConnected && (
          <View>
            <Text style={styles.text}>Updated:</Text>
            <Text style={styles.text}>15:01</Text>
          </View>
        )}
        {!isConnected && (
          <Text style={[styles.text, { alignSelf: 'center' }]}>
            Server tidak terhubung
          </Text>
        )}
      </Flex>
    </LinearGradient>
  )
}

export default TopBarIot

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  },
  text: {
    fontSize: 12,
    color: 'white',
  },
  iconWrapper: {
    padding: 6,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1.34,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
  },
})
