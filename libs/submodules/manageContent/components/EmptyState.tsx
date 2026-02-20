import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import RefreshButton from '@/components/buttons/RefreshButton'

interface Props {
  onPress?: () => void
  message?: string
  hideIcon?: boolean
}

function EmptyState({
  onPress,
  message = 'Belum ada konten',
  hideIcon = false,
}: Props) {
  return (
    <View style={{ paddingVertical: 30, alignItems: 'center', gap: 15 }}>
      {!hideIcon && <MaterialIcons name="inbox" size={48} color="#9CA3AF" />}
      <Text style={{ color: '#6B7280', fontSize: 16 }}>{message}</Text>

      <RefreshButton onPress={onPress} />
    </View>
  )
}

export default EmptyState
