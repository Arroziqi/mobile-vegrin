import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Flex from '@/components/Flex'
import { Feather, FontAwesome } from '@expo/vector-icons'

interface IBottomStatusProps {
  isConnected?: boolean
}

function BottomStatus({ isConnected = false }: IBottomStatusProps) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[
        isConnected ? '#05DF72' : '#FF6467',
        isConnected ? '#00BC7D' : '#FF2056',
      ]}
      style={{ marginTop: 24 }}
    >
      <Flex style={styles.container} direction={'column'} gap={15}>
        <Flex
          justify={'center'}
          style={[
            styles.iconWrapper,
            {
              backgroundColor: isConnected
                ? '#DED94A'
                : 'rgba(255, 255, 255, 0.2)',
            },
          ]}
        >
          {isConnected ? (
            <FontAwesome name="home" size={24} color="white" />
          ) : (
            <Feather name="wifi-off" size={24} color="white" />
          )}
        </Flex>
        {isConnected && (
          <Flex gap={10}>
            <Text style={styles.textConnected}>Updated: Now</Text>
            <Pressable>
              <Flex style={styles.buttonRefresh} gap={8}>
                <Feather name="refresh-cw" size={12} color="#FFFFFF" />
                <Text style={styles.textConnected}>Refresh</Text>
              </Flex>
            </Pressable>
          </Flex>
        )}
        {!isConnected && (
          <Text style={styles.text}>Status: Tidak Terhubung</Text>
        )}
      </Flex>
    </LinearGradient>
  )
}

export default BottomStatus

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  iconWrapper: {
    borderRadius: 24,
    width: 48,
    height: 48,
  },
  text: {
    color: '#FFE2E2',
    fontSize: 12,
  },
  buttonRefresh: {
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textConnected: {
    color: '#fff',
    fontSize: 12,
  },
})
