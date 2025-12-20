import React from 'react'
import { ColorValue, StyleProp, Text, TextProps, TextStyle } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'

interface GradientTextProps extends TextProps {
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]]
  style?: StyleProp<TextStyle>
}

export default function GradientText({
  colors,
  style,
  children,
  ...props
}: GradientTextProps) {
  return (
    <MaskedView
      maskElement={
        <Text {...props} style={style}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={[...colors]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text {...props} style={[style, { opacity: 0 }]}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  )
}
