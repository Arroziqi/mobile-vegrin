import { customizeColors } from '@/libs/core/config/theme/color'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ScanLagiButtonProps {
  onPress?: () => void
  disabled?: boolean
}

const ScanButton = ({ onPress, disabled = false }: ScanLagiButtonProps) => {
  return (
    <LinearGradient
      colors={customizeColors.gradient.scanButton}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.actionButton}
    >
      <TouchableOpacity
        style={styles.buttonContent}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.actionButtonText}>Scan Lagi</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default ScanButton

const styles = StyleSheet.create({
  actionButton: {
    paddingVertical: 16,
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: '100%',
    height: 60,
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
})
