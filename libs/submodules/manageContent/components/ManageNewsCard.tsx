import Flex from '@/components/Flex'
import { MaterialIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/ManageNewsCard.style'
import { NewsData } from '@/libs/hooks/educations/useGetEducationList'

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
