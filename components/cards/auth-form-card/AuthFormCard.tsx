// components/auth/AuthFormCard.tsx
import React from 'react'
import { Text, View } from 'react-native'
import Flex from '@/components/Flex'
import BackButton from '@/components/buttons/BackButton'
import ButtonCustome from '@/components/buttons/button-custome/ButtonCustome'
import { AuthFormCardProps } from './AuthFormCard.type'
import authFormCardStyles from './AuthFormCard.style'

export default function AuthFormCard({
  title,
  subtitle,
  formInput,
  buttonText,
  onSubmit,
  showBackButton = true,
  footer,
  loading = false,
  buttonHref,
  error,
}: AuthFormCardProps) {
  const hasError = Boolean(error)

  return (
    <View style={authFormCardStyles.form}>
      {showBackButton && <BackButton style={authFormCardStyles.backButton} />}

      {/* Title */}
      <View style={authFormCardStyles.titleWrapper}>
        {typeof title === 'string' ? (
          <Text style={authFormCardStyles.title}>{title}</Text>
        ) : (
          title
        )}
      </View>

      {/* Subtitle (only if NO error) */}
      {!hasError && subtitle && (
        <View style={authFormCardStyles.subtitleWrapper}>
          {typeof subtitle === 'string' ? (
            <Text style={authFormCardStyles.subtitle}>{subtitle}</Text>
          ) : (
            subtitle
          )}
        </View>
      )}

      {/* Error Section */}
      {hasError && (
        <View style={authFormCardStyles.errorWrapper}>
          {typeof error === 'string' ? (
            <Text style={authFormCardStyles.errorText}>{error}</Text>
          ) : (
            error
          )}

          <Text style={authFormCardStyles.errorHint}>Silakan coba lagi</Text>
        </View>
      )}

      {/* Form Input */}
      <Flex
        direction="column"
        gap={19}
        style={authFormCardStyles.formInput}
        align="stretch"
      >
        {formInput}
      </Flex>

      {/* Submit Button */}
      <ButtonCustome
        title={buttonText}
        variant="submitButton"
        onPress={onSubmit}
        loading={loading}
        href={buttonHref}
      />

      {/* Footer */}
      {footer && <View style={authFormCardStyles.footer}>{footer}</View>}
    </View>
  )
}
