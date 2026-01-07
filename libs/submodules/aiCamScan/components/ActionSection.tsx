import Flex from '@/components/Flex'
import { Colors } from '@/constants/theme'
import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native'

const ActionSection = () => {
  const colorScheme = useColorScheme()
  const [image, setImage] = useState<string | null>(null)
  const tintColor = Colors[colorScheme ?? 'light'].tint
  const router = useRouter()
  const handlePressShutter = () => {
    router.push('/analyze')
  }
  const handleHistoryButton = () => {
    router.push('/history')
  }

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!permissionResult.granted) {
      Alert.alert(
        'Permission required',
        'Permission to access the media library is required.'
      )
      return
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  console.log('Selected image URI:', image)

  return (
    <LinearGradient
      colors={['#00D492', '#00D5BE', '#00D3F2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Flex direction="column" align="center" gap={8}>
        <TouchableOpacity onPress={handleHistoryButton}>
          <MaterialIcons
            name="schedule"
            size={32}
            color={customizeColors.text.primary}
            style={styles.otherIcon}
          />
        </TouchableOpacity>
        <Text style={styles.actionLabel}>History</Text>
      </Flex>
      <Flex direction="column" align="center" gap={8}>
        <TouchableOpacity onPress={handlePressShutter}>
          <MaterialIcons
            name="camera-alt"
            size={36}
            color={tintColor}
            style={[
              styles.scanIcon,
              {
                backgroundColor: 'white',
                borderColor: tintColor,
              },
            ]}
          />
        </TouchableOpacity>
        <Text style={styles.actionLabel}>Photo</Text>
      </Flex>
      <Flex direction="column" align="center" gap={8}>
        <TouchableOpacity onPress={pickImage}>
          <MaterialIcons
            name="photo-library"
            size={32}
            color={customizeColors.text.primary}
            style={styles.otherIcon}
          />
        </TouchableOpacity>
        <Text style={styles.actionLabel}>Gallery</Text>
      </Flex>
    </LinearGradient>
  )
}

export default ActionSection

const styles = StyleSheet.create({
  container: {
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 25,
    width: '100%',
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 30,
  },
  actionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: customizeColors.text.primary,
  },
  scanIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: -60,
  },
  otherIcon: {
    width: 56,
    height: 56,
    borderRadius: 50,
    backgroundColor: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
