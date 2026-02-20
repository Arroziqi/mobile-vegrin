// libs/common/utils/weather.transform.ts

import { WeatherItemProps } from '@/libs/submodules/home/components/WeatherItem'
import { WeatherApiItem } from '@/libs/types/weather.type'
import { PillButtonTabItem } from '@/components/tabs/pill/PillButtonTabs.type'

export type WeatherTabKey = 'yesterday' | 'today' | 'tomorrow'
export const weatherTabs: PillButtonTabItem<WeatherTabKey>[] = [
  { key: 'yesterday', label: 'Kemarin' },
  { key: 'today', label: 'Hari Ini' },
  { key: 'tomorrow', label: 'Besok' },
]

export const transformWeatherData = (
  items: WeatherApiItem[]
): Record<WeatherTabKey, WeatherItemProps[]> => {
  const result: Record<WeatherTabKey, WeatherItemProps[]> = {
    yesterday: [],
    today: [],
    tomorrow: [],
  }

  const todayDate = new Date().toISOString().split('T')[0]

  items.forEach(item => {
    const [date, time] = item.local_datetime.split('T')

    const iconCode = item.icon.split('wn')[1]?.replace('@2x.png', '')

    const formatted: WeatherItemProps = {
      time: time.slice(0, 5),
      source: {
        uri: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
      },
      degree: `${Math.round(item.temperature)}°`,
    }

    if (date === todayDate) {
      result.today.push(formatted)
    } else if (new Date(date) < new Date(todayDate)) {
      result.yesterday.push(formatted)
    } else {
      result.tomorrow.push(formatted)
    }
  })

  return result
}
