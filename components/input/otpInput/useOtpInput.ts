import { useRef, useState } from 'react'
import { TextInput } from 'react-native'
import { UseOtpInputParams } from '@/components/input/otpInput/OtpInput.type'

export function useOtpInput({ length, onChange }: UseOtpInputParams) {
  const [values, setValues] = useState<string[]>(Array(length).fill(''))

  const inputs = useRef<(TextInput | null)[]>([])

  const focusInput = (index: number) => {
    inputs.current[index]?.focus()
  }

  const handleChange = (text: string, index: number) => {
    // handle paste (ex: 123456)
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

  const registerInput = (index: number) => (ref: TextInput | null) => {
    inputs.current[index] = ref
  }

  return {
    values,
    handleChange,
    handleKeyPress,
    registerInput,
  }
}
