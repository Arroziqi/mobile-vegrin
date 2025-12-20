// =============================
// app/(auth)/login.tsx
// =============================
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoVegrin from '@/components/logo/LogoVegrin'
import BaseTextInput from '@/components/input/BaseTextInput'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { customizeColors } from '@/libs/core/config/theme/color'
import { Link } from 'expo-router'
import ButtonCustome from '@/components/buttons/button-custome/ButtonCustome'
import Flex from '@/components/Flex'

export default function LoginPage() {
  return (
    <ImageBackground
      source={require('@/assets/images/bg-splash.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay biar text kebaca */}
      <View style={styles.overlay} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Branding / Logo */}
          <View style={styles.branding}>
            <LogoVegrin />
            <Text style={[styles.text, styles.title]}>
              Solusi Cerdas untuk Pertanian Modern
            </Text>
          </View>

          {/* Login Form */}
          <View style={styles.form}>
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
                <AntDesign
                  name="lock"
                  size={18}
                  color={customizeColors.blue1}
                />
              }
            />
          </View>

          {/* Forgot password */}
          <Link
            style={[styles.forgotPasswordLinkText, styles.text]}
            href={'/(auth)/forgot-password'}
          >
            Lupa Password?
          </Link>

          <ButtonCustome title={'Masuk'} variant={'primary'} />

          <Text style={[styles.text, styles.subtitle]}>atau</Text>

          <Flex justify={'center'} gap={10}>
            <Text style={[styles.text, styles.subtitle]}>Login melalui</Text>
            <Pressable>
              <Image
                source={require('@/assets/images/google-logo.png')}
                resizeMode={'cover'}
                style={[styles.googleLogo]}
              />
            </Pressable>
          </Flex>

          <Flex justify={'center'} gap={5}>
            <Text style={[styles.text, styles.regularText]}>
              Tidak Punya Akun?
            </Text>
            <Link
              style={[styles.registerAccountLink]}
              href={'/(auth)/register'}
            >
              Daftar Akun
            </Link>
          </Flex>
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
    gap: 21,
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
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 21,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    paddingVertical: 1,
  },
  registerAccountLink: {
    color: customizeColors.green2,
    fontWeight: 500,
    fontSize: 16,
  },
  forgotPasswordLinkText: {
    textDecorationLine: 'underline',
  },
  regularText: {
    fontSize: 16,
  },
  googleLogo: {
    width: 24,
    height: 24,
  },
})
