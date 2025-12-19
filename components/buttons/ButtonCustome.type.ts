import { ReactNode } from 'react'
import { TextStyle, ViewStyle } from 'react-native'
import { Href } from 'expo-router'

export type ButtonCustomeVariant =
  | 'primary'
  | 'primaryOutline'
  | 'submitButton'
  | 'submitButtonOutline'
  | 'danger'
  | 'scan'

export interface ButtonCustomeProps {
  title: string
  onPress?: () => void

  // icon
  leftIcon?: ReactNode
  rightIcon?: ReactNode

  // style
  variant?: ButtonCustomeVariant
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]

  // link / navigation
  href?: Href

  disabled?: boolean
}
