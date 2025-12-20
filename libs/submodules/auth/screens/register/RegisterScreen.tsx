import Container from '@/components/container/Container'
import { View } from 'react-native'
import LogoVegrin from '@/components/logo/LogoVegrin'
import AuthFormCard from '@/libs/submodules/auth/components/authFormCard/AuthFormCard'
import GradientText from '@/components/text/GradientText'
import { customizeColors } from '@/libs/core/config/theme/color'
import registerScreenStyle from '@/libs/submodules/auth/screens/register/RegisterScreen.style'
import RegisterScreenForm from '@/libs/submodules/auth/screens/register/components/RegisterScreen.form'
import RedirectText from '@/components/text/RedirectText'
import { useStepper } from '@/hooks/useStepper'
import VerificationCodeStep from '@/libs/submodules/auth/components/verificationCode/VerificationCodeStep'
import { useState } from 'react'

const RegisterScreen = () => {
  const { step, next, prev } = useStepper(2)
  const [email, setEmail] = useState<string>('email@test')

  const subtitle = (
    <RedirectText
      label="Sudah Punya Akun?"
      linkText="Login"
      href="/(auth)/login"
      labelStyle={registerScreenStyle.regularText}
      linkStyle={registerScreenStyle.loginTextLink}
    />
  )

  const title = (
    <GradientText
      colors={customizeColors.gradient.text}
      style={registerScreenStyle.title}
    >
      Daftar Akun
    </GradientText>
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
            formInput={RegisterScreenForm}
            buttonText="Daftar"
            onSubmit={next}
          />
        )}

        {step === 1 && (
          <VerificationCodeStep
            email={email}
            onVerified={onVerified}
            submitLabel={'Daftar'}
            onBack={prev}
          />
        )}
      </View>
    </Container>
  )
}

export default RegisterScreen
