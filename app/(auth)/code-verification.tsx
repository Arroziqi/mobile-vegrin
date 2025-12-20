// =============================
// app/(auth)/register.tsx
// =============================
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { customizeColors } from '@/libs/core/config/theme/color'
import LogoVegrin from '@/components/logo/LogoVegrin'
import GradientText from '@/components/text/GradientText'
import AuthFormCard from '@/components/cards/auth-form-card/AuthFormCard'
import { Link } from 'expo-router'
import OtpInput from '@/components/input/OtpInput'

export default function CodeVerificationPage() {
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
                Kode Verifikasi
              </GradientText>
            }
            subtitle={'Masukkan kode OTP Anda'}
            formInput={
              <>
                {/* Email info */}
                <Text style={styles.emailText}>
                  kode dikirim ke email@example.com
                </Text>

                {/* OTP Input */}
                <OtpInput
                  length={6}
                  onChange={code => {
                    if (code.length === 6) {
                      console.log('Submit OTP:', code)
                    }
                  }}
                />
              </>
            }
            buttonText="Daftar"
            onSubmit={() => {
              console.log('submit register')
            }}
            footer={
              <Link style={styles.resendCode} href={'/'}>
                Kirim ulang kode
              </Link>
            }
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
  resendCode: {
    color: customizeColors.blue2,
  },
  emailText: {
    color: customizeColors.blue2,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
  },
})
