import Flex from '@/components/Flex'
import { NewsData } from '@/libs/dummyData/adminNewsItem.dummy'
import { MaterialIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BLURHASH =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface ManageNewsCardProps {
  item: NewsData
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const ManageNewsCard: React.FC<ManageNewsCardProps> = ({
  item,
  onEdit,
  onDelete,
}) => {
  return (
    <Flex direction="column" style={styles.itemContainer} gap={15}>
      {/* Title Header */}
      <Flex direction="row" align="center" gap={10} style={{ width: '100%' }}>
        <View style={styles.badgeNumber}>
          <Text style={styles.badgeText}>{item.number}</Text>
        </View>
        <Text style={styles.itemTitle} numberOfLines={2}>
          {item.title}
        </Text>
      </Flex>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={item.imageUrl}
          placeholder={{ blurhash: BLURHASH }}
          contentFit="cover"
          transition={1000}
        />
      </View>

      {/* Info Section */}
      <Flex direction="column" align="flex-start" style={{ width: '100%' }}>
        <Text style={styles.authorText}>
          {item.author} - {item.source}
        </Text>
        <Flex direction="row" align="center" gap={4}>
          <MaterialIcons name="open-in-new" size={14} color="#032746" />
          <Text style={styles.urlText}>{item.url}</Text>
        </Flex>
      </Flex>

      {/* Actions */}
      <Flex direction="row" gap={10} style={{ width: '100%' }}>
        <TouchableOpacity
          onPress={() => onEdit(item.id)}
          style={[styles.actionButton, styles.editButton]}
        >
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDelete(item.id)}
          style={[styles.actionButton, styles.deleteButton]}
        >
          <Text style={styles.actionButtonText}>Hapus</Text>
        </TouchableOpacity>
      </Flex>
    </Flex>
  )
}

export default ManageNewsCard

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },
  badgeNumber: {
    backgroundColor: '#2B9846',
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  authorText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  urlText: {
    fontSize: 12,
    color: '#032746',
    textDecorationLine: 'underline',
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 44,
  },
  editButton: {
    backgroundColor: '#2B7FFF',
  },
  deleteButton: {
    backgroundColor: '#DC2626',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
})
