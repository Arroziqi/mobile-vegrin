import Flex from '@/components/Flex'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text } from 'react-native'

const NoteCard = () => {
  return (
    <Flex style={styles.container} direction="row" align="flex-start" gap={10}>
      <MaterialIcons name="warning" size={24} style={styles.icon} />
      <Flex
        direction="column"
        align="flex-start"
        style={styles.contentContainer}
        gap={10}
      >
        <Text style={styles.title}>Catatan Penting</Text>
        <Text style={styles.description}>
          Hasil analisis ini bersifat informatif. Untuk diagnosis pasti,
          konsultasikan dengan ahli pertanian.
        </Text>
      </Flex>
    </Flex>
  )
}
export default NoteCard
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFBEB',
    borderWidth: 1,
    borderColor: '#FEE685',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    flexShrink: 1,
  },
  icon: {
    color: '#7B3306',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7B3306',
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#BB4D00',
  },
})
