import React, { ReactNode } from 'react'
import { StyleSheet, Text, ViewStyle } from 'react-native'
import Flex from '@/components/Flex'
import IotCardWrapper from '@/libs/submodules/iot/components/Cards/IotCardWrapper'

interface IotInfoCardProps {
  color: string
  icon: ReactNode
  label: string
  value?: string | number
  unit?: string
  style?: ViewStyle
  disabled?: boolean
}

const IotInfoCard: React.FC<IotInfoCardProps> = ({
  color,
  icon,
  label,
  value,
  unit,
  style,
  disabled = false,
}) => {
  return (
    <IotCardWrapper
      color={color}
      style={[style, disabled && styles.disabledCard]}
    >
      <Flex gap={7}>
        {icon}
        <Text style={[styles.label, disabled && styles.disabledLabel]}>
          {label}
        </Text>
      </Flex>

      <Flex style={styles.valueContainer}>
        <Text style={[styles.textValue, disabled && styles.disabledValue]}>
          {value}
        </Text>
        {unit && (
          <Text style={[styles.unit, disabled && styles.disabledUnit]}>
            {unit}
          </Text>
        )}
      </Flex>
    </IotCardWrapper>
  )
}

export default IotInfoCard

const styles = StyleSheet.create({
  valueContainer: {
    marginTop: 5,
  },

  /* ===== Normal ===== */
  label: {
    color: '#4A5565',
  },
  textValue: {
    fontSize: 24,
    color: '#1E2939',
  },
  unit: {
    fontSize: 16,
    color: '#6A7282',
    marginBottom: -15,
  },

  /* ===== Disabled ===== */
  disabledCard: {
    borderColor: '#D1D5DC',
  },
  disabledLabel: {
    color: '#99A1AF',
  },
  disabledValue: {
    color: '#99A1AF',
  },
  disabledUnit: {
    color: '#D1D5DC',
  },
})
