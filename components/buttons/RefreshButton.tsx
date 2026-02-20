import React, { JSX } from 'react'
import Flex from '@/components/Flex'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity } from 'react-native'

interface Props {
  onPress?: () => void
  text?: string
}

function RefreshButton({ onPress, text = 'Refresh' }: Props): JSX.Element {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#032746',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
      }}
      activeOpacity={0.8}
    >
      <Flex direction="row" align="center" gap={8}>
        <MaterialIcons name="refresh" size={18} color="white" />
        <Text style={{ color: 'white', fontWeight: '600' }}>{text}</Text>
      </Flex>
    </TouchableOpacity>
  )
}

export default RefreshButton
