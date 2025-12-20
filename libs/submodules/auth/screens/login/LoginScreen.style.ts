import { StyleSheet } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'

const loginScreenStyles = StyleSheet.create({
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

export default loginScreenStyles
