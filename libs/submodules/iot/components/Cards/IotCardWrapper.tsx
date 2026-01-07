import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

interface IotCardWrapperProps {
  children?: React.ReactNode
  color: string
  style?: ViewStyle
}

function IotCardWrapper({ children, color, style }: IotCardWrapperProps) {
  return (
    <View style={[styles.container, { borderColor: color }, style]}>
      {children}
    </View>
  )
}

export default IotCardWrapper

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.26,
    borderRadius: 14,
    padding: 17,
  },
})
