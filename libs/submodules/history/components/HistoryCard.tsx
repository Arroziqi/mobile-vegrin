import Flex from '@/components/Flex'
import StatusTag from '@/components/text/StatusTag'
import { customizeColors } from '@/libs/core/config/theme/color'
import { type TPlant } from '@/libs/dummyData/plant.dummy'
import { getTimeOnly } from '@/libs/helper/formatDate'
import { usePlant } from '@/libs/hooks/usePlants'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PlantCondition } from '@/libs/common/utils/getPlantCondition'

const HistoryCard = ({
  id,
  name,
  scientificName,
  condition,
  accuracy,
  timestamp,
}: Partial<TPlant>) => {
  const router = useRouter()
  const { fetchDetail } = usePlant()

  const handleViewDetail = async () => {
    if (!id) return
    const result = await fetchDetail(id)
    if (result.success) {
      router.push('/analyze')
    }
  }

  return (
    <Flex direction="row" gap={10} style={styles.container} align="center">
      <View style={styles.iconContainer}>
        <MaterialIcons name="eco" size={32} color={customizeColors.white} />
      </View>
      <Flex
        direction="column"
        align="flex-start"
        gap={5}
        style={styles.contentWrapper}
      >
        <Text style={styles.plantName}>{name}</Text>
        <Text style={styles.scientificName}>{scientificName}</Text>

        <StatusTag condition={condition as PlantCondition} />
        <Text style={styles.accuracyText}>{accuracy} Akurat</Text>
        <Text style={styles.accuracyText}>{getTimeOnly(timestamp || '')}</Text>
      </Flex>
      <Flex
        direction="row"
        justify="flex-end"
        gap={10}
        style={styles.actionWrapper}
      >
        <TouchableOpacity
          onPress={handleViewDetail}
          style={styles.forwardButton}
        >
          <MaterialIcons
            name="arrow-forward-ios"
            size={20}
            color={customizeColors.green4}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.deleteButton}>
          <MaterialIcons name="delete" size={20} color="#E7000B" />
        </TouchableOpacity>
      </Flex>
    </Flex>
  )
}

export default HistoryCard

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '100%',
    overflow: 'hidden',
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#00BBA7',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 1,
  },
  plantName: {
    fontWeight: '400',
    fontSize: 16,
    color: customizeColors.text.primary,
  },
  scientificName: {
    color: customizeColors.green4,
    fontWeight: '400',
    fontSize: 12,
  },
  accuracyText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#6A7282',
  },
  actionWrapper: {
    flex: 1,
  },
  forwardButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderRadius: 14,
  },
  deleteButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF2F2',
    borderRadius: 14,
  },
})
