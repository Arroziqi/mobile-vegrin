// =============================
// app/(auth)/login.tsx
// =============================
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoVegrin from '@/components/logo/LogoVegrin'
import BaseTextInput from '@/components/input/BaseTextInput'
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
import { customizeColors } from '@/libs/core/config/theme/color'

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
            <Text style={styles.title}>
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
              rightIcon={
                <FontAwesome5
                  name="eye-slash"
                  size={18}
                  color={customizeColors.secondary['300']}
                />
              }
              leftIcon={
                <AntDesign
                  name="lock"
                  size={18}
                  color={customizeColors.blue1}
                />
              }
            />
          </View>
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
    backgroundColor: 'rgba(0,0,0,0.35)', // bisa di-adjust
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  branding: {
    marginBottom: 32,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    color: '#eee',
  },
  form: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    paddingVertical: 1,
  },
})
