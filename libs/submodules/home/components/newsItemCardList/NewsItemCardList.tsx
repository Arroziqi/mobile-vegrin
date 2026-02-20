import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import NewsItemCard from '@/libs/submodules/home/components/newsItemCard/NewsItemCard'
import { useGetEducationList } from '@/libs/hooks/educations/useGetEducationList'
import { Href, useRouter } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import { DEFAULT_NEWS_IMAGE } from '@/libs/common/const/imageDefault'
import EmptyState from '@/libs/submodules/manageContent/components/EmptyState'

const NewsItemCardList = () => {
  const { data = [], isLoading, error, refetch } = useGetEducationList()
  const router = useRouter()

  const handlePressLink = (url?: string | null) => {
    if (!url) return
    router.push(url as Href)
  }

  // ✅ Loading State
  if (isLoading) {
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
          onPress={() => refetch}
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
  if (!isLoading && data.length === 0) {
    return <EmptyState onPress={refetch} />
  }

  // ✅ Normal State
  return (
    <>
      {data.map(item => (
        <View key={item.id} style={{ marginBottom: 12 }}>
          <NewsItemCard
            image={item.thumbnail ?? DEFAULT_NEWS_IMAGE}
            description={item.title ?? null}
            publishedAt={item.source ?? null}
            linkLabel={item.external_link ? 'Baca Selengkapnya' : null}
            onPressLink={
              item.external_link
                ? () => handlePressLink(item.external_link)
                : null
            }
          />
        </View>
      ))}
    </>
  )
}

export default NewsItemCardList
