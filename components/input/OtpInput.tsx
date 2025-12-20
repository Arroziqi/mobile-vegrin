import React, { useRef, useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import Flex from '@/components/Flex'
import BaseTextInput from '@/components/input/BaseTextInput'

interface OtpInputProps {
  length?: number
  onChange?: (code: string) => void
}

export default function OtpInput({ length = 6, onChange }: OtpInputProps) {
  const [values, setValues] = useState<string[]>(Array(length).fill(''))

  const inputs = useRef<(TextInput | null)[]>([])

  const focusInput = (index: number) => {
    inputs.current[index]?.focus()
  }

  const handleChange = (text: string, index: number) => {
    // Handle paste (ex: 123456)
    if (text.length > 1) {
      const pasted = text.slice(0, length).split('')
      const newValues = [...values]

      pasted.forEach((char, i) => {
        newValues[i] = char
      })

      setValues(newValues)
      onChange?.(newValues.join(''))

      focusInput(Math.min(pasted.length, length - 1))
      return
    }

    const newValues = [...values]
    newValues[index] = text
    setValues(newValues)
    onChange?.(newValues.join(''))

    if (text && index < length - 1) {
      focusInput(index + 1)
    }
  }

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !values[index] && index > 0) {
      focusInput(index - 1)
    }
  }

  return (
    <Flex justify="space-between" gap={4}>
      {values.map((value, index) => (
        <BaseTextInput
          key={index}
          disableFlex
          ref={ref => {
            inputs.current[index] = ref
          }}
          value={value}
          keyboardType="number-pad"
          maxLength={1}
          textAlign="center"
          style={styles.input}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={({ nativeEvent }) =>
            handleKeyPress(nativeEvent.key, index)
          }
        />
      ))}
    </Flex>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 45,
    height: 52,
    backgroundColor: '#D9D9D9',
    borderRadius: 11.73,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
})
