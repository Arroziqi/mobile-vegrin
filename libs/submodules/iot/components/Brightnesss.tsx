import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

function Brightnesss() {
  return (
    <View>
      <Image
        source={require('@/assets/images/kecerahan.png')}
        style={styles.image}
      />
      <View style={styles.dot} />
    </View>
  )
}

export default Brightnesss

const styles = StyleSheet.create({
  dot: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: 0,
    right: 0,
    borderWidth: 1.34,
    borderColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(5, 223, 114, 1)',
    borderRadius: 8,
  },
  image: {
    width: 48,
    height: 48,
  },
})
