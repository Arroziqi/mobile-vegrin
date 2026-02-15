import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import NewsItemCard from '@/libs/submodules/home/components/newsItemCard/NewsItemCard'
import { useGetEducationList } from '@/libs/hooks/educations/useGetEducationList'
import { Href, useRouter } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

export const DEFAULT_NEWS_IMAGE =
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop'

const NewsItemCardList = () => {
  const { data, loading, error, refetch } = useGetEducationList()
  const router = useRouter()

  const handlePressLink = (url?: string | null) => {
    if (!url) return
    router.push(url as Href)
  }

  // ✅ Loading State
  if (loading) {
    return (
      <View style={{ paddingVertical: 30, alignItems: 'center' }}>
        <ActivityIndicator size="small" />
        <Text style={{ marginTop: 8 }}>Memuat berita...</Text>
      </View>
    )
  }

  // ✅ Error State
  if (error) {
    return (
      <View style={{ paddingVertical: 30, alignItems: 'center' }}>
        <MaterialIcons name="error-outline" size={40} color="#EF4444" />
        <Text style={{ marginTop: 8, color: '#EF4444' }}>
          Gagal memuat data
        </Text>

        <TouchableOpacity
          onPress={refetch}
          style={{
            marginTop: 12,
            backgroundColor: '#032746',
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: 'white' }}>Coba Lagi</Text>
        </TouchableOpacity>
      </View>
    )
  }

  // ✅ Empty State
  if (!loading && data.length === 0) {
    return (
      <View style={{ paddingVertical: 40, alignItems: 'center' }}>
        <MaterialIcons name="inbox" size={48} color="#9CA3AF" />
        <Text style={{ marginTop: 10, color: '#6B7280' }}>
          Belum ada berita tersedia
        </Text>

        <TouchableOpacity
          onPress={refetch}
          style={{
            marginTop: 14,
            backgroundColor: '#032746',
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: 'white' }}>Refresh</Text>
        </TouchableOpacity>
      </View>
    )
  }

  // ✅ Normal State
  return (
    <>
      {data.map(item => (
        <View key={item.id} style={{ marginBottom: 12 }}>
          <NewsItemCard
            image={item.imageUrl ?? DEFAULT_NEWS_IMAGE}
            description={item.title ?? null}
            publishedAt={item.source ?? null}
            linkLabel={item.url ? 'Baca Selengkapnya' : null}
            onPressLink={item.url ? () => handlePressLink(item.url) : null}
          />
        </View>
      ))}
    </>
  )
}

export default NewsItemCardList
