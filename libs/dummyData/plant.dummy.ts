import { format, parse } from 'date-fns'
import { id } from 'date-fns/locale' // <--- WAJIB DI-IMPORT

export interface TPlant {
  id: string
  name: string
  scientificName: string
  condition: string
  accuracy: string
  timestamp: string
  imageUrl?: string
  statusColor?: string
}

const plants: TPlant[] = [
  {
    id: '1',
    name: 'Kangkung',
    scientificName: 'Ipomoea aquatica',
    condition: 'Baik',
    accuracy: '95%',
    timestamp: '2024-12-01 15:30:00',
    statusColor: '#4CAF50',
  },
  {
    id: '2',
    name: 'Cabai Merah',
    scientificName: 'Capsicum annuum',
    condition: 'Cukup',
    accuracy: '88%',
    timestamp: '2024-12-03 08:15:00',
    statusColor: '#FFC107',
  },
  {
    id: '3',
    name: 'Tomat Cherry',
    scientificName: 'Solanum lycopersicum',
    condition: 'Perlu Perhatian',
    accuracy: '92%',
    timestamp: '2024-12-02 14:45:00',
    statusColor: '#F44336',
  },
  {
    id: '4',
    name: 'Lidah Buaya',
    scientificName: 'Aloe vera',
    condition: 'Baik',
    accuracy: '98%',
    timestamp: '2024-12-03 09:00:00',
    statusColor: '#4CAF50',
  },
  {
    id: '5',
    name: 'Cabai Rawit',
    scientificName: 'Capsicum frutescens',
    condition: 'Baik',
    accuracy: '91%',
    timestamp: '2024-12-03 16:20:00',
    statusColor: '#4CAF50',
  },
  {
    id: '6',
    name: 'Putri Malu',
    scientificName: 'Mimosa pudica',
    condition: 'Cukup',
    accuracy: '85%',
    timestamp: '2024-12-04 11:10:00',
    statusColor: '#FFC107',
  },
]

export default plants

// Tipe data untuk hasil grouping (Penting untuk SectionList)
export interface PlantSection {
  title: string
  data: TPlant[]
}

export const groupPlantsByDate = (data: TPlant[]): PlantSection[] => {
  // 1. Sort Descending (Terbaru paling atas)
  const sorted = [...data].sort((a, b) => {
    return b.timestamp.localeCompare(a.timestamp)
  })

  // 2. Grouping dengan Type Safety
  const groups = sorted.reduce<Record<string, TPlant[]>>((acc, plant) => {
    // Format input: 'yyyy-MM-dd HH:mm:ss' (sesuai data dummy kamu)
    const parsedDate = parse(plant.timestamp, 'yyyy-MM-dd HH:mm:ss', new Date())

    // Format output header: '03 Desember 2024'
    const dateKey = format(parsedDate, 'd MMMM yyyy', { locale: id })

    if (!acc[dateKey]) {
      acc[dateKey] = []
    }
    acc[dateKey].push(plant)

    return acc
  }, {})

  return Object.keys(groups).map(date => ({
    title: date,
    data: groups[date],
  }))
}
