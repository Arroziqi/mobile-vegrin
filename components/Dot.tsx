import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  width?: number
  height?: number
  color?: string
}

function Dot({ style, width = 6, height = 6, color = '#00C950' }: Props) {
  return (
    <View
      style={[
        styles.container,
        style,
        { width: width, height: height, backgroundColor: color },
      ]}
    />
  )
}

export default Dot

const styles = StyleSheet.create({
  container: {
    borderRadius: '100%',
  },
})
