import { StyleSheet } from 'react-native'

export const ShadowStyles = StyleSheet.create({
  shadowBottom: {
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    // Android
    elevation: 6,
    backgroundColor: '#fff',
  },
})
