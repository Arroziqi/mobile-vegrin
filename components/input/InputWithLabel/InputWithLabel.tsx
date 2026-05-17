import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

interface InputProps extends Pick<
  TextInputProps,
  'textContentType' | 'keyboardType' | 'secureTextEntry' | 'autoCapitalize'
> {
  label: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  rightElement?: React.ReactNode
  errorText?: string
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
  rightElement,
  errorText,
}: InputProps) => {
  const [focused, setFocused] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)

  const isDateTime = textContentType === 'dateTime'
  const isActive = focused || !!value

  const handleConfirmDate = (date: Date) => {
    setShowDatePicker(false)

    // contoh format: YYYY-MM-DD
    const formatted = date.toISOString().split('T')[0]
    onChange?.(formatted)
  }

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, isActive && styles.labelActive]}>
        {label}
      </Text>

      <Pressable
        disabled={!isDateTime || disabled}
        onPress={() => setShowDatePicker(true)}
      >
        <View
          style={[
            styles.container,
            focused && styles.focused,
            disabled && styles.disabled,
            !!errorText && styles.errorBorder,
          ]}
        >
          <TextInput
            value={value}
            placeholder={isActive ? placeholder : ''}
            editable={!isDateTime && !disabled}
            pointerEvents={isDateTime ? 'none' : 'auto'}
            style={styles.input}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize}
            onChangeText={text => onChange?.(text)}
          />

          {isDateTime && (
            <View style={styles.iconWrapper}>
              <MaterialIcons
                name="calendar-month"
                size={20}
                color={customizeColors.primary.color1}
              />
            </View>
          )}
          {rightElement && (
            <View style={styles.iconWrapper}>{rightElement}</View>
          )}
        </View>
      </Pressable>

      {isDateTime && (
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={() => setShowDatePicker(false)}
        />
      )}
      {!!errorText && <Text style={styles.errorText}>{errorText}</Text>}
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
  errorBorder: {
    borderColor: '#E53935',
  },
  errorText: {
    fontSize: 12,
    color: '#E53935',
    marginTop: 4,
    marginLeft: 4,
  },
})
