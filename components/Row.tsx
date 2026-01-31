// components/Row.tsx
import React from 'react'
import Flex, { FlexProps } from './Flex'

type RowProps = Omit<FlexProps, 'direction'>

export default function Row({
  children,
  align = 'center',
  justify = 'flex-start',
  wrap = 'nowrap',
  gap = 0,
  flex,
  style,
}: RowProps) {
  return (
    <Flex
      direction="row"
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
