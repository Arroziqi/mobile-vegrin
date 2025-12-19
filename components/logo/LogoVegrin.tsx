// components/LogoVegrin.tsx
import React from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'

interface LogoVegrinProps {
  /**
   * Scale multiplier.
   * default: 1
   * contoh: 0.5 (setengah), 0.75, 1.2
   */
  scale?: number
  style?: StyleProp<ImageStyle>
}

const BASE_WIDTH = 266.59
const BASE_HEIGHT = 93.87

export default function LogoVegrin({ scale = 1, style }: LogoVegrinProps) {
  return (
    <Image
      source={require('@/assets/images/logo-vegrin.png')}
      resizeMode="contain"
      style={[
        {
          width: BASE_WIDTH * scale,
          height: BASE_HEIGHT * scale,
        },
        style,
      ]}
    />
  )
}

/*
USAGE:

<LogoVegrin />                // ukuran asli
<LogoVegrin scale={0.8} />    // lebih kecil
<LogoVegrin scale={1.2} />    // lebih besar

<AuthLayout example>
<View style={{ alignItems: 'center', marginBottom: 32 }}>
  <LogoVegrin scale={0.7} />
</View>
*/
