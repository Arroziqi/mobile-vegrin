import React, { ReactNode } from 'react'
import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native'
import Column from '@/components/Column'
import Row from '@/components/Row'
import Flex from '@/components/Flex'
import { useGridLayout } from '@/hooks/useGridLayout'

interface IotInfoCardSectionProps {
  sectionText: string
  action?: ReactNode
  children?: React.ReactNode
  onLayout?: (event: LayoutChangeEvent) => void
}

function IotInfoCardSection({
  sectionText,
  action,
  children,
  onLayout,
}: IotInfoCardSectionProps) {
  const { currentGap } = useGridLayout()

  return (
    <Column gap={8}>
      <Row justify={'space-between'}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{sectionText}</Text>
        </View>
        {action}
      </Row>
      <Flex
        wrap="wrap"
        direction="row"
        style={{ gap: currentGap }}
        onLayout={onLayout}
      >
        {children}
      </Flex>
    </Column>
  )
}

export default IotInfoCardSection

const styles = StyleSheet.create({
  textContainer: {
    borderLeftWidth: 4,
    borderLeftColor: '#00BBA7',
    paddingLeft: 8,
  },
  text: {
    color: '#009966',
    fontSize: 12,
  },
})
