import Container from '@/components/container/Container'
import { View } from 'react-native'
import LoginScreenHeader from '@/libs/submodules/auth/screens/login/components/LoginScreen.header'
import loginScreenStyles from '@/libs/submodules/auth/screens/login/LoginScreen.style'
import LoginScreenForm from '@/libs/submodules/auth/screens/login/components/LoginScreen.form'
import LoginScreenFooter from '@/libs/submodules/auth/screens/login/components/LoginScreen.footer'

export default function LoginScreen() {
  return (
    <Container
      imageBackgroundProps={{
        source: require('@/assets/images/bg-splash.png'),
      }}
    >
      <View style={loginScreenStyles.container}>
        {/* Branding / Logo */}
        <LoginScreenHeader />

        {/* Login Form */}
        <LoginScreenForm />

        {/* Footer */}
        <LoginScreenFooter />
      </View>
    </Container>
  )
}
