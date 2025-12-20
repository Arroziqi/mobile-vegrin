import { View } from 'react-native'
import loginScreenStyles from '@/libs/submodules/auth/screens/login/LoginScreen.style'
import BaseTextInput from '@/components/input/BaseTextInput'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { customizeColors } from '@/libs/core/config/theme/color'
import { Link } from 'expo-router'
import ButtonCustome from '@/components/buttons/button-custome/ButtonCustome'

const LoginScreenForm = () => {
  return (
    <>
      <View style={loginScreenStyles.form}>
        <BaseTextInput
          placeholder="Email"
          leftIcon={
            <Entypo name="mail" size={18} color={customizeColors.blue1} />
          }
        />

        <BaseTextInput
          placeholder="Password"
          secureTextEntry
          leftIcon={
            <AntDesign name="lock" size={18} color={customizeColors.blue1} />
          }
        />
      </View>
      {/* Forgot password */}
      <Link
        style={[
          loginScreenStyles.forgotPasswordLinkText,
          loginScreenStyles.text,
        ]}
        href={'/(auth)/forgot-password'}
      >
        Lupa Password?
      </Link>
      <ButtonCustome title={'Masuk'} variant={'primary'} />
    </>
  )
}

export default LoginScreenForm
