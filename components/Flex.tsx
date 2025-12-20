// components/Flex.tsx
import React from 'react'
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native'

type FlexDirection = 'row' | 'column'
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

interface FlexProps {
  children: React.ReactNode
  direction?: FlexDirection
  align?: AlignItems
  justify?: JustifyContent
  wrap?: ViewStyle['flexWrap']
  gap?: number
  flex?: number
  style?: StyleProp<ViewStyle>
}

export default function Flex({
  children,
  direction = 'row',
  align = 'center',
  justify = 'flex-start',
  wrap = 'nowrap',
  gap = 0,
  flex,
  style,
}: FlexProps) {
  return (
    <View
      style={[
        styles.base,
        {
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap,
          gap,
          ...(flex !== undefined && { flex }),
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    display: 'flex',
  },
})
