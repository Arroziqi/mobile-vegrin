import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Flex from './Flex'

interface AppBarProps {
  title: string
  variant: 'default' | 'reverse'
}

const AppBar = ({ title, variant }: AppBarProps) => {
  const navigation = useNavigation()
  let textColor = customizeColors.text.primary
  let iconColor = customizeColors.green4
  let bgIcon = customizeColors.lightGreen

  if (variant === 'reverse') {
    textColor = customizeColors.text.reverse
    iconColor = customizeColors.white
    bgIcon = customizeColors.whiteOpacity10
  }

  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      style={{
        padding: 16,
        width: '100%',
        position: 'relative',
        backgroundColor: variant === 'reverse' ? 'transparent' : 'white',
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[
          styles.backButton,
          { position: 'absolute', left: 20, backgroundColor: bgIcon },
        ]}
      >
        <MaterialIcons name="arrow-back" size={24} color={iconColor} />
      </TouchableOpacity>
      <Text style={[styles.h1, { color: textColor }]}>{title}</Text>
    </Flex>
  )
}

export default AppBar

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: 'regular',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
})
