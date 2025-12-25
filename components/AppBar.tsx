import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Flex from './Flex'

interface AppBarProps {
  title: string
}

const AppBar = ({ title }: AppBarProps) => {
  const navigation = useNavigation()
  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      style={{
        padding: 16,
        width: '100%',
        position: 'relative',
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.backButton, { position: 'absolute', left: 20 }]}
      >
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color={customizeColors.text.reverse}
        />
      </TouchableOpacity>
      <Text style={styles.h1}>{title}</Text>
    </Flex>
  )
}

export default AppBar

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: 'regular',
    color: customizeColors.text.reverse,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
})
