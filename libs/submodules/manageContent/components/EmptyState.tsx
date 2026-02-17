import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import Flex from '@/components/Flex'
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

function EmptyState({ onPress }: Props) {
  return (
    <View style={{ paddingVertical: 30, alignItems: 'center', gap: 15 }}>
      <MaterialIcons name="inbox" size={48} color="#9CA3AF" />
      <Text style={{ color: '#6B7280', fontSize: 16 }}>Belum ada konten</Text>

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
          <Text style={{ color: 'white', fontWeight: '600' }}>Refresh</Text>
        </Flex>
      </TouchableOpacity>
    </View>
  )
}

export default EmptyState
