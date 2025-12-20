// =============================
// app/(auth)/register.tsx
// =============================
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import { customizeColors } from '@/libs/core/config/theme/color'
import LogoVegrin from '@/components/logo/LogoVegrin'
import BaseTextInput from '@/components/input/BaseTextInput'
import Flex from '@/components/Flex'
import GradientText from '@/components/text/GradientText'
import AuthFormCard from '@/components/cards/auth-form-card/AuthFormCard'

export default function RegisterPage() {
  return (
    <ImageBackground
      source={require('@/assets/images/bg-register.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay */}
      <View style={styles.overlay} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Branding */}
          <View style={styles.branding}>
            <LogoVegrin />
          </View>

          {/* Auth Form Card */}
          <AuthFormCard
            title={
              <GradientText
                colors={customizeColors.gradient.text}
                style={styles.title}
              >
                Daftar Akun
              </GradientText>
            }
            subtitle={
              <Flex justify="center" gap={5}>
                <Text style={styles.regularText}>Sudah Punya Akun?</Text>
                <Link style={styles.loginTextLink} href="/(auth)/login">
                  Login
                </Link>
              </Flex>
            }
            formInput={
              <>
                {/* Nama */}
                <Flex justify="space-between" gap={19}>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.regularText}>Nama Depan</Text>
                    <BaseTextInput
                      style={styles.input}
                      placeholder="Nama Depan"
                    />
                  </View>

                  <View style={styles.inputWrapper}>
                    <Text style={styles.regularText}>Nama Belakang</Text>
                    <BaseTextInput
                      style={styles.input}
                      placeholder="Nama Belakang"
                    />
                  </View>
                </Flex>

                <Flex direction="column" align={'flex-start'}>
                  <Text style={styles.regularText}>Email</Text>
                  <BaseTextInput
                    textContentType="emailAddress"
                    style={styles.input}
                    placeholder="Email"
                  />
                </Flex>

                <Flex direction="column" align={'flex-start'}>
                  <Text style={styles.regularText}>Password</Text>
                  <View style={styles.input}>
                    <BaseTextInput
                      secureTextEntry
                      textContentType="password"
                      placeholder="Password"
                    />
                  </View>
                </Flex>
              </>
            }
            buttonText="Daftar"
            buttonHref={'/(auth)/code-verification'}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  branding: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  loginTextLink: {
    color: customizeColors.blue1,
    fontWeight: 400,
    fontSize: 14,
  },
  regularText: {
    fontSize: 14,
    color: customizeColors.grey,
  },
  input: {
    width: '100%',
    borderRadius: 11.73,
    borderColor: customizeColors.stroke,
    borderWidth: 1,
    paddingHorizontal: 17,
    marginTop: 4,
  },
  inputWrapper: {
    flex: 1,
  },
})
