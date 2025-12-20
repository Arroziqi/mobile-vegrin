import React from 'react'
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { buttonStyles, ButtonVariantStyles } from './Button.style'
import { ButtonCustomeProps } from './ButtonCustome.type'
import getTextColorFromVariant from './ButtonCustome.utils'
import { customizeColors } from '@/libs/core/config/theme/color'
import { useRouter } from 'expo-router'

const GRADIENT_VARIANTS = ['scan'] as const

const ButtonCustome = ({
  title,
  onPress,
  leftIcon,
  rightIcon,
  variant = 'primary',
  style,
  textStyle,
  href,
  disabled,
  loading = false,
}: ButtonCustomeProps) => {
  const isGradient = GRADIENT_VARIANTS.includes(variant as any)
  const router = useRouter()

  const isDisabled = disabled || loading

  const handlePress = () => {
    if (isDisabled) return

    if (href) {
      router.push(href)
      return
    }

    onPress?.()
  }

  return (
    <Pressable
      onPress={handlePress}
      disabled={isDisabled}
      style={[
        ButtonVariantStyles.buttonBase,
        !isGradient && ButtonVariantStyles[variant],
        isDisabled && buttonStyles.disabled,
        style,
      ]}
    >
      {/* ===== GRADIENT LAYER ===== */}
      {isGradient && (
        <LinearGradient
          colors={customizeColors.gradient.scanButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[StyleSheet.absoluteFillObject, { borderRadius: 11 }]}
        />
      )}

      {/* ===== CONTENT ===== */}
      <View style={buttonStyles.content}>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={getTextColorFromVariant(variant).color}
          />
        ) : (
          <>
            {leftIcon && <View style={buttonStyles.iconLeft}>{leftIcon}</View>}

            <Text
              style={[
                buttonStyles.textBase,
                getTextColorFromVariant(variant),
                textStyle,
              ]}
              numberOfLines={1}
            >
              {title}
            </Text>

            {rightIcon && (
              <View style={buttonStyles.iconRight}>{rightIcon}</View>
            )}
          </>
        )}
      </View>
    </Pressable>
  )
}

export default ButtonCustome
