import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { Href, Link } from 'expo-router'
import Flex from '@/components/Flex'

interface RedirectPropsText {
  label: string
  linkText: string
  href: Href
  labelStyle?: StyleProp<TextStyle>
  linkStyle?: StyleProp<TextStyle>
  gap?: number
}

const RedirectText = ({
  label,
  linkText,
  href,
  labelStyle,
  linkStyle,
  gap = 5,
}: RedirectPropsText) => {
  return (
    <Flex justify="center" gap={gap}>
      <Text style={labelStyle}>{label}</Text>
      <Link href={href} style={linkStyle}>
        {linkText}
      </Link>
    </Flex>
  )
}

export default RedirectText
