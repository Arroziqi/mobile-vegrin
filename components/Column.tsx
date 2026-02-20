// components/Column.tsx
import React from 'react'
import Flex, { FlexProps } from './Flex'

type ColumnProps = Omit<FlexProps, 'direction'>

export default function Column({
  children,
  align = 'stretch', // Default berbeda untuk column
  justify = 'flex-start',
  wrap = 'nowrap',
  gap = 0,
  flex,
  style,
}: ColumnProps) {
  return (
    <Flex
      direction="column"
      align={align}
      justify={justify}
      wrap={wrap}
      gap={gap}
      flex={flex}
      style={style}
    >
      {children}
    </Flex>
  )
}
