// components/Flex.tsx
import React from 'react'
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'

type FlexDirection = 'row' | 'column'
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export interface FlexProps {
  children: React.ReactNode
  direction?: FlexDirection
  align?: AlignItems
  justify?: JustifyContent
  wrap?: ViewStyle['flexWrap']
  gap?: number
  flex?: number
  style?: StyleProp<ViewStyle>
  onLayout?: (event: LayoutChangeEvent) => void
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
  onLayout,
}: FlexProps) {
  return (
    <View
      onLayout={onLayout}
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
