import LogoVegrin from '@/components/logo/LogoVegrin'
import { Text, View } from 'react-native'
import loginScreenStyles from '@/libs/submodules/auth/screens/login/LoginScreen.style'

const LoginScreenHeader = () => {
  return (
    <View style={loginScreenStyles.branding}>
      <LogoVegrin />
      <Text style={[loginScreenStyles.text, loginScreenStyles.title]}>
        Solusi Cerdas untuk Pertanian Modern
      </Text>
    </View>
  )
}

export default LoginScreenHeader
