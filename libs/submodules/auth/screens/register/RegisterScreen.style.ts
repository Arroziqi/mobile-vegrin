import { StyleSheet } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'

const registerScreenStyle = StyleSheet.create({
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

export default registerScreenStyle
