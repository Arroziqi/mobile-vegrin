import Container from '@/components/container/Container'
import { Text, View } from 'react-native'
import LogoVegrin from '@/components/logo/LogoVegrin'
import AuthFormCard from '@/libs/submodules/auth/components/authFormCard/AuthFormCard'
import GradientText from '@/components/text/GradientText'
import { customizeColors } from '@/libs/core/config/theme/color'
import registerScreenStyle from '@/libs/submodules/auth/screens/register/RegisterScreen.style'
import { useStepper } from '@/hooks/useStepper'
import VerificationCodeStep from '@/libs/submodules/auth/components/verificationCode/VerificationCodeStep'
import { useState } from 'react'
import BaseTextInput from '@/components/input/BaseTextInput'
import Flex from '@/components/Flex'
import ForgotPasswordForm from '@/libs/submodules/auth/screens/forgotPassword/components/ForgotPasswordForm'

const ForgotPasswordScreen = () => {
  const { step, next, prev } = useStepper(3)
  const [email, setEmail] = useState<string>('email@test')

  const subtitle = 'Masukkan alamat email yang terkait ke Akun'

  const title = (
    <GradientText
      colors={customizeColors.gradient.text}
      style={registerScreenStyle.title}
    >
      Pulihkan Akun
    </GradientText>
  )

  const formInput = (
    <Flex direction="column" align={'flex-start'}>
      <Text style={registerScreenStyle.regularText}>Email</Text>
      <BaseTextInput
        textContentType="emailAddress"
        style={registerScreenStyle.input}
        placeholder="Email"
      />
    </Flex>
  )

  const onVerified = async () => {
    alert('function is not implemented yet')
  }

  return (
    <Container
      imageBackgroundProps={{
        source: require('@/assets/images/bg-register.png'),
      }}
    >
      <View style={registerScreenStyle.container}>
        {/* Branding */}
        <View style={registerScreenStyle.branding}>
          <LogoVegrin />
        </View>

        {/* Auth Form Card */}
        {step === 0 && (
          <AuthFormCard
            title={title}
            subtitle={subtitle}
            formInput={formInput}
            buttonText="Masuk"
            onSubmit={next}
          />
        )}

        {step === 1 && (
          <VerificationCodeStep
            email={email}
            onVerified={next}
            submitLabel={'Daftar'}
            onBack={prev}
          />
        )}

        {step === 2 && <ForgotPasswordForm onBack={prev} />}
      </View>
    </Container>
  )
}

export default ForgotPasswordScreen
