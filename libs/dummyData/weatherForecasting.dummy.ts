import { WeatherItemProps } from '@/libs/submodules/home/components/WeatherItem'
import { PillButtonTabItem } from '@/components/tabs/pill/PillButtonTabs.type'

const cerah = require('@/assets/images/cerah.png')
const cerahBerawan = require('@/assets/images/cerah-berawan.png')
const berawan = require('@/assets/images/awan.png')

export const WEATHER_BY_DAY: Record<string, WeatherItemProps[]> = {
  yesterday: [
    { time: '02:00', source: cerah, degree: '24°' },
    { time: '03:00', source: cerahBerawan, degree: '24°' },
    { time: '04:00', source: berawan, degree: '25°' },
    { time: '05:00', source: cerahBerawan, degree: '26°' },
    { time: '07:00', source: cerah, degree: '27°' },
  ],

  today: [
    { time: '02:00', source: berawan, degree: '25°' },
    { time: '03:00', source: cerahBerawan, degree: '26°' },
    { time: '04:00', source: cerah, degree: '27°' },
    { time: '05:00', source: cerah, degree: '28°' },
    { time: '07:00', source: cerahBerawan, degree: '30°' },
  ],

  tomorrow: [
    { time: '02:00', source: cerahBerawan, degree: '26°' },
    { time: '03:00', source: cerah, degree: '27°' },
    { time: '04:00', source: cerah, degree: '28°' },
    { time: '05:00', source: cerahBerawan, degree: '29°' },
    { time: '07:00', source: cerah, degree: '31°' },
  ],
}

export type WeatherTabKey = 'yesterday' | 'today' | 'tomorrow'

export const weatherTabsDummy: PillButtonTabItem<WeatherTabKey>[] = [
  { key: 'yesterday', label: 'Kemarin' },
  { key: 'today', label: 'Hari Ini' },
  { key: 'tomorrow', label: 'Besok' },
]
