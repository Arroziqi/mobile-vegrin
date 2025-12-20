import { Link } from 'expo-router'
import Flex from '@/components/Flex'
import { Image, Pressable, Text } from 'react-native'
import loginScreenStyles from '@/libs/submodules/auth/screens/login/LoginScreen.style'

const LoginScreenFooter = () => (
  <>
    <Text style={[loginScreenStyles.text, loginScreenStyles.subtitle]}>
      atau
    </Text>

    <Flex justify={'center'} gap={10}>
      <Text style={[loginScreenStyles.text, loginScreenStyles.subtitle]}>
        Login melalui
      </Text>
      <Pressable>
        <Image
          source={require('@/assets/images/google-logo.png')}
          resizeMode={'cover'}
          style={[loginScreenStyles.googleLogo]}
        />
      </Pressable>
    </Flex>

    <Flex justify={'center'} gap={5}>
      <Text style={[loginScreenStyles.text, loginScreenStyles.regularText]}>
        Tidak Punya Akun?
      </Text>
      <Link
        style={[loginScreenStyles.registerAccountLink]}
        href={'/(auth)/register'}
      >
        Daftar Akun
      </Link>
    </Flex>
  </>
)

export default LoginScreenFooter
