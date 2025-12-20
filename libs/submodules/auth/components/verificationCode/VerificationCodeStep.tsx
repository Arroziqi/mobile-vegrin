import AuthFormCard from '@/libs/submodules/auth/components/authFormCard/AuthFormCard'
import OtpInput from '@/components/input/otpInput/OtpInput'
import { StyleSheet, Text } from 'react-native'
import { AuthFormCardProps } from '@/libs/submodules/auth/components/authFormCard/AuthFormCard.type'
import { customizeColors } from '@/libs/core/config/theme/color'
import GradientText from '@/components/text/GradientText'
import { Link } from 'expo-router'
import React from 'react'

interface VerificationCodeStepProps extends Pick<
  AuthFormCardProps,
  'onBack' | 'error'
> {
  email: string
  onVerified: (code: string) => void
  submitLabel?: string
}

const VerificationCodeStep = ({
  email,
  onVerified,
  submitLabel,
  ...props
}: VerificationCodeStepProps) => {
  const [isValid, setValid] = React.useState(false)
  const [code, setCode] = React.useState<string>('')

  return (
    <AuthFormCard
      title={
        <GradientText
          colors={customizeColors.gradient.text}
          style={styles.title}
        >
          Kode Verifikasi
        </GradientText>
      }
      subtitle="Masukkan kode OTP Anda"
      formInput={
        <>
          {!props.error && (
            <Text style={styles.emailText}>Kode dikirim ke {email}</Text>
          )}
          <OtpInput
            length={6}
            onChange={code => {
              if (code.length === 6) {
                onVerified(code)
                setCode(code)
                setValid(true)
              } else setValid(false)
            }}
          />
        </>
      }
      buttonText={submitLabel ?? 'Lanjutkan'}
      footer={
        <Link style={styles.resendCode} href={'/'}>
          Kirim ulang kode
        </Link>
      }
      onSubmit={() => onVerified(code)}
      disabledButton={!isValid}
      {...props}
    />
  )
}

export default VerificationCodeStep

const styles = StyleSheet.create({
  emailText: {
    color: customizeColors.blue2,
    fontSize: 14,
    textAlign: 'center',
  },
  resendCode: {
    color: customizeColors.blue2,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
})
