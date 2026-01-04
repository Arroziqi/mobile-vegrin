import Flex from '@/components/Flex'
import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const resultCardData = {
  plantName: 'Kangkung',
  scientificName: 'Ipomoea aquatica',
  statusTitle: 'Kondisi Tanaman',
  statusDescription: 'Dilihat dari visualnya, kondisi kangkung bagus',
  iconName: 'eco',
}

const ResultCard = () => {
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
          <Text style={styles.plantName}>{resultCardData.plantName}</Text>
          <Text style={styles.scientificName}>
            {resultCardData.scientificName}
          </Text>
        </Flex>
      </Flex>
      <Flex
        style={styles.statusContainer}
        direction="row"
        gap={10}
        align="flex-start"
      >
        <MaterialIcons
          name="trending-up"
          size={20}
          color={customizeColors.green4}
        />
        <Flex direction="column" align="flex-start">
          <Text style={styles.statusTitle}>{resultCardData.statusTitle}</Text>
          <Text style={styles.statusDescription}>
            {resultCardData.statusDescription}
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
    backgroundColor: '#ECFDF5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#34D399',
    width: '100%',
  },
  statusTitle: {
    color: '#004F3B',
    fontSize: 14,
    fontWeight: '400',
  },
  statusDescription: {
    color: customizeColors.green4,
    fontSize: 12,
    fontWeight: '400',
  },
})
