import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ProfileInfoRowProps {
  label: string
  value: string
}

export default function ProfileInfoRow({ label, value }: ProfileInfoRowProps) {
  return (
    <View style={styles.row}>
      <Text style={[styles.label, styles.text]}>{label}</Text>
      <Text style={[styles.separator, styles.text]}>:</Text>

      <Text
        style={[styles.text, styles.value]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },

  label: {
    width: 110,
    fontWeight: '600',
  },

  separator: {
    width: 10,
    textAlign: 'center',
  },

  value: {
    flex: 1,
    flexWrap: 'wrap',
  },

  text: {
    fontSize: 18,
    color: '#262626',
  },
})
