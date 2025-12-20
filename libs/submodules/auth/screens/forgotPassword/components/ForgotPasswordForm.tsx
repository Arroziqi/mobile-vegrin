import AuthFormCard from '@/libs/submodules/auth/components/authFormCard/AuthFormCard'
import { Text, View } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'
import GradientText from '@/components/text/GradientText'
import React from 'react'
import registerScreenStyle from '@/libs/submodules/auth/screens/register/RegisterScreen.style'
import BaseTextInput from '@/components/input/BaseTextInput'
import Flex from '@/components/Flex'
import { useRouter } from 'expo-router'

interface ForgotPasswordFormProps {
  onBack?: () => void
}

const ForgotPasswordForm = ({ onBack }: ForgotPasswordFormProps) => {
  const router = useRouter()
  const onSubmit = () => {
    alert('function is not implemented yet')
    router.push('/login')
  }

  return (
    <AuthFormCard
      title={
        <GradientText
          colors={customizeColors.gradient.text}
          style={registerScreenStyle.title}
        >
          Kode Verifikasi
        </GradientText>
      }
      subtitle="Masukkan kode OTP Anda"
      formInput={
        <>
          <Flex direction="column" align={'flex-start'}>
            <Text style={registerScreenStyle.regularText}>
              Set Password Baru
            </Text>
            <View style={registerScreenStyle.input}>
              <BaseTextInput
                secureTextEntry
                textContentType="password"
                placeholder="Minimal 8 karakter"
              />
            </View>
          </Flex>
          <Flex direction="column" align={'flex-start'}>
            <Text style={registerScreenStyle.regularText}>
              Masukkan Password Kembali
            </Text>
            <View style={registerScreenStyle.input}>
              <BaseTextInput
                secureTextEntry
                textContentType="password"
                placeholder="Minimal 8 karakter"
              />
            </View>
          </Flex>
        </>
      }
      buttonText={'Ubah Password'}
      onSubmit={onSubmit}
      onBack={onBack}
    />
  )
}

export default ForgotPasswordForm
