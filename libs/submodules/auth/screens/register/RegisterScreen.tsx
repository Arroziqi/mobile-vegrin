import Container from '@/components/container/Container'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import LogoVegrin from '@/components/logo/LogoVegrin'
import AuthFormCard from '@/libs/submodules/auth/components/authFormCard/AuthFormCard'
import GradientText from '@/components/text/GradientText'
import { customizeColors } from '@/libs/core/config/theme/color'
import registerScreenStyle from './RegisterScreen.style'
import RegisterScreenForm from './components/RegisterScreen.form'
import RedirectText from '@/components/text/RedirectText'
import { useStepper } from '@/hooks/useStepper'
import VerificationCodeStep from '@/libs/submodules/auth/components/verificationCode/VerificationCodeStep'
import { useRegisterForm } from '@/libs/submodules/auth/hooks/useRegisterForm'

const RegisterScreen = () => {
  const { step, next, prev } = useStepper(2)

  const { form, onChange, error, loading, submitRegister, isValid } =
    useRegisterForm()

  const title = (
    <GradientText
      colors={customizeColors.gradient.text}
      style={registerScreenStyle.title}
    >
      Daftar Akun
    </GradientText>
  )

  const subtitle = (
    <RedirectText
      label="Sudah Punya Akun?"
      linkText="Login"
      href="/(auth)/login"
      labelStyle={registerScreenStyle.regularText}
      linkStyle={registerScreenStyle.loginTextLink}
    />
  )

  return (
    <Container
      imageBackgroundProps={{
        source: require('@/assets/images/bg-register.png'),
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={registerScreenStyle.container}
      >
        <View style={registerScreenStyle.branding}>
          <LogoVegrin />
        </View>

        {step === 0 && (
          <AuthFormCard
            title={title}
            subtitle={subtitle}
            formInput={<RegisterScreenForm value={form} onChange={onChange} />}
            buttonText="Daftar"
            onSubmit={submitRegister}
            loading={loading}
            error={error}
            disabledButton={!isValid}
          />
        )}

        {step === 1 && (
          <VerificationCodeStep
            email={form.email}
            submitLabel="Daftar"
            onBack={prev}
            onVerified={() => alert('verified')}
          />
        )}
      </KeyboardAvoidingView>
    </Container>
  )
}

export default RegisterScreen
