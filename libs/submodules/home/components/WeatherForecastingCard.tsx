import WeatherItem, {
  WeatherItemProps,
} from '@/libs/submodules/home/components/WeatherItem'
import { StyleSheet } from 'react-native'
import Flex from '@/components/Flex'

export type WeatherForecastingCardProps = {
  data: WeatherItemProps[]
}

const WeatherForecastingCard = ({ data }: WeatherForecastingCardProps) => {
  return (
    <Flex justify={'space-around'} style={styles.container}>
      {data.map((item, index) => (
        <WeatherItem
          key={item.time}
          time={item.time}
          source={item.source}
          degree={item.degree}
        />
      ))}
    </Flex>
  )
}

export default WeatherForecastingCard

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})
