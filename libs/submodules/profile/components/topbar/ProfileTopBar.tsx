import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Flex from '@/components/Flex'
import BackButton from '@/components/buttons/BackButton'

interface ProfileTopBarProps {
  title: string
}

function ProfileTopBar({ title }: ProfileTopBarProps) {
  return (
    <View style={styles.container}>
      <Flex gap={10} align={'center'}>
        <BackButton />
        <Text style={styles.text}>{title}</Text>
      </Flex>
    </View>
  )
}

export default ProfileTopBar

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 40,
    padding: 21,
    backgroundColor: '#B2FFB7',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C2E35',
  },
})
