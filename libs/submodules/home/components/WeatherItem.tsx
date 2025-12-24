import { Image, ImageSourcePropType, StyleSheet, Text } from 'react-native'
import Flex from '@/components/Flex'

export type WeatherItemProps = {
  time: string
  source: ImageSourcePropType
  degree: string
}

const WeatherItem = ({ time, source, degree }: WeatherItemProps) => {
  return (
    <Flex
      style={styles.container}
      direction={'column'}
      justify={'space-between'}
      align={'center'}
      gap={10}
    >
      <Text style={styles.time}>{time}</Text>
      <Image source={source} style={styles.image} resizeMode={'cover'} />
      <Text style={styles.degree}>{degree}</Text>
    </Flex>
  )
}

export default WeatherItem

const styles = StyleSheet.create({
  container: {},
  time: {
    fontSize: 10,
    color: '#A098AE',
  },
  image: {
    width: 35,
    height: 35,
  },
  degree: {
    fontSize: 12,
  },
})
