import Flex from '@/components/Flex'
import { Text, View } from 'react-native'
import registerScreenStyle from '@/libs/submodules/auth/screens/register/RegisterScreen.style'
import BaseTextInput from '@/components/input/BaseTextInput'

export interface RegisterFormValue {
  front_name: string
  back_name: string
  email: string
  password: string
}

interface Props {
  value: RegisterFormValue
  onChange: <K extends keyof RegisterFormValue>(
    key: K,
    val: RegisterFormValue[K]
  ) => void
}

const RegisterScreenForm = ({ value, onChange }: Props) => {
  return (
    <>
      {/* Nama */}
      <Flex justify="space-between" gap={19}>
        <View style={registerScreenStyle.inputWrapper}>
          <Text style={registerScreenStyle.regularText}>Nama Depan</Text>
          <BaseTextInput
            inputStyle={{ color: '#000' }}
            value={value.front_name}
            onChangeText={v => onChange('front_name', v)}
            style={registerScreenStyle.input}
            placeholder="Nama Depan"
          />
        </View>

        <View style={registerScreenStyle.inputWrapper}>
          <Text style={registerScreenStyle.regularText}>Nama Belakang</Text>
          <BaseTextInput
            inputStyle={{ color: '#000' }}
            value={value.back_name}
            onChangeText={v => onChange('back_name', v)}
            style={registerScreenStyle.input}
            placeholder="Nama Belakang"
          />
        </View>
      </Flex>

      <Flex direction="column" align="flex-start">
        <Text style={registerScreenStyle.regularText}>Email</Text>
        <BaseTextInput
          inputStyle={{ color: '#000' }}
          value={value.email}
          onChangeText={v => onChange('email', v)}
          textContentType="emailAddress"
          style={registerScreenStyle.input}
          placeholder="Email"
        />
      </Flex>

      <Flex direction="column" align="flex-start">
        <Text style={registerScreenStyle.regularText}>Password</Text>
        <BaseTextInput
          inputStyle={{ color: '#000' }}
          value={value.password}
          onChangeText={v => onChange('password', v)}
          secureTextEntry
          textContentType="password"
          style={registerScreenStyle.input}
          placeholder="Password"
        />
      </Flex>
    </>
  )
}

export default RegisterScreenForm
