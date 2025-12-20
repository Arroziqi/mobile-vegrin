// components/BaseTextInput.tsx
import React, { forwardRef, useMemo, useState } from 'react'
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

interface BaseTextInputProps extends TextInputProps {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  containerStyle?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
  disableFlex?: boolean
}

const BaseTextInput = forwardRef<TextInput, BaseTextInputProps>(
  (
    {
      leftIcon,
      rightIcon,
      containerStyle,
      inputStyle,
      secureTextEntry,
      disableFlex,
      style,
      ...props
    },
    ref
  ) => {
    const isPassword = secureTextEntry === true
    const [isHidden, setIsHidden] = useState<boolean>(isPassword)

    const resolvedSecureTextEntry = isPassword ? isHidden : secureTextEntry

    const passwordIcon = useMemo(() => {
      if (!isPassword) return null

      return (
        <Pressable onPress={() => setIsHidden(prev => !prev)} hitSlop={8}>
          <FontAwesome5
            name={isHidden ? 'eye-slash' : 'eye'}
            size={16}
            color="#666"
          />
        </Pressable>
      )
    }, [isHidden, isPassword])

    return (
      <View style={[styles.container, containerStyle]}>
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}

        <TextInput
          ref={ref}
          {...props}
          secureTextEntry={resolvedSecureTextEntry}
          style={[
            styles.input,
            disableFlex && styles.noFlex,
            style,
            inputStyle,
          ]}
        />

        {(rightIcon || passwordIcon) && (
          <View style={styles.iconRight}>{rightIcon ?? passwordIcon}</View>
        )}
      </View>
    )
  }
)

BaseTextInput.displayName = 'BaseTextInput'

export default BaseTextInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 0,
    fontSize: 14,
    fontWeight: '500',
  },
  noFlex: {
    flex: undefined,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
})
