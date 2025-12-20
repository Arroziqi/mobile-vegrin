import Flex from '@/components/Flex'
import { Text, View } from 'react-native'
import registerScreenStyle from '@/libs/submodules/auth/screens/register/RegisterScreen.style'
import BaseTextInput from '@/components/input/BaseTextInput'

const RegisterScreenForm = () => {
  return (
    <>
      {/* Nama */}
      <Flex justify="space-between" gap={19}>
        <View style={registerScreenStyle.inputWrapper}>
          <Text style={registerScreenStyle.regularText}>Nama Depan</Text>
          <BaseTextInput
            style={registerScreenStyle.input}
            placeholder="Nama Depan"
          />
        </View>

        <View style={registerScreenStyle.inputWrapper}>
          <Text style={registerScreenStyle.regularText}>Nama Belakang</Text>
          <BaseTextInput
            style={registerScreenStyle.input}
            placeholder="Nama Belakang"
          />
        </View>
      </Flex>

      <Flex direction="column" align={'flex-start'}>
        <Text style={registerScreenStyle.regularText}>Email</Text>
        <BaseTextInput
          textContentType="emailAddress"
          style={registerScreenStyle.input}
          placeholder="Email"
        />
      </Flex>

      <Flex direction="column" align={'flex-start'}>
        <Text style={registerScreenStyle.regularText}>Password</Text>
        <View style={registerScreenStyle.input}>
          <BaseTextInput
            secureTextEntry
            textContentType="password"
            placeholder="Password"
          />
        </View>
      </Flex>
    </>
  )
}

export default RegisterScreenForm()
