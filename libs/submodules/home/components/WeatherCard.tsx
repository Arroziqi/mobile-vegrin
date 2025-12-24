import Flex from '@/components/Flex'
import { Image, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { customizeColors } from '@/libs/core/config/theme/color'

const WeatherCard = () => (
  <LinearGradient
    style={styles.gradient}
    colors={customizeColors.gradient.weatherCard}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    <Flex justify={'space-between'}>
      <Flex gap={14}>
        <Image
          style={styles.image}
          source={require('@/assets/images/cerah-berawan.png')}
          resizeMode={'contain'}
        />
        <Flex
          direction={'column'}
          justify={'space-between'}
          align={'flex-start'}
        >
          <Text style={[styles.location, styles.text]}>Jakarta Indonesia</Text>
          <Text style={[styles.condition, styles.text]}>Cerah Berawan</Text>
        </Flex>
      </Flex>
      <Text style={[styles.degree, styles.text]}>
        32
        <Text style={styles.degreeSymbol}>°</Text>
      </Text>
    </Flex>
  </LinearGradient>
)

export default WeatherCard

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    paddingHorizontal: 21,
    paddingVertical: 12,
    borderRadius: 21,
  },
  text: {
    color: 'white',
  },
  location: {
    fontSize: 12,
    fontWeight: 'semibold',
  },
  image: {
    width: 39,
    height: 39,
  },
  condition: {
    fontSize: 16,
    fontWeight: 'regular',
  },
  degree: {
    fontSize: 32,
    fontWeight: '600',
  },
  degreeSymbol: {
    fontSize: 32,
  },
})
