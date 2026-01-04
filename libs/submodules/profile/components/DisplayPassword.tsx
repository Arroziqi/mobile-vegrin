import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { customizeColors } from '@/libs/core/config/theme/color'

interface DisplayPasswordProps {
  label: string
  onChangePassword?: () => void
  disabled?: boolean
}

const DisplayPassword = ({
  label,
  onChangePassword,
  disabled = false,
}: DisplayPasswordProps) => {
  const isActive = true // selalu active karena ada value

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, isActive && styles.labelActive]}>
        {label}
      </Text>

      <View style={[styles.container, disabled && styles.disabled]}>
        <Text style={styles.passwordText}>********</Text>

        <Pressable onPress={onChangePassword} disabled={disabled} hitSlop={8}>
          <Text style={styles.changeText}>Ubah Password?</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default DisplayPassword

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },

  container: {
    height: 54,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: customizeColors.primary.color1,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  disabled: {
    backgroundColor: '#F5F5F5',
    borderColor: customizeColors.border,
  },

  passwordText: {
    fontSize: 16,
    color: '#000',
    letterSpacing: 2,
  },

  changeText: {
    fontSize: 14,
    color: '#000',
    textDecorationLine: 'underline',
  },

  label: {
    position: 'absolute',
    left: 14,
    top: 18,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    fontSize: 14,
    color: customizeColors.border,
    zIndex: 2,
  },

  labelActive: {
    top: -8,
    fontSize: 12,
    color: customizeColors.primary.color1,
  },
})
