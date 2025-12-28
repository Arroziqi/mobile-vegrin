import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'

interface InputProps extends Pick<
  TextInputProps,
  'textContentType' | 'keyboardType' | 'secureTextEntry' | 'autoCapitalize'
> {
  label: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
}

const InputWithLabel = ({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  textContentType,
  keyboardType,
  secureTextEntry,
  autoCapitalize,
}: InputProps) => {
  const [focused, setFocused] = useState(false)

  const isActive = focused || !!value

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, isActive && styles.labelActive]}>
        {label}
      </Text>

      <View
        style={[
          styles.container,
          focused && styles.focused,
          disabled && styles.disabled,
        ]}
      >
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={isActive ? placeholder : ''}
          editable={!disabled}
          style={styles.input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          textContentType={textContentType}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
        />

        {textContentType === 'dateTime' && (
          <View style={styles.iconWrapper}>
            <MaterialIcons
              name={'calendar-month'}
              size={20}
              color={customizeColors.primary.color1}
            />
          </View>
        )}
      </View>
    </View>
  )
}

export default InputWithLabel

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },

  container: {
    height: 54,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: customizeColors.primary.color1,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  focused: {
    borderWidth: 1.5,
  },

  disabled: {
    backgroundColor: '#F5F5F5',
    borderColor: customizeColors.border,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 0,
  },

  label: {
    position: 'absolute',
    left: 14,
    top: 18,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    fontSize: 14,
    color: customizeColors.border,
    zIndex: 2,
  },

  labelActive: {
    top: -8,
    fontSize: 12,
    color: customizeColors.primary.color1,
  },

  iconWrapper: {
    paddingLeft: 8,
  },
})
