import React from 'react'
import { Href } from 'expo-router'

export interface AuthFormCardProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  formInput: React.ReactNode
  buttonText: string

  /** optional */
  onSubmit?: () => void
  onBack?: () => void
  showBackButton?: boolean
  disabledButton?: boolean
  footer?: React.ReactNode
  loading?: boolean
  buttonHref?: Href
  error?: string | React.ReactNode
}
