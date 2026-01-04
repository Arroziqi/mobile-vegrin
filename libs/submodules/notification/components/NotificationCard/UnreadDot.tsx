import React from 'react'
import { StyleSheet, View } from 'react-native'

const UnreadDot = () => {
  return <View style={styles.dot} />
}

export default UnreadDot

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00BC7D',

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1.5,

    // Android
    elevation: 2,
  },
})
