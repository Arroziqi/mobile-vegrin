import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

type HrProps = {
  color?: string
  thickness?: number
  marginVertical?: number
  width?: ViewStyle['width']
}

const Hr = ({
  color = '#E5E7EB',
  thickness = 1,
  marginVertical = 16,
  width = '100%',
}: HrProps) => {
  return (
    <View
      style={[
        styles.hr,
        {
          backgroundColor: color,
          height: thickness,
          marginVertical,
          width,
        },
      ]}
    />
  )
}

export default Hr

const styles = StyleSheet.create({
  hr: {
    alignSelf: 'stretch',
  },
})
