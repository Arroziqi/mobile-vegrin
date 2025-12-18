import React from 'react'
import { View } from 'react-native'
import ButtonCustome from '@/components/buttons/ButtonCustome'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '@/components/themed-text'

function Dev() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <ThemedText>Ini page dev</ThemedText>
        <ButtonCustome title="Submit" variant="submitButton" />

        <ButtonCustome title="Danger" variant="danger" />

        <ButtonCustome title="Outline" variant="submitButtonOutline" />

        <ButtonCustome title="Scan" variant="scan" />
        <ButtonCustome title="Primary" />
      </View>
    </SafeAreaView>
  )
}

export default Dev
