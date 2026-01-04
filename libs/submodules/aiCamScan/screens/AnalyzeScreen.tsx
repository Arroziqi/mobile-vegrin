import AppBar from '@/components/AppBar'
import Container from '@/components/container/Container'
import Flex from '@/components/Flex'
import StatusTag from '@/components/text/StatusTag'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import AnalyzeAICard from '../components/AnalyzeAICard'
import ImageCard from '../components/ImageCard'
import NoteCard from '../components/NoteCard'
import ResultCard from '../components/ResultCard'
import ScanButton from '../components/ScanButton'

const AnalyzeScreen = () => {
  return (
    <Container style={styles.container}>
      <AppBar variant="default" title="Hasil Scan" />

      <ScrollView
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        <Flex direction="row" justify="center">
          <StatusTag label="Analisis Selesai" />
        </Flex>
        <ImageCard />
        <ResultCard />
        <AnalyzeAICard />
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
    height: 80,
    paddingHorizontal: 16,
  },
})
