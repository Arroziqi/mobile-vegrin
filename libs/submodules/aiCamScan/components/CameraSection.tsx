import Flex from '@/components/Flex'
import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera'
import { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CameraSection = () => {
  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()

  if (!permission) return <View />

  if (!permission.granted) {
    return (
      <Flex
        align="center"
        justify="center"
        style={styles.container}
        direction="column"
        gap={20}
      >
        <MaterialIcons
          name="center-focus-weak"
          size={300}
          color={customizeColors.text.primary}
        />
        <Button onPress={() => requestPermission()} title="Izinkan" />
      </Flex>
    )
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'))
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  )
}

export default CameraSection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    marginTop: 20,
  },
  camera: {
    flex: 1,
    width: '100%',
    height: 400,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
})
