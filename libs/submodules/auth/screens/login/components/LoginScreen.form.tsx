import { View } from 'react-native'
import loginScreenStyles from '@/libs/submodules/auth/screens/login/LoginScreen.style'
import BaseTextInput from '@/components/input/BaseTextInput'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { customizeColors } from '@/libs/core/config/theme/color'
import { Link } from 'expo-router'
import ButtonCustome from '@/components/buttons/button-custome/ButtonCustome'
import { useLoginForm } from '@/libs/submodules/auth/screens/login/useLoginForm'

const LoginScreenForm = () => {
  const { email, password, loading, setEmail, setPassword, handleLogin } =
    useLoginForm()

  return (
    <>
      <View style={loginScreenStyles.form}>
        <BaseTextInput
          inputStyle={{ color: '#000' }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          leftIcon={
            <Entypo name="mail" size={18} color={customizeColors.blue1} />
          }
        />

        <BaseTextInput
          inputStyle={{ color: '#000' }}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          leftIcon={
            <AntDesign name="lock" size={18} color={customizeColors.blue1} />
          }
        />
      </View>

      <Link
        style={[
          loginScreenStyles.forgotPasswordLinkText,
          loginScreenStyles.text,
        ]}
        href={'/(auth)/forgot-password'}
      >
        Lupa Password?
      </Link>

      <ButtonCustome
        title="Masuk"
        variant="primary"
        onPress={handleLogin}
        loading={loading}
      />
    </>
  )
}

export default LoginScreenForm
