import React, { ReactNode } from 'react'
import { StyleSheet, Text, ViewStyle } from 'react-native'
import Flex from '@/components/Flex'
import IotCardWrapper from '@/libs/submodules/iot/components/Cards/IotCardWrapper'

interface Insight {
  status?: 'negative' | 'positive' | 'warning'
  text: string
}

interface IotInfoCardProps {
  color: string
  icon: ReactNode
  label: string
  value?: string | number
  unit?: string
  style?: ViewStyle
  disabled?: boolean
  insight?: Insight
}

const IotInfoCard: React.FC<IotInfoCardProps> = ({
  color,
  icon,
  label,
  value,
  unit,
  style,
  disabled = false,
  insight,
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

      <Flex style={styles.valueContainer} align={'flex-end'} gap={2}>
        <Text style={[styles.textValue, disabled && styles.disabledValue]}>
          {value}
        </Text>
        {unit && (
          <Text style={[styles.unit, disabled && styles.disabledUnit]}>
            {unit}
          </Text>
        )}
      </Flex>

      {insight && (
        <Text
          style={[
            styles.insight,
            disabled && styles.disabledLabel,
            {
              color:
                insight?.status === 'negative'
                  ? 'rgba(245, 158, 11, 1)'
                  : 'rgba(0, 166, 62, 1)',
            },
          ]}
        >
          {insight?.text}
        </Text>
      )}
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
    fontSize: 12,
  },
  textValue: {
    fontSize: 20,
    color: 'rgba(0, 153, 102, 1)',
  },
  unit: {
    fontSize: 12,
    color: 'rgba(0, 153, 102, 1)',
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
  insight: {
    fontSize: 12,
    lineHeight: 16,
    marginTop: 5,
    color: 'rgba(0, 166, 62, 1)',
  },
})
