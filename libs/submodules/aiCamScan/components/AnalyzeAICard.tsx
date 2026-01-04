import Flex from '@/components/Flex'
import { customizeColors } from '@/libs/core/config/theme/color'
import { MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text } from 'react-native'

export interface CareItem {
  id: string
  text: string
}

export const analyzeAICardData = {
  description:
    'Gambir ini menampilkan sekat sayuran hijau yang umumnya dikenal sebagai kangkung dari runcingsi di bagian ujung. Sayuran ini memiliki akar yang terlihat, menunjukkan bahwa ini adalah tanaman yang dicabut langsung menandai cabut muda di bagian bawah batangnya yang putih. Daun hijau yang bervariasi hijau cerah, valid rampang, dan disunibukan dalam kondisi segar. Tidak tampak adanya belalai di bagian atas.',
  tips: [
    {
      id: '1',
      text: 'Siram secara teratur, terutama di musim kemarau',
    },
    {
      id: '2',
      text: 'Berikan pupuk organik setiap 2 minggu sekali',
    },
    {
      id: '3',
      text: 'Pastikan mendapat sinar matahari yang cukup',
    },
    {
      id: '4',
      text: 'Pangkas daun yang menguning untuk pertumbuhan optimal',
    },
  ] as CareItem[],
}

const AnalyzeAICard = () => {
  return (
    <Flex direction="column" style={styles.container} gap={20}>
      <LinearGradient
        colors={['#AD46FF', '#615FFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerGradient}
      >
        <Flex direction="row" align="flex-start" gap={8}>
          <Flex style={styles.iconContainer}>
            <MaterialIcons
              name="lightbulb"
              size={24}
              color={customizeColors.white}
            />
          </Flex>
          <Flex direction="column" align="flex-start" gap={5}>
            <Text style={styles.title}>Analisis AI</Text>
            <Text style={styles.subtitle}>Vegrin AI Assistant</Text>
          </Flex>
        </Flex>
      </LinearGradient>
      <Flex
        direction="row"
        align="flex-start"
        gap={10}
        style={styles.descriptionContainer}
      >
        <MaterialIcons
          name="info-outline"
          size={24}
          color={customizeColors.purple1}
        />
        <Text style={styles.descriptionText}>
          {analyzeAICardData.description}
        </Text>
      </Flex>
      <Flex
        style={styles.tipsContainer}
        direction="column"
        gap={8}
        align="flex-start"
      >
        <Text style={styles.tipsTitle}>💡 Tips Perawatan:</Text>
        {analyzeAICardData.tips.map(tip => (
          <Flex key={tip.id} direction="row" align="flex-start" gap={8}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>{tip.text}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
export default AnalyzeAICard

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: customizeColors.text.reverse,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: customizeColors.text.reverse,
  },
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
    borderRadius: 20,
    width: '100%',
    overflow: 'hidden',
  },
  headerGradient: {
    padding: 20,
    width: '100%',
  },
  iconContainer: {
    backgroundColor: '#FFFFFF33',
    borderRadius: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    marginHorizontal: 20,
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    color: customizeColors.text.primary,
    flex: 1,
    flexShrink: 1,
  },
  tipsContainer: {
    backgroundColor: customizeColors.purple2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: customizeColors.purple4,
    marginBottom: 4,
  },
  tipBullet: {
    fontSize: 12,
    color: customizeColors.purple3,
  },
  tipText: {
    fontSize: 12,
    color: customizeColors.purple3,
    flex: 1,
    flexShrink: 1,
  },
})
