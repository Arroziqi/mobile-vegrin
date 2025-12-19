// components/BaseTextInput.tsx
import React from 'react'
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

interface BaseTextInputProps extends TextInputProps {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  containerStyle?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
}

export default function BaseTextInput({
  leftIcon,
  rightIcon,
  containerStyle,
  inputStyle,
  style,
  ...props
}: BaseTextInputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}

      <TextInput {...props} style={[styles.input, style, inputStyle]} />

      {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 0,
    fontSize: 16,
    fontWeight: '500',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
})

/*
USAGE EXAMPLES:

<BaseTextInput
  placeholder="Email"
  leftIcon={<MailIcon />}
/>

<BaseTextInput
  placeholder="Password"
  secureTextEntry
  rightIcon={<EyeIcon />}
/>

<BaseTextInput
  placeholder="Search"
  leftIcon={<SearchIcon />}
  rightIcon={<ClearIcon />}
/>
*/
