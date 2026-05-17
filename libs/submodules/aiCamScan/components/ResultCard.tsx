import Flex from '@/components/Flex'
import { PlantCondition } from '@/libs/common/utils/getPlantCondition'
import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'
import { ComponentProps } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const resultCardData = {
  plantName: 'Kangkung',
  scientificName: 'Ipomoea aquatica',
}

type IconName = ComponentProps<typeof MaterialIcons>['name']

interface ResultCardProps {
  plant_name: string
  condition: PlantCondition
  diagnose: string | null
}

interface StatusConfigItem {
  icon: IconName
  iconColor: string
  bgColor: string
  borderColor: string
  titleColor: string
  descColor: string
}

const statusConfig: Record<PlantCondition, StatusConfigItem> = {
  [PlantCondition.BAIK]: {
    icon: 'trending-up',
    iconColor: customizeColors.green4 || '#10B981',
    bgColor: '#ECFDF5',
    borderColor: '#34D399',
    titleColor: '#004F3B',
    descColor: customizeColors.green4 || '#10B981',
  },
  [PlantCondition.CUKUP]: {
    icon: 'trending-flat',
    iconColor: '#F59E0B',
    bgColor: '#FFFBEB',
    borderColor: '#FCD34D',
    titleColor: '#78350F',
    descColor: '#D97706',
  },
  [PlantCondition.PERLU_PERHATIAN]: {
    icon: 'trending-down',
    iconColor: '#EF4444',
    bgColor: '#FEF2F2',
    borderColor: '#F87171',
    titleColor: '#7F1D1D',
    descColor: '#DC2626',
  },
}

const ResultCard = ({ plant_name, condition, diagnose }: ResultCardProps) => {
  const currentStatus =
    statusConfig[condition] ?? statusConfig[PlantCondition.BAIK]

  return (
    <Flex direction="column" style={styles.container} gap={10}>
      <Flex
        direction="row"
        gap={10}
        justify="flex-start"
        style={styles.headerRow}
      >
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="eco"
            size={30}
            color={customizeColors.white}
            style={styles.icon}
          />
        </View>
        <Flex direction="column" align="flex-start">
          <Text style={styles.plantName}>{plant_name}</Text>
          <Text style={styles.scientificName}>
            {resultCardData.scientificName}
          </Text>
        </Flex>
      </Flex>
      <Flex
        style={[
          styles.statusContainer,
          {
            backgroundColor: currentStatus.bgColor,
            borderLeftColor: currentStatus.borderColor,
          },
        ]}
        direction="row"
        gap={10}
        align="flex-start"
      >
        <MaterialIcons
          name={currentStatus.icon}
          size={20}
          color={currentStatus.iconColor}
        />
        <Flex direction="column" align="flex-start">
          <Text
            style={[styles.statusTitle, { color: currentStatus.titleColor }]}
          >
            Kondisi Tanaman
          </Text>
          <Text
            style={[
              styles.statusDescription,
              { color: currentStatus.descColor },
            ]}
          >
            {diagnose || 'Tanaman sehat tanpa penyakit yang terdeteksi.'}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ResultCard

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
  headerRow: {
    width: '100%',
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#00BBA7',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 0,
  },
  plantName: {
    fontWeight: '400',
    fontSize: 24,
    color: customizeColors.text.primary,
  },
  scientificName: {
    color: customizeColors.green4,
    fontWeight: '400',
    fontSize: 14,
  },
  statusContainer: {
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderLeftWidth: 4,
    width: '100%',
  },
  statusTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  statusDescription: {
    fontSize: 12,
    fontWeight: '400',
  },
})
