import AppBar from '@/components/AppBar'
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import { usePlant } from '@/libs/hooks/usePlants'
import { ScrollView, StyleSheet } from 'react-native'
import AnalyzeAICard from '../components/AnalyzeAICard'
import ImageCard from '../components/ImageCard'
import NoteCard from '../components/NoteCard'
import ResultCard from '../components/ResultCard'
import ScanButton from '../components/ScanButton'
import { PlantCondition } from '@/libs/common/utils/getPlantCondition'

const AnalyzeScreen = () => {
  const { currentLog } = usePlant()
  if (!currentLog) return null
  return (
    <Container style={styles.container}>
      <AppBar variant="default" title="Hasil Scan" />

      <ScrollView
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* <Flex direction="row" justify="center">
          <StatusTag condition="Analisis Selesai" />
        </Flex> */}
        <ImageCard
          imagePath={currentLog.plant_image}
          confidence={currentLog.detail.confidence}
        />
        <ResultCard
          plant_name={currentLog.plant_name}
          condition={currentLog.condition as PlantCondition}
          diagnose={currentLog.diagnosis}
        />
        <AnalyzeAICard
          symptoms={currentLog.detail.symptoms}
          treatment={currentLog.detail.treatment}
        />
        <NoteCard />
      </ScrollView>

      <Flex
        style={styles.actionButtonContainer}
        align="center"
        justify="center"
      >
        <ScanButton />
      </Flex>
    </Container>
  )
}

export default AnalyzeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },

  listContainer: {
    padding: 20,
    paddingBottom: 20,
    gap: 20,
  },

  actionButtonContainer: {
    backgroundColor: 'white',
    height: 120,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
})
