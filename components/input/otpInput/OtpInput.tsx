import React from 'react'
import Flex from '@/components/Flex'
import BaseTextInput from '@/components/input/BaseTextInput'
import { OtpInputProps } from '@/components/input/otpInput/OtpInput.type'
import otpInputStyles from '@/components/input/otpInput/OtpInput.style'
import { useOtpInput } from './useOtpInput'

export default function OtpInput({ length = 6, onChange }: OtpInputProps) {
  const { values, handleChange, handleKeyPress, registerInput } = useOtpInput({
    length,
    onChange,
  })

  return (
    <Flex justify="space-between" gap={4}>
      {values.map((value, index) => (
        <BaseTextInput
          key={index}
          disableFlex
          ref={registerInput(index)}
          value={value}
          keyboardType="number-pad"
          maxLength={1}
          textAlign="center"
          style={otpInputStyles.input}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={({ nativeEvent }) =>
            handleKeyPress(nativeEvent.key, index)
          }
        />
      ))}
    </Flex>
  )
}
